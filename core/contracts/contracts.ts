import { Action } from "../../types/actions";
import { AccountId, ETimeout, Timeout, ValueId } from "../../types/common";
import { Case, Contract } from "../../types/contracts";
import { Observation } from "../../types/observations";
import { Payee } from "../../types/payee";
import { Token } from "../../types/token";
import { EValue, Value } from "../../types/values";
import { coerceNumber, coerceValue } from "../common";

export function Case(caseAction: Action, continuation: Contract): Case {
    return {
        case: caseAction,
        then: continuation
    }
};

export function Pay(accId: AccountId, payee: Payee, token: Token, value: EValue, continuation: Contract): Contract {
    return {
        pay: coerceValue(value),
        token,
        from_account: accId,
        to: payee,
        then: continuation
    }
};

export function If(obs: Observation, contThen: Contract, contElse: Contract): Contract { 
    return {
        if: obs, 
        then: contThen, 
        else: contElse 
    }
};

export function When(cases: Case[], timeout: ETimeout, timeoutCont: Contract): Contract {
  let coercedTimeout: Timeout;
  if (typeof timeout == 'object') {
    coercedTimeout = timeout;
  } else {
    coercedTimeout = coerceNumber(timeout);
  }
  return {
    when: cases,
    timeout: coercedTimeout,
    timeout_continuation: timeoutCont
  };
};

export function Let(valueId: ValueId, value: Value, cont: Contract): Contract {
    return {
        let: valueId,
        be: value,
        then: cont
    }
};

export function assert(obs: Observation, cont: Contract): Contract {
  return {
    assert: obs,
    then: cont
  }
};