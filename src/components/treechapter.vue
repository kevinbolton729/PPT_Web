<template>
  <div class="tree">
    <div v-for="(items,key) in gradearr" :key="key">
      <h5>{{key}}</h5>
      <p v-for=" (item,key) in items " :key="key ">
        <a href="#">
          <div>
            <div>{{item}}</div>
            <span>
              <i class="el-icon-arrow-right"></i>
            </span>
          </div>
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gradearr: {
        幼儿园: ["幼儿园"],
        小学: ["一年级", "二年级", "三年级", "四年级", "五年级", "六年级"],
        初中: ["七年级", "八年级", "九年级"],
        高中: ["高一年级", "高二年级", "高三年级"]
      }
    };
  },
  computed: {}
};
</script>

<style scoped>
.tree {
  padding: 10px 20px;
  margin-top: 20px;
  background-color: rgba(250, 250, 250, 1);
}
p {
  font-size: 14px;
  margin: 0;
  border-bottom: 1px dashed rgb(220, 220, 220);
}
p:last-child {
  border-bottom: 0;
}
p a {
  /* margin-left: 14px; */
  display: block;
  color: black;
  padding: 8px 10px;
  transition: all 0.5s;
  /* border-radius: 8px; */
}
p a:hover {
  background-color: #409eff;
  color: white;
}
div + span {
  float: right;
  margin-top: -20px;
}

h5 {
  text-align: center;
  font-size: 16px;
  padding: 10px 0;
  margin: 0;
  border-bottom: 1px dashed rgb(220, 220, 220);
}
</style>