<template>
  <div>
    <van-nav-bar title="标题" left-text="返回" left-arrow>
  <van-icon name="ellipsis" slot="right" />
</van-nav-bar>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.van-nav-bar {
  background: #000;
  height: 50px;
}
.van-nav-bar__text,.van-nav-bar .van-icon,.van-nav-bar__title.van-ellipsis {
    color: #fff;
}
.van-nav-bar__title.van-ellipsis {
    text-align: center;
    padding-top: 5px;
    font-size: 16px;
}
</style>