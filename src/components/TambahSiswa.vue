<template>
  <div class="container">
    NISN
    <input type="text" name="nisn" v-model="nisn" class="form-control" />
    NIS
    <input type="text" name="nis" v-model="nis" class="form-control" />
    Nama
    <input type="text" name="nama" v-model="nama" class="form-control" />
    Kelas
    <select name="kelas" v-model="kelas" class="form-select">
      <option></option>
      <option
        v-for="kelas in listkelas"
        :key="kelas.id_kelas"
        v-bind:value="kelas.id_kelas"
      >
        {{ kelas.nama_kelas }}
      </option>
    </select>

    No.telp
    <input type="text" name="no_telp" v-model="no_telp" class="form-control" />
    Alamat
    <input type="text" name="alamat" v-model="alamat" class="form-control" />
    Username
    <input
      type="email"
      name="username"
      v-model="username"
      class="form-control"
      autocomplete="off"
    />
    Password
    <input
      type="password"
      name="password"
      v-model="password"
      class="form-control"
    />
    <br />
    <button class="btn btn-primary" @click="simpansiswa()">Simpan</button>
  </div>
</template> 
<script>
export default {
  name: "TambahSiswa",
  data() {
    return {
      listkelas: [],
      nisn: "",
      nis: "",
      nama: "",
      kelas: "",
      no_telp: "",
      alamat: "",
      username: "",
      password: "",
      style_mess: "",
      message: "",
      error:false,
    };
  },
  methods: {
    getkelas: function () {
      this.axios
        .get("http://localhost/latihan_migrasi_SPP/public/api/getkelass")
        .then((result) => {
          this.listkelas = result.data;
          console.log(result);
        });
    },
    simpansiswa: function () {
      var datasiswa = {
        nisn: this.nisn,
        nis: this.nis,
        nama: this.nama,
        id_kelas: this.kelas,
        no_telp: this.no_telp,
        alamat: this.alamat,
        username: this.username,
        password: this.password,
        
      };
      this.axios.post(
          "http://localhost/latihan_migrasi_SPP/public/api/inputsiswa",
          datasiswa )
        .then((result) => {
          if(result.data.status==true){
            this.message=result.data.message
            this.style_mess="alert alert-success"
          }else{
             this.style_mess="alert alert-warning"
             this.message=result.data.message
          }
          console.log(result);
        });
    },
  },
  mounted() {
    this.getkelas();
  },
};
</script>