<template >
    <div>
    <b-container class="pt-5 mb-0">
        <h1 class="title text-center ">{{currentCharacter.name}} </h1>
        <hr />
        <b-row class="mt-5" >
            <b-col md="4">
                <b-img fluid v-bind:src="currentCharacter.image" v-bind:alt="currentCharacter.name"></b-img>
            </b-col>
            <b-col md="8">
                
                <b-list-group border-variant="danger">
                    <b-list-group-item><span class="font-weight-bold text-info">Status: </span>{{currentCharacter.status}} </b-list-group-item>
                    <b-list-group-item><span class="font-weight-bold text-info">Specie: </span>{{currentCharacter.species}}</b-list-group-item>
                    <b-list-group-item><span class="font-weight-bold text-info">Gender: </span>{{currentCharacter.gender}}</b-list-group-item>
                    <b-list-group-item><span class="font-weight-bold text-info">Origin Pĺanet: </span>{{currentCharacter.origin.name}}</b-list-group-item>
                    <b-list-group-item><span class="font-weight-bold text-info">Location place: </span>{{currentCharacter.location.name}}</b-list-group-item>
                    <b-list-group-item>
                        <span class="font-weight-bold text-info"> Episodes: </span>
                        <ul v-for="(episode) in this.$store.state.episodes" v-bind:key="episode.id"  > <li>{{episode}}  </li> </ul>
                    </b-list-group-item>                                         
                 </b-list-group> 
            </b-col>
        </b-row>
    </b-container>
     <div id="nav">
      <router-link to="/"><b-button  variant="success" >Home</b-button></router-link>
    </div>
    </div>
</template>

<script>

export default {
    name: 'currentCharacter',

    props:['name'],
    
    computed:{
        currentCharacter(){
            return this.$store.state.currentCharacter
        },

        
    },

    mounted(){
        return this.$store.dispatch('getCurrentCharacter', this.name)
        
    },   
}
</script>




