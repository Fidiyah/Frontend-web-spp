<template>
<div class="container">
    <br>
    <a class="btn btn-primary" href="/Tambahkelas">Tambah Kelas</a>
    <br>
    <br>
    <div class="row">
        <div class="col-md-10">
            <input type="text" name="search" v-model="search" class="form-control" autocomplete="off">
        </div>
        <div class="col-md-2">
            <button class="btn btn-success" v-on:click="cari_kelas()">Search</button>
        </div>
    </div>
    <table class="table table-hover table-striped">
    <thead>
        <tr>
            <th>Id_Kelas</th> 
            <th>Nama Kelas</th>
             <th>Jurusan</th> 
             <th>Angkatan</th>
              
        </tr>
    </thead>
    <tbody>
        <tr v-for="kel in kelas" :key="kel.id_kelas">
            <td>{{kel.id_kelas}}</td>
            <td>{{kel.nama_kelas}} </td>
            <td>{{kel.jurusan}} </td>
            <td>{{kel.angkatan}}</td>
            
        </tr>
    </tbody>
    </table>
</div>
</template>

<script>
export default{
    name:"Kelas",
    data(){
        return{
            kelas:[],
            search:"",
            
            
        }
    },
    methods:{
        tm_kelas:function(){
            this.axios.get("http://localhost/latihan_migrasi_SPP/public/api/getkelass").then((result)=>{
                this.kelas=result.data
            })
        },
        cari_kelas:function(){
              this.axios.get("http://localhost/latihan_migrasi_SPP/public/api/yokkelas/"+this.search)
              .then((result)=>{
                this.kelas=result.data
            })
        },

    },
    mounted(){
        this.tm_kelas   ()
    }
}

</script>