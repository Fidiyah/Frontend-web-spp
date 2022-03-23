<template>
  <div id="App">
    <ul class="nav" style="background-color:#DB575E">
      <li class="nav-item">
        <router-link class="nav-link font" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link font" to="/kelas">Kelas</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link font" to="/siswa">Siswa</router-link>
      </li>
       <li class="nav-item">
        <router-link class="nav-link font" to="/Spp">SPP</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link font" to="/contact">Contact</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link font" to="/login">Logout</router-link>
      </li>
      
      
    </ul>

    <router-view></router-view>

  </div>
</template>

<style>
  .font {
    color: black;
    font-weight: bold;
    
  }
  
</style>

<script>

export default{
  name : 'App' ,
  // components: {
  //   Home
  // }
}
</script>