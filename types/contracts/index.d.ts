import { Action } from "../actions";
import { AccountId, Timeout, ValueId } from "../common";
import { Observation } from "../observations";
import { Payee } from "../payee";
import { Token } from "../token";
import { Value } from "../values";

export type Contract =
  | 'close'
  | {
      pay: Value;
      token: Token;
      from_account: AccountId;
      to: Payee;
      then: Contract;
    }
  | { if: Observation; then: Contract; else: Contract }
  | { when: Case[]; timeout: Timeout; timeout_continuation: Contract }
  | { let: ValueId; be: Value; then: Contract }
  | { assert: Observation; then: Contract };

export type Case = { case: Action; then: Contract };
