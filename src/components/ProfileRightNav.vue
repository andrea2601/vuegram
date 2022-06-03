<template>
  <v-navigation-drawer class="pa-4 mt-6 pb-8" app clipped floating permanent right v-model="drawer">
    <v-layout>
      <v-card height="300" width="100%">
        <v-img
          height="300"
          width="100%"
          src="profile.jpg"
        ></v-img>
      </v-card>
    </v-layout>
    <v-layout class="mt-6">
      <div class="title">Andrea</div>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-layout>
          <div class="subtitle-2">882</div>
          <div class="subtitle-2 ml-1 grey--text">Photos</div>
        </v-layout>
      </v-flex>
      <v-flex>
        <v-layout>
          <div class="subtitle-2">527k</div>
          <div class="subtitle-2 ml-1 grey--text">Followers</div>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout class="mt-4 subtitle-2 grey--text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora atque amet iste beatae optio repellendus deleniti nemo odio.
      <br />
      <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam iste repellendus sapiente nobis at minus maxime aliquid libero explicabo.
    </v-layout>
    <v-layout class="mt-5">
      <v-flex>
        <div class="subtitle-2">Locations</div>
        <div class="subtitle-2 grey--text">Based in Cedar Rapids, IA.</div>
      </v-flex>
    </v-layout>
    <v-layout class="mt-5">
      <v-flex>
        <div class="subtitle-2">Profession</div>
        <div class="subtitle-2 grey--text mb-10">Developer</div>
      </v-flex>
    </v-layout>
  </v-navigation-drawer>
 
</template>

<script>
  export default {
    name: 'ProfileRightNav',

    
  }
</script>
