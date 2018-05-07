<template>
  <div>
    <h2>热门下载 Top10：</h2>
    <ol>
      <li v-for="(item,key) in list" :key="key">
        <b>{{key+1}}. </b>
        <a href="javascript:;" :title="item">{{item}}</a>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        "口语交际：用多大的声音口语交际：用多大的",
        "种一片太阳花种一片太阳花种一片太阳花",
        "三月桃花水三月桃花水三月桃花水三月桃花水",
        "假如没有灰尘假如没有灰尘假如没有灰尘",
        "圆明园的毁灭圆明园的毁灭圆明园的毁灭",
        "青山处处埋忠骨青山处处埋忠骨青山处处埋忠",
        "狼牙山五壮士",
        "最后一分钟",
        "小桥流水人家",
        "小苗与大树的对话"
      ]
    };
  }
};
</script>

<style scoped>
h2 {
  padding: 20px 0 0 20px;
}
ol {
  /* list-style-type: none; */
  font-size: 14px;
  color: gray;
  padding: 0 30px 0 0;
}
ol li {
  padding: 15px 16px;
  /* border-bottom: 1px dashed #ddd; */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
ol li:nth-child(odd) {
  background-color: rgb(250, 250, 250);
}
ol li:last-child {
  border-bottom: none;
}
</style>