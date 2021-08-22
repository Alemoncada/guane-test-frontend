<template >

  <div class="container py-5">
    <div class="text-center">
      <h1 class="font-weight-bold title">Rick and Morty App</h1>
    </div>

    <div >
      <b-row class="justify-content-center" >
        <character  v-for="(character) in characters" v-bind:key="character.id" v-bind:character="character" />
      </b-row>
    </div>

     <div class="mt-5" >
      <b-row class="justify-content-center">
        <b-button @click="changePageFirst()" class="m-2">First</b-button>
        <b-button @click="changePageA()" class="m-2">Prev</b-button>
        <h1> <b-badge>{{this.$store.state.page}}</b-badge></h1>
        <b-button @click="changePageB()" class="m-2">Next</b-button>
        <b-button @click="changePageLast()" class="m-2">Last</b-button>               
      </b-row>
    </div>

   
    
  </div>
  
</template>

<script>
import Character from '@/components/Character.vue';

export default{
  components:{
    Character
    
  },

  computed:{
    characters(){
      return this.$store.state.characters;
    },
   
  },

  mounted(){
      return this.$store.dispatch('getCharacters');
      
  },

  methods:{
    changePageA(){
     this.$store.state.page = this.$store.state.page >= 2 ? this.$store.state.page - 1 : this.$store.state.page,
      this.$store.dispatch('getCharacters');
    },

    changePageB(){
     this.$store.state.page = this.$store.state.page < 34 ? this.$store.state.page + 1 : this.$store.state.page,
     this.$store.dispatch('getCharacters');
    },

    changePageFirst(){
     this.$store.state.page = 1,
     this.$store.dispatch('getCharacters');
    },

    changePageLast(){
     this.$store.state.page = 34,
     this.$store.dispatch('getCharacters');
    },

  }
  
}
</script>