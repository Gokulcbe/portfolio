<template>
  <div id="contact" class="contact-page">
    <div class="contact-card">
      <div class="contact-container">
        <div class="contact-left">
          <div class="email-icon">
            <i class="pi pi-envelope"></i>
          </div>
          <h2 class="contact-title">
            Let's get to know each other
          </h2>
          <p class="contact-description">
            Send me a message and I will get back to you shortly.
          </p>
          <h4 class="contact-description">
            Apart from Tech and software, I'm also interested & love to watch movies & TV shows. Follow me
            on
          </h4>
          <div class="social-icon">
            <a href="https://letterboxd.com/gokuld/" target="_blank" class="social-link">
              <div class="preview-container">
                <img src="../assets/letterboxd-preview.png" alt="letterboxd preview" class="preview-image">
              </div>
              <img src="../assets/letterboxd.png" alt="letterboxd" class="social-icon-image">
            </a>
            <a href="https://www.serializd.com/user/gokuld14" target="_blank" class="social-link">
              <div class="preview-container">
                <img src="../assets/serializd-preview.png" alt="serializd preview" class="preview-image">
              </div>
              <img src="../assets/serializd.png" alt="serializd" class="social-icon-image">
            </a>
          </div>
        </div>
        <div class="contact-right">
          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-group">
              <input type="text" v-model="formData.name" placeholder="Name *" required>
            </div>
            <div class="form-group">
              <input type="email" v-model="formData.email" placeholder="Email *" required>
            </div>
            <div class="form-group">
              <textarea v-model="formData.message" placeholder="Message *" required rows="5"></textarea>
            </div>
            <button type="submit" class="send-button">
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      // Handle form submission logic here
      console.log('Form submitted:', this.formData)
      // Reset form after submission
      this.formData = {
        name: '',
        email: '',
        message: ''
      }
    }
  }
}
</script>

<style scoped>
.contact-page {
  min-height: 100vh;
  background-color: white;
  padding: 64px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-card {
  background: #FFF5F6;
  border-radius: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 1200px;
  padding: 64px;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  width: 100%;
}


.email-icon {
  width: 48px;
  height: 48px;
  background: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
}

.email-icon i {
  font-size: 24px;
  color: #E91E63;
}

.contact-title {
  font-family: 'Manrope', sans-serif;
  font-size: 42px;
  font-weight: 700;
  color: #2D3748;
  line-height: 1.3;
  margin-bottom: 24px;
}


.contact-description {
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  color: #718096;
  line-height: 1.6;
  margin-bottom: 32px;
}


.form-group {
  margin-bottom: 24px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 16px;
  border: 2px solid #E2E8F0;
  border-radius: 12px;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  color: #2D3748;
  transition: all 0.3s ease;
  background: white;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #E91E63;
  background: white;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #A0AEC0;
}

.send-button {
  background: #E91E63;
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: 100px;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  /* width: auto; */
  /* display: inline-block; */
}

.send-button:hover {
  background: #D81B60;
  transform: translateY(-2px);
}

.social-icon {
  display: flex;
  gap: 30px;
  align-items: center;
}

.social-link {
  transition: all 0.3s ease;
  display: block;
  position: relative;
}

.preview-container {
  position: absolute;
  bottom: calc(100% + 15px);
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  opacity: 0;
  /* visibility: hidden; */
  transition: all 0.3s ease;
  z-index: 10;
}

.preview-image {
  width: 400px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.preview-container::after {
  content: '';
  position: absolute;
  /* top: 100%;
    left: 50%;
    transform: translateX(-50%); */
  border-width: 8px;
  border-style: solid;
  border-color: white transparent transparent transparent;
}

.social-link:hover .preview-container {
  opacity: 1;
  /* visibility: visible; */
  /* transform: translateX(-50%) translateY(0); */
}

.social-icon-image {
  width: 30px;
  transition: all 0.3s ease;
  /* filter: brightness(1); */
}

@media (max-width: 992px) {
  .contact-card {
    padding: 48px;
  }

  .contact-container {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .contact-left {
    padding-right: 0;
    text-align: center;
  }

  .email-icon {
    margin: 0 auto 32px;
  }

  .contact-title {
    font-size: 36px;
  }

  .contact-description {
    font-size: 16px;
  }
}

@media (max-width: 576px) {
  .contact-page {
    padding: 24px 16px;
  }

  .contact-card {
    padding: 32px 24px;
    border-radius: 16px;
  }

  .contact-title {
    font-size: 28px;
  }

  .form-group input,
  .form-group textarea {
    padding: 12px;
    font-size: 14px;
  }

  .send-button {
    width: 100%;
    padding: 14px 24px;
    font-size: 14px;
  }
}
</style>