import Vue from "vue";
import Router from "vue-router";
import home from "@/pages/home";
import list from "@/pages/list";
import article from "@/pages/article";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
      alias: "/index"
    },
    {
      path: "/list",
      name: "list",
      component: list
      // alias: "/index"
    },
    {
      path: "/article",
      name: "article",
      component: article
      // alias: "/index"
    }
  ]
});
