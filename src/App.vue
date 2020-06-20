<template>
  <v-app id="inspire">
    

    <v-app-bar
      app
      clipped-right
      color="blue-black"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Logicalc <small><small><small> caclculator for all </small></small></small></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
    >
     <v-list dense>
       <router-link :to="{ name: 'home' }" style="text-decoration: none; color: inherit;">
         <v-hover color="blue">
         <v-list-item link>
                        <v-list-item-action>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            Home
                        </v-list-item-content>
                    </v-list-item>
         </v-hover>
        </router-link>

        <router-link :to="{ name: 'os' }" style="text-decoration: none; color: inherit;"><v-list-item link>
                        <v-list-item-action>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            Operating systems
                        </v-list-item-content>
                    </v-list-item>
        </router-link>

        <router-link :to="{ name: 'dsa' }" style="text-decoration: none; color: inherit;"><v-list-item link>
                        <v-list-item-action>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            Data structures algorithms
                        </v-list-item-content>
                    </v-list-item>
        </router-link>

        <router-link :to="{ name: 'dbms' }" style="text-decoration: none; color: inherit;"><v-list-item link>
                        <v-list-item-action>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            Database management system
                        </v-list-item-content>
                    </v-list-item>
        </router-link>
       
       <router-link :to="{ name: 'coa' }" style="text-decoration: none; color: inherit;"><v-list-item link>
                        <v-list-item-action>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            Computer architecture and digital electronics
                        </v-list-item-content>
                    </v-list-item>
        </router-link>
      </v-list>

    </v-navigation-drawer>
              
    

    <v-main>
      
        <router-view></router-view>
    </v-main>

    

    <v-footer
      app
      color="blue"
      class="white--text"
    >
      <small> by logiqueue-OC</small>
      <v-spacer></v-spacer>
      <small>&copy; 2020 - <small>logiqueue open source</small></small>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      drawerRight: null,
      right: false,
      left: false,
    }),
  }
</script>
