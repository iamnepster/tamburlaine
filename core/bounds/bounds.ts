import { Bound } from "../../types/bounds";
import { SomeNumber } from "../../types/common";
import { coerceNumber } from "../common";

export function bound(boundMin: SomeNumber, boundMax: SomeNumber): Bound { 
    return {
        from: coerceNumber(boundMin), 
        to: coerceNumber(boundMax) 
    }
};