import { createStore } from "vuex";
import search from "@/store/modules/search";
import notifications from "@/store/modules/notifications";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    search,
    notifications,
  },
});
