<template>
  <div>
    <v-container fluid full-width grid-list-sm>
      <h2>Administration-Dashboard</h2>
      <p>Needed Permission: {{needed_permission}}</p>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      needed_permission: "{{needed_permission}}"
    };//
  }
};
</script>
