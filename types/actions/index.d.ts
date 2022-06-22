import { Bound } from "../bounds";
import { AccountId, ChoiceId } from "../common";
import { Observation } from "../observations";
import { Party } from "../party";
import { Token } from "../token";
import { Value } from "../values";

export type Action =
  | { party: Party; deposits: Value; of_token: Token; into_account: AccountId }
  | { choose_between: Bound[]; for_choice: ChoiceId }
  | { notify_if: Observation };
