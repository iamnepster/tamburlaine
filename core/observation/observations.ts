import { Action } from "../../types/actions";
import { Bound } from "../../types/bounds";
import { AccountId, ChoiceId, Timeout } from "../../types/common";
import { Observation } from "../../types/observations";
import { Party } from "../../types/party";
import { Payee } from "../../types/payee";
import { Token } from "../../types/token";
import { EValue, Value } from "../../types/values";
import { coerceValue } from "../common";

export const Condition = function (
  obs: Observation,
  contThen: EValue,
  contElse: EValue
): Value {
  return { if: obs, then: coerceValue(contThen), else: coerceValue(contElse) };
};

export const AndObs = function (
  lhs: Observation,
  rhs: Observation
): Observation {
  return { both: lhs, and: rhs };
};

export const OrObs = function (
  lhs: Observation,
  rhs: Observation
): Observation {
  return { either: lhs, or: rhs };
};

export const NotObs = function (obs: Observation): Observation {
  return { not: obs };
};

export const ChoseSomething = function (choiceId: ChoiceId): Observation {
  return { chose_something_for: choiceId };
};

export const ValueGE = function (lhs: EValue, rhs: EValue): Observation {
  return { value: coerceValue(lhs), ge_than: coerceValue(rhs) };
};

export const ValueGT = function (lhs: EValue, rhs: EValue): Observation {
  return { value: coerceValue(lhs), gt: coerceValue(rhs) };
};

export const ValueLT = function (lhs: EValue, rhs: EValue): Observation {
  return { value: coerceValue(lhs), lt: coerceValue(rhs) };
};

export const ValueLE = function (lhs: EValue, rhs: EValue): Observation {
  return { value: coerceValue(lhs), le_than: coerceValue(rhs) };
};

export const ValueEQ = function (lhs: EValue, rhs: EValue): Observation {
  return { value: coerceValue(lhs), equal_to: coerceValue(rhs) };
};

export const Deposit = function (
  accId: AccountId,
  party: Party,
  token: Token,
  value: EValue
): Action {
  return {
    party,
    deposits: coerceValue(value),
    of_token: token,
    into_account: accId
  };
};

export const Choice = function (choiceId: ChoiceId, bounds: Bound[]): Action {
  return { choose_between: bounds, for_choice: choiceId };
};

export const Notify = function (obs: Observation): Action {
  return { notify_if: obs };
};

export function Account(party: Party): Payee {
  return { account: party };
}

export const TimeParam = function (paramName: String): Timeout {
  return { time_param: paramName };
};