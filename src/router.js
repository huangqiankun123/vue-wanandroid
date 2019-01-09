import Vue from "vue";
import Router from "vue-router";
import Main from "./views/Main"
import Home from "./views/Home.vue";
import System from "./views/System";
import Navigation from "./views/Navigation";
import Project from "./views/Project";
import Me from "./views/Me";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/", name: "Main", component: Main, redirect: '/home', children: [
                {path: "/home", name: "Home", component: Home},
                {path: "/system", name: "System", component: System},
                {path: "/navigation", name: "Navigation", component: Navigation},
                {path: "/project", name: "Project", component: Project},
                {path: "/me", name: "Me", component: Me}
            ]
        },


    ]
});
