<template>
  <section
    class="page-header services-header"
    data-parallax="scroll"
    style="background-image: url('assets/img/portfolio-folding-img.jpg')"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="text-center">Ayat Kursi.<br /></h1>
          <h4 class="kursi">{{ list }}</h4>
        </div>
      </div>
    </div>
  </section>
  <section class="services">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="title text-center">
            <h2 class="service-description">Manfaat Membaca Ayat Kursi</h2>
          </div>
        </div>
        <div class="col-md-4">
          <div class="service-item text-center">
            <div class="services-icon">
              <i class="tf-mobile"></i>
            </div>
            <h4 class="service-title">Manfaat 1</h4>
            <p class="service-description">
              Dijaga Allah SWT dari berbagai godaan setan, kejahatan manusia,
              binatang buas yang bersifat negatif bagi diri kita (membahayakan),
              perlindungan untuk keluarga dan harta benda.
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="service-item text-center">
            <div class="services-icon">
              <i class="tf-telescope"></i>
            </div>
            <h4 class="service-title">Manfaat 2</h4>
            <p class="service-description">
              Allah akan membukakan dadanya untuk pintu hikmah, dimudahkan
              rezekinya, dinaikkan derajatnya oleh Allah di akhirat dan di
              dunia.
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="service-item text-center">
            <div class="services-icon">
              <i class="tf-presentation"></i>
            </div>
            <h4 class="service-title">Manfaat 3</h4>
            <p class="service-description">
              Akan diberikan pengaruh sehingga semua orang akan menghormatinya
              dan dirinya juga akan dijaga dengan izin Allah dari segala bencana
              yang akan menimpanya hari itu.
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="service-item text-center">
            <div class="services-icon">
              <i class="tf-strategy"></i>
            </div>
            <h4 class="service-title">Manfaat 4</h4>
            <p class="service-description">
              Syeikh abu Abbas menerangkan bahwa bagi orang yang membaca Ayat
              Kursi sebanyak 50 kali dan meniupkannya ke air hujan lalu
              meminumnya, maka Allah akan memudahkan akal fikiran dan ilmu
              pengetahuannya.
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="service-item text-center">
            <div class="services-icon">
              <i class="tf-anchor2"></i>
            </div>
            <h4 class="service-title">Manfaat 5</h4>
            <p class="service-description">
              Seperti dalam sabda Rasulullah, “barang siapa yang pulang ke
              rumahnya dan membaca Ayat Kursi, Allah akan menghilangkan segala
              kefakiran di depan matanya.”
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="service-item text-center">
            <div class="services-icon">
              <i class="tf-globe"></i>
            </div>
            <h4 class="service-title">Manfaat 6</h4>
            <p class="service-description">
              Bagi orang yang membaca Ayat Kursi saat perjalanan ataupun saat
              ingin memulai perjalanan, maka Allah akan memudahkan perjalanannya
              dan akan dilindungi selama perjalanannya.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "MeView",
  data() {
    return { list: undefined };
  },
  mounted() {
    axios
      .get("https://api.quran.com/api/v4/quran/verses/imlaei?chapter_number=2")
      .then((response) => {
        this.list = response.data.verses[254].text_imlaei;
        console.warn(response.data.verses[254].text_imlaei);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally({});
  },
};
</script>

<style>
.services {
  background: #171717;
  padding: 53px 0 9px;
}

.service-item {
  padding: 0 10px 26px;
  margin-bottom: 26px;
  position: relative;
}

.service-item:before {
  content: "";
  position: absolute;
  top: 35px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background: #facd8a;
  opacity: 0;
  transition: 0.5s;
}

.service-item:hover:before {
  opacity: 1;
}

.service-item:hover .services-icon {
  background: #facd8a;
  box-shadow: 0px 0px 0px 14px #191919;
}

.service-item:hover .services-icon i {
  color: #171717;
}

.service-item:hover .service-title:before {
  background: #212121;
}

.service-item:hover .service-title,
.service-item:hover .service-description {
  color: #212121;
}

.service-title {
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  padding: 0 0 15px;
  margin: 0 0 20px;
  position: relative;
  color: #fff;
  letter-spacing: 1px;
  transition: 0.5s;
  color: #facd8a;
}

.service-title:before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  height: 3px;
  width: 75px;
  background: #facd8a;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}

.services-icon {
  width: 68px;
  height: 68px;
  background: #111111;
  margin: 0 auto;
  padding: 15px 0;
  border-radius: 100%;
  text-align: center;
  margin-bottom: 30px;
  transition: 0.5s;
  position: relative;
}

.services-icon i {
  font-size: 35px;
  line-height: 1;
}

.service-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 24px;
  position: relative;
}
h1,
h2,
h3 {
  font-family: "Playfair Display", serif;
  color: #facd8a;
}

h1,
h2 {
  font-weight: 700;
}

h1 {
  font-size: 65px;
}

h2 {
  font-size: 40px;
  margin-top: 20px;
}

h3 {
  font-size: 22px;
}

p {
  font-family: "Roboto", sans-serif;
}
.page-header {
  padding: 200px 0;
  margin: 0;
  border-bottom: 0;
}
.kursi {
  font-family: fantasy;
  color: white;
  font-size: 80px;
}
</style>
