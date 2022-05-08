<template>
  <div class="content">
    <div class="row bg-dark">
      <div class="col-md-4">
        <div class="card card-user bg-light">
          <div class="image">
            <img src="assets/img/ayat1.png" alt="..." />
          </div>
          <div class="card-body">
            <div class="author">
              <a href="#">
                <img
                  class="avatar border-gray"
                  src="assets/img/ayat2.jpg"
                  alt="..."
                />
                <h5 class="title">Al-Bayyinah</h5>
              </a>
              <p class="description">Al-Qur'an</p>
            </div>
            <p class="description text-center">Bukti Nyata <br /></p>
          </div>
          <div class="card-footer">
            <hr />
            <div class="button-container">
              <div class="row">
                <div class="col-lg-3 col-md-6 col-6 ml-auto">
                  <h5>ayat<br /><small>1-8</small></h5>
                </div>
                <div class="col-lg-4 col-md-6 col-6 ml-auto mr-auto">
                  <h5>Surat<br /><small>98</small></h5>
                </div>
                <div class="col-lg-3 mr-auto">
                  <h5>Diturunkan <br /><small>Madinah</small></h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 bg-danger">
        <div class="card card-user">
          <div class="card-header">
            <h5 class="card-title">Al-Bayyinah</h5>
          </div>
          <div class="card-body">
            <h2 v-for="item in list" v-bind:key="item.id" class="ayat1">
              {{ item.verse_key }}<br />{{ item.text_indopak }} <br />
            </h2>
          </div>
        </div>
      </div>
      <div class="col-md-4 bg-warning">
        <div class="card card-user">
          <div class="card-header">
            <h5 class="card-title">Terjemahannya</h5>
          </div>
          <div class="card-body">
            <p class="terjemahan1">
              1. Orang-orang yang kafir dari golongan Ahli Kitab dan orang-orang
              musyrik tidak akan meninggalkan (agama mereka) sampai datang
              kepada mereka bukti yang nyata,
            </p>
            <p class="terjemahan2">
              2. (yaitu) seorang Rasul dari Allah (Muhammad) yang membacakan
              lembaran-lembaran yang suci (Al-Qur'an),
            </p>
            <p class="terjemahan3">
              3. di dalamnya terdapat (isi) kitab-kitab yang lurus (benar).
            </p>
            <p class="terjemahan4">
              4. Dan tidaklah terpecah-belah orang-orang Ahli Kitab melainkan
              setelah datang kepada mereka bukti yang nyata.
            </p>
            <p class="terjemahan5">
              5. Padahal mereka hanya diperintah menyembah Allah dengan ikhlas
              menaati-Nya semata-mata karena (menjalankan) agama, dan juga agar
              melaksanakan shalat dan menunaikan zakat; dan yang demikian itulah
              agama yang lurus (benar).
            </p>
            <p class="terjemahan6">
              6. Sungguh, orang-orang yang kafir dari golongan Ahli Kitab dan
              orang-orang musyrik (akan masuk) ke neraka Jahanam; mereka kekal
              di dalamnya selama-lamanya. Mereka itu adalah sejahat-jahat
              makhluk.
            </p>
            <p class="terjemahan7">
              7. Sungguh, orang-orang yang beriman dan mengerjakan kebajikan,
              mereka itu adalah sebaik-baik makhluk.
            </p>
            <p class="terjemahan8">
              8. Balasan mereka di sisi Tuhan mereka ialah surga ’Adn yang
              mengalir di bawahnya sungai-sungai; mereka kekal di dalamnya
              selama-lamanya. Allah ridha terhadap mereka dan mereka pun ridha
              kepada-Nya. Yang demikian itu adalah (balasan) bagi orang yang
              takut kepada Tuhannya.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserView",
  data() {
    return { list: null };
  },
  mounted() {
    axios
      .get(
        "https://api.quran.com/api/v4/quran/verses/indopak?chapter_number=98"
      )
      .then((response) => {
        this.list = response.data.verses;
        console.warn(response.data.verses);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally({});
  },
};
</script>

<style>
.ayat1 {
  font-size: 30px;
  color: black;
}
.terjemahan1 {
  font-size: 20px;
}
.terjemahan2 {
  margin-top: 1px;
  font-size: 20px;
}
.terjemahan3 {
  margin-top: 1px;
  font-size: 20px;
}
.terjemahan4 {
  margin-top: 1px;
  font-size: 20px;
}
.terjemahan5 {
  margin-top: 50px;
  font-size: 15px;
  font-weight: bold;
}
.terjemahan6 {
  margin-top: 40px;
  font-size: 20px;
}
.terjemahan7 {
  margin-top: 20px;
  font-size: 20px;
}
.terjemahan8 {
  margin-top: 30px;
  font-size: 20px;
}
</style>
