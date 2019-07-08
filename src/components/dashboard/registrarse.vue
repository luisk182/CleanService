<template>
<v-content>
    <v-progress-linear :indeterminate="true" color="#38c8e0" v-show="loading"></v-progress-linear>
    <v-container fluid fill-height >
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-card-text>
                <v-snackbar
                  v-model="snackbar"
                  color="error"
                  :top="true">
                  {{alerta}}
                  <v-btn
                    color="white"
                    flat
                    @click="snackbar = false"
                  >
                  Cerrar
                  </v-btn>
                </v-snackbar>
              <v-form
                ref="registro"
                v-model="validateRegistro"
                lazy-validation
                >
                <v-text-field
                    solo
                    label="Correo electrónico"
                    v-model="usuario"
                    prepend-inner-icon="email"
                    :rules="reglas"
                ></v-text-field>

                <v-text-field
                    solo
                    label="Contraseña"
                    prepend-inner-icon="lock"
                    v-model="pass"
                    :rules="reglas"
                ></v-text-field>
                <v-text-field
                    solo
                    label="Confirma contraseña"
                    prepend-inner-icon="lock"
                    v-model="match"
                    :rules="reglas"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn block color="#38c8e0" @click="validate()" slot="activator" :disabled="loading" dark>Registrarse</v-btn>
            </v-card-actions>
            <div>
              <v-btn flat block :disabled="loading" @click="$emit('change-login')">¿Ya tienes cuenta?</v-btn>
            </div>
            <hr>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-dialog v-model="dialog" persistent max-width="800px">
      <template>
        <v-card>
          <v-card-title>
            <div style="margin: auto;" class="headline">{{msg}}</div>
          </v-card-title>
          <v-card-text>
            <div v-html="link1"></div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="dialog = false">Cerrar</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </v-content>
</template>
<script>
export default {
  name: 'registrarse',
  data () {
    return {
      create: false,
      loading: false,
      validateRegistro: false,
      snackbar: false,
      pass: '',
      msg: '',
      alerta: 'hola',
      link1: '',
      match: this.pass,
      dialog: false,
      usuario: '',
      cuenta: [
        v => !!v || 'Ingresa tu usuario'
        // v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      password: [
        v => !!v || 'Ingresa tu contraseña'
      ]
    }
  },
  methods: {
    validate () {
      if (this.$refs.registro.validate()) {
        this.loading = true
        setTimeout(() => {
          this.$router.push('/')
        }, 3000)
      } else {
        this.loading = false
      }
    },
    valor () {
      console.log(this.create)
    },
    created () {
    }
  },
  computed: {
    reglas () {
      const reglas = []
      if (this.match) {
        const regla = v => (!!v && v) === this.match || 'Values do not match'
        reglas.push(regla)
      }
      return reglas
    }
  }
}
</script>
<style>
</style>
