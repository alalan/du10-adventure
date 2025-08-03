import { defineStore } from 'pinia'
import type { Scene, GameState } from '@/types/schema'

const SCENES: Record<string, Scene> = {
  'scene01_gate': {
    sceneId: 'scene01_gate',
    background: 'placeholder', // 对应 src/assets/bg/placeholder.jpg
    bgm: '',
    dialogues: [
      { speaker: '李甲', expression: 'nervous', text: '十娘约我于此，莫非真肯托付终身？' },
      { speaker: '阿香', expression: 'smile',   text: '公子，姑娘已在荷亭候您。' }
    ],
    choices: [
      { text: '前往荷亭', goto: 'scene02_ting' }
    ]
  },
  'scene02_ting': {
    sceneId: 'scene02_ting',
    background: 'placeholder',
    dialogues: [
      { speaker: '杜十娘', expression: 'warm', text: '公子，荷香正好，你我但凭本心。' },
      { speaker: '李甲',   expression: 'joy',  text: '此心不负。' }
    ],
    choices: []
  }
}

export const useGameStore = defineStore('game', {
  state: (): GameState => ({
    currentChapter: 'chap01',
    currentScene: 'scene01_gate',
    flags: {},
    affection: {},
    inventory: {},
  }),
  getters: {
    currentSceneObj(state){
      return SCENES[state.currentScene]
    },
  },

  actions: {
    goto(sceneId: string){
      if (SCENES[sceneId]) this.currentScene = sceneId
    }
  }
})

// 为了在组件中更好拿到场景
export const useScene = () => {
  const store = useGameStore()
  return SCENES[store.currentScene]
}
