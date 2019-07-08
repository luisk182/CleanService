<template>
<v-app>
  <v-toolbar clipped-left dark id="navegador">
    <v-toolbar-items>
      <v-btn icon @click="$router.push('/')">
              <v-icon>arrow_back</v-icon>
        </v-btn>
    </v-toolbar-items>
  <!--<v-toolbar-side-icon  @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon> -->
  <v-toolbar-title><img src="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"></v-toolbar-title>
  <v-spacer></v-spacer>
</v-toolbar>
<transition name="fade" mode="out-in">
  <registrarse v-if="registrarse" @change-login="changeLogin"> </registrarse>
  <login v-if="login" @change-login="changeLogin"> </login>
</transition>
  </v-app>
</template>
<script>
import login from './dashboard/login'
import registrarse from './dashboard/registrarse'
export default {
  name: 'rlogin',
  data () {
    return {
      login: false,
      registrarse: false,
      forgot: false,
      success: false
    }
  },
  components: {
    registrarse,
    login
  },
  methods: {
    changeLogin () {
      this.registrarse = !this.registrarse
      this.login = !this.login
    },
    showRecuperar () {
      this.forgot = !this.forgot
      this.login = !this.login
    },
    showSuccessMsg () {
      this.create = false
      this.login = false
      this.forgot = false
      this.success = true
    }
  },
  mounted () {
    /* if (typeof this.$route.params.login === 'boolean' && typeof this.$route.params.create === 'boolean') {
      this.login = this.$route.params.login
      this.create = this.$route.params.create
    } else {
      this.login = true
    } */
    this.login = true
  }
}
</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}
/*
.slide-fade-enter-active {
   transition: all .3s ease;
 }
.slide-fade-leave-active {
   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
   transform: translateX(10px);
 opacity: 0;
 } */
</style>
