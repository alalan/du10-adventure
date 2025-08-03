<template>
    <main class="title">
      <h1>欢迎进入 DU10 冒险</h1>
      <p>基于《杜十娘怒沉百宝箱》的文字冒险 Demo</p>
      <button @click="start">开始游戏</button>
      <router-link to="/save">存档/读档</router-link>
    </main>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router'
  const router = useRouter()
  function start(){ router.push('/game') }
  </script>
  
  <style scoped>
  .title{display:flex;flex-direction:column;gap:12px;align-items:center;justify-content:center;height:100%}
  button{padding:8px 16px;cursor:pointer}
  </style>
  