<template>
  <div id="app">
    <router-view />
 <van-tabbar v-model="active" route>
      <van-tabbar-item replace to="/" icon="coupon-o">支行介绍</van-tabbar-item>
      <van-tabbar-item replace to="/partner" icon="good-job-o">合作商户</van-tabbar-item>
      <van-tabbar-item replace to="/conven" icon="friends-o">遍利社区</van-tabbar-item>
      <van-tabbar-item replace to="/me" icon="user-o">我的账户</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return { active: "首页" };
  }
};
</script>

<style>
*{margin:0}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
.van-tabbar--fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 1px solid #ccc;
}
</style>
