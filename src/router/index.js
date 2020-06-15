import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true
  },
  {
    path: '/details/:slug',
    name: 'detailsPage',
    component: () => import(/* webpackChunkName: "detail" */ "@/views/DetailsPage.vue"),
    props: true
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
