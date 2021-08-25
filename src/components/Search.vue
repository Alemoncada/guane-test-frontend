<template>
    <div>
        <div>
            <b-navbar type="dark" variant="dark">
                <b-nav-form>
                <b-form-input v-model="search" class="mr-sm-2" placeholder="character name..." v-on:keyup.enter="searchData"></b-form-input>
                <b-button variant="outline-success" class="my-2 my-sm-0" type="submit" @click="searchData" >Search</b-button>
                <router-link to="/"><b-button  variant="outline-success" class="my-2 my-sm-0" >Home</b-button></router-link>
                </b-nav-form>
            </b-navbar>        
        </div>
        
        <b-row class="mx-3 justify-content-center">
        <character deck v-for="(character) in characters"  v-bind:key="character.id" v-bind:character="character"/>
        </b-row>
        <div id="nav">
                <router-link to="/"><b-button  variant="success" >Home</b-button></router-link>
        </div>

    </div>
</template>

<script>
import Character from '@/components/Character.vue';

export default{

    data(){
        return{
        characters: this.$store.state.characters.filter(character => character.name.toLocaleLowerCase().includes('rick sanchez')),
        search: '',
    }
    },

  components:{
    Character,   
    
  },
   
  methods:{
  
    searchData(e){  
        e.preventDefault();          
      
        let personages = this.$store.state.characters 
        let search = this.search.toLocaleLowerCase()
        if(personages.filter(character => character.name.toLocaleLowerCase().includes(search))!= ""){
        this.characters = personages.filter(character => character.name.toLocaleLowerCase().includes(search))      
        }else{
          this.characters = this.$store.state.characters.filter(character => character.name.toLocaleLowerCase().includes('rick sanchez'));
        }

    },
    
  }
  
}
</script>

