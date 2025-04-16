<template>
  <div id="experience" class="experience-page">
    <h2 class="section-title">Work Experience</h2>
    <div class="experience-container">
      <div v-for="(exp, index) in experienceData" :key="index" class="experience-card">
        <div class="experience-header">
          <div class="experience-logo">
            <img :src="exp.logo" :alt="exp.company" />
          </div>
          <div class="experience-title">
            <h3>{{ exp.role }}</h3>
            <h4>{{ exp.company }}</h4>
            <div class="experience-period">
              {{ exp.period }}
            </div>
          </div>
        </div>
        <div class="experience-content">
          <p class="experience-description">{{ exp.description }}</p>
          <div class="experience-skills">
            <span v-for="(skill, skillIndex) in exp.skills" :key="skillIndex" class="skill-tag">
              <i :class=skill.icon />
              {{ skill.text }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import quinbayLogo from '../assets/quinbay-logo.png'
import ffgLogo from '../assets/ffg-logo.png'

export default {
  name: 'ExperiencePage',
  data() {
    return {
      experienceData: [
        {
          role: 'Software Engineer',
          company: 'Quinbay Technologies',
          period: 'Jun 2024 - Present',
          description: 'Full Stack Developer with a focus on building scalable web applications using Vue.js, Spring Boot (Reactive), and MongoDB. Experienced in implementing CI/CD pipelines with Git and Jenkins, and transforming Figma designs into responsive, user-friendly interfaces.',
          skills: [{
            icon: 'pi pi-map-marker',
            text: 'Coimbatore, India'
          }, {
            icon: 'pi pi-briefcase',
            text: 'Intern + Full Time'
          }],
          logo: quinbayLogo
        },
        {
          role: 'Junior Engineer',
          company: 'FFG Mag India Industrial Automations',
          period: 'Nov 2020 - Aug 2022',
          description: '1 year in Electrical Engineering handling troubleshooting, wiring, and documentation, followed by 1 year in Production Planning using SAP ERP for procurement, planning, and cross-team coordination to ensure timely machine delivery',
          skills: [{
            icon: 'pi pi-map-marker',
            text: 'Bangalore, India'
          }, {
            icon: 'pi pi-briefcase',
            text: 'Intern + Full Time'
          }],
          logo: ffgLogo
        }
      ]
    }
  }
}
</script>

<style scoped>
.experience-page {
  padding: 64px 32px;
  background-color: white;
  min-height: 100vh;
}

.section-title {
  text-align: center;
  font-family: Manrope, sans-serif;
  font-size: 41px;
  font-weight: 700;
  color: rgb(52, 62, 81);
  margin-bottom: 50px;
}

.experience-container {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.experience-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.experience-card:hover {
  transform: translateY(-5px);
}

.experience-header {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background: linear-gradient(45deg, #8f94fb, #4e54c8);
}

.experience-logo {
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 12px;
  padding: 1rem;
}

.experience-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.experience-title {
  color: white;
}

.experience-title h3 {
  font-family: Manrope, sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.experience-title h4 {
  font-family: Manrope, sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.experience-period {
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  opacity: 0.9;
}


.experience-content {
  padding: 2rem;
}

.experience-description {
  font-family: Manrope, sans-serif;
  font-size: 1rem;
  color: rgb(96, 105, 123);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.experience-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: #f1f5f9;
  color: #4e54c8;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: #4e54c8;
  color: white;
}

@media (max-width: 768px) {
  .experience-page {
    padding: 32px 16px;
  }

  .section-title {
    font-size: 32px;
    margin-bottom: 32px;
  }

  .experience-header {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .experience-logo {
    width: 60px;
    height: 60px;
  }

  .experience-title h3 {
    font-size: 1.25rem;
  }

  .experience-title h4 {
    font-size: 1rem;
  }

  .experience-period {
    justify-content: center;
  }

  .experience-content {
    padding: 1.5rem;
  }

  .experience-description {
    font-size: 0.9rem;
  }

  .skill-tag {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
}
</style>