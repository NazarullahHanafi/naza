<template>
  <section class="masthead bg-danger text-white text-center">
    <div class="container d-flex align-items-center flex-column">
      <!-- Masthead Avatar Image-->
      <img
        class="masthead-avatar mb-5"
        src="assets/img/alquran.jpg"
        alt="..."
      />
      <!-- Masthead Heading-->
      <h1 class="masthead-heading text-uppercase mb-0">Al-Quran</h1>
      <!-- Icon Divider-->
      <div class="divider-custom divider-light">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <!-- Masthead Subheading-->
      <p class="masthead-subheading font-weight-light mb-0">
        Juz - Surah - Ayat
      </p>
    </div>
  </section>
  <section class="page-section portfolio bg-warning" id="portfolio">
    <div class="container">
      <!-- Portfolio Section Heading-->
      <h2
        class="page-section-heading text-center text-uppercase text-secondary mb-0"
      >
        Picture
      </h2>
      <!-- Icon Divider-->
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <!-- Portfolio Grid Items-->
      <div class="row justify-content-center">
        <!-- Portfolio Item 1-->
        <div class="col-md-6 col-lg-4 mb-5">
          <div
            class="portfolio-item mx-auto"
            data-bs-toggle="modal"
            data-bs-target="#portfolioModal1"
          >
            <div
              class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
            >
              <div
                class="portfolio-item-caption-content text-center text-white"
              ></div>
            </div>
            <img class="img-fluid" src="assets/img/a1.jpg" alt="..." />
          </div>
        </div>
        <!-- Portfolio Item 2-->
        <div class="col-md-6 col-lg-4 mb-5">
          <div
            class="portfolio-item mx-auto"
            data-bs-toggle="modal"
            data-bs-target="#portfolioModal2"
          >
            <div
              class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
            >
              <div
                class="portfolio-item-caption-content text-center text-white"
              ></div>
            </div>
            <img class="img-fluid" src="assets/img/a2.jpg" alt="..." />
          </div>
        </div>
        <!-- Portfolio Item 3-->
        <div class="col-md-6 col-lg-4 mb-5">
          <div
            class="portfolio-item mx-auto"
            data-bs-toggle="modal"
            data-bs-target="#portfolioModal3"
          >
            <div
              class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
            >
              <div
                class="portfolio-item-caption-content text-center text-white"
              ></div>
            </div>
            <img class="img-fluid" src="assets/img/a3.jpg" alt="..." />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- About Section-->
  <section class="page-section bg-dark text-white mb-5" id="about" text-center>
    <div class="container">
      <!-- About Section Heading-->
      <h2 class="page-section-heading text-center text-uppercase text-white">
        Surat Al-Fatihah
      </h2>
      <!-- Icon Divider-->
      <div class="divider-custom divider-light">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <!-- About Section Content-->
      <h1 class="istilah">Istilah</h1>
      <div class="container">
        <p v-for="item in list" v-bind:key="item.id" class="lead text-center">
          {{ item.short_text }}
        </p>
      </div>
      <h1 class="istilah">Pengertian</h1>
      <p v-for="item in list" v-bind:key="item.id" class="lead">
        {{ item.text }}
      </p>
    </div>
  </section>
  <!-- Copyright Section-->
  <div class="copyright py-4 text-center text-white">
    <div class="container">
      <small>Copyright &copy; Your Website 2022</small>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HobiView",
  data() {
    return { list: null };
  },
  mounted() {
    axios
      .get("https://api.quran.com/api/v4/chapters/1-114/info?language=id")
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
.masthead {
  padding-top: calc(6rem + 74px);
  padding-bottom: 6rem;
}
.masthead .masthead-heading {
  font-size: 2.75rem;
  line-height: 2.75rem;
}
.masthead .masthead-subheading {
  font-size: 1.25rem;
}
.masthead .masthead-avatar {
  width: 40rem;
  height: 30rem;
}
.lead {
  font-size: 1.25rem;
  font-weight: 300;
}
.istilah {
  font-family: fantasy;
  font-style: unset;
  font-display: block;
}
</style>
