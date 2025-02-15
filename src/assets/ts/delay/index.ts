import type { Ref } from 'vue'

let handlerKey = 0
export function executeLastDelay(func: () => any | Promise<any>, timeout: number = 600) {
  handlerKey++
  const currentHandler = handlerKey

  setTimeout(() => {
    if (currentHandler == handlerKey) func()
  }, timeout)
}

export async function setLoadingDelay<T>(
  func: () => Promise<T>,
  loadingRef: Ref<boolean>,
  timeout: number = 200
) {
  let loaded = false
  setTimeout(() => {
    if (!loaded) loadingRef.value = true
  }, timeout)
  const res = await func()
  loaded = true
  loadingRef.value = false
  return res
}

export function sleep(timeout: number = 600) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, timeout)
  })
}
