<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Abasar</span>
        <!-- <span class="font-weight-light">MATERIAL DESIGN</span> -->
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <!-- <v-content>
      <HelloWorld/>
    </v-content> -->
    <grid-list></grid-list>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import GridList from './components/GridList'

export default {
	name: 'App',
	components: {
		HelloWorld,
		GridList
	},
	data() {
		return {
			//
		}
	}
}
</script>
