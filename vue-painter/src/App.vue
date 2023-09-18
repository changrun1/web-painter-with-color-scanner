<template>
  <div id="app">
    <CanvasPainter />
  </div>
</template>

<script>
import CanvasPainter from './components/CanvasPainter.vue';

export default {
  components: {
    CanvasPainter
  }
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html, body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
</style>
