<template>
    <section id="bottom">
      <v-container text-xs-center>
        <h1>¿Tienes dudas? </h1>
        <v-layout row justify-space-between>
              <v-flex md6 xs12>
             <p><a href="#"> <font-awesome-icon :icon="['fab', 'whatsapp']" size="3x"></font-awesome-icon></a></p>
             <p>Escríbenos un WhatsApp</p>
              </v-flex>
                <v-flex md6 xs12>
                    <p><a href="mailto:soporte@empresa.com"><font-awesome-icon icon="envelope" size="3x"></font-awesome-icon></a></p>
                <p>soporte@empresa.com</p>
                </v-flex>
        </v-layout>
            <hr>
            <!--Social Icons-->
            <ul class="social-icons">
               <li><a href="#"><font-awesome-icon :icon="['fab', 'facebook']" size="3x"></font-awesome-icon></a></li>
               <li><a href="#"><font-awesome-icon :icon="['fab', 'twitter']" size="3x"></font-awesome-icon></a></li>
               <li><a href="#"><font-awesome-icon :icon="['fab', 'instagram']" size="3x"></font-awesome-icon></a></li>
            </ul>
      </v-container>
    </section>
</template>
<script>
export default {
  name: 'contacto',
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  }),

  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    }
  }
}
</script>
<style lang="scss">
#bottom {
    background: #3E4549;
    padding-top: 120px;
    padding-bottom: 80px;
    p {
        color:#778489;
        font-size:24px;
    }
    h1 {
      color:#778489;
      margin-bottom:35px;
    }
    a {
        color: #b5c3c8;
        &:hover {
            color: #38c8e0;
            text-decoration: none;
            -webkit-transition: all 0.35s ease-in-out;
            transition: all 0.35s ease-in-out;
        }
    }
    hr {
      margin-top:25px;
      margin-bottom:25px;
    }
}
</style>
