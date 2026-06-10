export const SHARK_CONTRACT_ADDRESS = '';

export const SHARK_CHAIN_ID = 'solana';

export const SHARK_DEXSCREENER_TOKEN_URL = SHARK_CONTRACT_ADDRESS
  ? `https://api.dexscreener.com/token-pairs/v1/${SHARK_CHAIN_ID}/${SHARK_CONTRACT_ADDRESS}`
  : '';

export const SHARK_DEX_REFRESH_MS = 60_000;