import Vue from "vue";
import Vuex from "vuex";
import Expenses from "./data/expenses";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    expenses: Expenses
  },
  mutations: {
    addExpense: function(state, e) {
      state.expenses.expenses.push(e);
      var obj = JSON.stringify(state.expenses);
      localStorage.setItem("expenses", obj);
    },
    deleteExpense: function(state, index) {
      state.expenses.expenses.splice(index);
      var obj = JSON.stringify(state.expenses);
      localStorage.setItem("expenses", obj);
    }
  },
  actions: {
    add: function({ commit }, expenses) {
      commit("addExpense", expenses);
    },
    delete: function({ commit }, index) {
      commit("deleteExpense", index);
    }
  }
});
