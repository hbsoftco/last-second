<template>
    <NuxtLink to="/" class="text-decoration-none">
        <div class="explore-container">
            <div class="explore__image">
                <img :src="image" :alt="title">
            </div>
            <div class="explore__text">
                <div class="explore__text--rate">
                    <div>
                        <p class="mb-0">{{ title }}</p>
                    </div>
                    <div>
                        <Rate type="type-2" number="۴.۳" text="" rate="2" />
                    </div>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">

const props = defineProps({
    title: String,
    image: String,
    rate: Object
});


</script>

<style scoped lang="scss">
.explore-container {
    display: flex;
    justify-content: start;
    align-items: center;
    background: $lightGray;
    margin-bottom: 0.5rem;
    border-radius: 0.4rem;
    overflow: hidden;

    .explore {
        &__text {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
            font-size: 14px;
            color: $textGray;
            width: 100%;

            &--rate {
                flex: 1;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }
    }
}
</style>