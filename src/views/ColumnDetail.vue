<template>
    <div class="column-detail-page w-75 mx-auto">
        <div class="column-info mb-4 border-bottom pb-4" v-for="column in columns" :key="column.id">
            <div class="col-3 text-center">
                <img :src="column.avater" :alt="column.title">
            </div>
            <div class="col-9">
                <h4>{{ column.title }}</h4>
                <p class="text-muted">{{ column.description }}</p>
            </div>
        </div>
        <post-list :list="list"></post-list>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { testData, testPosts } from '../testData'
import PostList from '../components/PostList.vue'

export default defineComponent({
    components: {
        PostList
    },
    setup () {
        const route = useRoute()
        const currentId = +route.params.id
        const column = testData.find(c => c.id === currentId)
        const columns: any[] = []
        columns.push(column)
        const list = testPosts.filter(post => post.columnId === currentId)
        console.log(column)
        console.log(list)
        return {
            columns,
            list
        }
    }
})
</script>
