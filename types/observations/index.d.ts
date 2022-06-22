import { ChoiceId } from "../common";
import { Value } from "../values";

export type Observation =
  | { both: Observation; and: Observation }
  | { either: Observation; or: Observation }
  | { not: Observation }
  | { chose_something_for: ChoiceId }
  | { value: Value; ge_than: Value }
  | { value: Value; gt: Value }
  | { value: Value; lt: Value }
  | { value: Value; le_than: Value }
  | { value: Value; equal_to: Value }
  | boolean;
