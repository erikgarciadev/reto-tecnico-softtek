import { TYPES_BADGES } from "../utils/constants";

export type TypesBadgesValues =
  (typeof TYPES_BADGES)[keyof typeof TYPES_BADGES];
