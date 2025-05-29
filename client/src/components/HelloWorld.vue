<template>
  <section id="about">
    <div class="section1">
      안녕하세요<br> 
      개발자 이상철<br>
      입니다.
    </div>
  </section>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>
<style>
.section1{
  background: linear-gradient(180deg, rgba(112, 93, 80, .8) 0, rgba(112, 93, 80, .8) 90%),  url(./../assets/notbook.jpg) 10% no-repeat;
  background-size: cover;
  padding:400px 0px 0px 0px;
}
</style>