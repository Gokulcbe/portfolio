<template>
  <div class="blog-page" v-html="htmlContent"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'
import router from '@/router'

const htmlContent = ref('')
const route = useRoute()

onMounted(async () => {
  try {
    const blogName = route.params.blogname
    const mdFile = await import(`@/assets/blogs/${blogName}.md?raw`)
    htmlContent.value = marked.parse(mdFile.default)
  } catch (error) {
    router.push('/not-found')
  }
})
</script>

<style>
.blog-page {
  max-width: 900px;
  margin: auto;
  padding: 2rem;
  line-height: 1.6;
  white-space: normal;
}

.blog-page img {
  width: 100%;
  height: auto;
}

.blog-page h1,
.blog-page h2,
.blog-page h3,
.blog-page h4,
.blog-page h5,
.blog-page h6 {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.blog-page p {
  margin-bottom: 1.2rem;
}

.blog-page ul {
  /* padding-left: 1.5rem; */
  margin-bottom: 1.2rem;
}

.blog-page li {
  margin-bottom: 0.6rem;
}

/* .blog-page code {
  background-color: #f5f5f5;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: monospace;
} */

.blog-page pre {
  background-color: #f0f0f0;
  padding: 1rem;
  overflow-x: auto;
  border-radius: 6px;
  margin-bottom: 1.5rem;
}
</style>