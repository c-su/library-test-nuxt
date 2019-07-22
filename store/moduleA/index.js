/* eslint-disable no-console */
import BaseStore from '../'
export const state = () => BaseStore.moduleA.state
export const mutations = BaseStore.moduleA.mutations
export const actions = BaseStore.moduleA.actions
export const getters = BaseStore.moduleA.getters
