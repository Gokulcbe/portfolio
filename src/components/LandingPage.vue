<template>
  <div id="home" class="landing-page">
    <div class="landing-page-content">
      <div class="landing-page-content-left">
        <img src="../assets/passport2.jpg" alt="Profile" class="profile-image">
      </div>
      <div class="landing-page-content-right">
        <div class="content-column">
          <h2 class="content-header">I'm a Full Stack Developer</h2>
          <p class="content-description">I'm Gokul, a passionate Software Engineer at Quinbay in Coimbatore. I
            specialize in building full-stack applications that deliver real value to users and businesses.</p>
          <button @click="downloadResume" class="content-button">See my Resume</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  methods: {
    downloadResume() {
      const resumeUrl = '/assets/Resume_GokulD.pdf';
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.setAttribute('download', 'Resume_GokulD.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}
</script>

<style scoped>
.landing-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: rgb(236, 239, 244);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.landing-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(45deg, #8f94fb, #4e54c8);
  border-radius: 0 0 100% 0;
  z-index: 1;
}

.landing-page-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  max-width: 1200px;
  width: 100%;
  position: relative;
  z-index: 2;
}

.landing-page-content-left {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-image {
  width: 450px;
  height: 450px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.landing-page-content-right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-column {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 500px;
}

.content-header {
  font-family: Manrope, sans-serif;
  font-size: 41px;
  font-weight: 700;
  color: rgb(52, 62, 81);
  margin: 0;
}

.content-description {
  font-family: Manrope, sans-serif;
  font-size: 20px;
  line-height: 1.6;
  color: rgb(96, 105, 123);
  margin: 0;
}

.content-button {
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  background-color: var(--primary-color, #3b82f6);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: fit-content;
}

.content-button:hover {
  background-color: var(--primary-color-dark, #2563eb);
}

@media (max-width: 992px) {
  .landing-page-content {
    flex-direction: column;
    gap: 2rem;
  }

  .profile-image {
    width: 300px;
    height: 300px;
  }

  .content-column {
    text-align: center;
    align-items: center;
  }
}
</style>