import { Token } from "../../types/token";

export const token = (currencySymbol: string, tokenName: string): Token => {
  const regexp = /^([0-9a-f][0-9a-f])*$/g;
  if (currencySymbol.match(regexp)) {
    return { currency_symbol: currencySymbol, token_name: tokenName };
  } else {
    throw new Error('Currency symbol must be base16');
  }
};

export const ADA: Token = { currency_symbol: '', token_name: '' };