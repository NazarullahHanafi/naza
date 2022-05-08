<template>
  <div class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h4 class="Nash">Surat An-Nash</h4>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table">
                <thead class="Text">
                  <th>Text</th>
                  <th>Surat</th>
                  <th>Id</th>
                </thead>
                <tbody>
                  <tr v-for="item in list" v-bind:key="item.id" class="project">
                    <td>
                      {{ item.text_uthmani_simple }}
                    </td>
                    <td>{{ item.verse_key }}</td>
                    <td>{{ item.id }}</td>

                    <!-- </tr>
                  <tr>
                    <td>Minerva Hooper</td>
                    <td>Curaçao</td>
                    <td>Sinaai-Waas</td>
                    <td class="text-right">$23,789</td>
                  </tr>
                  <tr>
                    <td>Sage Rodriguez</td>
                    <td>Netherlands</td>
                    <td>Baileux</td>
                    <td class="text-right">$56,142</td>
                  </tr>
                  <tr>
                    <td>Philip Chaney</td>
                    <td>Korea, South</td>
                    <td>Overland Park</td>
                    <td class="text-right">$38,735</td>
                  </tr>
                  <tr>
                    <td>Doris Greene</td>
                    <td>Malawi</td>
                    <td>Feldkirchen in Kärnten</td>
                    <td class="text-right">$63,542</td>
                  </tr>
                  <tr>
                    <td>Mason Porter</td>
                    <td>Chile</td>
                    <td>Gloucester</td>
                    <td class="text-right">$78,615</td>
                  </tr>
                  <tr>
                    <td>Jon Porter</td>
                    <td>Portugal</td>
                    <td>Gloucester</td>
                    <td class="text-right">$98,615</td>
                  </tr> -->
                  </tr>
                </tbody>
              </table>
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
  name: "MapView",
  data() {
    return { list: undefined };
  },
  mounted() {
    axios
      .get(
        "https://api.quran.com/api/v4/quran/verses/uthmani_simple?chapter_number=114"
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
.project {
  font-size: 30px;
  background: linear-gradient(to right, #f59e0b 0%, #ef4444 100%);
  border-radius: 24px;
  border: none;
  margin: auto !important;
  font-weight: bold !important;
  font-family: fantasy;
}

.Nash {
  font-size: 50px;
  color: black;
  background-color: whitesmoke;
}

.Text {
  font-size: 40px;
  font-style: normal;
  color: white;
  background-color: black;
  font-family: initial;
}
</style>
