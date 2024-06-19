<template>
    <div class="slider-container">
        <div class="row">
            <div class="col-md-6">
                <div class="right-items">
                    <div class="big-box m-1"></div>
                    <div class="d-flex justify-content-between" >
                        <div class="small-box m-1" v-for="n in 4"></div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="left-items">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <h4 class="slide-title">
                            درباره‌ی استانبول
                        </h4>
                        <button class="btn btn-info text-white">نوشتن نقد و بررسی</button>
                    </div>
                    <div class="text-description">
                        <p>آب و هوای مقصد، از آن دسته اطلاعاتی است که هر چقدر دقیق‌تر درباره‌اش بدانیم، سفرمان را
                            دلپذیرتر می‌کند، زیرا متناسب با آن لباس برمی‌داریم و با کوله‌باری از لباس‌های بلااستفاده
                            بارمان را سنگین نمی‌کنیم، همچنین پیش از سفر می‌توانیم آب و هوای مقصد، از آن دسته اطلاعاتی
                            است که هر چقدر دقیق‌تر درباره‌اش بدانیم، سفرمان را دلپذیرتر می‌کند، زیرا متناسب با آن لباس
                            برمی‌داریم و با کوله‌باری از لباس‌های بلااستفاده بارمان را سنگین نمی‌کنیم، همچنین پیش از سفر
                            می‌توانیم آب و هوای مقصد، از آن دسته اطلاعاتی است که هر چقدر دقیق‌تر درباره‌اش بدانیم،
                            سفرمان را دلپذیرتر می‌کند، زیرا متناسب با آن لباس برمی‌داریم و با کوله‌باری ا</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    title: String,
});

</script>

<style scoped lang="scss">
.slider-container {
    background: $white;
    border-radius: 5px;
    padding: 0.8rem;

    .right-items {
        .big-box {
            background: $boxColor;
            border-radius: 5px;
            height: 255px;
            width: 100%;
        }

        .small-box {
            height: 90px;
            width: 100%;
            background: $boxColor;
            border-radius: 5px;
        }
    }

    .left-items {
        padding: 1rem;

        .slide-title {
            font-size: 18px;
            font-weight: 600;
            color: #424242;
        }

        .text-description {
            font-size: 14px;
            font-weight: 400;
            line-height: 32px;
            text-align: left;
            color: #666666;
        }
    }

    .card {
        &__header {}

        &__body {
            background-color: $white;
            padding: 1rem;
        }

    }
}
</style>