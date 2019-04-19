<template>
  <div class='index'>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  created: function () {
    firebase.auth().signOut().then(() => {
      localStorage.removeItem('jwt')
      this.$router.push('/signin')
    })
  }
}
</script>
