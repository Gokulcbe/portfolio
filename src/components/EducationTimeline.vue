<template>
  <div id="education" class="education-timeline">
    <h2 class="section-title">Education Journey</h2>
    <div class="timeline">
      <div v-for="(education, index) in educationData" :key="index" class="timeline-item"
        :class="{ 'right': index % 2 !== 0 }">
        <div class="timeline-content">
          <div class="timeline-date">{{ education.year }}</div>
          <div class="timeline-card">
            <h3 class="timeline-title">{{ education.degree }}</h3>
            <h4 class="timeline-institution">{{ education.institution }}</h4>
            <p class="timeline-description">{{ education.description }}</p>
            <div class="timeline-score">
              <span class="score-label">{{ education.scoreLabel }}:</span>
              <span class="score-value">{{ education.score }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EducationTimeline',
  data() {
    return {
      educationData: [
        {
          year: '2022 - 2025',
          degree: 'Bachelor of Engineering in Computer Science',
          institution: 'Sri Krishna College of Engineering and Technology',
          description: 'Focused on core computer science concepts, software engineering, and modern web technologies.',
          scoreLabel: 'CGPA',
          score: '8.0/10'
        },
        {
          year: '2017 - 2020',
          degree: 'Diploma in Mechatronics',
          institution: 'PSG Polytechnic College',
          description: 'Completed Diploma in Mechatronics with focus on mechanical, electrical, and control systems.',
          scoreLabel: 'Percentage',
          score: '93.6%'
        },
        {
          year: '2017',
          degree: 'Secondary School Education',
          institution: 'Shree Dharmasastha Matric Higher Secondary School',
          description: 'Completed SSLC with distinction.',
          scoreLabel: 'Percentage',
          score: '93.6%'
        }
      ]
    }
  }
}
</script>

<style scoped>
.education-timeline {
  padding: 64px 32px;
  background-color: #f8fafc;
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

.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
}

.timeline::after {
  content: '';
  position: absolute;
  width: 4px;
  background: linear-gradient(180deg, #8f94fb, #4e54c8);
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  width: 50%;
  padding: 2rem;
}

.timeline-item::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  background: #4e54c8;
  border: 4px solid #fff;
  border-radius: 50%;
  top: 50%;
  right: -10px;
  transform: translateY(-50%);
  z-index: 1;
  box-shadow: 0 0 0 4px rgba(78, 84, 200, 0.2);
}

.timeline-item.right {
  left: 50%;
}

.timeline-item.right::after {
  left: -10px;
}

.timeline-content {
  position: relative;
  padding: 0 2rem;
}

.timeline-date {
  position: absolute;
  top: -30px;
  font-family: Manrope, sans-serif;
  font-weight: 600;
  color: #4e54c8;
  font-size: 1.1rem;
}

.timeline-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.timeline-card:hover {
  transform: translateY(-5px);
}

.timeline-title {
  font-family: Manrope, sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: rgb(52, 62, 81);
  margin-bottom: 0.5rem;
}

.timeline-institution {
  font-family: Manrope, sans-serif;
  font-size: 1.1rem;
  color: #4e54c8;
  margin-bottom: 1rem;
}

.timeline-description {
  font-family: Manrope, sans-serif;
  font-size: 1rem;
  color: rgb(96, 105, 123);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.timeline-score {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: Manrope, sans-serif;
}

.score-label {
  font-weight: 600;
  color: rgb(52, 62, 81);
}

.score-value {
  color: #4e54c8;
  font-weight: 700;
}

@media (max-width: 768px) {
  .timeline::after {
    left: 31px;
  }

  .timeline-item {
    width: 100%;
    padding-left: 70px;
    padding-right: 1rem;
  }

  .timeline-item::after {
    left: 21px;
    right: auto;
  }

  .timeline-item.right {
    left: 0;
  }

  .timeline-item.right::after {
    left: 21px;
  }

  .timeline-content {
    padding: 0;
  }

  .section-title {
    font-size: 32px;
  }

  .timeline-title {
    font-size: 1.25rem;
  }

  .timeline-institution {
    font-size: 1rem;
  }

  .timeline-description {
    font-size: 0.9rem;
  }
}
</style>