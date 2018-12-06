<template>
  <div id="public">

    <!-- alert -->
    <div id="alert" class="flex-con" v-if="alertDara"> 
      <div class="con">
        <div class="title" :style="{color:alertDara.titleColor}">{{alertDara.title}}</div>
        <div class="content" :style="{color:alertDara.contentColor}">{{alertDara.content}}</div>
        <div class="btn">
          <div
            class="btn-back flex-con"
            v-if="alertDara.btn[0]"
            :style="{color:alertDara.btnColor[0]}"
            @click="alertBackFn"
          >{{alertDara.btn[0]}}</div>
          <div
            class="btn-sure flex-con"
            v-if="alertDara.btn[1]"
            :style="{color:alertDara.btnColor[1]}"
            @click="alertSureFn"
          >{{alertDara.btn[1]}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 挂载
  name: "Public",
  props:['alertDara'],
  /* 方法规范写法：解决传址问题 */
  data() {
    return {
    };
  },
  /* 事件 */
  methods: {
    alertBackFn:function(){
      this.$emit('alertBack', '这是子组件传递的消息');
    },
    alertSureFn:function(){

      this.$emit('alertBack', '这是子组件传递的消息');
    }
  },

  /*已经创建完成：*/
  create: function() {},

  /* 开始 loading 事件 */
  beforeCreate: function() {},

  /* 结束loading，一些初始化 */
  created: function() {},

  /* 后端 请求数据 */
  mounted: function() {}
};
</script>

<style>
@import "./public.css";
</style>