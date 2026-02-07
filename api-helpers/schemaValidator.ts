import Ajv from "ajv";

const ajv = new Ajv({ allErrors: true });

export function validateSchema<T>(schema: object, data: T): void {
  const validate = ajv.compile(schema);
  const valid = validate(data);

  if (!valid) {
    console.error("Schema validation errors:", validate.errors);
    throw new Error("Schema validation failed");
  }
}
