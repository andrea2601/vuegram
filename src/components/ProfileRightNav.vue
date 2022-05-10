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
      Uzir is a freelance developer based in Cedar Rapids IA, Always interested in learning about new Technologies and projects!
      <br />
      <br />Moved to the US 7 years ago for college and now working as a full time software developer and helping people reach their goals through entrepreneurship!
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
