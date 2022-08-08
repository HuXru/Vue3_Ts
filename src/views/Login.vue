<template>
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
    <div class="mb-3">
        <label class="form-label">密码</label>
        <validate-input
         :rules="emailRules"
         v-model="emailVal"
         placeholder="请输入密码"
         type="text"
        ></validate-input>
    </div>
    </validate-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import validateInput, { RulesProp } from '../components/ValidateInput.vue'
import ValidateForm from '../components/ValidateForm.vue'
import { useRouter } from 'vue-router'

const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
export default defineComponent({
    name: 'Login',
    components: {
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
        const router = useRouter()
        const onFormSubmit = (result: boolean) => {
            if (result) {
                router.push({ name: 'column', params: { id: 1 } })
            }
        }
    return {
      emailRef,
      validateEmail,
      emailRules,
      emailVal,
      onFormSubmit
    }
    }
})
</script>
