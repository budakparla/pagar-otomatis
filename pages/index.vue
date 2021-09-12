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
              <v-btn @click="funcBukaPagar()" :disabled="db.bukaPagar == true" depressed color="primary">
                Buka Pagar
              </v-btn>
            </v-list-item>
            <v-list-item class="d-flex justify-center">
              <v-btn @click="funcTutupPagar()" :disabled="db.tutupPagar == true" depressed color="primary">
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

export default {
  data() {
    return {
      db: {
        bukaPagar: true,
        statusPagar: "",
        tutupPagar: false,
      },
    };
  },

  mounted() {
    // program di dalam mounted dijalankan pertama saat load web
    this.fetchDb();
  },
  watch: {
    // memantau perubahan value
    'db.bukaPagar'(val) {
      this.refBukaPagar.set(val);
    },
    'db.statusPagar'(val) {
      this.refStatusPagar.set(val);
    },
    'db.tutupPagar'(val) {
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
      });
      this.refStatusPagar.on("value", (dataSnapshot) => {
        this.db.statusPagar = dataSnapshot.val();
      });
      this.refTutupPagar.on("value", (dataSnapshot) => {
        this.db.tutupPagar = dataSnapshot.val();
      });
    },
    funcBukaPagar: function () {
      this.db.bukaPagar = true;
      this.db.tutupPagar = false;
      this.db.statusPagar = this.db.bukaPagar ? "Pagar terbuka" : "Pagar tertutup";
    },
    funcTutupPagar: function () {
      this.db.bukaPagar = false;
      this.db.tutupPagar = true;
      this.db.statusPagar = this.db.tutupPagar ? "Pagar tertutup" : "Pagar terbuka";
    },
  },
};
</script>
