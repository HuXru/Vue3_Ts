<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <column-list :list="list"></column-list>
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input
         :rules="emailRules"
         v-model="emailVal"
         placeholder="请输入邮箱地址"
         type="text"
        ></validate-input>
      </div>
      <!-- <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="emailRef.val" @blur="validateEmail">
        <div class="form-text" v-if="emailRef.error">{{emailRef.message}}</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div> -->
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import validateInput, { RulesProp } from './components/ValidateInput.vue'
import ValidateForm from './components/ValidateForm.vue'
const currentUser: UserProps = {
  isLogin: true,
  name: 'huhuzi'
}
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
const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader,
    validateInput,
    ValidateForm
  },
  setup () {
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的的电子邮箱格式' }
    ]
    const emailRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const validateEmail = () => {
      if (emailRef.val.trim() === '') {
        emailRef.error = true
        emailRef.message = 'can not be empty'
      } else if (!emailReg.test(emailRef.val)) {
        emailRef.error = true
        emailRef.message = 'should be valid message'
      }
    }
    const emailVal = ref('123@test.com')
    const onFormSubmit = (result: boolean) => {
      console.log('111', result)
    }
    return {
      list: testData,
      currentUser: currentUser,
      emailRef,
      validateEmail,
      emailRules,
      emailVal,
      onFormSubmit
    }
  }
})
</script>

<style>

</style>
