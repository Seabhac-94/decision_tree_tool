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
    background-color: #10776e; /* Green */
    border: 0.3rem #ffff;
    outline: 1px solid #ffff;
    outline-radius: 0.5rem;
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
</style>