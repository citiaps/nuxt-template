<template>
  <div id="app" class="wrapper">
    <notifications :max="10" :width="450" ></notifications>
    <header class="header">
      <div class="logo">
        <img svg-inline src="@/assets/img/corgi.svg"></img>
        <span>Logo</span>
      </div>
      <nav class="topnav" >
        <ul >
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/ejemplo">Ejemplo</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <nuxt/>
    <footer>
        <div class="watermark">
          © Citiaps 2019
        </div>
      </footer>
      <img svg-inline src="@/assets/img/icons.svg"></img>
  </div>

</template>

<script>
import UserMenuOpts from '@/components/UserMenuOpts.vue';
export default{
	components:{
		UserMenuOpts
	}
}
</script>
