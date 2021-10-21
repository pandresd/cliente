<template>
  <v-container>
    <v-alert border="left" close-text="Close Alert" color="green accent-4" dark dismissible v-if="this.$route.params.message">
      {{ this.$route.params.message }}
    </v-alert>
    <v-row no-gutters>
      <v-col sm="4" class="pa-3" v-for="post in posts" :key="post._id">
        <v-card class="pa-1" :to="{ name: 'post', params: {id: post._id}}">
          <v-card-title class="headline">
            {{ post.titulo }}
          </v-card-title>
          <v-btn class="ml-4 mt-3" small outlined color="indigo">
            {{ post.nombre }}
          </v-btn>
          <v-card-title class="headline">
            {{ post.correo }}
          </v-card-title>
          <v-card-text class="py-0">
            {{ post.contenido }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import API from "../api";
  export default {
    name: "Post",
    data(){
      return{
        posts: [],
      };
    },
    async created(){
      this.posts = await API.getAllPost();
    },
  };
</script>
