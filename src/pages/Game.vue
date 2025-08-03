<template>
    <div class="game">
      <div class="bg" :style="bgStyle"></div>
  
      <section class="dialog">
        <div class="line" v-for="(d,i) in scene.dialogues" :key="i">
          <strong>{{ d.speaker }}：</strong>
          <span>{{ d.text }}</span>
        </div>
  
        <div v-if="scene.choices?.length" class="choices">
          <button v-for="(c,i) in scene.choices" :key="i" @click="choose(c.goto)">
            {{ c.text }}
          </button>
        </div>
      </section>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue'
  import { useGameStore } from '@/stores/game'
  import { getBackgroundPath } from '@/utils/assetLoader'
  import type { Scene } from '@/types/schema'
  
  const store = useGameStore()
  const scene = computed<Scene>(() => store.currentSceneObj)
  
  const bgStyle = computed(()=>{
    const img = getBackgroundPath(scene.value.background)
    return img
      ? { backgroundImage: `url(${img})` }
      : { background: 'linear-gradient(135deg,#222,#444)' }
  })
  
  function choose(nextId:string){ store.goto(nextId) }
  </script>
  
  <style scoped>
  .game{position:relative;height:100vh;overflow:hidden}
  .bg{position:absolute;inset:0;background-size:cover;background-position:center;filter:brightness(0.9)}
  .dialog{
    position:absolute;left:0;right:0;bottom:0;
    background:rgba(0,0,0,.45);color:#fff;padding:16px 20px;
  }
  .choices{margin-top:10px;display:flex;gap:8px;flex-wrap:wrap}
  button{padding:6px 12px;cursor:pointer}
  </style>
  