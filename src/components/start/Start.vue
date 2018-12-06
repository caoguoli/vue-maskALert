<template>
  <div id="start">
    <header>
      <ul class="circle">
        <li class="one"></li>
        <li class="two"></li>
        <li class="three"></li>
      </ul>
      <div id="header-con">
        <ul class="con flex-con">
          <li class="font">
            <div class="titile">剩余时间</div>
            <div class="val">00:40</div>
          </li>
          <li class="hr"></li>
          <li class="font">
            <div class="titile">温度℃</div>
            <div class="val">80</div>
          </li>
          <div class="hr"></div>
          <li class="font">
            <div class="val">待机中</div>
          </li>
        </ul>

        <div id="header-btn" class="flex-con">菜谱的名字</div>
      </div>
    </header>
    <section>
      <div class="sect-box">
        <span>云食谱</span>
        <img src="../../assets/imgs/arrow_gray.png" alt class="ico">
      </div>
      <div class="sect-box">
        <span>我的食谱</span>
        <img src="../../assets/imgs/arrow_gray.png" alt class="ico">
      </div>

      <div class="sect-box">
        <span>模式</span>
        <img src="../../assets/imgs/arrow_gray.png" alt class="ico">
      </div>
      <ul class="sect-model">
        <li class="flex-con sel" @click="selModelFn(1)">蔬果</li>
        <li class="flex-con" @click="selModelFn(2)">蔬果</li>
        <li class="flex-con" @click="selModelFn(3)">蔬果</li>
      </ul>
      <!-- <v-timepicker :hour="10" :min="30" rotate_effect="false" @change="getTimes"></v-timepicker> -->
      <div id></div>
    </section>

    <!-- <v-show></v-show> -->
    <!-- 遮罩弹框 -->
    <public v-if="alertDara" 
    :alertDara="alertDara" @alertBack="alertBackFn" @alertSure="alertSureFn"></public>
  </div>
</template>

<script>
import Public from "@/components/public/Public";
export default {
  name: "Start",
  data() {
    return {
      alertDara: ""
    };
  },
  /* 注册引入的组件实例 */
  components: {
    Public
  },

  /* 拼接需要展示的数据，只在初始化时被调用；是在HTML DOM加载后马上执行的，如赋值；走缓存 ！*/
  /* 初始化数据、走缓存 */
  computed: {},

  /* 事件 */
  methods: {
    // getTimes:function(data){
    //   console.log("33333333333")
    //   console.log(data)
    // }

    selModelFn: function(v) {
      console.log(v);
      // 弹框样式
      var alertDara = {
        title: "启动五谷模式",
        titleColor: "pink",
        content: "设备已经是启动模式，为了保障安全，请在设备机上点击启动按钮。",
        contentColor: "gray",
        btn: ["返回", ""],
        btnColor: ["", ""]
      };

      this.alertDara = alertDara;
    },
    alertBackFn: function(data) {
      console.log("333333333333333",data)
    },
    alertSureFn:function(data){
      console.log("1111111111111111",data)
    }
  },

  /* 观察Vue实例上的数据变动 */
  watch: {
  },

  /*已经创建完成：*/
  create: function() {
    console.log(this.alertDara)
  },

  /* 开始 loading 事件 */
  beforeCreate: function() {},

  /* 结束loading，一些初始化 */
  created: function() {},

  /* 后端 请求数据 */
  mounted: function() {},
};
</script>

<style>
@import "./start.css";
</style>