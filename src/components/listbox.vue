<template>
  <div class="listbox">
    <div v-for="item in pnumdata" :key="item">
      <!-- <div class="vip">
        <i class="el-icon-star-on"> 免费</i>
      </div> -->
      <div class="boximg">
        <div class="zoom">
          <a href="javascript:;">
            <img :src="imgsrc" alt="" class="">
          </a>
        </div>
      </div>
      <p>标题字数标题字数标题字数标题字数标题</p>
    </div>
    <div shadow="hover" class="boximg">
      <a href="javascript:;">
        <img :src="imgmore" alt="" class="">
      </a>
    </div>
  </div>
</template>

<script scoped>
export default {
  props: {
    pnum: {
      type: Number,
      default: 11
    }
  },
  data() {
    return {
      /* eslint-disable no-undef */
      // imgsrc: Mock.Random.image("200x320", Mock.mock("@color")),
      imgsrc: Mock.Random.image("240x384", "#cccccc"),
      imgmore: Mock.Random.image("240x135", "#67C23A", "#FFFFFF", "More！"),
      /* eslint-enable no-undef */
      isloading: true,
      pnumdata: this.pnum
      // listarr: []
    };
  },
  mounted() {},
  methods: {},
  components: {}
};
</script>

<style scoped>
.listbox {
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.listbox > div {
  /* float: left; */
  margin: 20px 15px;
  overflow: hidden;
}
.listbox p {
  color: gray;
  font-size: 13px;
}
.boximg {
  width: 240px;
  height: 135px;
  overflow: hidden;
}
.zoom{
  width: 240px;
  height: 135px;
  overflow: hidden;
  transition: height 0.3s ease-in;
  -webkit-transition:height 0.3s ease-in;
  position: absolute;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);      
  
}
.zoom:hover {
  height: 384px;  
  z-index: 2;
}
.vip{
   position:absolute;
   z-index:1;
}
</style>
