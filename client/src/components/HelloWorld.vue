<template>
  <section id="about">
    <div class="section1">
      <div class="welcom-ment1">모던 기술로 사용자 경험을 설계하는</div>
      <div class="welcom-ment2">프론트엔드 개발자 이상철</div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>
<style>
#about{
  background: linear-gradient(180deg, rgba(112, 93, 80, .8) 0, rgba(112, 93, 80, .8) 90%);
  background-size: cover;
  width: 100vw;  /* viewport width */
  height: calc(100vh - 57px); /* viewport height */
}
.section1{
text-align:center;
align-items: center;
}
</style>