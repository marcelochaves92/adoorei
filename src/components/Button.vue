<template>
    <v-btn type="submit" width="100%" height="60" elevation="0" style="background-color: #f30168; color: #fff">{{ title
    }}</v-btn>
</template>
<script>
export default {
    name: "ButtonComponent",
    props: {
        title: {
            type: String,
            required: true,
        },
    }
}
</script>
