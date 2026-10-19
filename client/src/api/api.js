import axios from "axios";
import { getFirebaseAuth, isFirebaseConfigured } from "../auth/firebase.js";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.request.use(async (config) => {
  if (isFirebaseConfigured()) {
    const user = getFirebaseAuth().currentUser;

    if (user) {
      const idToken = await user.getIdToken();
      config.headers.Authorization = `Bearer ${idToken}`;
    }
  }

  return config;
});
