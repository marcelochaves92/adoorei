// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Login",
        component: () => import("@/views/Login.vue"),
    },
    {
        path: "/plano",
        component: () => import("@/views/Plano.vue"),
    },
    {
        name: "Cadastro",
        path: "/plano/cadastro/:id",
        component: () => import("@/views/Cadastro.vue"),
    },
    {
        path: "/home",
        component: () => import("@/views/Home.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
