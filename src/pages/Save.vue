<template>
    <main class="save">
      <h2>存档 / 读档</h2>
      <div class="row">
        <button @click="save">存档</button>
        <button @click="load">读档</button>
        <button @click="back">返回标题</button>
      </div>
      <pre>{{ json }}</pre>
    </main>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { useGameStore } from '@/stores/game'
  const router = useRouter()
  const store = useGameStore()
  const json = computed(()=>JSON.stringify(store.$state,null,2))
  function save(){ localStorage.setItem('du10-save', JSON.stringify(store.$state)); alert('已存档') }
  function load(){
    const s = localStorage.getItem('du10-save')
    if(s){ store.$patch(JSON.parse(s)); alert('已读档') }
  }
  function back(){ router.push('/') }
  </script>
  
  <style scoped>
  .save{padding:20px}
  .row{display:flex;gap:8px;margin-bottom:12px}
  pre{background:#111;color:#9fe;padding:12px;overflow:auto}
  </style>
  