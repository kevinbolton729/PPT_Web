<template>
  <el-row>
    <!-- <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    </el-breadcrumb> -->
    <el-col :span="3">
      <Treechapter />
    </el-col>
    <el-col :span="16">
      <h2>九年级：语文</h2>
      <el-row class="editions">
        <el-radio-group v-model="radio1">
          <el-radio-button label="全部教材"></el-radio-button>
          <el-radio-button label="人教版"></el-radio-button>
          <el-radio-button label="苏教版"></el-radio-button>
          <el-radio-button label="其他教材版本"></el-radio-button>
        </el-radio-group>
      </el-row>
      <Listbox />
      <Paginations />
    </el-col>
    <el-col :span="5">
      <Rank />
    </el-col>
  </el-row>
</template>

<script>
import Listbox from "../components/listbox";
import Rank from "../components/rank";
import Treechapter from "../components/treechapter";
import Paginations from "../components/paginations";
export default {
  name: "home",
  data() {
    return { radio1: "全部教材" };
  },
  components: {
    Listbox,
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
  margin-top: 30px;
}
h2 > span {
  font-size: 16px;
  display: block;
}
.el-row {
  max-width: 1650px;
  margin: auto;
}
.el-breadcrumb {
  padding: 20px 0 0 60px;
}
.editions {
  text-align: center;
  padding: 20px 0;
}
</style>
