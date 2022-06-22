import BigNumber from "bignumber.js";
import { AccountId, ChoiceId, SomeNumber, ValueId } from "../common";
import { Observation } from "../observations";
import { Token } from "../token";

export type Value =
  | { amount_of_token: Token; in_account: AccountId }
  | BigNumber
  | { constant_param: String }
  | { negate: Value }
  | { add: Value; and: Value }
  | { value: Value; minus: Value }
  | { multiply: Value; times: Value }
  | { divide: Value; by: Value }
  | { value_of_choice: ChoiceId }
  | 'time_interval_start'
  | 'time_interval_end'
  | { use_value: ValueId }
  | { if: Observation; then: Value; else: Value };

export type EValue = SomeNumber | Value;