import type { App } from 'vue'

// Plugins
// import { addDebugger } from '@/plugins/debug.ts'

import { initPinia } from '@/plugins/pinia.ts'
import VueAxios from "vue-axios";
import axios from "axios";

import * as cookies from 'vue-cookies'
import vuetify from './vuetify'
import Notifications from '@kyvg/vue3-notification'
import VMask from "@ssibrahimbas/v-mask";

export function registerPlugins(app: App<Element>) {
  // addDebugger()

  app
    .use(initPinia())
    .use(VueAxios, axios)
    .use(cookies, { expires: '1d'})
    .use(vuetify)
    .use(Notifications)
    .use(VMask)
}
