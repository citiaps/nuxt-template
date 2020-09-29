<template>
  <main class="container">
    <div class="container-body">    
      <h2>Corgi {{corgiNumber}}</h2>
      <img class="example-img" :src="getImgUrl('corgi_'+corgiNumber+'.jpg')"></img>
    </div>
  </main>
</template>

<script>

export default {
  name: 'corgi',
  components: {
  },
  methods: {
    getImgUrl(pic) {
      return require('../../assets/img/corgis/'+pic)
    }
  },
  computed:{
    corgiNumber: function(){
      return this.$route.params.id
    }
  }
}
</script>