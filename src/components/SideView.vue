<template>
  <div class="sidebar-wrapper">
    <ul class="nav" id="nav">
      <li>
        <router-link to="/dash">
          <i class="nc-icon nc-bank"></i>
          <p style="color: aqua">An-Naba</p>
        </router-link>
      </li>
      <li>
        <router-link to="/map">
          <i class="nc-icon nc-pin-3"></i>
          <p style="color: aqua">An-Nash</p>
        </router-link>
      </li>
      <li>
        <router-link to="/user">
          <i class="nc-icon nc-single-02"></i>
          <p style="color: aqua">Al-Bayyinah</p>
        </router-link>
      </li>
      <li>
        <router-link to="/me">
          <i class="nc-icon nc-tile-56"></i>
          <p style="color: aqua">Ayat Kursi</p>
        </router-link>
      </li>
      <li>
        <router-link to="/forto">
          <i class="nc-icon nc-caps-small"></i>
          <p style="color: aqua">Daftar Surah</p>
        </router-link>
      </li>
      <li>
        <router-link to="/hobi">
          <i class="nc-icon nc-diamond"></i>
          <p style="color: aqua">Al-Fatihah</p>
        </router-link>
      </li>
      <li>
        <router-link to="/icon">
          <i class="nc-icon nc-bell-55"></i>
          <p style="color: aqua">Ar-Rum</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<style>
nav a.router-link-exact-active {
  color: #42b983;
  opacity: 1;
}
</style>
