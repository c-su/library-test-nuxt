/* eslint-disable no-console */
import BaseStore from '../'

export const state = () => BaseStore.moduleB.state
export const mutations = BaseStore.moduleB.mutations
export const actions = BaseStore.moduleB.actions
export const getters = BaseStore.moduleB.getters
