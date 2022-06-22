import { Party } from "../../types/party";
import { Payee } from "../../types/payee";

export const role = function (roleToken: string): Party {
  return { role_token: roleToken };
};

export const pk = function (pubKey: string): Party {
  const regexp = /^([0-9a-f][0-9a-f])*$/g;
  if (pubKey.match(regexp)) {
    return { pk_hash: pubKey };
  } else {
    throw new Error('Public key must be base16');
  }
};

export const party = (party: Party): Payee => ({ party });