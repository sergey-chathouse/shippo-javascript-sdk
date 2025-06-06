/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UPSReferenceFields = {
  /**
   * Custom prefix text.
   */
  prefix?: string | undefined;
  /**
   * Label reference text. 35 character limit.
   */
  value?: string | undefined;
  /**
   * Order UPS reference fields are printed on ZPL labels. For UPS shipments, if you choose to set `ref_sort` for one reference, you must set `ref_sort` for all other supported UPS references using unique integers.
   */
  refSort?: number | undefined;
};

/** @internal */
export const UPSReferenceFields$inboundSchema: z.ZodType<
  UPSReferenceFields,
  z.ZodTypeDef,
  unknown
> = z.object({
  prefix: z.string().optional(),
  value: z.string().optional(),
  ref_sort: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "ref_sort": "refSort",
  });
});

/** @internal */
export type UPSReferenceFields$Outbound = {
  prefix?: string | undefined;
  value?: string | undefined;
  ref_sort?: number | undefined;
};

/** @internal */
export const UPSReferenceFields$outboundSchema: z.ZodType<
  UPSReferenceFields$Outbound,
  z.ZodTypeDef,
  UPSReferenceFields
> = z.object({
  prefix: z.string().optional(),
  value: z.string().optional(),
  refSort: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    refSort: "ref_sort",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UPSReferenceFields$ {
  /** @deprecated use `UPSReferenceFields$inboundSchema` instead. */
  export const inboundSchema = UPSReferenceFields$inboundSchema;
  /** @deprecated use `UPSReferenceFields$outboundSchema` instead. */
  export const outboundSchema = UPSReferenceFields$outboundSchema;
  /** @deprecated use `UPSReferenceFields$Outbound` instead. */
  export type Outbound = UPSReferenceFields$Outbound;
}

export function upsReferenceFieldsToJSON(
  upsReferenceFields: UPSReferenceFields,
): string {
  return JSON.stringify(
    UPSReferenceFields$outboundSchema.parse(upsReferenceFields),
  );
}

export function upsReferenceFieldsFromJSON(
  jsonString: string,
): SafeParseResult<UPSReferenceFields, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UPSReferenceFields$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UPSReferenceFields' from JSON`,
  );
}
