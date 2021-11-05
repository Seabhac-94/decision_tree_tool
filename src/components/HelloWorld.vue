<template>
  <div id="app">
      <img
        v-bind:src="picture"
        :alt="`${firstName} ${lastName}`"
        :class="gender"
      />
      <h1>{{firstName}} {{lastName}}</h1>
      <h3>Email: {{email}}</h3>
      <button :class="gender" @click="getUser()">Get Random User</button>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/10.jpg',
    }
  },
  methods: {
    async getUser() {
      const res = await fetch('https://randomuser.me/api')
      const { results } = await res.json()

      // console.log(results)

      this.firstName = results[0].name.first
      this.lastName = results[0].name.last
      this.email = results[0].email
      this.gender = results[0].gender
      this.picture = results[0].picture.large
    }
  }
}
</script>





<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
