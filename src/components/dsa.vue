<template>
<v-app id="inspire">
    <div>
      <v-app-bar
        color="deep-purple accent-4"
        dense
        dark

      >
  
        <v-toolbar-title>Data structures algorithms</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        
  
        <v-menu
          left
          bottom
          max-width="1200"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
  
          <v-list>
           <router-link :to="{name:'sortingalgo'}"> <v-list-item>
              Searching algos
            </v-list-item>
           </router-link>

           <router-link :to="{name:'sortingalgo'}">
            <v-list-item>
              Sorting algos
            </v-list-item>
           </router-link>

            <v-list-item>
              Stacks and queues
            </v-list-item>
            <v-list-item>
              infix postfix
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
    </div>
    <router-view/>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: 'Searchiing algos' },
      { title: 'Sorting algos' },
      { title: 'Infix to postfix' },
      { title: 'Stacks and queues' },
    ],
  }),
}
</script>