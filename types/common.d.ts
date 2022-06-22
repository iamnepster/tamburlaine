import BigNumber from 'bignumber.js';
import { Party } from './party';
export type ChoiceId = { choice_name: string; choice_owner: Party };
export type ValueId = string;
export type AccountId = Party;
export type SomeNumber = number | string | bigint;
export type Timeout = { time_param: String } | BigNumber;
export type ETimeout = SomeNumber | Timeout;