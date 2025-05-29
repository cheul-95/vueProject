<template>
  <div id="app">
    <AppHeader />
    <main>
      <HelloWorld/>
      <section id="skills"><h2>02. Skills</h2><p>기술스택...</p></section>
      <section id="projects"><h2>03. Projects</h2><ProjectList /></section>
      <section id="contact"><h2>04. Contact</h2><p>연락처...</p></section>
    </main>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'App',
  components: {
    AppHeader,
    HelloWorld
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
}

main{
  padding-top : 65px;
}

html {
  scroll-behavior: smooth;
}
</style>
