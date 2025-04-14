<template>
    <div class="layout-wrapper">
        <Menubar :model="items" class="layout-topbar" :class="{ 'fixed-top': !isFixed }">
            <template class="layout-topbar-img" #start>
                <img src="../assets/gokul-logo.png" alt="logo">
            </template>
            <template #item="{ item, props, hasSubmenu, root }">
                <a v-ripple class="flex items-center" v-bind="props.action">
                    <span class="text-label">{{ item.label }}</span>
                    <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
                    <span v-if="item.shortcut"
                        class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{
                            item.shortcut }}</span>
                    <i v-if="hasSubmenu"
                        :class="['pi pi-angle-down ml-auto', { 'pi-angle-down': root, 'pi-angle-right': !root }]"></i>
                </a>
            </template>
            <template #end>
                <ul class="social-list">
                    <li>
                        <a href="#" class="social-link">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="social-link">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="social-link">
                            <ion-icon name="logo-dribbble"></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="social-link">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="social-link">
                            <ion-icon name="logo-youtube"></ion-icon>
                        </a>
                    </li>
                </ul>
            </template>
        </Menubar>

    </div>
</template>

<script src="./js/menubar.js"></script>
<style scoped>
.layout-wrapper {
    display: flex;
    flex-direction: column;
}

.layout-topbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background-color: white;
    box-shadow: var(--shadow-1, 0 2px 4px rgba(0, 0, 0, 0.1));
    z-index: 4;
    gap: 30px;
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
}

.layout-topbar.fixed-top {
    position: fixed;
    top: 45px;
    max-width: 960px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: var(--radius-8, 8px);
}

.layout-topbar img {
    margin-left: 16px;
    margin-right: 16px;
    height: 40px;
}

.text-label {
    font-family: Manrope, sans-serif;
    font-size: 16px;
    font-weight: 700;
}

.social-list {
    display: flex;
    gap: 8px;
}

.social-list li {
    list-style: none;
}

.social-link {
    color: var(--text-color, #666);
    font-size: 18px;
    transition: 0.25s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.social-link:is(:hover, :focus) {
    color: var(--primary-color, #3b82f6);
}

@media (max-width: 991px) {
    .social-list {
        display: none;
    }
}
</style>