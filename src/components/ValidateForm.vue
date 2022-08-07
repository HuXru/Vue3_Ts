<template>
    <form class="validate-form-container">
        <slot name="default"></slot>
        <div class="submit-area" @click.prevent="submitForm">
            <slot name="submit">
                <button type="submit" class="btn btn-primary">提交</button>
            </slot>
        </div>
    </form>
</template>
<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'
type ValidateFunc = () => boolean
type Emits<EventType extends string | symbol, T> = {
  on(type: EventType, handler: (arg: T) => void): void
  off(type: EventType, handler: (arg: T) => void): void
  emit(type: EventType, arg: T): void
}
type Emitter = Emits<'form-item-created', ValidateFunc>
export const emitter:Emitter = mitt()
export default defineComponent({
    emits: ['form-submit'],
    setup (props, context) {
        let funcArr: ValidateFunc[] = []
        const submitForm = () => {
            const result = funcArr.every(func => func())
            context.emit('form-submit', result)
        }
        const callback = (func:ValidateFunc) => {
            funcArr.push(func)
        }
        emitter.on('form-item-created', callback)
        onUnmounted(() => {
        emitter.off('form-item-created', callback)
        funcArr = []
        })
        return {
            submitForm
        }
    }
})
</script>
