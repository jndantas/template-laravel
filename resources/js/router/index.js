import { createRouter, createWebHistory } from "vue-router";
import ExampleComponent from "../components/ExampleComponent";
import Profile from "../components/Profile";
import Users from "../components/Users"

const routes = [
    { path: '/home', name:'home', component: ExampleComponent },
    { path: '/profile', name:'profile', component: Profile },
    { path: '/users', name:'users', component: Users },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;
