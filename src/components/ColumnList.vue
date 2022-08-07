<template>
    <div class="row">
        <div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
            <div class="card h-100 shadow-sm">
               <div class="card-body text-center">
                    <img :src="column.avater" :alt="column.title" />
                    <h5>{{column.title}}</h5>
                    <p>{{column.description}}</p>
                    <a href="#">进入专栏</a>
               </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
export interface ColumnProps{
    id: number,
    title:string,
    description: string,
    avater?: string
}

export default defineComponent({
    name: 'CloumnList',
    props: {
        list: {
            type: Array as PropType<ColumnProps[]>,
            required: true
        }
    },
    setup (props) {
        const columnList = computed(() => {
            return props.list.map(column => {
                if (!column.avater) {
                    column.avater = require('@/assets/column.png')
                }
                return column
            })
        })
        return {
            columnList
        }
    }
})
</script>
<style scoped>

</style>
