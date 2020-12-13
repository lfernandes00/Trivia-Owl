import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Activities from "../views/Activities.vue";
import Classification from "../views/Classification.vue";
import Interaction from "../views/Interaction.vue";
import Profile from "../components/Profile.vue";
import UserManagement from "../views/UserManagement.vue";
import ActivityManagement from "../components/ActivityManagement.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/activities",
    name: "Activities",
    component: Activities
  },
  {
    path: "/classification",
    name: "Classification",
    component: Classification
  },
  {
    path: "/interaction",
    name: "Interaction",
    component: Interaction
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/admin/userManagement",
    name: "UserManagement",
    component: UserManagement 
  },
  {
    path: "/admin/ActivityManagement",
    name: "ActivityManagement",
    component: ActivityManagement 
  }
];

const router = new VueRouter({
  routes
});

export default router;
