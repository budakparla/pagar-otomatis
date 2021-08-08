<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-alert dense border="left" type="info">
        Pastikan ponsel pintar anda <strong>terhubung</strong> dengan
        <strong>jaringan internet</strong>
      </v-alert>
      <v-card class="logo py-4 d-flex justify-center">
        <img
          loading="lazy"
          width="45%"
          height="45%"
          class="app-logo"
          src="../assets/Logo.jpg"
          alt="Logo Aplikasi Pagar Otomatis"
        />
      </v-card>
      <v-card class="d-flex justify-center flex-column">
        <v-card-title class="headline">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-center"
                >Status Pagar</v-list-item-title
              >
              <v-list-item-subtitle class="text-center">{{
                db.statusPagar
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item class="d-flex justify-center">
              <v-btn @click="funcBukaPagar()" depressed color="primary">
                Buka Pagar
              </v-btn>
            </v-list-item>
            <v-list-item class="d-flex justify-center">
              <v-btn @click="funcTutupPagar()" depressed color="primary">
                Tutup Pagar
              </v-btn>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
      <v-card class="d-flex justify-center"> </v-card>
    </v-col>
  </v-row>
</template>

<style>
.app-logo {
  align-items: center;
}
</style>

<script>
// import { VAlert, VCard, VCardText, VCardTitle } from "vuetify/lib";

export default {
  // components: {
  //   VCard,
  //   VCardText,
  //   VCardTitle,
  // },
  data() {
    return {
      bukaPagar: false,
      statusPagar: 0,
      tutupPagar: false,
      db: {
        bukaPagar: false,
        statusPagar: 0,
        tutupPagar: false,
      },
    };
  },

  mounted() {
    // program di dalam mounted dijalankan pertama saat load web
    this.fetchDb();
  },
  watch: {
    // memantau perubahan value dari relay
    bukaPagar(val) {
      this.refBukaPagar.set(val);
    },
    statusPagar(val) {
      this.refStatusPagar.set(val);
    },
    tutupPagar(val) {
      this.refTutupPagar.set(val);
    },
  },
  computed: {
    refBukaPagar() {
      return this.$fire.database.ref().ref.child("buka-pagar");
    },
    refStatusPagar() {
      return this.$fire.database.ref().ref.child("status-pagar");
    },
    refTutupPagar() {
      return this.$fire.database.ref().ref.child("tutup-pagar");
    },
  },
  methods: {
    fetchDb() {
      this.refBukaPagar.on("value", (dataSnapshot) => {
        this.db.bukaPagar = dataSnapshot.val();
      }),
        this.refStatusPagar.on("value", (dataSnapshot) => {
          this.db.statusPagar = dataSnapshot.val();
        }),
        this.refTutupPagar.on("value", (dataSnapshot) => {
          this.db.tutupPagar = dataSnapshot.val();
        });
    },
    funcBukaPagar: function () {
      this.bukaPagar = true;
      this.tutupPagar = false;
      this.statusPagar = this.bukaPagar ? "Pagar terbuka" : "Pagar tertutup";
    },
    funcTutupPagar: function () {
      this.tutupPagar = true;
      this.bukaPagar = false;
      this.statusPagar = this.tutupPagar ? "Pagar tertutup" : "Pagar terbuka";
    },
  },
};
</script>
