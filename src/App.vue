<template>
  <div id="app">
    <Top class="w1200" />
    <router-view />
    <Footer />
    <!-- <img src="./assets/logo.png"> -->
  </div>
</template>

<script>
import Top from "./components/top";
import Footer from "./components/footer";
export default {
  name: "App",
  components: {
    Top,
    Footer
  }
};
</script>

<style>
html,
body,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Microsoft YaHei";
}

html,
body {
  margin: 0 !important;
  overflow-x: hidden;
}
a {
  text-decoration: none;
  color: gray;
}
#app {
  min-width: 1200px !important;
  padding-top: 60px;
}
.w1200 {
  min-width: 1200px !important;
}
</style>
