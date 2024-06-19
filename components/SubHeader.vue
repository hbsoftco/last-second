<template>
    <div class="sub-header-container">
        <div class="container">
            <div class="row">
                <div class="col-md-9">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <h3 class="persian-city-name">استانبول</h3>
                            <h5 class="english-city-name">Istanbul </h5>
                        </div>
                        <div>
                            <Rate type="type-1" number="۴.۳" text="(از ۲۵ نقد و بررسی)" rate="3" />
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.sub-header-container {
    height: 80px;
    background: $secondary;
    padding: 0.4rem;

    .persian-city-name {
        font-size: 24px;
        font-weight: 600;
        line-height: 36px;
        color: $white;
    }

    .english-city-name {
        font-size: 14px;
        font-weight: 500;
        line-height: 21px;
        color: $white;
    }
}
</style>