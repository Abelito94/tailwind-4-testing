import type { StoreState } from './types.ts';

export default {
  getNumber: (state: StoreState) => state.number,
};