import { createPinia, type PiniaPluginContext } from 'pinia'

function myPiniaPlugin(context: PiniaPluginContext) {
  // ...

  return {d: 'r'}
}

// import cloneDeep from 'lodash.clonedeep'
// function resetStorePlugin(context: PiniaPluginContext) {
  // const initialState = cloneDeep(context.store.$state)
  // console.log(context.store.$id);

  // console.log(initialState);

  // context.store.$reset = () => context.store.$patch(cloneDeep(initialState))
  // context.store.$reset()

  // context.store.$reset = () => {
  //   console.log(`$reset не настроен - ${context.store.$id}`)
  // }
// }



export function initPinia() {
  return createPinia()
    .use(myPiniaPlugin)
}



