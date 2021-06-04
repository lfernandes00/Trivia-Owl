import Vue from "vue";
import VueRouter from "vue-router";
import Store from '../store'; 

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
import ListActivityManagement from "../views/ListActivityManagement.vue";
import ListActivityProposals from "../views/ListActivityProposals.vue";
import ActivityProposal from "../views/ActivityProposal.vue";
import ListTeams from "../views/ListTeams.vue";
import CreateTeam from "../views/CreateTeam.vue";

//components
import Profile from "../components/Profile.vue";

import Team from "../components/Team.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/activities",
    name: "ListActivities",
    component: ListActivities,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/classification",
    name: "Classification",
    component: Classification,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/interaction",
    name: "Interaction",
    component: Interaction,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/users/admin",
    name: "UserManagement",
    component: UserManagement,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/activities/admin",
    name: "ListActivityManagement",
    component: ListActivityManagement,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/team/:teamId",
    name: "Team",
    component: Team,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/activity/add",
    name: "AddActivity",
    component: AddActivity,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/activity/:activityId",
    name: "Activity",
    component: Activity,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/activity/:activityId/classification",
    name: "ActivityClassification",
    component: ActivityClassification,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/activity/:activityId/questions",
    name: "ActivitySolve",
    component: ActivitySolve,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/activities/admin/:activityId/edit",
    name: "EditActivity",
    component: EditActivity,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/profile/trophies",
    name: "Trophies",
    component: Trophies,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/profile/edit",
    name: "EditProfile",
    component: EditProfile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/profile/addTeam",
    name: "AddTeam",
    component: AddTeam,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/team/teamId/classification",
    name: "TeamClassification",
    component: TeamClassification,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/team/:teamId/edit",
    name: "EditTeam",
    component: EditTeam,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/admin/listActivityProposals",
    name: "ListActivityProposals",
    component: ListActivityProposals,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/admin/activityProposal/:proposalId",
    name: "ActivityProposal",
    component: ActivityProposal,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/listTeams",
    name: "ListTeams",
    component: ListTeams,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/createTeam",
    name: "CreateTeam",
    component: CreateTeam,
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !Store.getters.getLoggedUser) {    
    next({name: 'Home'})
  } else {
    next();  
  }
});

export default router;
