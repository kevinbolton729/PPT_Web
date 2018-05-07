<template>
  <div class="info">
    <el-row>
      <h4>详细信息：</h4>
      <el-col :span="24">名称：{{info.title}}</el-col>
      <el-col :span="12">编号：{{info.pid}}</el-col>
      <el-col :span="12">状态：
        <el-tag v-if="info.vip" type="danger" size="small">会员下载</el-tag>
        <el-tag v-else type="success" size="small">免费下载</el-tag>
      </el-col>
      <el-col :span="12">年级：{{info.grade}}</el-col>
      <el-col :span="12">学科：{{info.subject}}</el-col>
      <el-col :span="12">教材：{{info.edition}}</el-col>
      <el-col :span="12">格式：{{info.file}}</el-col>
      <el-col :span="12">页数：{{info.pagenum}}页</el-col>
      <el-col :span="12">大小：{{info.size}}M</el-col>
      <el-col :span="12">比例：{{info.ratio}}</el-col>
      <el-col :span="12"></el-col>
      <el-button type="success">高速下载</el-button>
    </el-row>
    <el-row>
      <h4>会员权益：</h4>
      <!-- <el-col>成为会员，享受全站PPT高速下载</el-col>
      <el-col>成为会员，享受全站PPT高速下载</el-col>
      <el-col>成为会员，享受全站PPT高速下载</el-col>
      <el-col>成为会员，享受全站PPT高速下载</el-col> -->
      <ol>
        <li v-for="item in list" :key="item.id">{{item}}</li>
      </ol>
      <el-button type="danger">立即成为会员</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: function() {
        return {
          title: "--",
          pid: "--",
          grade: "--",
          subject: "--",
          edition: "--",
          file: "--",
          pagenum: "--",
          size: "--",
          ratio: "--",
          vip: 0
        };
      }
    }
  },
  data() {
    return {
      list: [
        "高速下载，不限速",
        "免费课件PPT不限量下载",
        "每日海量精品课件PPT更新",
        "每日可下载10个会员专享PPT"
      ]
    };
  },
  methods: {},
  components: {}
};
</script>

<style scoped>
.info {
  padding: 30px;
  margin: 30px 30px 0 0;
  background-color: rgba(250, 250, 250, 1);
}
.info h4 {
  margin: 10px 0;
}
.el-col {
  font-size: 14px;
  line-height: 24px;
  color: gray;
  margin: 3px 0 5px 0;
}
.el-button {
  margin: 20px 0;
  width: 100%;
}
ol {
  /* list-style-type: none; */
  font-size: 14px;
  color: gray;
  padding: 0 30px;
}
ol li {
  padding: 6px 16px;
  /* border-bottom: 1px dashed #ddd; */
}
ol li:last-child {
  border-bottom: none;
  padding-bottom: 0;
}
</style>