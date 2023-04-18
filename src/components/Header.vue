<template>
    <div>
        <v-img width="176" height="36" src="@/assets/logo.svg" class="mx-auto mb-10 mt-15" />

        <div class="title text-center">
            Você está muito próximo de mudar a forma de
            <v-text class="text-decoration-underline" style="color: #f30168">
                hospedar seu site
            </v-text>
        </div>
    </div>
</template>
<style>
.title {
    font-size: 24px;
    font-weight: 700;
    padding-bottom: 22px;
    margin: auto;
    padding-left: 24px;
    padding-right: 24px;
}

@media (min-width: 768px) {
    .title {
        font-size: 28px;
        max-width: 700px;
    }
}
</style>
<script>
export default {
    name: "HeaderComponent",
}
</script>
