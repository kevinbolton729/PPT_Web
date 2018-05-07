<template>
  <el-row class="yo-card">
    <el-col :span="16" :offset="2">
      <div>
        <img :src="logo" :style="logostyle">
      </div>
      <el-button type="primary" v-for="(nav,key) in navs" class="" :key="key" @click="selected(nav)">
        {{nav.name}}
      </el-button>
      <el-button type="success" v-popover:popoverlogo>
        <i class="el-icon-circle-check-outline"></i> 快捷登录</el-button>
      <el-popover ref="popoverlogo" placement="bottom" width="205" trigger="hover">
        <el-button type="success">微信登录</el-button>
        <el-button type="primary">QQ登录</el-button>
      </el-popover>
    </el-col>
    <el-col :span="6">
      <el-input placeholder="请输入内容" class="input-with-select" clearable>
        <el-button slot="append" icon="el-icon-search" style="">搜索</el-button>
      </el-input>
    </el-col>
  </el-row>
</template>

<script>
import logoimg from "@/assets/logo.png"; // 默认logo图
export default {
  props: {
    // 传logo地址
    logo: {
      type: String,
      default: logoimg
    }
  },
  data() {
    return {
      logostyle: {
        // logo图片样式
        width: "100px",
        position: "absolute",
        margin: "-10px 0 0 10px",
        left: 0
      },
      navs: [
        {
          name: "首 页",
          path: "/"
        },
        {
          name: "link 2",
          path: "/list"
        },
        {
          name: "link 3",
          path: "/article"
        }
      ],
      activeName: ""
    };
  },
  methods: {
    selected(prop) {
      // console.info(prop.path);
      this.activeName = prop;
      this.$router.push(prop.path);
    }
  }
};
</script>

<style scoped>
.yo-card {
  position: fixed;
  width: 100%;
  background-color: rgba(250, 250, 250, 0.98);
  padding: 10px 20px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 99;
  top: 0;
}
</style>