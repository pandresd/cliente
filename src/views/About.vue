<template>
  <v-card
    max-width="500"
    class="mx-auto"
  >
    <v-toolbar
      color="indigo"
      dark
    >
      

      <v-toolbar-title>Desarrolladores</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-toolbar>
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
      >
        <v-list-item-icon>
          <v-icon
            v-if="item.icon"
            color="pink"
          >
            mdi-star
          </v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>

        <v-list-item-avatar>
          <v-img :src="item.avatar"></v-img>
        </v-list-item-avatar>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          { icon: true, title: 'Álvaro Ordoñez', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { icon: true, title: 'Ángel Román', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { icon: true, title: 'Hernán Estupiñán', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { icon: true, title: 'Hugo Dueñas', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { icon: true, title: 'Pablo Díaz', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
        ],
      }
    },
  }
</script>
