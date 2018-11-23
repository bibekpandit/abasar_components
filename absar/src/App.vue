<template>
  <v-app>
    <navbar></navbar>
    <!-- <v-content>
      <HelloWorld/>
    </v-content> -->
    <grid-list></grid-list>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import GridList from './components/GridList'
import Navbar from './components/Navbar'

export default {
	name: 'App',
	components: {
		HelloWorld,
    GridList,
    Navbar
	},
	data() {
		return {
			//
		}
	}
}
</script>
