<template>
    <div class="not-found-page">
        <h1>404</h1>
        <p>Page not found</p>
        <router-link to="/">Go back to home</router-link>
    </div>
</template>

<style scoped>
.not-found-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.not-found-page h1 {
    font-size: 100px;
    font-weight: 700;
}

.not-found-page p {
    font-size: 20px;
    font-weight: 500;
}
</style>