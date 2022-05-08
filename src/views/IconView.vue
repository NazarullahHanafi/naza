<template>
  <section
    class="hero-area overlay"
    style="background-image: url('assets/img/hero-area.jpg')"
  >
    <div class="block">
      <div class="video-button">
        <i class="tf-ion-play"></i>
      </div>
      <h1>Al Quran-ul-Kareem</h1>
      <h2 class="a1">
        Alquranul karim merupakan firman Allah dan wahyu yang diberikan kepada
        Nabi Muhammad Shallallahu alaihi wa Sallam, yang apabila kita membacanya
        akan menjadi sebuah nilai ibadah yang bernilai kebaikan untuk kita
        sendiri yang membacanya.
      </h2>
    </div>
  </section>
  <section class="section about-2 padding-0 bg-dark mt-2" id="about">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 padding-0">
          <img class="img-responsive" src="assets/img/a1.jpg" alt="" />
        </div>
        <div class="col-md-6">
          <div class="content-block">
            <h2 class="s1 text-white">Ar-Rum</h2>
            <p v-for="item in list" v-bind:key="item.id" class="s2 text-white">
              {{ item.text }}
            </p>
            <div class="row">
              <div class="col-md-6">
                <div class="media">
                  <div class="pull-left">
                    <i class="tf-circle-compass"></i>
                  </div>
                  <div class="media-body">
                    <h4 class="media-heading text-white">Diturunkan Di</h4>
                    <p class="t1 text-white">Makkah</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="media">
                  <div class="pull-left">
                    <i class="tf-hotairballoon"></i>
                  </div>
                  <div class="media-body">
                    <h4 class="media-heading text-white">Artinya</h4>
                    <p class="b1 text-white">Bangsa Romawi (Bizantium)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "IconView",
  data() {
    return { list: null };
  },
  mounted() {
    axios
      .get("https://api.quran.com/api/v4/chapters/30/info?language=id")
      .then((response) => {
        this.list = response.data;
        console.warn(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally({});
  },
};
</script>

<style>
.hero-area {
  background-size: inherit;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.hero-area .block {
  text-align: center;
  z-index: 99;
}

.hero-area .block .video-button a {
  background: #fff;
  display: inline-block;
  height: 60px;
  width: 60px;
  border-radius: 50px;
  line-height: 60px;
  font-size: 20px;
  margin-left: 3px;
  color: #57cbcc;
}

.hero-area .block h1 {
  font-size: 90px;
  color: deepskyblue;
  text-transform: capitalize;
  font-weight: 700;
  margin-top: 150px;
  margin-bottom: 650px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

@media (max-width: 480px) {
  .hero-area .block h1 {
    font-size: 60px;
  }
}

.hero-area .block h2 {
  color: rgb(128, 12, 236);
  font-size: 40px;
  width: 100%;
  font-style: italic;
  font-variant: initial;
  font-display: block;
  font-weight: bold;
  margin-bottom: 80px;
  font-family: sans-serif;
}

.hero-area .block .btn-transparent {
  margin-top: 40px;
  border-color: #fff;
  padding: 14px 50px;
  font-size: 18px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
}
@media (max-width: 480px) {
  .section {
    padding: 50px 0;
  }
}

@media (max-width: 768px) {
  .section {
    padding: 50px 0;
  }
}
.t1 {
  color: white;
}
.s1 {
  margin-top: 200px;
  font-weight: bold;
  font-family: monospace;
}
</style>
