<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-alert dense border="left" type="info">
        Pastikan ponsel pintar anda <strong>terhubung</strong> dengan
        <strong>jaringan internet</strong>
      </v-alert>
      <v-card class="logo py-4 d-flex justify-center">
        <img
          class="app-logo"
          src="../assets/Logo.jpg"
          alt="Logo Aplikasi Pagar Otomatis"
        />
        <!-- <NuxtLogo />
        <VuetifyLogo /> -->
      </v-card>
      <v-card class="d-flex justify-center flex-column">
        <v-card-title class="headline">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="text-center"
                >Status Pagar</v-list-item-title
              >
              <v-list-item-subtitle class="text-center"
                >Tertutup</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-card-title>
        <v-card-text>
          <v-list v-for="text in tombol" :key="text">
            <v-list-item class="d-flex justify-center">
              <v-btn depressed color="primary">{{ text }}</v-btn>
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
  width: 60%;
  align-items: center;
}
</style>

<script>
export default {
  data() {
    return {
      tombol: ["Buka Pagar", "Tutup Pagar"],
    };
  },
};
</script>
