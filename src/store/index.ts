import { createStore } from "vuex";

export default createStore({
  strict: process.env.NODE_ENV !== "production",
  state: {
    username: "",
    token: "",
    publicKey: "",
    aseKey: "",
  },
  mutations: {
    setUsername: (store, username) => {
      store.username = username;
    },
    setToken: (store, token) => {
      store.token = token;
    },
    setPublicKey: (store, publicKey) => {
      store.publicKey = publicKey;
    },
    setAseKey: (store, aseKey) => {
      store.aseKey = aseKey;
    },
  },
  actions: {},
  modules: {},
});
