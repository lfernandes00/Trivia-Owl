import Vue from "vue";
import VueRouter from "vue-router";

//views
import Home from "../views/Home.vue";
import Classification from "../views/Classification.vue";
import Interaction from "../views/Interaction.vue";
import UserManagement from "../views/UserManagement.vue";
import AddActivity from "../views/AddActivity.vue";
import Activity from "../views/Activity.vue";
import ActivityClassification from "../views/ActivityClassification.vue";
import ActivitySolve from "../views/ActivitySolve.vue";
import EditActivity from "../views/EditActivity.vue";
import Trophies from "../views/Trophies.vue";
import EditProfile from "../views/EditProfile.vue";
import AddTeam from "../views/AddTeam.vue";
import TeamClassification from "../views/TeamClassification.vue";
import EditTeam from "../views/EditTeam.vue";
import ListActivities from "../views/ListActivities.vue";

//components
import Profile from "../components/Profile.vue";
import ActivityManagement from "../components/ActivityManagement.vue";
import Team from "../components/Team.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/listactivities",
    name: "ListActivities",
    component: ListActivities
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
  },
  {
    path: "/team",
    name: "Team",
    component: Team
  },
  {
    path: "/activity/add",
    name: "AddActivity",
    component: AddActivity
  },
  {
    path: "/activity/:activityId",
    name: "Activity",
    component: Activity
  },
  {
    path: "/activity/activityId/classification",
    name: "ActivityClassification",
    component: ActivityClassification
  },
  {
    path: "/activity/activityId/solve",
    name: "ActivitySolve",
    component: ActivitySolve
  },
  {
    path: "/admin/activityManagement/activityId/edit",
    name: "EditActivity",
    component: EditActivity
  },
  {
    path: "/profile/trophies",
    name: "Trophies",
    component: Trophies
  },
  {
    path: "/profile/edit",
    name: "EditProfile",
    component: EditProfile
  },
  {
    path: "/profile/addTeam",
    name: "AddTeam",
    component: AddTeam
  },
  {
    path: "/team/teamId/classification",
    name: "TeamClassification",
    component: TeamClassification
  },
  {
    path: "/team/teamId/edit",
    name: "EditTeam",
    component: EditTeam
  }
];

const router = new VueRouter({
  routes
});

export default router;
