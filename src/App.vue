<template>
  <HomePage />
</template>

<script>
import HomePage from './components/HomePage.vue'

export default {
	name: 'App',
	components: {
		HomePage
	}
}
</script>

<style lang="scss">
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

button {
  margin-top: 0.8rem;
  border: none;
  background-color: black;
  color: white;
  padding: 0.5rem;

  &:hover {
    background-color: white;
    color: black;
    border: 2px solid black;
  }
}
</style>
