import { APIRequestContext, expect } from "@playwright/test";

export async function authenticate(request: APIRequestContext): Promise<string> {
  const response = await request.post("/auth", {
    data: {
      username: "admin",
      password: "password123"
    }
  });

  expect(response.status()).toBe(200);

  const { token } = await response.json();
  return token;
}
