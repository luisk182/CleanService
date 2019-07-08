<template>
<div>
  <toolbar> </toolbar>
      <!--Header Section-->
      <section id="principal">
        <div class="principal">
          <v-layout
              column
              align-center
              justify-center
              class="white--text">
              <v-container>
              <div class="principal-title text-xs-center">
              <h1>Slogan principal de la empresa</h1>
              <p class="sub-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
              <div>
                 <v-btn large color="light-blue lighten-1" dark>Registrate</v-btn>
                 </div>
              </div>
              </v-container>
            </v-layout>
        </div>
      </section>

      <paquetes> </paquetes>
      <frase></frase>
      <nosotros> </nosotros>
    <!--Content Section-->

    <contacto> </contacto>

    <section id="footer">
    <v-container text-xs-center>
        <v-layout>
        <v-flex xs12>
            <p>@ Copyright.  2019 Todos los derechos reservados.</p>
        </v-flex>
        </v-layout>
    </v-container>
    </section>
</div>
</template>

<script>
import paquetes from './secciones/paquetes.vue'
import toolbar from './secciones/toolbar.vue'
import contacto from './secciones/contacto'
import frase from './secciones/frase'
import nosotros from './secciones/nosotros'
export default {
  name: 'mainPage',
  data () {
    return {
      msg: 'hola'
    }
  },
  components: {
    paquetes,
    toolbar,
    contacto,
    frase,
    nosotros
  }
}
</script>

<style lang="scss">
/* @import './sass/mixins.scss'; */
</style>
