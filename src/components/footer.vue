<template>
    <el-row>
        <el-col :span="16" :offset="4" :gutter="20">
            <div>
                © 2017 XXXXXXXX | 京ICP备88888888号 | 京公网安备88888888888888号
            </div>
            <p>感谢每一个你</p>
        </el-col>
    </el-row>
</template>

<script>
export default {
  props: {}
};
</script>

<style scoped>
.el-row {
  border-top: 1px solid gray;
  background-color: #000000;
  padding: 40px 0;
}
.el-col {
  font-size: 14px;
  color: rgb(175, 175, 175);
  text-align: center;
}
</style>