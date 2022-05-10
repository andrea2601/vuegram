<template>
  <v-app id="inspire">
    <div
      class="trasparent-bg"
      v-if="$store.state.overlay || $store.state.overlayf"
      @click.stop="$store.dispatch('overlay', false); $store.dispatch('overlayf', false)"
    ></div>
    <MainNav />
    <v-app-bar
      app
      color="white"
      flat
      class="app-bar"
      clipped-right
      clipped
      floating
    >
      <div class="included">
        <v-app-bar-nav-icon
          class="mx-3"
          @click="$store.state.drawer = !$store.state.drawer"
        ></v-app-bar-nav-icon>
      </div>
      <div class="pr-10">
        <v-img width="130px" lazy-src="logo.png" src="logo.png"></v-img>
      </div>
      <div class="search-box px-16">
        <input type="text" class="search-bar" placeholder="  Search..." />
        <v-btn icon tile class="mr-5">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </div>
      <div class="pl-16">
        <v-btn
          depressed
          color="error"
          @click="$store.state.overlayup = !$store.state.overlayup"
        >
          <v-icon class="pr-2"> mdi-plus </v-icon>
          Upload
        </v-btn>
      </div>

      <div class="pr-10 pl-8">
        <v-btn icon class="mr-5">
          <v-icon>mdi-email-outline</v-icon>
        </v-btn>
        <v-btn icon class="mr-5">
          <v-icon>mdi-heart-outline</v-icon>
        </v-btn>
      </div>

      <v-avatar class="outlined" size="60">
        <v-avatar
          class="hidden-sm-and-down"
          color="grey darken-1 shrink"
          size="50"
        >
          <v-img cover src="profile.jpg" alt="John"></v-img
        ></v-avatar>
      </v-avatar>
      <v-icon>mdi-menu-down</v-icon>
    </v-app-bar>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <ProfilePage />

          <ProfileRightNav />
        </v-row>
      </v-container>
    </v-main>
    <v-overlay
      :absolute="$store.state.absolute"
      :value="$store.state.overlayup"
      z-index=""
    >
      <v-card width="400" height="250"
        ><div class="close">
          <v-btn class="p-10" @click="$store.state.overlayup = false">
            x
          </v-btn>
        </div>

        <v-btn for="file-upload" class="d-flex"> Select Photo </v-btn>
        <input id="file-upload" type="file" />
      </v-card>
    </v-overlay>

 <!-- overlay stories -->
    <div class="overlay-img" v-if="$store.state.overlay">
      <div v-for="(story, i) in $store.state.storys" :key="i">
        <div v-if="$store.state.idstory == i">
          <v-card>
            <img :src="story.url" height="400" />

            <v-card-subtitle class="pb-0"> @andrea_Logiudice </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>{{story.description}}</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </div>

    <!-- overlay feeds -->
    <div class="overlay-img" v-if="$store.state.overlayf">
      <div v-for="(feed, e) in $store.state.feeds" :key="e">
        <div v-if="$store.state.idfeed == e">
          <v-card>
            <img :src="feed.url" height="400" />

            <v-card-subtitle class="pb-0"> @andrea_Logiudice </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>{{feed.description}}</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import ProfilePage from "./components/ProfilePage";
import MainNav from "./components/MainNav";
import ProfileRightNav from "./components/ProfileRightNav";

export default {
  name: "App",
  components: {
    ProfilePage,
    MainNav,
    ProfileRightNav,
  },
};
</script>
<style>
.MainNav {
  width: 33%;
}

.v-avatar.outlined {
  border: 2px solid #e7596f;
  background-color: transparent;
  border-radius: 50%;
  height: 100px;
  width: 100px;
}

.search-bar {
  border-radius: 2px;
  height: 35px;
  width: 320px;
  background-color: rgb(236, 236, 236);
}

.v-toolbar__content,
.v-toolbar__extension {
  justify-content: center !important;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

input[type="file"] {
  display: none;
}
.custom-file-upload {
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
}
.trasparent-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: -20px;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>