import { defineStore } from 'pinia';
import { initialState } from './state';
import actions from './actions';
import getters from './getters';

export const useHomeStore = defineStore('home', {
  state: () => ({ ...initialState }),
  getters: getters,
  actions: actions,
});