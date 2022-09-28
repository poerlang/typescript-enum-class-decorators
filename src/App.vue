<script setup lang="ts">
import {testEnums} from "./MyEnum";
import {Ref, ref} from "vue";

const time = ref('...')
const ret: Ref<Array<any>> = ref(['click the button'])
const onClick = () => {
  ret.value.length = 0;
  time.value = new Date().getTime()+'';
  testEnums().forEach(v => {
    ret.value.push(v);
  });
}
</script>

<template>
  <div>{{ time }}</div>
  <div>{{ ret }}</div>
  <button class="btn" @click="onClick">tick</button>
</template>

<style scoped>
.btn {
  background: #185e56;
  padding: 5px;
  color: #f3f4ff;
  transition: all 0.3s;
}
.btn:hover{
  background: #248c80;
}
.btn:active{
  background: #124640;
}
</style>
