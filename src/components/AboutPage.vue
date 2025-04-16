<template>
  <div id="about" class="about-page">
    <div class="about-page-content">
      <div class="about-page-content-top">
        <div class="about-page-content-top-left">
          <h2 class="about-page-content-top-left-header">What I Do?</h2>
          <p class="about-page-content-top-left-description">I'm a Full-Stack Developer who's always eager to
            explore every tech stack — from building responsive, interactive frontends with Vue.js to
            crafting powerful, scalable backends with Spring Boot. I thrive on learning, adapting, and
            turning ideas into seamless, high-performance applications.</p>
        </div>
        <div class="about-page-content-top-right">
          <img src="../assets/programmer.svg" alt="Profile" class="about-page-content-top-right-image">
        </div>
      </div>
      <div class="about-page-content-bottom">
        <div class="skills-grid">
          <div v-for="(skill, index) in skills" :key="index" class="skill-item">
            <img :src="skill.img" :alt="skill.name" />
            <span>{{ skill.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/aboutpage.js"></script>


<style scoped>
.about-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* min-height: 100vh; */
  background-color: white;
  position: relative;
  overflow: hidden;
}

.about-page-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 1200px;
  width: 100%;
  position: relative;
  z-index: 2;
}

.about-page-content-top {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
  /* width: 100%; */
}

.about-page-content-top-left {
  flex: 1;
}

.about-page-content-top-left-header {
  font-family: Manrope, sans-serif;
  font-size: 41px;
  font-weight: 700;
  color: rgb(52, 62, 81);
  margin-bottom: 1.5rem;
}

.about-page-content-top-left-description {
  font-family: Manrope, sans-serif;
  font-size: 20px;
  font-weight: 400;
  color: rgb(96, 105, 123);
  line-height: 1.6;
}

.about-page-content-top-right {
  flex: 1;
  display: flex;
  justify-content: center;
}

.about-page-content-top-right img {
  width: 70%;
  height: auto;
  object-fit: contain;
}

@media (max-width: 768px) {
  .about-page-content-top {
    flex-direction: column-reverse;
    text-align: center;
    gap: 2rem;
  }

  .about-page-content-top-left-header {
    font-size: 32px;
  }

  .about-page-content-top-left-description {
    font-size: 16px;
  }

  .about-page-content-top-right img {
    width: 60%;
  }

  .about-page::before {
    height: 40%;
  }
}

.about-page-content-bottom {
  width: 100%;
  margin-top: 4rem;
  text-align: center;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 4rem;
  justify-items: center;
  align-items: start;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.skill-item img {
  width: 120px;
  height: 120px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.skill-item:hover img {
  transform: translateY(-5px);
}

.skill-item span {
  font-family: Manrope, sans-serif;
  font-size: 14px;
  color: rgb(96, 105, 123);
}

@media (max-width: 768px) {
  .skills-header {
    font-size: 32px;
  }

  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 1rem;
  }

  .skill-item img {
    width: 40px;
    height: 40px;
  }
}
</style>
