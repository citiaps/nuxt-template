<template>
  <main class="container">
    <div class="container-body container-body-right"> 
    <div>
      <Logo />
      <h1 class="title">
        nuxt-template
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
    </div>
    <div class="container-side container-side-left">
      <h2>{{$store.getters['store/getConfigText'].example.title}}</h2>
      <ul v-for="c in corgis">
        <li>
         <router-link :to="'/corgi/'+c.id">{{c.name}}</router-link>
       </li>
      </ul>
    </div>
  </main>
</template>

<script>

export default {
  name: 'example',
  components: {
  },
  data(){
    return{
      corgis:[ {name: "Corgi 1", id: 1}, {name: "Corgi 2", id: 2}, {name: "Corgi 3", id: 3}, {name: "Corgi 4", id: 4} ]
    }
  }
}
</script>