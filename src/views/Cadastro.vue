<template>
    <div>
        <header-component />
        <div class="container">
            <v-row align="center" class="justify-content-center align-baseline">
                <v-col cols="18" md="4">
                    <v-card>
                        <v-card-title class="ml-2 mt-4">Dados pessoais</v-card-title>
                        <v-card-subtitle class="ml-2">
                            Informe seus dados pessoais para acesso à sua
                            conta</v-card-subtitle>
                        <form>
                            <v-card-text width="551" height="60" class="mx-2" style="border-radius: 5px">
                                <v-label>Nome completo</v-label>
                                <v-text-field placeholder="Informe seu nome completo" variant="outlined" />
                                <v-label>Celular</v-label>
                                <v-text-field placeholder="(99) 99999-0000" variant="outlined" />
                                <v-label>E-mail</v-label>
                                <v-text-field placeholder="Informe seu e-mail" variant="outlined" />
                                <v-label>Senha</v-label>
                                <v-text-field placeholder="Informe sua senha" variant="outlined" />
                                <v-text>No mínimo 8 caracteres</v-text>
                                <br />
                                <v-label>Confirme sua senha</v-label>
                                <v-text-field placeholder="Sua senha" variant="outlined" />
                                <v-divider></v-divider>
                                <v-card-title>Dados do seu site</v-card-title>
                                <v-card-subtitle>
                                    Informe o nome do seu site</v-card-subtitle>
                                <v-label>Nome do seu site</v-label>
                                <v-text-field placeholder="Nome do site" variant="outlined" />
                                <v-text> Exatamente igual o título do seu site </v-text>
                                <v-divider></v-divider>
                                <v-checkbox
                                    label="Ao concluir com seu cadastro você concorda com nossos termos de uso e politicas de privacidade.
                                                                                                                        "></v-checkbox>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn width="551" height="60" class="mx-auto mb-6" type="submit"
                                    style="background-color: #f30168; color: #fff">
                                    CRIAR CONTA</v-btn>
                            </v-card-actions>
                        </form>
                    </v-card>
                </v-col>
                <v-col>
                    <plano-card :id="price.id" :title="price.title" :price="price.price" :subtitle1="price.subtitle1"
                        :subtitle2="price.subtitle2" :hasMigration="price.hasMigration" :servidor="price.servidor"
                        :datacenter="price.datacenter" :ftp="price.ftp" :email="price.email" :subdominio="price.subdominio"
                        v-if="price" />
                </v-col>
            </v-row>
        </div>

    </div>
</template>

<script>
import { prices } from "@/data/prices";

import HeaderComponent from "@/components/Header.vue";
import PlanoCard from "@/components/Planos.vue";

export default {
    name: "CadastroPage",
    components: {
        HeaderComponent,
        PlanoCard,
    },
    data() {
        return {
            price: {},
        };
    },
    mounted() {
        this.price = prices.find((p) => p.id === this.$route.params.id);
    },
};
</script>
