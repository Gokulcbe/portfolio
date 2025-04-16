<template>
  <footer class="footer">
    <div class="container">
      <p class="copyright">
        © 2025 Gokul D. Portfolio website.
      </p>
      <ul class="social-list">
        <li>
          <a href="https://www.instagram.com/gokul_d_14/" target="_blank" class="social-link">
            <ion-icon name="logo-instagram" role="img" class="md hydrated" aria-label="logo instagram"></ion-icon>
          </a>
        </li>
        <li>
          <a href="#" class="social-link">
            <ion-icon name="logo-facebook" role="img" class="md hydrated" aria-label="logo facebook"></ion-icon>
          </a>
        </li>
        <li>
          <a href="https://github.com/Gokulcbe" target="_blank" class="social-link">
            <ion-icon name="logo-github" role="img" class="md hydrated" aria-label="logo github"></ion-icon>
          </a>
        </li>
        <li>
          <a href="https://steamcommunity.com/id/Gokulcbe/" target="_blank" class="social-link">
            <ion-icon name="logo-steam" role="img" class="md hydrated" aria-label="logo steam"></ion-icon>
          </a>
        </li>
        <li>
          <a href="#" class="social-link">
            <ion-icon name="logo-whatsapp" role="img" class="md hydrated" aria-label="logo whatsapp"></ion-icon>
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #f0f0f0;
  padding: 20px 0;
  text-align: center;
}

.social-list {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.social-list li {
  list-style: none;
}

.social-list li a {
  color: #333;
}

.social-list li a:hover {
  color: #3b82f6;
}
</style>