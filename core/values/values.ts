import { AccountId, ChoiceId, SomeNumber, ValueId } from "../../types/common";
import { Token } from "../../types/token";
import { EValue, Value } from "../../types/values";
import { coerceNumber, coerceValue } from "../common";

export const AvailableCurrency = function (
  token: Token,
  accountId: AccountId
): Value {
  return { amount_of_token: token, in_account: accountId };
};

export const Constant = function (number: SomeNumber): Value {
  return coerceNumber(number);
};

export const ConstantParam = function (paramName: String): Value {
  return { constant_param: paramName };
};

export const NegValue = function (value: EValue): Value {
  return { negate: coerceValue(value) };
};

export const AddValue = function (lhs: EValue, rhs: EValue): Value {
  return { add: coerceValue(lhs), and: coerceValue(rhs) };
};

export const SubValue = function (lhs: EValue, rhs: EValue): Value {
  return { value: coerceValue(lhs), minus: coerceValue(rhs) };
};

export const MulValue = function (lhs: EValue, rhs: EValue): Value {
  return { multiply: coerceValue(lhs), times: coerceValue(rhs) };
};

export const DivValue = function (lhs: EValue, rhs: EValue): Value {
  return { divide: coerceValue(lhs), by: coerceValue(rhs) };
};

export const ChoiceValue = function (choiceId: ChoiceId): Value {
  return { value_of_choice: choiceId };
};

export const UseValue = function (valueId: ValueId): Value {
  return { use_value: valueId };
};