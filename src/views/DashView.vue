<template>
  <div
    class="pt-table"
    style="background-image: url('assets/img/services-folding-img.jpg')"
  >
    <div class="pt-tablecell page-welcome relative">
      <a href="./" class="page-close"><i class="tf-ion-close"></i></a>

      <div class="author-image-large">
        <img src="assets/img/a2.jpg" alt="" />
      </div>

      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-6 col-lg-7">
            <div class="page-title">
              <h2>AN- <span class="danger">Naba 1-30</span></h2>
              <h3 class="artinya text-white">Artinya</h3>
              <p v-for="item in list" v-bind:key="item.id" class="re1">
                {{
                  item.words.map((element, index) => {
                    return element.translation.text;
                  })
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DashView",
  data() {
    return { list: null };
  },
  mounted() {
    axios
      .get(
        "https://api.quran.com/api/v4/verses/by_juz/30?language=id&words=true&page=1&per_page=30"
      )
      .then((response) => {
        this.list = response.data.verses;
        console.log(this.list.length);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally({});
  },
};
</script>

<style>
.author-image-large {
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 120px;
}
.pt-table {
  display: table;
  width: 100%;
}
.primary,
.link:hover {
  color: primary-color;
}
.page-title {
  margin-bottom: 75px;
  margin-top: 100px;
}
h2 {
  font-size: 68px;
  margin-bottom: 25px;
  position: relative;
  z-index: 0;
  font-weight: 900;
  text-transform: uppercase;
  color: green;
}
p {
  font-size: 16px;
}
.title-bg {
  color: rgba(light-dark, 0.07);
  font-size: 158px;
  left: 0;
  letter-spacing: 10px;
  line-height: 0.7;
  position: absolute;
  right: 0;
  margin-bottom: 200px;
  margin-top: 100px;
}
.re1 {
  color: blue;
  font-size: 20px;
  width: 100%;
}
</style>
