<template>
  <div id="app">
    <modal />
  </div>
</template>;

<script>
import Modal from "./components/Modal.vue";
export default {
  name: "app",
  components: {
    Modal
  }
};
</script>

<style>

#app {

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {

  background-color: #0abf53; /* Green */
  border: 0.3rem #ffff;
  outline: 1px solid #ffff;
  outline-offset: -0.1rem;
  margin: 5px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 0.5rem;
  font-size: 16px;
}

.breadcrumb {
  position: relative;
  background-color: #ffff; /* Green */
  outline: 1px solid #0abf53;
  outline-offset: -0.1rem;
  color: #0abf53;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 0.5rem;
  font-size: 12px;  
  animation: fadeIn 500ms ease-out backwards;

}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}


.bc-container {
  margin-left:0;
  position: relative;
  display: flex;
}

.card {
  padding: 1.5rem;
}

.card-node {
  position: relative;
  padding: 2rem;
  border: solid 2px #0abf53;
  border-radius: 0.8rem;
  margin: 0.5rem;
  padding-bottom: 0;

}

.card-title {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 4rem;
}


</style>