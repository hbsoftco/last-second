<template>
    <div class="rate-container">
        <div v-if="props.type == 'type-1'">
            <div class="d-flex justify-content-between align-items-center">
                <div class="px-1">
                    <div class="d-flex mb-1">
                        <span v-for="n in 5" :key="n"
                            :class="['circle', 'border', 'border-primary', 'rounded-circle', { 'bg-primary': n <= parseInt(String(props.rate)) }]"></span>
                    </div>
                    <p class="rate-text text-center pt-1 mb-0 text-white">{{ props.text }}</p>
                </div>
                <div class="pr-1">
                    <div
                        class="rate-number fs-4 text-white bg-primary rounded-1 mb-0 d-flex justify-content-center align-items-center">
                        {{ props.number }}
                    </div>
                </div>
            </div>
        </div>
        <div v-if="props.type == 'type-2'">
            <div class="text-center">
                <div
                    class="rate-number-type2 text-white bg-primary rounded-1 mb-0 d-flex justify-content-center align-items-center">
                    {{ props.number }}
                </div>
                <div class="px-1 pt-2">
                    <div class="d-flex">
                        <span v-for="n in 5" :key="n"
                            :class="['circle-type2', 'border', 'border-primary', 'rounded-circle', { 'bg-primary': n <= parseInt(String(props.rate)) }]"></span>
                    </div>
                    <p class="rate-text text-center pt-1 mb-0 text-white">{{ props.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    type: String,
    number: String,
    text: String,
    rate: String,
});

</script>

<style scoped lang="scss">
.rate-container {
    .circle-type2 {
        display: inline-block;
        width: 10.47px;
        height: 10.47px;
        margin-left: 0.1rem;
        margin-right: 0.1rem;
    }

    .circle {
        display: inline-block;
        width: 23.89px;
        height: 23.89px;
        margin-left: 0.1rem;
        margin-right: 0.1rem;
    }

    .rate-number {
        width: 68.21px;
        height: 55.97px;
        font-size: 22px;
    }
    .rate-number-type2 {
        width: 29.67px;
        height: 24.44px;
        font-size: 12px;
        text-align: center;
        margin-bottom: 0.5rem;
        margin: auto;
    }

    .rate-text {
        font-size: 14px;
    }
}
</style>