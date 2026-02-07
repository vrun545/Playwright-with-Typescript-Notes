export const userSchema = {
  type: "object",
  required: ["id", "name", "email", "active"],
  properties: {
    id: { type: "number" },
    name: { type: "string" },
    email: { type: "string", format: "email" },
    active: { type: "boolean" }
  },
  additionalProperties: false
};
