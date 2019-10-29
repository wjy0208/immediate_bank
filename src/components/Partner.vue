<template>
  <div>
    <van-nav-bar title="合作商户" left-text="返回" left-arrow>
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>
    <van-tabs v-model="active">
      <van-tab title="选择支行">
        <van-cell title="华夏银行建国支行" is-link to="/JGclass" />
        <van-cell title="华夏银行江城支行" is-link to="index" />
        <van-cell title="华夏银行城北支行" is-link to="index" />
      </van-tab>
      <van-tab title="分类">
        <van-card
          num="2"
          price="2.00"
          desc="影子足以击败你，影子足以击败你，"
          title="普通汽车"
          thumb="http://img006.hc360.cn/hb/IeK784b8204893dAA5EdE302FdbAF2E6432.jpg"
        /><van-card
  num="2"
  price="2.00"
  desc="看，那有只猴子"  
  title="口腔套餐"
  thumb="http://img006.hc360.cn/hb/IeK784b8204893dAA5EdE302FdbAF2E6432.jpg"
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
.van-card__bottom {
    line-height: 20px;
    position: absolute;
    bottom: 20px;
}
.van-card__price {
    display: inline-block;
    color: #7d7e80;
    font-weight: 500;
}
.van-card__num {
 position: absolute;   
     color: #7d7e80;
}
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