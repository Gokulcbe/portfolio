<template>
  <div class="blog-component" id="blogs">
    <h2 class="section-title">Latest Blog Posts</h2>
    <Carousel class="blog-carousel" :value="blogPosts" :numVisible="2" :numScroll="1"
      :responsiveOptions="responsiveOptions">
      <template #item="slotProps">
        <div class="blog-card" @click="navigateToBlog(slotProps.data.slug)">
          <div class="blog-image">
            <img :src="slotProps.data.image" :alt="slotProps.data.title" />
          </div>
          <div class="blog-content">
            <h3 class="blog-title">{{ slotProps.data.title }}</h3>
            <p class="blog-description">{{ slotProps.data.description }}</p>
            <div class="blog-footer">
              <span class="blog-date">{{ slotProps.data.date }}</span>
              <Button label="Read More" class="p-button-text" />
            </div>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script>
import Carousel from 'primevue/carousel';
import Button from 'primevue/button';

export default {
  components: {
    Carousel,
    Button
  },
  data() {
    return {
      blogPosts: [
        {
          title: 'Getting Started with Reactive Java',
          description: 'Learn the basics of Reactive java and its core concepts',
          image: '/assets/images/reactive-programming/reactive-java-cover.png',
          date: 'Apr 14, 2025',
          slug: 'reactive-java'
        },
        {
          title: 'State Management using Pinia',
          description: 'Learn how to manage global state in your Vue 3 apps with Pinia — the modern, intuitive alternative to Vuex.',
          image: '/assets/images/state-management/pinia-cover.jpg',
          date: 'Apr 15, 2025',
          slug: 'state-management'
        },
        {
          title: 'Spring Security with JWT',
          description: 'Learn how to secure your APIs with Spring Security and JWT',
          image: '/assets/images/spring-security/spring-security.png',
          date: 'Apr 16, 2025',
          slug: 'spring-security'
        }
      ],
      responsiveOptions: [
        {
          breakpoint: '1400px',
          numVisible: 2,
          numScroll: 1
        },
        {
          breakpoint: '1199px',
          numVisible: 3,
          numScroll: 1
        },
        {
          breakpoint: '767px',
          numVisible: 2,
          numScroll: 1
        },
        {
          breakpoint: '575px',
          numVisible: 1,
          numScroll: 1
        }
      ]
    }
  },
  methods: {
    navigateToBlog(slug) {
      this.$router.push(`/blog/${slug}`);
    }
  }
}
</script>

<style scoped>
.blog-component {
  padding: 4rem 2rem;
  background-color: #f8fafc;
}

.section-title {
  text-align: center;
  font-family: Manrope, sans-serif;
  font-size: 41px;
  font-weight: 700;
  color: rgb(52, 62, 81);
  margin-bottom: 50px;
}

.blog-carousel {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.blog-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  transition: transform 0.3s ease;
  cursor: pointer;
  overflow: hidden;
}

.blog-card:hover {
  transform: translateY(-5px);
}

.blog-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog-content {
  padding: 1.5rem;
}

.blog-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.75rem;
}

.blog-description {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.blog-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}

.blog-date {
  font-size: 0.85rem;
  color: #888;
}

@media (max-width: 991px) {
  .blog-component {
    padding: 1.5rem 0.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .blog-carousel {
    padding: 0.5rem;
  }

  .blog-card {
    margin: 0.5rem;
  }

  .blog-image {
    height: 150px;
  }

  .blog-content {
    padding: 1rem;
  }

  .blog-title {
    font-size: 1.1rem;
  }

  .blog-description {
    font-size: 0.85rem;
  }

  .blog-footer {
    padding-top: 0.75rem;
  }

  .blog-date {
    font-size: 0.75rem;
  }
}
</style>
