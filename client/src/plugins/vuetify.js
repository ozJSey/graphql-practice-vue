import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from "vuetify/es5/util/colors";
Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.amber.accent4,
        secondary: colors.indigo.darken3,
        accent: colors.pink.lighten5,
        lime: colors.lime.accent4,
        info: colors.amber.lighten3,
        bl: colors.grey.darken4
      }
    }
  }
});
