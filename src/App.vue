<template>
  <v-app id="inspire">
    <v-navigation-drawer 
      v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Todo list
          </v-list-item-title>
          <v-list-item-subtitle>
            Лучший Todo в мире!
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  <v-app-bar
      app
      color="primary"
      dark
      prominent
      src="mur.jpg"
      
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <!-- бургер меню -->
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Todo list</v-app-bar-title>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
     <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
       drawer: null,
       items: [
          { title: 'todo', icon: 'mdi-format-list-checks', to: '/' },
          { title: 'About', icon: 'mdi-help-box' , to: '/About' },
         ],
     }),
  }
</script>