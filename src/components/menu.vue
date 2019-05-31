<template>
  <div>
    <v-navigation-drawer fixed v-model="drawer" app>
      <v-list dense >
        <template v-for="(item, i) in items">
          <v-layout row v-if="item.heading" align-center :key="i">
            <v-flex xs6>
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-flex>
          </v-layout>
          <v-divider dark v-else-if="item.divider" class="my-3" :key="i"></v-divider>
          <v-list-tile :key="i" v-else @click="router_push(item.route)">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grey--text">{{ item.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue-grey darken-4" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>i.had.never</v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        { icon: "dashboard", text: "Dashboard", route: "dashboard" },
        { icon: "list", text: "Fragenkatalog", route: "questions" },
        { divider: true },
        { heading: "Administration" },
        { icon: "view_module", text: "Interface", route: "dashboard" },
        { icon: "supervisor_account", text: "User", route: "dashboard" },
        { icon: "view_carousel", text: "Seiten", route: "dashboard" },
        { icon: "group", text: "Rollen", route: "dashboard" },
        { divider: true },
        { heading: "Moderation" },
        { icon: "playlist_add_check", text: "Content", route: "dashboard"},
        { icon: "today", text: "Witz des Tages", route: "dashboard" },
        { divider: true },
        { heading: "Sonstiges" }
      ]
    };
    
  },
  methods: {
    async router_push(route) {
      this.$router.push({ name: route });
    },
  },
 
  props: {
    source: String
  }
};
</script>
