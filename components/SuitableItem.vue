<template>
    <NuxtLink to="/" class="text-decoration-none">
        <div class="suitable-container">
            <div :class="['suitable__image', active ? 'border-primary' : 'border-gray']">
                <img :src="image" :alt="title">
            </div>
            <div class="suitable__title">
                <p class="mb-0">{{ title }}</p>
            </div>
            <div class="suitable__percentage">
                <p class="mb-0">{{ percentage }}</p>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">

const props = defineProps({
    active: Boolean,
    title: String,
    image: String,
    percentage: String,
});


</script>

<style scoped lang="scss">
.suitable-container {
    text-align: center;
    margin-bottom: 0.5rem;
    cursor: pointer;

    .suitable {
        &__image {
            width: 84px;
            height: 84px;
            border-radius: 50%;
            padding: 1rem;
            margin-bottom: 0.4rem;

            &.border-primary {
                border: 2px solid $primary;
            }

            &.border-gray {
                border: 2px solid $gray;
            }

            img {
                width: 40px;
                height: 40px;
                margin: auto;
            }

        }

        &__title {
            font-size: 10px;
            color: $textGray;
        }

        &__percentage {
            font-size: 10px;
            color: $textGray;
        }

    }
}
</style>