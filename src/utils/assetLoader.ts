const bgModules = import.meta.glob('../assets/bg/*.{jpg,png}', { eager: true })

export function getBackgroundPath(name: string): string {
  const tryKeys = [
    `../assets/bg/${name}.jpg`,
    `../assets/bg/${name}.png`,
    `../assets/bg/placeholder.jpg`,
  ]
  for (const k of tryKeys) {
    const mod: any = (bgModules as any)[k]
    if (mod?.default) return mod.default as string
  }
  return ''
}
