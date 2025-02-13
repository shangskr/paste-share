import { defineStore } from 'pinia'
// 创建并暴露一个store
export default defineStore('UserStore', {
  // 状态
  state: () => {
    return {
      token: localStorage.getItem("token") || "",
      username: localStorage.getItem("username") || "",
      userType: "",
      isLogin: false,
      isCompleteLogin: false,
    }
  },
  // 对状态的操作
  actions: {
    logout() {
      this.token = "";
      this.username = "";
      this.userType = "";
      this.isLogin = false;
      localStorage.removeItem("token");
      localStorage.removeItem("username");
    }
  },
  // 相当于计算属性，传入一个store的state作为参数
  getters: {}
});