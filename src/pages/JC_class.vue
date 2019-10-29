<template>
  <div>
    <van-nav-bar title="合作商户" left-text="返回" left-arrow>
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>
    <van-tabs v-model="active">
      <van-tab title="选择支行">
        <van-cell title="华夏银行建国支行" is-link to="/JG_class" />
        <van-cell title="华夏银行江城支行" is-link to="index" />
        <van-cell title="华夏银行城北支行" is-link to="index" />
      </van-tab>
      <van-tab title="分类">
        <van-card
  num="2"
  price="2.00"
  desc="描述信息"  
  title="商品标题"
  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
/>
<van-card
  num="2"
  price="2.00"
  desc="描述信息"  
  title="商品标题"
  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
/>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>

export default {
   data() {
    return {
      active: 2
    };
  }
};
</script>

<style scoped>
.van-nav-bar {
  background: #000;
  height: 50px;
}
.van-nav-bar__text,
.van-nav-bar .van-icon,
.van-nav-bar__title.van-ellipsis {
  color: #fff;
}
.van-nav-bar__title.van-ellipsis {
  text-align: center;
  padding-top: 5px;
  font-size: 16px;
}
</style>