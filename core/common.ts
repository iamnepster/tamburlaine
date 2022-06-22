import BigNumber from "bignumber.js";
import { ChoiceId, SomeNumber, ValueId } from "../types/common";
import { Contract } from "../types/contracts";
import { Observation } from "../types/observations";
import { Party } from "../types/party";
import { EValue, Value } from "../types/values";

export const choiceId = (choiceName: string, choiceOwner: Party): ChoiceId => ({ 
    choice_name: choiceName, 
    choice_owner: choiceOwner 
});


export const valueId = (valueIdentifier: string): ValueId => (
    valueIdentifier
);

export function coerceNumber(n: SomeNumber): BigNumber {
  const isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i;
  if (typeof n == 'string' && isNumeric.test(String(n))) {
    return new BigNumber(n);
  } else if (typeof n == 'bigint') {
    return new BigNumber(n.toString());
  } else if (typeof n == 'number') {
    if (n > Number.MAX_SAFE_INTEGER || n < -Number.MAX_SAFE_INTEGER) {
      throw new Error(
        'Unsafe use of JavaScript numbers. For amounts this large, please use BigNumber.'
      );
    }
    return new BigNumber(n);
  } else {
    throw new Error('Not a valid number');
  }
}

export function coerceValue(val: EValue): Value {
  if (typeof val == 'number') {
    if (val > Number.MAX_SAFE_INTEGER || val < -Number.MAX_SAFE_INTEGER) {
      throw new Error(
        'Unsafe use of JavaScript numbers. For amounts this large, please use BigNumber.'
      );
    }
    return new BigNumber(val);
  } else if (typeof val == 'bigint') {
    return new BigNumber(val.toString());
  } else if (
    typeof val == 'string' &&
    val != 'time_interval_start' &&
    val != 'time_interval_end'
  ) {
    return new BigNumber(val);
  } else {
    return val;
  }
}

export const TIME_INTERVAL_START: Value = 'time_interval_start';

export const TIME_INTERVAL_END: Value = 'time_interval_end';

export const TRUE_OBS: Observation = true;

export const FALSE_OBS: Observation = false;

export const CLOSE: Contract = 'close';