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
      <h2>{{$store.getters['store/getConfigText'].index.title}}</h2>
      <p>{{$store.getters['store/getConfigText'].index.content}}</p>
    </div>
  </main>
</template>

<script>

export default {
  name: 'home',
  components: {
  }
}
</script>



