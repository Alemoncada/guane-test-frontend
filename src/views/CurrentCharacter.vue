
<template >
        <b-container class="container pt-5 pb-20 mb-0" >
            <h1 class="title text-center">{{currentCharacter.name}} </h1>
            <hr />
            <b-row class="mt-5" >
                <b-col md="4">
                    <b-img fluid v-bind:src="currentCharacter.image" v-bind:alt="currentCharacter.name" class="animate__animated animate__fadeInTopLeft "></b-img>
                </b-col>
                <b-col md="8">
                    
                    <b-list-group border-variant="danger" class=" animate__animated animate__fadeInTopRight"> 
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
            <div id="nav">
                <router-link to="/"><b-button  variant="success" class="mr-2" >Home</b-button></router-link>
                <router-link to="/Search"><b-button  variant="success" class="ml-2">Search</b-button></router-link>
            </div>
            
        </b-container>
    
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




