<template>
<v-content>
    <v-progress-linear :indeterminate="true" color="#38c8e0" v-show="loading"></v-progress-linear>
    <v-container fluid fill-height >
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-card-text>
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                >
                <v-text-field
                    solo
                    label="Usuario"
                    v-model="usuario"
                    prepend-inner-icon="person"
                    :rules="cuenta"
                ></v-text-field>

                <v-text-field
                    solo
                    label="Contraseña"
                    prepend-inner-icon="lock"
                    :rules="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn block color="#38c8e0" @click="validate()" slot="activator" :disabled="loading" dark>Iniciar sesón</v-btn>
            </v-card-actions>
            <div>
              <v-btn flat block :disabled="loading" @click="$emit('change-login')">¿Olvidaste tu contraseña?</v-btn>
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
  name: 'login',
  data () {
    return {
      create: false,
      loading: false,
      valid: false,
      pass: '',
      msg: '',
      alerta: 'hola',
      link1: '',
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
      if (this.$refs.form.validate()) {
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
    mounted () {
    }
  }
}
</script>
<style style="scss">
.v-progress-linear {
  margin:0 !important;
}
</style>
