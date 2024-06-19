<template>
    <div>
        <NuxtLayout>
            <SubHeader />
            <div class="container">
                <div class="row">
                    <div class="col-md-9">
                        <div class="mt-2">
                            <Breadcrumb />
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="sidebar">
                            <SideCart title="مناسب برای">
                                <div class="row">
                                    <div class="col-md-4" v-for="item in items" :key="item.image">
                                        <SuitableItem :title="item.title" :image="item.image" :active="item.active"
                                            :percentage="item.percentage" />
                                    </div>
                                </div>
                            </SideCart>
                            <SideCart title="کاوش">
                                <div class="row">
                                    <div class="col-md-12" v-for="item in exploreItems" :key="item.image">
                                        <ExploreItem :title="item.title" :image="item.image" :rate="item.rate" />
                                    </div>
                                </div>
                            </SideCart>
                        </div>
                    </div>
                </div>
            </div>

        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
import type { ISuitableItem } from '~/types/ISuitableItem';
import type { IExploreItem } from '~/types/IExploreItem';

const exploreItems: IExploreItem[] = [
    {
        title: 'مارماریس',
        image: 'images/explore.svg',
        rate: {
            type: "type-2",
            number: "۴.۲",
            text: "",
            rate: "2",
        }
    },
    {
        title: 'مارماریس',
        image: 'images/explore.svg',
        rate: {
            type: "type-2",
            number: "۴.۲",
            text: "",
            rate: "2",
        }
    },
    {
        title: 'مارماریس',
        image: 'images/explore.svg',
        rate: {
            type: "type-2",
            number: "۳.۲",
            text: "",
            rate: "3",
        }
    },
]

const items: ISuitableItem[] = [
    {
        active: true,
        title: 'تفریح',
        image: 'images/products/p1.svg',
        percentage: '۹۰٪'
    },
    {
        active: true,
        title: 'طبیعت گردی',
        image: 'images/products/p2.svg',
        percentage: '۹۰٪'
    },
    {
        active: true,
        title: 'آرامش و استراحت',
        image: 'images/products/p3.svg',
        percentage: '۹۰٪'
    },
    {
        active: true,
        title: 'تفریحات ساحلی',
        image: 'images/products/p4.svg',
        percentage: '۹۰٪'
    },
    {
        active: true,
        title: 'فرهنگی و تاریخی',
        image: 'images/products/p5.svg',
        percentage: '۹۰٪'
    },
    {
        active: true,
        title: 'ماجراجویی',
        image: 'images/products/p6.svg',
        percentage: '۹۰٪'
    },
    {
        active: false,
        title: 'تفریحات شبانه',
        image: 'images/products/p7.svg',
        percentage: '۹۰٪'
    },
    {
        active: false,
        title: 'سفرهای مذهبی',
        image: 'images/products/p8.svg',
        percentage: '۹۰٪'
    },
    {
        active: false,
        title: 'خرید',
        image: 'images/products/p9.svg',
        percentage: '۹۰٪'
    },
]

</script>

<style scoped lang="scss">
.sidebar {
    position: relative;
    top: -3.5rem;
}
</style>
