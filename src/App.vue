<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
/* @import './sass/main.scss'; */
body {
   font-family:suisse-light;
  h1 {
    color:#fff;
    font-size:2.98em;
  }
  h2 {
    font-size:2em;
  }
  p {
    font-size:1.2em;
  }
}
$dark-gray:#3e4549;
$white: #fff;
$orange: #f98253;
$blue: #38c8e0;
@mixin base-button($bg){
    background: $bg repeat scroll 0 0;
    border: none;
    font-weight: 400;
    border-radius: 0px;
    box-shadow: none;
    color: $white;
    text-decoration: none;
    text-shadow: none;
    padding: 15px 20px;
    text-transform: uppercase;
    @content;
}
.btn-principal {
  @include base-button($blue) {
    width:100%;
  &:hover {
      -webkit-transition: all 0.35s ease-in-out;
      transition: all 0.35s ease-in-out;
      background: lighten($blue, 10%);
  }
  }
}
.btn-secundario {
  @include base-button($orange) {
    width:100%;
  &:hover {
      -webkit-transition: all 0.35s ease-in-out;
      transition: all 0.35s ease-in-out;
      background: lighten($orange, 10%);
  }
  }
}
@font-face {
  font-family: 'suisse-light';
  src: url('/static/fonts/SuisseIntl-Light.otf');
}
@font-face {
  font-family: 'suisse-regular';
  src: url('/static/fonts/SuisseIntl-Regular.otf');
}

#app {
}
#nosotros {
  padding-top:85px;
  padding-bottom:85px;
  h1 {
    color:$dark-gray;
    margin-bottom:35px;
  }
}
.principal {
    // background: linear-gradient(180deg,rgba(0,0,0,.3),rgba(0,0,0,.7)),url(/static/img/bg.jpg);
    background:$dark-gray;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
    color:$white;
  .principal-title {
    margin:250px auto 250px auto;
  }
  .sub-heading {
    font-size:1.8em;
    margin-top:35px;
    margin-bottom:35px;
  }
  h1{
    margin-top:35px;
    margin-bottom:35px;
    font-family:suisse-regular;
    font-size:44px;
  }
}
#footer {
  h2 {
    color:green;
  }
}

#precios {
  padding-top:40px;
  padding-bottom:40px;
  h1 {
    color:$dark-gray;
    text-align:center;
    margin-top:25px;
    margin-bottom:25px;
    font-weight:bold;
  }
     h3 {
       color:$dark-gray;
       text-align: center;
       margin-bottom:25px;
       margin-top:25px;
     }
    .lista-precios {
      width:100%;
      display:block;
      padding:40px 20px 40px 20px;
     .price-block {
       height:100%;
       font-size:20px;
       text-align:center;
       margin-bottom:25px;
       margin-top:25px;
        .price-block-wrap {
          font-size: 1em;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center
      }
       .currency {
        font-size: 1em;
        font-weight:bold;
      }
      .price {
        font-size: 3em;
        font-weight: bold;
        line-height: .8em;
      }
    }

  ul {
    margin-top:25px;
    li {
      list-style-type:none;
      font-size:22px;
      margin-bottom:10px;
      &::before {
        content: url('/static/img/tick.png');
        display: inline-block;
        margin-right: 5px;
      }
    }
  }
  }
}
</style>
