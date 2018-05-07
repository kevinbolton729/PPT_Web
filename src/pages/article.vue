<template>
  <el-row class="article">

    <el-col :span="3">
      <Treechapter />
    </el-col>
    <el-col :span="15">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      </el-breadcrumb>
      <h2>{{pptinfo.title}}</h2>
      <el-row>
        <img :src="pptshow" alt="" class="">
        <img :src="pptshow" alt="" class="">
      </el-row>
    </el-col>
    <el-col :span="6">
      <Info :info="pptinfo" />
      <Rank />
    </el-col>
  </el-row>
</template>

<script>
import Info from "../components/info";
import Rank from "../components/rank";
import Treechapter from "../components/treechapter";
import Paginations from "../components/paginations";
export default {
  name: "home",
  data() {
    return {
      radio1: "全部教材",
      pptshow: Mock.Random.image("800x450", "#eeeeee", "#FFFFFF"),
      pptinfo: {
        title: Mock.mock("@ctitle(20, 20)"),
        pid: "0000000",
        grade: "九年级",
        subject: "语文",
        edition: "人教版",
        file: "pptx",
        pagenum: "999",
        size: "999",
        ratio: "16:9",
        vip: 1
      }
    };
  },
  components: {
    Info,
    Rank,
    Paginations,
    Treechapter
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
  text-align: center;
  margin: 0 20px;
  padding: 20px 0;
  border-bottom: 1px solid rgb(222, 222, 222);
}
.article {
  max-width: 1650px;
  margin: auto;
  /* border: 1px solid gray; */
}
.el-breadcrumb {
  padding: 20px 0 0 20px;
}
.editions {
  text-align: center;
  padding: 20px 0;
}
.el-col > .el-row {
  padding: 20px;
  text-align: center;
}
img {
  max-width: 100%;
  display: block;
  margin: auto;
  /* padding: 20px; */
}
</style>
