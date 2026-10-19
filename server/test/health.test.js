import { afterAll, describe, expect, it } from "vitest";
import request from "supertest";
import mongoose from "mongoose";
import app from "../src/app.js";

describe("GET /api/health", () => {
  afterAll(async () => {
    await mongoose.disconnect();
  });

  it("returns a successful health response", async () => {
    const response = await request(app).get("/api/health");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: "ok",
      message: "ApplyPilot API is healthy",
    });
  });
});
