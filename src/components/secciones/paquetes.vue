<template>
      <section id="precios">
  <v-container grid-list-md>
  <v-layout row wrap>
    <v-flex xs12 md4>
      <v-card>
        <v-card-title>
          <div class="lista-precios">
            <h1 class="">Básico</h1>
            <div class="price-block">
              <div class="price-block-wrap">
              <div class="currency">MNX $</div>
              <div class="price">350</div>
              </div>
            </div>
            <v-btn block color="light-blue lighten-1" dark>Comprar</v-btn>
            <ul>
              <li>Descripcion servicio 1 </li>
              <li>Descripcion servicio 2 </li>
              <li>Descripcion servicio 3 </li>
              <li>Descripcion servicio 4 </li>
              <li>Descripcion servicio 5 </li>
            </ul>
            </div>
        </v-card-title>
      </v-card>
    </v-flex>
    <v-flex xs12 md4>
      <v-card>
        <v-card-title>
          <div class="lista-precios">
            <h1 class="">Completo</h1>
            <div class="price-block">
              <div class="price-block-wrap">
              <div class="currency">MNX $</div>
              <div class="price">450</div>
              </div>
            </div>
            <v-btn block color="orange" dark>Comprar</v-btn>
            <ul>
              <li>Descripcion servicio 1 </li>
              <li>Descripcion servicio 2 </li>
              <li>Descripcion servicio 3 </li>
              <li>Descripcion servicio 4 </li>
              <li>Descripcion servicio 5 </li>
            </ul>
            </div>
        </v-card-title>
      </v-card>
    </v-flex>
    <v-flex xs12 md4>
      <v-card>
        <v-card-title>
          <div class="lista-precios">
            <h1 class="">Premium</h1>
            <div class="price-block">
              <div class="price-block-wrap">
              <div class="currency">MNX $</div>
              <div class="price">550</div>
              </div>
            </div>
            <v-btn block color="light-blue lighten-1" dark>Comprar</v-btn>
            <ul>
              <li>Descripcion servicio 1 </li>
              <li>Descripcion servicio 2 </li>
              <li>Descripcion servicio 3 </li>
              <li>Descripcion servicio 4 </li>
              <li>Descripcion servicio 5 </li>
            </ul>
            </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
      </v-container>
      </section>
</template>

<script>
export default {
  name: 'paquetes'
}
</script>

<style>
.home-box-1 {
    padding: 80px 40px 80px 40px;
    background-position: center bottom;
    color:#fff;
    background: #38c8e0;
  }

  .home-box-1:hover {
    /* background: url("../img/arrow.png") no-repeat scroll center bottom #35A3BC;*/
    transition: all 0.35s ease-in-out;
      -moz-transition: all 0.35s ease-in-out;
      -webkit-transition: all 0.35s ease-in-out;
  }
  .home-box-1 i {
    padding-bottom: 30px;
  }

  .home-box-1 p {
    padding-left: 30px;
    padding-right: 30px;
  }
  .home-box-1 h3 {
    text-align:center;
    margin-bottom:30px;
    font-weight:100;
  }
  .home-box-1 ul li {
    font-size:18px;
  }
  .home-box-1 a, .home-box a:hover {
    color: #ffffff;
  }
  .home-box-1 .price {
    font-size:36px;
    text-align:center;
    margin-bottom:20px;
  }

  /* ======================= box 2 ========================== */

  .home-box-2 {
   padding: 80px 40px 80px 40px;
    background-position: center bottom;
    color:#fff;
    background:#f98253;
  }

  .home-box-2:hover {
    /* background: url("../img/arrow.png") no-repeat scroll center bottom #f98253; */
    transition: all 0.35s ease-in-out;
      -moz-transition: all 0.35s ease-in-out;
      -webkit-transition: all 0.35s ease-in-out;
  }

  .home-box-2 i {
    padding-bottom: 30px;
  }
  .home-box-2 .price {
    font-size:36px;
    text-align:center;
    margin-bottom:20px;
  }
 .home-box-2 h3 {
    text-align:center;
    margin-bottom:30px;
    font-weight:100;
  }
    .home-box-2 ul li {
    font-size:18px;
  }
  .home-box-2 p {
    padding-left: 30px;
    padding-right: 30px;
  }

  .home-box-2 a, .home-box a:hover {
    color: #ffffff;
  }
  .home-box-3 {
    padding: 80px 0px 80px 0px;
    background-position: center bottom;
    color:#fff;
    background:#09264a;
  }

  .home-box-3:hover {
    /* background: url("../img/arrow.png") no-repeat scroll center bottom #f98253; */
    transition: all 0.35s ease-in-out;
      -moz-transition: all 0.35s ease-in-out;
      -webkit-transition: all 0.35s ease-in-out;
  }

  .home-box-3 i {
    padding-bottom: 30px;
  }

  .home-box-3 p {
    padding-left: 30px;
    padding-right: 30px;
  }

  .home-box-3 a, .home-box a:hover {
    color: #ffffff;
  }
</style>
