<template>
  <div class="list">
    <h2>最新推荐
      <span>Today Recommend</span><br>
      <span>{{`哈哈哈 ${pageTitle}`}}</span>
    </h2>
    <Listbox />
    <h2>免费下载
      <span>Free Download</span>
    </h2>
    <Listbox />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Listbox from "../components/listbox";
export default {
  name: "home",
  data() {
    return {};
  },
  computed: mapState({
    isLoading: ({ home }) => home.isLoading,
    pageTitle: ({ home }) => home.pageTitle
  }),
  components: {
    Listbox
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
.list {
  margin: auto;
  min-width: 1200px !important;
  max-width: 1650px;
}
</style>
