import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'


import {createWebHistory , createRouter} from 'vue-router'
import Home from './components/Home'
import Kelas from './components/Kelas'
import TambahKelas from './components/TambahKelas'
import Siswa from './components/Siswa'
import TambahSiswa from './components/TambahSiswa'
import Contact from './components/Contact'
import Login from './components/Login'
import Spp from './components/Spp'

const router = createRouter ({
    history : createWebHistory(),
    routes : [
        {path : '/' , name: "Home" , component : Home},
        {path : '/Kelas' , name: "Kelas" , component : Kelas},
        {path : '/Tambahkelas' , name: "TambahKelas" , component : TambahKelas},
        {path : '/Siswa' , name: "Siswa" , component : Siswa},
        {path : '/Tambahsiswa' , name: "TambahSiswa" , component : TambahSiswa},
        {path : '/Contact' , name: "Contact" , component : Contact},
        {path : '/Login' , name: "Login" , component : Login},
        {path : '/Spp' , name: "Login" , component : Spp},
      

    ],
    base:'/'
})

const app =createApp(App)
app.use(router)
app.config.globalProperties.axios = axios
app.mount('#app')

