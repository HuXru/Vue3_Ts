<template>
    <div class="home-page">
        <section class="py-5 text-center container">
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <img src="../assets/column.png" />
                    <h2 class="font-weight-light">随心写作，自由表达</h2>
                    <p>
                        <a href="#" class="btn btn-primary my-2">开始写文章</a>
                    </p>
                </div>
            </div>
            <h4 class="font-weight-bold text-center">发现精彩</h4>
        </section>
        <column-list :list="list"></column-list>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList, { ColumnProps } from '../components/ColumnList.vue'
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '嘻嘻嘻嘻嘻嘻',
    avater: 'https://s1.chu0.com/src/img/png/fa/fa26f3c48f5a47879ebedef3774f02b1.png?imageView2/2/w/190&e=1659333600&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:i5j4nccoaFlAvH33m9WxjGpPAMg='
  },
  {
    id: 2,
    title: 'test2s的专栏',
    description: '嘻嘻嘻嘻嘻嘻',
    avater: 'https://s1.chu0.com/src/img/png/fa/fa26f3c48f5a47879ebedef3774f02b1.png?imageView2/2/w/190&e=1659333600&token=1srnZGLKZ0Aqlz6dk7yF4SkiYf4eP-YrEOdM1sob:i5j4nccoaFlAvH33m9WxjGpPAMg='
  },
  {
    id: 3,
    title: 'test3的专栏',
    description: '嘻嘻嘻嘻嘻嘻'
  }
]
export default defineComponent({
    components: {
        ColumnList
    },
    setup () {
        return {
            list: testData
        }
    }
})
</script>
