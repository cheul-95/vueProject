<template>
  <div>
    <h2>📁 프로젝트 목록</h2>
    <ul>
      <li v-for="project in projects" :key="project.title">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <a :href="project.link" target="_blank">🔗 깃허브 링크</a>
      </li>
    </ul>
    <ul>
      <li v-for="project in projects" :key="project.title">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <a :href="project.link" target="_blank">🔗 깃허브 링크</a>
      </li>
    </ul><ul>
      <li v-for="project in projects" :key="project.title">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <a :href="project.link" target="_blank">🔗 깃허브 링크</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProjectList',
  data() {
    return {
      projects: []
    };
  },
  mounted() {
    fetch('/api/projects')
      .then(response => response.json())
      .then(data => {
        this.projects = data;
      })
      .catch(error => {
        console.error('API 요청 실패:', error);
      });
  }
};
</script>

<style>
li {
  border: 1px solid #ddd;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 8px;
}
</style>
