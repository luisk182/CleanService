<template>
<!--  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Salon </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat> Seccion 1 </v-btn>
        <v-btn flat> Seccion 2 </v-btn>
        <v-btn flat> Seccion 3 </v-btn>
      </v-toolbar-items>
  </v-toolbar> -->
  <div id="navegador">
  <v-toolbar clipped-left color="#2b3033" id="navegador" fixed dark>
  <v-toolbar-side-icon  @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
  <v-toolbar-title><img src="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"></v-toolbar-title>
  <v-spacer></v-spacer>
  <v-toolbar-items class="hidden-sm-and-down">
    <v-btn href="#principal" v-smooth-scroll>Inicio</v-btn>
    <v-btn flat href="#precios" v-smooth-scroll>Servicios</v-btn>
    <v-btn flat href="#nosotros" v-smooth-scroll>Nosotros</v-btn>
    <v-btn flat href="#bottom" v-smooth-scroll>Contacto</v-btn>
    <v-btn flat href="#features" v-smooth-scroll>Features</v-btn>
    <v-btn flat  v-smooth-scroll color="#38c8e0" @click="loginPush">Iniciar Sesión</v-btn>
  </v-toolbar-items>
</v-toolbar>

  <v-navigation-drawer
    v-model="drawer"
    temporary
    absolute
    width = "200"
    id = "drawer"
  >
  <v-btn flat href="#principal" v-smooth-scroll>Inicio</v-btn>
  <v-btn flat href="#seccion2" v-smooth-scroll>características</v-btn>
  <v-btn flat href="#nosotros" v-smooth-scroll>Video</v-btn>
  <v-btn flat href="#features" v-smooth-scroll>Features</v-btn>
  </v-navigation-drawer>
</div>
</template>

<script>
export default {
  name: 'toolbar',
  data () {
    return {
      drawer: null
    }
  },
  methods: {
    loginPush () {
      this.$router.push({ path: 'login' })
    }
  }
}
</script>

<style lang="scss">
$per-red: red;
#navegador {
  z-index:999;
  img {
    width:50px;
    height:50px;
  }
}
#drawer{
  background: rgba(240, 240, 240, 1);

}
</style>
