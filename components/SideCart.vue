<template>
    <div class="card-container">
        <div class="card__header">
            <p class="text-center mb-0">{{ title }}</p>
        </div>
        <div class="card__body">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    title: String,
});

</script>

<style scoped lang="scss">
.card-container {
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    overflow: hidden;
    border: 1px solid $gray;

    .card {
        &__header {
            padding: 0.55rem;
            width: 100%;
            height: 44px;
            background-color: $semiWhite;
            font-size: 14px;
        }

        &__body {
            background-color: $white;
            padding: 1rem;
        }

    }
}
</style>