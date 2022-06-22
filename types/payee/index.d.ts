import { Party } from '../party';
import { AccountId } from '../common';

export type Payee = Account | { party: Party };
export type Account = { 
    account: AccountId 
};
