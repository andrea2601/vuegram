<template>
  <div class="ml-6">
    <v-layout>
      <v-flex class="pt-3">
        <div class="title">Featured Stories</div>
      </v-flex>
      <v-flex text-right class="p-3">
        <v-btn depressed class="text-none" color="grey lighten-4">
          <span class="grey--text">Popular Stories</span>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout justify-start class="mt-7">
      <div v-for="(story, i) in $store.state.storys" :key="i">
        <v-card
          elevation="12"
          height="230"
          width="170"
          color="blue"
          class="mr-4"
        >
          <v-img
            height="230"
            id="clickable"
            :src="story.url"
            
            @click.stop="
              $store.dispatch('overlay', true);
              $store.state.idstory = i;
            "
          ></v-img>
          <v-card-text class="text--primary">
              <div v-text="story.description"></div>
            </v-card-text>
        </v-card>
      </div>
    </v-layout>
    <div class="mt-10">
      <v-layout>
        <v-flex class="pt-3">
          <div class="title">Latest Feed</div>
        </v-flex>
        <v-flex text-right>
          <v-btn icon>
            <v-icon>mdi-menu</v-icon>
          </v-btn>
          <v-btn color="#E7596F" icon>
            <v-icon>mdi-view-grid-outline</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
      <v-row class="mt-5">
        <v-col v-for="(feed, e) in $store.state.feeds" :key="e">
          <v-card
            elevation="12"
            height="230"
            width="210"
            color="blue"
            class="mr-4"
          >
            <v-img
              height="230"
              id="clickable"
              :src="feed.url"
              @click="
                $store.dispatch('overlayf', true);
                $store.state.idfeed = e;
              "
            ></v-img>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilePage",
};
</script>
<style>
#clickable {
  cursor: pointer;
}

.overlay-img {
  position:fixed !important;
  top: 0;
  left: 50%;
  right: 50%;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>