<template>
  <ul @click="close">
    <li><router-link to="/profile">Mi Perfil</router-link></li>
    <li><a href="#" @click="logout">Cerrar sesión</a></li>
  </ul>
</template>
<script>
export default{
  methods:{
    close(){
      this.$emit('close')
    },
    logout:function(){
      console.log('logout()')
      this.$store.commit('removeJwtToken');
      this.$router.push('login');
    }
  },
}
</script>