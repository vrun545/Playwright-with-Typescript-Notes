import Ajv from "ajv";
import addFormats from "ajv-formats";
import { bookingSchema, Booking } from "../schemas/booking.schema";

const ajv = new Ajv({ allErrors: true, strict: true });
addFormats(ajv);

const validate = ajv.compile<Booking>(bookingSchema);

export function validateBookingSchema(data: unknown) {
  const valid = validate(data);

  return {
    valid,
    errors: validate.errors
  };
}
