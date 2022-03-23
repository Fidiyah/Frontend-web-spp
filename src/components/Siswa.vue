<template>
<div class="container">
    <br>
    <a class="btn btn-primary" href="/Tambahsiswa">Tambah Siswa</a>
    <br>
    <br>
    <div class="row">
        <div class="col-md-10">
            <input type="text" name="search" v-model="search" class="form-control" autocomplete="off">
        </div>
        <div class="col-md-2">
            <button class="btn btn-success" v-on:click="cari_siswa()">Search</button>
        </div>
    </div>
    <table class="table table-hover table-striped">
    <thead>
        <tr>
            <th>NISN</th> 
            <th>NIS</th>
             <th>ID Kelas</th> 
             <th>Nama</th>
              <th>Alamat</th>
               <th>No.Telp</th>
                <th>Username</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="sis in siswa" :key="sis.nisn">
            <td>{{sis.nisn}}</td>
            <td>{{sis.nis}} </td>
            <td>{{sis.id_kelas}} </td>
            <td>{{sis.nama}}</td>
            <td>{{sis.alamat}}</td>
            <td>{{sis.no_telp}}</td>
             <td>{{sis.username}}</td>
        </tr>
    </tbody>
    </table>
</div>
</template>

<script>
export default{
    name:"Siswa",
    data(){
        return{
            siswa:[],
            search:"",
            
            
        }
    },
    methods:{
        tm_siswa:function(){
            this.axios.get("http://localhost/latihan_migrasi_SPP/public/api/getsiswa").then((result)=>{
                this.siswa=result.data
            })
        },
        cari_siswa:function(){
              this.axios.get("http://localhost/latihan_migrasi_SPP/public/api/carisiswa/"+this.search)
              .then((result)=>{
                this.siswa=result.data
            })
        },

    },
    mounted(){
        this.tm_siswa()
    }
}

</script>