/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import 'vuetify/styles'

const lightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    'surface-bright': '#FFFFFF',
    'surface-light': '#EEEEEE',
    'surface-variant': '#969696',
    'on-surface-variant': '#EEEEEE',
    primary: '#2B62AC',
    'primary-darken-1': '#215395',
    secondary: '#ffffff',
    'secondary-darken-1': '#2E5D9C',
    disabled: '#CFCFD7',
    error: '#FF1A1D',
    info: '#0080FF',
    success: '#47A583',
    warning: '#FF8000',
  },
  variables: {
    'border-color': '#000000',
    'border-opacity': 0,
    'high-emphasis-opacity': 1,
    'medium-emphasis-opacity': 1,
    'disabled-opacity': 1,
    'idle-opacity': 0.04,
    'hover-opacity': 0.02,
    'focus-opacity': 0,
    'selected-opacity': 0.2,
    'activated-opacity': 0,
    'pressed-opacity': 0.1,
    'dragged-opacity': 0.08,
    'theme-kbd': '#212529',
    'theme-on-kbd': '#FFFFFF',
    'theme-code': '#F5F5F5',
    'theme-on-code': '#000000',
  }
}

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme,
    },
  },
})
