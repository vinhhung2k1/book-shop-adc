<template>
  <div>
    <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" style="width: 256px" :mode="mode" :theme="theme">
      <a-menu-item @click="changeKey(1)" key="1"> AppButton </a-menu-item>
      <a-menu-item @click="changeKey(2)" key="2"> AppBadge </a-menu-item>
      <a-sub-menu @click="changeKey(3)" key="sub2">
        <template #title>AppInput</template>
        <a-menu-item @click="changeKey(3)" key="7">Text</a-menu-item>
        <a-menu-item key="8">Number</a-menu-item>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>
  <script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { MailOutlined, CalendarOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import type { MenuMode, MenuTheme } from 'ant-design-vue';
export default defineComponent({
  components: {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
  setup(props, { emit }) {
    const state = reactive({
      mode: 'inline' as MenuMode,
      theme: 'light' as MenuTheme,
      selectedKeys: ['1'],
      openKeys: ['sub1'],
    });
    const componentKey = ref<number>(1);
    const changeKey = (e: any) => {
      emit('getKey', e);
    };
    return {
      ...toRefs(state),
      componentKey,
      changeKey,
    };
  },
});
</script>
  
  