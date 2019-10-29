<template>
  <div>
    <van-nav-bar title="社区支行详情页" left-text="返回" left-arrow>
      <van-icon name="ellipsis" slot="right" />
    </van-nav-bar>
    <div style="padding-bottom:50px;">
      <van-row @load="onLoad">
        <van-col span="24">
          <van-swipe :autoplay="5000" :show-indicators="false">
            <van-swipe-item v-for="(item,index) in HxList" :key="index">
              <div class="bank_info">
                <img :src="item.imgSrc" class="bank_bg" />
                <div class="address">
                  <p>
                    {{item.name}}
                    <span>{{item.address}}</span>
                  </p>
                </div>
              </div>
            </van-swipe-item>
          </van-swipe>
        </van-col>
        <van-col span="24" style="background-color:#F7F7F7">
          <div class="bank_name">
            <p>特色服务</p>
          </div>
          <div class="bank_name1">
            <p>优惠不断,惊喜不断</p>
          </div>
        </van-col>
        <van-row>
          <van-col span="10">
            <div style="padding:10px">
              <p style="color:#FB77BE;font-weight: 600;">七夕有礼</p>
              <span class="small_yy">花积分兑换浪漫</span>
            </div>
            <div>
              <img
                src="../images/pic_3 (1).jpg"
                alt
                style="width: 116px;padding: 25px 15px 7px 15px;"
              />
            </div>
          </van-col>
          <van-col span="14">
            <div>
              <div class="bank_name1">
                <p style="color:#7ACB59;font-weight: 600;font-size:12px;">境外自由行</p>
                <span class="small_yy">精选路线 999元气</span>
              </div>
              <div>
                <img src="../images/pic_3 (6).jpg" alt style="width: 76px;padding-left: 40px;" />
              </div>
            </div>
            <div style="display:flex;margin-top: 11px;">
              <div style="flex:1">
                <div>
                  <p style="color:#000;font-weight: 600;">积分兑换</p>
                  <span class="small_yy">生日当日优惠兑换</span>
                </div>
                <div>
                  <img src="../images/pic_3 (3).jpg" alt style="width: 96px;padding-top: 15px;" />
                </div>
              </div>
              <div style="flex:1">
                <div>
                  <p style="color:#6892E0;font-weight: 600;">推荐办卡</p>
                  <span class="small_yy">好礼送不停</span>
                </div>
                <div>
                  <img
                    src="../images/pic_3 (2).jpg"
                    alt
                    style="width: 63px;padding: 10px 10px 10px 30px;"
                  />
                </div>
              </div>
            </div>
          </van-col>
        </van-row>
        <van-col span="24" style="background-color:#F7F7F7">
          <div class="bank_name">
            <p>特约商户</p>
          </div>
          <div class="bank_name1">
            <p>让你的生活更精彩</p>
          </div>
        </van-col>
        <van-col span="24">
          <div style="display:flex;">
            <div style="flex:1;">
              <div style="padding: 10px 10px 0px 10px;">
                <p style="color:#2EDED3;font-weight: 600;">快递业务积分兑换</p>
              </div>
              <div>
                <img src="../images/pic_3 (5).jpg" alt style="width: 123px;padding-left: 37px;" />
              </div>
            </div>
            <div style="flex:1">
              <div style="padding: 10px 10px 0px 10px;">
                <p style="color:#7ACB59;font-weight: 600;">华彩人生抢兑换</p>
              </div>
              <div>
                <img
                  src="../images/pic_3 (4).jpg"
                  alt
                  style="width: 71px;padding: 0px 10px 10px 80px;"
                />
              </div>
            </div>
          </div>
        </van-col>
        <van-col span="24" style="background-color:#F7F7F7">
          <div class="bank_name">
            <p>特色服务</p>
          </div>
          <div class="bank_name1">
            <p>优惠不断,惊喜不断</p>
          </div>
        </van-col>
        <van-row>
          <van-col span="10">
            <div style="padding:10px">
              <p style="color:#FB77BE;font-weight: 600;">七夕有礼</p>
              <span class="small_yy">花积分兑换浪漫</span>
            </div>
            <div>
              <img
                src="../images/pic_3 (1).jpg"
                alt
                style="width: 116px;padding: 25px 15px 7px 15px;"
              />
            </div>
          </van-col>
          <van-col span="14">
            <div>
              <div class="bank_name1">
                <p style="color:#7ACB59;font-weight: 600;font-size:12px;">境外自由行</p>
                <span class="small_yy">精选路线 999元气</span>
              </div>
              <div>
                <img src="../images/pic_3 (6).jpg" alt style="width: 86px;padding-left: 40px;" />
              </div>
            </div>
            <div style="display:flex;">
              <div style="flex:1">
                <div>
                  <p style="color:#000;font-weight: 600;">积分兑换</p>
                  <span class="small_yy">生日当日优惠兑换</span>
                </div>
                <div>
                  <img src="../images/pic_3 (3).jpg" alt style="width: 96px;padding-top: 15px;" />
                </div>
              </div>
              <div style="flex:1">
                <div>
                  <p style="color:#6892E0;font-weight: 600;">推荐办卡</p>
                  <span class="small_yy">好礼送不停</span>
                </div>
                <div>
                  <img
                    src="../images/pic_3 (2).jpg"
                    alt
                    style="width: 63px;padding: 10px 10px 10px 30px;"
                  />
                </div>
              </div>
            </div>
          </van-col>
        </van-row>
      </van-row>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe).use(SwipeItem);
export default {
  data() {
    return {
      HxList: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      var that = this;
      this.$ajax.jsonData("branch").then(res => {
        that.HxList = res;
        console.log(that.HxList);
      });
    },
    onRefresh() {
      setTimeout(() => {
        // this.$toast("刷新成功");
        this.getData();
      }, 500);
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        this.HxList = this.HxList.concat(this.HxList);
      }, 500);
    }
  }
};
</script>

<style scoped>
.bank_name {
  float: left;
}
.bank_name p {
  padding: 10px;
  font-weight: 700;
  color: #d93135;
  font-size: 16px;
}
.bank_name1 {
  float: left;
}
.small_yy {
  font-size: 10px;
}
.bank_name1 p {
  padding-top: 15px;
  font-size: 11px;
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
.van-swipe-item .bank_info {
  width: 100%;
  height: 175px;
  position: relative;
}
.van-swipe-item .bank_bg {
  width: 100%;
  height: 166px;
  position: absolute;
}
.address {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  line-height: 65px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  color: #fff;
}
.address span {
  padding-left: 10px;
}
.address p {
  padding-left: 10px;
}
</style>