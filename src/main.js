import DefaultLayout from "~/layouts/Default.vue";
// import settings from "../data/theme.json";
import ResponsiveImage from "~/components/ResponsiveImage.vue";
import store from './store';
import deviceChecker from './deviceChecker';

export default function(Vue, { head, appOptions }) {
  Vue.component("Layout", DefaultLayout);
  Vue.component("ResponsiveImage", ResponsiveImage);
  Vue.mixin(deviceChecker);
  head.htmlAttrs = { lang: 'ru' };
  appOptions.store = store;
}
