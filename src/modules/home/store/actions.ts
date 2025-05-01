import type { StoreState } from './types.ts';
import { homeStore } from './index.ts';

export default {
  addNumber (number: number) {
    homeStore.state.number += number;
  },
  subtractNumber (number: number) {
    homeStore.state.number -= number;
  }
}