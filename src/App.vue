<template>
  <v-app id="inspire" dark>
    <navigation v-if="this.$route.name != 'login'"></navigation>
    <v-content>
      <v-container>
        <notifications group="notify" />
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer color="blue-grey darken-4" style="padding-left: 1vh;" app inset>
      <span class="white--text">ViruzMedia & SomeNix &copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import navigation from "@/components/menu.vue";
export default {
  name: "App",
  components: {
    navigation
  },
  data() {
    return {
      //
    };
  }
};
</script>
