<template>
  <v-navigation-drawer
    color="grey lighten-5"
    floating
    class="pa-4"
    app
    v-model="$store.state.drawer"
    temporary
  >
    <v-layout class="pa-1 logo">
      <v-app-bar-nav-icon
        class="mr-3"
        @click="$store.state.drawer = false"
      ></v-app-bar-nav-icon>
      <div>
        <v-img width="130px" lazy-src="logo.png" src="logo.png"></v-img>
      </div>
    </v-layout>
    <v-layout class="mt-10">
      <v-flex>
        <v-layout>
          <v-flex text-center>
            <!-- <v-card class="text-center" width="70" style="border-radius: 50%" outlined> -->
            <v-avatar class="outlined" size="80">
              <v-avatar size="70">
                <v-img lazy-src="profile.jpg" src="profile.jpg" />
              </v-avatar>
            </v-avatar>

            <!-- </v-card> -->

            <div class="mt-4 title">Andrea Lo Giudice</div>
            <div class="mt-1 subtitle-2 grey--text">Palermo, IT</div>
            <div class="mt-5">
              <v-layout>
                <v-flex>
                  <div class="subtitle-2">Post</div>
                  <div class="subtitle-2 grey--text">116</div>
                </v-flex>
                <v-flex>
                  <div class="subtitle-2">Followers</div>
                  <div class="subtitle-2 grey--text">48m</div>
                </v-flex>
                <v-flex>
                  <div class="subtitle-2">Following</div>
                  <div class="subtitle-2 grey--text">48m</div>
                </v-flex>
              </v-layout>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-col cols="12" sm="12">
      <v-sheet rounded="lg" min-height="268">
        <v-list flat>
          <v-subheader>REPORTS</v-subheader>
          <v-list-item-group v-model="$store.state.selectedItem" color="red">
            <v-list-item v-for="(item, i) in $store.state.items" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-sheet>
    </v-col>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "MainNav",
};
</script>
<style>
.logo {
  align-items: center;
}
</style>
