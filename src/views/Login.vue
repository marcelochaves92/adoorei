<template>
    <div id="login">
        <div>
            <v-img width="176" height="36" src="@/assets/logo.svg" class="mx-auto mb-8" />
            <v-card class="mx-auto px-4 py-6">
                <v-card-title style="font-weight: 700;font-size: 28px;line-height: 35px;color: #292D32;">
                    Entre na sua conta</v-card-title>
                <v-card-subtitle style="font-weight: 400;font-size: 18px;line-height: 23px;color: #292D32;">
                    Para acessar sua conta informe seu e-mail e
                    senha</v-card-subtitle>
                <v-card-text>
                    <form @submit="submitLogin">
                        <v-label style="font-weight: 400;font-size: 16px;line-height: 20px;color: #292D32;">E-mail</v-label>
                        <v-text-field v-model="username" placeholder="Seu e-mail" variant="outlined" />
                        <v-label>Senha</v-label>
                        <v-text-field v-model="password" placeholder="Sua senha" variant="outlined" type="password" />
                        <v-card-subtitle class="text-right mb-2 mt-0"
                            style="font-weight: 400;font-size: 16px;line-height: 20px;color: #515D74;">Esqueci minha
                            senha</v-card-subtitle>
                        <button-component :title="titulo" />
                    </form>
                </v-card-text>
            </v-card>

            <v-card-text class="text-center mt-4 block"
                style="font-weight: 400; font-size: 18px; line-height: 23px;color:#292D32">
                Ainda não tem conta?
                <router-link to="/plano" style="color: #f30168">Cadastre-se</router-link>
            </v-card-text>
        </div>
    </div>
</template>

<style scoped>
#login {
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    padding: 60px 24px;
    place-items: center;
    display: grid;
}
</style>

<script>
import axios from "axios";
import ButtonComponent from "@/components/Button.vue";

export default {
    name: "LoginPage",
    components: {
        ButtonComponent,
    },

    data() {
        return {
            username: "johnd",
            password: "m38rmF$",
            titulo: "FAZER LOGIN",
        };
    },
    methods: {
        async submitLogin(event) {
            event.preventDefault();
            try {
                const res = await axios.post(
                    "https://fakestoreapi.com/auth/login",
                    {
                        username: this.username,
                        password: this.password,
                    }
                );

                if (res.data.token) {
                    localStorage.setItem("token", res.data.token);
                    this.$router.push("/home");
                }
            } catch (error) {
                alert("Nome de usuário ou senha estão incorretos");
            }
        },
    },
};
</script>
