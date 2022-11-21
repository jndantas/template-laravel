<template>
    <div class="section-header">
        <h1 v-if="name">{{ name }}</h1>
        <div v-if="items.length > 0" class="section-header-breadcrumb">
            <div v-for="(item, index) in items" :key="item.name" class="breadcrumb-item">
                <span v-if="index == items.length - 1">
                    {{item.name}}
                </span>
                <router-link v-else :to="{name : item.route ? item.route : '#'}">
                    {{item.name}}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "templateHeader",
    props:{
        name: {
            default: null,
            type: String
        },
        items:{
            default: [],
            type: Array
        }
    }
}
</script>

<style scoped>

</style>
