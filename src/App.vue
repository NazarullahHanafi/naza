<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->

  <div class="wrapper">
    <div class="sidebar" data-color="black" data-active-color="danger">
      <div class="logo">
        <a class="simple-text logo-mini">
          <div class="logo-image-small">
            <img src="assets/img/logo-small.png" />
          </div>
          <!-- <p>CT</p> -->
        </a>
        <a class="simple-text logo-normal" style="color: aquamarine">
          Nazarullah
          <!-- <div class="logo-image-big">
            <img src="assets/img/logo-big.png">
          </div> -->
        </a>
      </div>
      <SideView />
    </div>
    <div class="main-panel">
      <NavView />
      <router-view />
      <TableVie />
      <FooterView />
    </div>
  </div>
</template>

<script>
import FooterView from "./components/FooterView.vue";
import NavView from "./components/NavView.vue";
import SideView from "./components/SideView.vue";

export default {
  name: "App",
  components: {
    FooterView,
    NavView,
    SideView,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
