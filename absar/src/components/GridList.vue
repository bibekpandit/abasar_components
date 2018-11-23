<template>
  <div>
    <div style="margin-top: 100px"></div>
    <h2>{{ test }}</h2>
    <h2>{{ clickedCard }}</h2>
    <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-actions>
          <v-select :items="items" v-model="size" label="Size"></v-select>
          <v-spacer></v-spacer>
        </v-card-actions>
        <v-container v-bind="{ [`grid-list-${size}`]: true }" fluid>
          <v-layout row wrap>
            <v-flex
              v-for="n in 9"
              :key="n"
              xs4
            >
              <v-card flat tile>
                <v-img
                  @click="clickedCard = n"
                  :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
                  height="150px"
                ></v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
import db from '@/firebase/init.js'

export default {
  async created() {
    const ref = db.collection('Tests').doc('BEXbfP0ewRJtYCy4hy5Q')
    const fetchedDoc = await ref.get() 
    if (fetchedDoc.exists) {
      const data = fetchedDoc.data() 
      console.log('data =', data)
      this.test = data.value 
    }
  },
	data: () => ({
    test: 'test',
		size: 'md',
		items: [
			{ text: 'Extra small (2px)', value: 'xs' },
			{ text: 'Small (4px)', value: 'sm' },
			{ text: 'Medium (8px)', value: 'md' },
			{ text: 'Large (16px)', value: 'lg' },
			{ text: 'Extra large (24px)', value: 'xl' }
		],
		clickedCard: 'Default Text'
	})
}
</script>