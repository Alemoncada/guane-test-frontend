import Vue from 'vue'
import Vuex from 'vuex'
import  axios from 'axios'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {

    characters:[],
    currentCharacter: [],
    episodes:[],      
    page: 1,
    pages: 1,        
    
  },
  mutations: {
    set_characters(state, characters){
      state.characters = characters;

    },

    set_currentCharacter(state, currentCharacter){
      state.currentCharacter = currentCharacter;
      
    }


  },
  actions: {

    getCharacters({commit}){  
      
      const params = {
        page: `${this.state.page}`
      }

      axios.get("https://rickandmortyapi.com/api/character", {params})
      .then((res)=>{
        commit('set_characters', res.data.results) ;        
      })
    },    

    getCurrentCharacter({commit}, characterName){

        
       
      axios.get(`https://rickandmortyapi.com/api/character/${characterName}`)
      .then((res)=>{
        commit('set_currentCharacter', res.data) ;        

        this.state.episodes =[]
        for (let episode of this.state.currentCharacter.episode){
          axios.get(episode)
          .then((res)=>{ 
          console.log(res.data.name)          
          this.state.episodes.push(res.data.name) ;
           
          })
          
         }      
                
      })    
    },        
  },

  modules: {
  }
})

