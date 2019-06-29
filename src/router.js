import Vue from "vue";
import Router from "vue-router";
import Form from "./components/Form.vue";
import Expenses from "./views/Expenses.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: Form
    },
    {
      path: "/expenses",
      name: "expenses",
      component: Expenses
    }
  ]
});
