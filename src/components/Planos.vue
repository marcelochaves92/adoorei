<template>
    <v-col cols="12" md="4">
        <v-card>
            <v-card-title class="text-center mt-8" style="font-size: 26px; font-weight: 700; color: #666666">{{ title
            }}</v-card-title>
            <v-card-title class="text-center"
                style="color: #f30168; font-weight: 700; font-size: 34px;line-height: 43px;">{{ price }}</v-card-title>
            <v-card-subtitle class="text-center my-4"
                style="font-weight: 400; font-size: 14px; line-height: 18px;color: #666666;">
                <div v-html="subtitle1" />
            </v-card-subtitle>

            <v-divider />

            <v-card-subtitle class="mt-4 mb-4 text-center text-wrap"
                style="font-size: 17px; color: #666666;font-weight: 400;line-height: 21px;">
                {{ subtitle2 }}</v-card-subtitle>

            <v-divider />

            <router-link :to="{
                name: 'Cadastro',
                params: { id: `${id}` },
            }" style="display: block; margin: 0 20px">
                <v-btn class="text-center mt-4 mb-4" width="100%" type="submit" height="56"
                    style="background-color: #f30168; color: #fff" elevation="0">
                    ESCOLHER ESSE PLANO</v-btn>
            </router-link>
            <v-card-subtitle class="text-left text-wrap" style="font-weight: 700; font-size: 17px; color: #666666">
                {{ servidor }}
            </v-card-subtitle>
            <v-card-subtitle class="text-left text-wrap"
                style="font-size: 17px; color: #666666;font-weight: 400;line-height: 21px;">
                <v-icon start icon="mdi mdi-check" style="color: #292d32; size: 12px"></v-icon>
                {{ datacenter }}
            </v-card-subtitle>
            <v-card-subtitle class="text-left text-wrap"
                style="font-size: 17px; color: #666666;font-weight: 400;line-height: 21px;">
                <v-icon start icon="mdi mdi-check" style="color: #292d32"></v-icon>
                ASP, ASP.NET 2.0/3.0/3.5/ e 4.0/4.5/4.5.1/4.5.2 (medium trust)
                ou PHP 5.3, 5.4, 5.5, 5.6 e 7.0;
            </v-card-subtitle>
            <v-card-subtitle class="text-left text-wrap"
                style="font-size: 17px; color: #666666;font-weight: 400;line-height: 21px;">
                <v-icon start icon="mdi mdi-check" style="color: #292d32"></v-icon>
                {{ ftp }}
            </v-card-subtitle>
            <v-card-subtitle class="text-left text-wrap"
                style="font-size: 17px; color: #666666;font-weight: 400;line-height: 21px;">
                <v-icon start icon="mdi mdi-check" style="color: #292d32"></v-icon>
                {{ email }}
            </v-card-subtitle>
            <v-card-subtitle class="text-left text-wrap mb-4"
                style="font-size: 17px; color: #666666;font-weight: 400;line-height: 21px;">
                <v-icon start icon="mdi mdi-check" style="color: #292d32"></v-icon>
                {{ subdominio }}
            </v-card-subtitle>
            <v-card-subtitle class="text-left text-wrap mb-4"
                style="font-weight: 700; font-size: 17px; color: #666666">Suporte 24 horas, 7 dias por semana
                grátis;</v-card-subtitle>
            <v-card-subtitle class="text-left text-wrap mb-2"
                style="font-weight: 700; font-size: 17px; color: #666666">Aplicativos disponíveis;</v-card-subtitle>
            <v-card-subtitle class="text-left text-wrap"
                style="font-size: 17px; color: #666666;font-weight: 400;line-height: 21px;">
                <v-icon start icon="mdi mdi-check" style="color: #292d32"></v-icon>
                Wordpress;
            </v-card-subtitle>
            <v-card-subtitle class="text-left text-wrap"
                style="font-size: 17px; color: #666666;font-weight: 400;line-height: 21px;">
                <v-icon start icon="mdi mdi-check" style="color: #292d32"></v-icon>
                Drupal;
            </v-card-subtitle>
            <v-card-subtitle class="text-left text-wrap"
                style="font-size: 17px; color: #666666;font-weight: 400;line-height: 21px;">
                <v-icon start icon="mdi mdi-check" style="color: #292d32"></v-icon>
                entre outros...
            </v-card-subtitle>

            <div v-if="hasMigration">
                <v-card-subtitle class="text-left text-wrap mt-4" style="font-weight: 700; font-size: 17px; color: #666666">
                    Migração gratuita;
                </v-card-subtitle>
                <v-card-subtitle class="text-left text-wrap"
                    style="font-size: 17px; color: #666666;font-weight: 400;line-height: 21px;">
                    <v-icon start icon="mdi mdi-check" style="color: #292d32"></v-icon>
                    Migramos todos seus sites para nossos servidores;
                </v-card-subtitle>
            </div>
            <v-card-subtitle class="text-left text-wrap mt-4" style="font-weight: 700; font-size: 17px; color: #666666">
                Você ainda tem
            </v-card-subtitle>
            <v-card-subtitle class="text-left text-wrap"
                style="font-size: 17px; color: #666666;font-weight: 400;line-height: 21px;">
                <v-icon start icon="mdi mdi-check" style="color: #292d32"></v-icon>
                Webmail RoundCube;
            </v-card-subtitle>
            <v-card-subtitle class="text-left text-wrap"
                style="font-size: 17px; color: #666666;font-weight: 400;line-height: 21px;">
                <v-icon start icon="mdi mdi-check" style="color: #292d32"></v-icon>
                AntiSpam;
            </v-card-subtitle>
            <v-card-subtitle class="text-left text-wrap"
                style="font-size: 17px; color: #666666;font-weight: 400;line-height: 21px;">
                <v-icon start icon="mdi mdi-check" style="color: #292d32"></v-icon>
                Painel de gerenciamento de DNS;
            </v-card-subtitle>
            <v-card-subtitle class="text-left text-wrap"
                style="font-size: 17px; color: #666666;font-weight: 400;line-height: 21px;">
                <v-icon start icon="mdi mdi-check" style="color: #292d32"></v-icon>
                Painel de controle web;
            </v-card-subtitle>
            <v-card-subtitle class="text-left text-wrap"
                style="font-size: 17px; color: #666666;font-weight: 400;line-height: 21px;">
                <v-icon start icon="mdi mdi-check" style="color: #292d32"></v-icon>
                Configurações de PHP personalizáveis;
            </v-card-subtitle>
            <v-card-subtitle class="text-left text-wrap"
                style="font-size: 17px; color: #666666;font-weight: 400;line-height: 21px;">
                <v-icon start icon="mdi mdi-check" style="color: #292d32"></v-icon>
                Certificado SSL Grátis;
            </v-card-subtitle>
            <v-card-subtitle class="text-left text-wrap"
                style="font-size: 17px; color: #666666;font-weight: 400;line-height: 21px;">
                <v-icon start icon="mdi mdi-check" style="color: #292d32"></v-icon>
                Transferência ilimitada.
            </v-card-subtitle>
        </v-card>
    </v-col>
</template>
<script>
export default {
    name: "PlanoCard",
    props: {
        id: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        subtitle1: {
            type: String,
            required: true,
        },
        subtitle2: {
            type: String,
            required: true,
        },
        hasMigration: {
            type: Boolean,
            default: false,
        },
        servidor: {
            type: String,
            required: true,
        },
        datacenter: {
            type: String,
            required: true,
        },
        ftp: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        subdominio: {
            type: String,
            required: true,
        },
    },
};
</script>
