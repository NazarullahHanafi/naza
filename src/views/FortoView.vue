<template>
  <div class="card-box mb-30">
    <div class="pd-20">
      <h4 class="Nama">Daftar Nama Surah dalam Al-Qur'an</h4>
    </div>
    <div class="pb-20">
      <table class="data-table table hover multiple-select-row nowrap">
        <thead>
          <tr class="Daftar2">
            <th class="table-plus datatable-nosort">Nomor</th>
            <th>Nama Arabic</th>
            <th>Nama Simple</th>
            <th>Artinya</th>
            <th>Halaman</th>
            <th>Diturunkan</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in list" v-bind:key="item.id" class="Daftar">
            <td>{{ item.id }}</td>
            <td style="font-size: 50px">{{ item.name_arabic }}</td>
            <td>{{ item.name_simple }}</td>
            <td>{{ item.translated_name.name }}</td>
            <td>{{ item.pages }}</td>
            <td>{{ item.revelation_place }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "FortoView",
  data() {
    return { list: null };
  },
  mounted() {
    axios
      .get("https://api.quran.com/api/v4/chapters?language=id")
      .then((response) => {
        this.list = response.data.chapters;
        console.warn(response.data.chapters);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally({});
  },
};
</script>

<style>
.Daftar {
  font-size: 20px;
  background: linear-gradient(to right, #2e2bd6 0%, #5911dd 100%);
  border-radius: 24px;
  border: none;
  margin: auto !important;
  font-weight: bold !important;
  font-family: sans-serif;
}

.Daftar2 {
  font-size: 30px;
  background: linear-gradient(to right, #f59e0b 0%, #ef4444 100%);
  border-radius: 24px;
  border: none;
  margin: auto !important;
  font-weight: bold !important;
  font-family: Arial, Helvetica, sans-serif;
}

.Nama {
  background-color: aquamarine;
  margin-top: 100px;
  font-size: 30px;
  font-family: sans-serif;
  font-style: initial;
}
</style>
