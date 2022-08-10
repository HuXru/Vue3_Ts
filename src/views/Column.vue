<template>
    <column-detail></column-detail>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import ColumnDetail from './ColumnDetail.vue'

export default defineComponent({
    components: {
        ColumnDetail
    },
    setup () {
        const route = useRoute()
        return {
            route
        }
    }
})
</script>
