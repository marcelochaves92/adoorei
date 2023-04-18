<template>
    <v-img width="176" height="36" src="@/assets/logo.svg" class="mx-auto mb-10 mt-15" />
    <div class="mb-10">
        <v-card-title class="ml-10" style="font-weight: 700;font-size: 28px;color: #292D32;">Olá {{
            username
        }},
            <v-avatar style="background-color: #D9D9D9;margin-left: 1000px;">
                <span style="color: #fff; font-size: 18px;">{{ initials }}</span>
            </v-avatar>
        </v-card-title>
        <v-card-subtitle class="ml-10">
            Seja bem vindo a sua conta de hospedagem.
            <v-btn @click="handleLogout" style="margin-left: 812px;">Sair</v-btn>
        </v-card-subtitle>
    </div>
    <v-img width="976" height="654" src="@/assets/video.png" class="mx-auto mb-5" />
    <v-card-text class="text-center mb-5" style="color:#292D32;font-weight: 400;font-size: 16px;line-height: 20px;">
        Caso tenha alguma dúvida, visite nossa central de ajuda.
    </v-card-text>
</template>

<script>
import decode from "jwt-decode";
export default {
    name: "HomePage",

    computed: {
        username() {
            try {
                const token = localStorage.getItem("token");
                const decoded = decode(token);
                return decoded?.user || "Visitante";
            } catch (error) {
                return "Visitante";
            }
        },
    },
    methods: {
        handleLogout() {
            localStorage.removeItem("token");
            this.$router.push("/");
        },
    },
    mounted() {
        if (!localStorage.getItem("token")) {
            this.$router.push("/");
        }
    },
    created() {
        const words = this.username.split(' ');
        this.initials = words.map(word => word.charAt(0).toUpperCase()).join('');
    },

};
</script>
