<template>
<v-container>
    <v-layout row justify-center>
        <v-flex x12 md10>
            <v-stepper v-model="e1">
                <v-stepper-header>
                <v-stepper-step :complete="e1 > 1" step="1">Selecciona producto</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step :complete="e1 > 2" step="2">Llena tus datos</v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step step="3">Finalizar</v-stepper-step>
                </v-stepper-header>

                <v-stepper-items class="pa-3">
                <v-stepper-content step="1">
                    <v-container grid-list-md>
                    <v-layout row wrap>
                    <v-flex xs12 md4>
                        <v-card class="pa-4 mb-4" color="light-blue lighten-1" :hover="true" @click="chkBasico = !chkBasico">
                            <v-card-title>
                                <div>
                                <h2 class="">Básico</h2>
                                <p>MNX $350</p>
                                <v-checkbox
                                label=""
                                color="white"
                                v-model="chkBasico"
                                value=""
                                hide-details
                                ></v-checkbox>
                                </div>
                            </v-card-title>
                        </v-card>
                        </v-flex>
                        <v-flex xs12 md4>
                        <v-card class="pa-4 mb-4" color="orange" :hover="true" @click="chkCompleto = !chkCompleto">
                            <v-card-title>
                                <div>
                                <h2 class="">Completo</h2>
                                <p>MNX $450</p>
                                <v-checkbox
                                v-model="chkCompleto"
                                label=""
                                color="white"
                                :hover="true"
                                value=""
                                hide-details
                                ></v-checkbox>
                                </div>
                            </v-card-title>
                        </v-card>
                        </v-flex>
                        <v-flex xs12 md4>
                        <v-card class="pa-4 mb-4" color="indigo" :hover="true" @click="chkPremium = !chkPremium">
                            <v-card-title>
                                <div>
                                <h2 class="">Premium</h2>
                                <p>MNX $550</p>
                                <v-checkbox
                                label=""
                                v-model="chkPremium"
                                color="white"
                                value=""
                                hide-details
                                ></v-checkbox>
                                </div>
                            </v-card-title>
                        </v-card>
                        </v-flex>
                    </v-layout>
                    </v-container>

                    <v-btn
                    color="primary"
                    @click="e1 = 2"
                    >
                    Siguiente
                    </v-btn>
                    <v-btn flat>Cancelar</v-btn>
                </v-stepper-content>
            <!-- step 2 -->
                <v-stepper-content step="2">
            <v-form ref="form" v-model="valid" lazy-validation>
                <v-container>
                    <v-layout row wrap>
                        <v-flex xs12 md6>
                        <v-text-field
                            v-model="name"
                            label="Nombre"
                            required
                            solo>
                            </v-text-field>
                        </v-flex>
                         <v-flex xs12 md6>
                        <v-text-field
                        v-model="email"
                        label="Apellido paterno"
                        required
                        solo
                        ></v-text-field>
                        </v-flex>
                         <v-flex xs12 md6>
                        <v-text-field
                        v-model="email"
                        label="Apellido materno"
                        required
                        solo
                        ></v-text-field>
                        </v-flex>
                        <v-flex xs12 md6>
                        <v-text-field
                        v-model="email"
                        label="Correo electrónico"
                        required
                        solo
                        ></v-text-field>
                        </v-flex>
                    </v-layout>
                    </v-container>
                    </v-form>
                    <v-btn
                    color="primary"
                    @click="e1 = 3"
                    >
                    Continuar
                    </v-btn>

                    <v-btn flat>Cancelar</v-btn>
                </v-stepper-content>

                <v-stepper-content step="3">
                    <v-card
                    class="mb-5"
                    ></v-card>
                        <v-card-title>
                            <div>
                                <h2  class="text-xs-center">Confirmación de pedido </h2>
                                <p>Descripción del pedido </p>
                            </div>
                        </v-card-title>
                    <v-btn
                    color="primary"
                    @click="e1 = 1"
                    >
                    Finalizar
                    </v-btn>

                    <v-btn flat>Cancelar</v-btn>
                </v-stepper-content>
                </v-stepper-items>
            </v-stepper>
        </v-flex>
    </v-layout>
</v-container>
</template>
<script>
export default {
  name: 'producto',
  data () {
    return {
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ],
      name: '',
      email: '',
      valid: false,
      e1: 0,
      chkBasico: false,
      chkCompleto: false,
      chkPremium: false,
      nombreRegla: [
        v => !!v || 'El nombre es requerido'
      ]
    }
  },
  methods: {
  }
}
</script>
<style>
</style>
