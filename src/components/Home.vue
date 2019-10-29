<template>
  <div>
    <van-nav-bar title="社区支行" left-text="返回" left-arrow>
  <van-icon name="ellipsis" slot="right" />
</van-nav-bar>
    <!-- 下拉刷新容器 -->
    <div class="contaniner">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-list v-model="loading" :finished="finished" :immediate-check='false' finished-text="没有更多了" @load="onLoad">
          <van-cell v-for="(item,index) in branchList" :key="index">
            <div class="bank_name">{{item.name}}</div>
            <div class="bank_info">
            <img :src="item.imgSrc" class="bank_bg">
            <div class="address"><span>{{item.address}}</span></div>
            </div>
          </van-cell>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      branchList: [],
      isLoading: false,
      loading: false,
      finished: false
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      var that = this;
      this.$ajax.jsonData("branch").then(res => {
        that.branchList = res;
        console.log(that.branchList);
      });
    },
    onRefresh() {
      setTimeout(() => {
        // this.$toast("刷新成功");
        this.getData();
        this.isLoading = false;
        this.finished = false;
      }, 500);
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        this.branchList = this.branchList.concat(this.branchList);
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.branchList.length >= 35) {
          this.finished = true;
        }
      }, 500);
    }
  }
};
</script>
<style scoped>
/* 导航栏 */
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
.van-pull-refresh {
  min-height: calc(100vh - 96px);
}
/* 列表 */
.van-list >>> .van-cell{
  padding: 0 15px;
}
.van-cell .bank_name {
  color: #7c7d81;
  padding-top: 10px;
  padding-bottom: 5px;
}
.van-cell  .bank_info{
    width: 100%;
    height: 166px;
    position: relative;
}
.van-cell  .bank_bg{
    width: 100%;
    height: 166px;
    position: absolute;
}
.van-cell__value--alone {
    color: #323233;
    text-align: left;
    }
.van-cell{
  margin-top: 10px;
  padding: 1px
}
.address{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8));
    color: #fff;
}
.address span{
  padding-left: 10px;
}
</style>