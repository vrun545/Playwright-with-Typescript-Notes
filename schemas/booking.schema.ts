import { JSONSchemaType } from "ajv";

export interface Booking {
  firstname: string;
  lastname: string;
  totalprice: number;
  depositpaid: boolean;
  bookingdates: {
    checkin: string;
    checkout: string;
  };
  additionalneeds?: string;
}

export const bookingSchema: JSONSchemaType<Booking> = {
  type: "object",
  required: [
    "firstname",
    "lastname",
    "totalprice",
    "depositpaid",
    "bookingdates"
  ],
  properties: {
    firstname: { type: "string" },
    lastname: { type: "string" },
    totalprice: { type: "number" },
    depositpaid: { type: "boolean" },
    bookingdates: {
      type: "object",
      required: ["checkin", "checkout"],
      properties: {
        checkin: { type: "string" },
        checkout: { type: "string" }
      },
      additionalProperties: false
    },
    additionalneeds: {
      type: "string",
      nullable: true
    }
  },
  additionalProperties: false
};
