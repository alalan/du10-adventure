export interface Dialogue {
    speaker: string
    expression: string
    text: string
    sfx?: string
  }
  
  export interface Choice {
    text: string
    effects?: Record<string, any>
    goto: string
  }
  
  export interface Scene {
    sceneId: string
    background: string
    bgm?: string
    dialogues: Dialogue[]
    choices?: Choice[]
  }
  
  export interface GameState {
    currentChapter: string
    currentScene: string
    flags: Record<string, any>
    affection: Record<string, number>
    inventory: Record<string, number>
  }
  