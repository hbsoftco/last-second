<template>
    <div class="app-header-container">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="~/assets/img/logo.png" alt="last-second-logo" height="30" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li v-for="menu in menus" :key="menu.name" class="nav-item">
                            <a class="nav-link" :href="menu.link">{{ menu.name }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>


<script setup lang="ts">
import type { IMenuItem } from '~/types/IMenuItem';

const menus: IMenuItem[] = [
    {
        name: 'خانه',
        link: '/',
        items: []
    },
    {
        name: 'تور',
        link: '',
        items: []
    },
    {
        name: 'هتل',
        link: '',
        items: []
    },
    {
        name: 'بلیط هوایپما',
        link: '',
        items: []
    },
    {
        name: 'سفرنامه',
        link: '',
        items: []
    },
    {
        name: 'بلاگ',
        link: '',
        items: []
    },
    {
        name: 'رستوران',
        link: '',
        items: []
    },
    {
        name: 'جاذبه گردشگری',
        link: '',
        items: []
    },
    {
        name: 'ویدئو',
        link: '',
        items: []
    },
    {
        name: 'تماس با ما',
        link: '',
        items: []
    },
]
</script>

<style scoped lang="scss">
.app-header-container {
    padding: 0.7rem;
    height: 80px;
    background: $white;
}
</style>