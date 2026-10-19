import { createContext, useContext, useEffect, useState } from "react";
import { getFirebaseAuth, isFirebaseConfigured } from "./firebase.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    if (!isFirebaseConfigured()) {
      setAuthError("Configure the Firebase variables in client/.env to enable authentication.");
      setLoading(false);
      return undefined;
    }

    return getFirebaseAuth().onAuthStateChanged(
      (nextUser) => {
        setUser(nextUser);
        setLoading(false);
      },
      () => {
        setAuthError("Firebase authentication could not be initialized.");
        setLoading(false);
      },
    );
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, authError }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
}
