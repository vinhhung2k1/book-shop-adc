<template>
  <div class="flex">
    <div>
      <BaseComponent @getKey="changeKeyComponent"/>
    </div>
    <div class="w-full">
      <table class="w-full text-left border-collapse">
        <thead class="bg-slate-50 dark:bg-slate-700">
          <tr>
            <th class="w-2/5 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Component</th>
            <th class="w-3/5 border border-slate-300 dark:border-slate-600 font-semibold p-4 text-slate-900 dark:text-slate-200 text-left">Giair thích</th>
          </tr>
        </thead>
        <tbody class="">
          <tr>
            <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
              <AppButton v-if="KeyComponent === 1" class-style="app-btn--lg app-btn--primary">button</AppButton>
              <AppBadge v-if="KeyComponent === 2" :sub="3" :content="'new'"></AppBadge>
              <AppInput v-if="KeyComponent === 3" type="text" v-model="inputData"></AppInput>
            </td>
            <td class="border border-slate-300 dark:border-slate-700 p-4 text-slate-500 text-lg">
                <ul v-for="item, key in textArr">
                    <li :key = key>{{ item }}</li>
                </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup lang='ts'>
import {baseComponent} from '@/utils/index';
import {computed, ref} from 'vue'

const KeyComponent = ref<number>(1)
const textArr = computed(()=>{
    let arr: String[]=[];
    baseComponent.forEach(item => {
        if(item.id === KeyComponent.value){
            arr = item.text;
        }
    })
    return arr;
})
const changeKeyComponent=(emit: number) => {
    KeyComponent.value = emit;
}
const inputData = ref<any>('AppInput')
</script>
    
<style>
</style>