<template>
    <el-pagination background layout="prev, pager, next,jumper" :total="1000">
    </el-pagination>
</template>

<script>
export default {
  props: {}
};
</script>

<style scoped>
.el-pagination {
  text-align: center;
  padding: 40px 0;
}
</style>