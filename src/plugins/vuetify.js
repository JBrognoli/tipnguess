import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#2a0845',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2a0845',
        success: '#4CAF50',
        warning: '#FFC107',
        light: '#411A60',
        clear: '#5C347D',
        shadow: '#19022C',
        darkness: '#0D0116',
      },
    },
  },
  icons: {
    iconfont: 'mdi',
  },
})
