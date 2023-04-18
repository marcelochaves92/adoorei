<template>
    <div>
        <header-component class="mb-4" />
        <v-card-text class="text-center" style="font-size: 16px">Escolha seu plano</v-card-text>
        <div class="container">
            <v-row align="center" class="justify-content-center align-baseline">
                <plano-card :id="item.id" :title="item.title" :price="item.price" :subtitle1="item.subtitle1"
                    :subtitle2="item.subtitle2" :hasMigration="item.hasMigration" :servidor="item.servidor"
                    :datacenter="item.datacenter" :ftp="item.ftp" :email="item.email" :subdominio="item.subdominio"
                    v-for="item in prices" v-bind:key="item.title" />
            </v-row>
        </div>
    </div>
</template>

<style>
.container {
    padding-left: 24px;
    padding-right: 24px;
    margin-top: 8px;
}

.title {
    font-size: 24px;
    font-weight: 700;
    padding-bottom: 22px;
    margin: auto;
    padding-left: 24px;
    padding-right: 24px;
}

@media (min-width: 768px) {
    .container {
        padding-left: 200px;
        padding-right: 200px;
    }

    .title {
        font-size: 28px;
        max-width: 700px;
    }
}
</style>

<script>
import HeaderComponent from "@/components/Header.vue";
import PlanoCard from "@/components/Planos.vue";
import { prices } from "@/data/prices";

export default {
    name: "PlanoPage",
    components: {
        HeaderComponent,
        PlanoCard,
    },
    data() {
        return {
            prices: prices,
        };
    },
};
</script>
