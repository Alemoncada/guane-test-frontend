<template>      
  <b-col cols="12" md="4" class="mt-5">
    <b-card-group deck>
      <b-card
        border-variant="success"
        v-bind:header="character.name"
        header-bg-variant="info"
        header-text-variant=" danger lead font-weight-bold font-italic"
        align="center"
      >                           
        <b-list-group flush>
          <b-img v-bind:src="character.image" fluid v-bind:alt="character.name"></b-img>
          <b-list-group-item><span class="font-weight-bold text-success">Status :</span> {{character.status}}</b-list-group-item>
          <b-list-group-item><span class="font-weight-bold text-success">Specie :</span> {{character.species}}</b-list-group-item>
          <b-list-group-item ><span class="font-weight-bold text-success">Planet origin :</span> {{character.origin.name}}</b-list-group-item>
          <b-list-group-item ><span class="font-weight-bold text-success">Planet location:</span> {{character.location.name}}</b-list-group-item>
        </b-list-group>
        <router-link :to="{name: 'CurrentCharacter', params: {name: this.$store.state.characters.indexOf(character) + 1}}"><b-button  variant="success" >More info</b-button></router-link>
        </b-card>      
    </b-card-group>
  </b-col>    
       
</template>


<script>
import axios from 'axios'

export default {
  props:['character'], 
  
   data: function(){
    return {
      planet:'',
      
    }
  },

  created(){
    this.fetch()    
  },

  methods:{
    
    fetch(){        
      axios.get(this.character.homeworld)
      .then((res)=>{
        this.planet = res.data.name;                     
      })
    }, 
         
  } 
}

</script>