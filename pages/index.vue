<template>
    <main>
        <section>
            <div class="bg-custom-image container-fluid" data-image-src="~assets/img/main_bw.jpg">
                <div class="row">
                    <div class="col-12 col-lg-7 col-md-10 offset-md-2 offset-0 offset-lg-5 mt-5">
                        <h1 class="text-center display-2 font-weight-bold">
                            <span class="p-3 fw-bold slogan">
                                {{ $t("slogan") }}
                            </span>
                        </h1>
                    </div>
                </div>
                <div class="row">
                    <div class="offset-0 offset-lg-1 mh-75vh col-12 col-lg-5 d-flex flex-column justify-content-center pt-2">
                        <p class="p-2 description">
                            {{ $t("description.part1") }}
                        </p>
                        <p class="p-2 description">
                            {{ $t("description.part2") }}
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container-fluid">
                <div class="row py-5 my-5">
                    <div class="col-12 col-lg-8 offset-0 offset-lg-2">
                        <div class="row">
                            <div class="col-md-4 mt-2">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="display-3 pretty-number">
                                            <span ref="clientsQty">500</span>
                                            +
                                        </div>
                                        <h5 class="card-title">
                                            <img src="~assets/img/customers.png" alt="customers" width="20px" height="20px">
                                            <span>{{ $t("clients_qty") }}</span>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mt-2">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="display-3 pretty-number">
                                            <span ref="years">5</span>
                                        </div>
                                        <h5 class="card-title">
                                            <img src="~assets/img/calendar.png" alt="calendar" width="20px" height="20px">
                                            <span>{{ $t("years_on_market") }}</span>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mt-2">
                                <div class="card">
                                    <div class="card-body">
                                        <div class="display-3">
                                            <img src="~assets/img/accept.png" alt="accept" style="width: 4rem; height: 4rem;">
                                            <!-- fix later -->
                                        </div>
                                        <h5 class="card-title">
                                            <img src="~assets/img/online.png" alt="online" width="20px" height="20px">
                                            <span>{{ $t("work_online") }}</span>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row py-5 list-wrap">
                    <div class="col-12 mb-5 list-header px-0">
                        <h2 class="display-5 text-center py-5" id="steps">
                            {{ $t("5_steps") }}
                        </h2>
                    </div>
                    <div class="col-12 col-lg-8 offset-lg-2 offset-0">
                        <div class="row">
                            <div class="col-11 col-md-6 offset-0">
                                <div class="card step-card step-card-right" data-step-number="1">
                                    <img src="~assets/img/send_photo.svg" class="card-img-top m-auto" alt="photo" style="height:200px!important">

                                    <div class="card-body">
                                        <h5 class="card-title">
                                            <span>1. {{ $t("step_1.title") }}</span>
                                        </h5>
                                        <div class="card-text">
                                            <span v-html="$t('step_1.content')"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-11 col-md-6 offset-1 offset-md-6 mt-1">
                                <div class="card step-card step-card-left" data-step-number="2">
                                    <img src="~assets/img/complite_list.svg" class="card-img-top m-auto" alt="photo" style="height:200px!important">

                                    <div class="card-body">
                                        <h5 class="card-title">
                                            <span>2. {{ $t('step_2.title') }}</span>
                                            <br>
                                            <small data-v-2a183b29="" style="
                                                font-size: 15px;
                                                padding: 1.5rem;
                                                display: block;
                                            ">
                                                <em>
                                                     <span v-html="$t('step_2.mark')"></span>
                                                </em>
                                            </small>
                                        </h5>
                                        <div class="card-text">
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">{{ $t("step_2.content.part1") }}</li>
                                                <li class="list-group-item">{{ $t("step_2.content.part2") }}</li>
                                                <li class="list-group-item">{{ $t("step_2.content.part3") }}</li>
                                                <li class="list-group-item">{{ $t("step_2.content.part4") }}</li>
                                                <li class="list-group-item">{{ $t("step_2.content.part5") }}</li>
                                                <li class="list-group-item">{{ $t("step_2.content.part6") }}</li>
                                                <li class="list-group-item">{{ $t("step_2.content.part7") }}</li>
                                                <li class="list-group-item">{{ $t("step_2.content.part8") }}</li>
                                                <li class="list-group-item">{{ $t("step_2.content.part9") }}</li>
                                                <li class="list-group-item">{{ $t("step_2.content.part10") }}</li>
                                                <li class="list-group-item">{{ $t("step_2.content.part11") }}</li>
                                                <li class="list-group-item">{{ $t("step_2.content.part12") }}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-11 col-md-6 offset-0 mt-1">
                                <div class="card step-card step-card-right" data-step-number="3">
                                    <img src="~assets/img/receive_mail.svg" class="card-img-top m-auto" alt="photo" style="height:200px!important">

                                    <div class="card-body">
                                        <h5 class="card-title">
                                            <span>3. {{ $t("step_3.title") }}</span>
                                        </h5>
                                        <div class="card-text">
                                            <span v-html="$t('step_3.content')"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-11 col-md-6 offset-1 offset-md-6 mt-1">
                                <div class="card step-card step-card-left" data-step-number="4">
                                    <img src="~assets/img/pay.svg" class="card-img-top m-auto" alt="photo" style="height:200px!important">

                                    <div class="card-body">
                                        <h5 class="card-title">
                                            <span>4. {{ $t("step_4.title") }}</span>
                                        </h5>
                                        <div class="card-text">
                                           <span v-html="$t('step_4.content')"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-11 col-md-6 offset-0 mt-1">
                                <div class="card step-card step-card-right" data-step-number="5">
                                    <img src="~assets/img/receive_post.svg" class="card-img-top m-auto" alt="photo" style="height:200px!important">

                                    <div class="card-body">
                                        <h5 class="card-title">
                                            <span>5. {{ $t('step_5.title') }}</span>
                                            <br>
                                            <small data-v-2a183b29="" style="
                                                font-size: 15px;
                                                padding: 1.5rem;
                                                display: block;
                                            ">
                                                <em v-html="$t('step_5.mark')"></em>
                                            </small>
                                        </h5>
                                        <div class="card-text">
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item">
                                                    <span>&#10003;</span>
                                                    <a @click.prevent="$eventBus.$emit('app.show.pdf', 'form-ua-work')" class="text-decoration-none pointer">
                                                        {{ $t("step_5.content.part1") }}
                                                    </a>
                                                </li>
                                                <li class="list-group-item">
                                                    <span>&#10003;</span>
                                                    {{ $t("step_5.content.part2") }}
                                                </li>
                                                <li class="list-group-item">
                                                    <span>&#10003;</span>
                                                    {{ $t("step_5.content.part3") }}
                                                </li>
                                                <li class="list-group-item">
                                                    <span>&#10003;</span>
                                                    <a  @click.prevent="$eventBus.$emit('app.show.pdf', 'request-for-passport')" class="text-decoration-none pointer">
                                                        {{ $t("step_5.content.part4") }}
                                                    </a>
                                                </li>
                                                <li class="list-group-item">
                                                    <span>&#10003;</span>
                                                    <a @click.prevent="$eventBus.$emit('app.show.pdf', 'act-new')" class="text-decoration-none pointer">
                                                        {{ $t("step_5.content.part5") }}
                                                    </a>
                                                </li>
                                                <li class="list-group-item">
                                                    <span>&#10003;</span>
                                                    {{ $t("step_5.content.part6") }}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 mt-5">
                                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                    <div class="d-flex">
                                        <div class="px-4 d-flex align-items-center">
                                            <span style="border: 2px solid;
                                                width: 30px;
                                                height: 30px;
                                                display: flex;
                                                justify-content: center;
                                                align-items: center;
                                                font-weight: bold;
                                                border-radius: 5px;
                                                font-size: 30px;
                                            ">
                                            !
                                            </span>
                                        </div>
                                        <div v-html="$t('alert1')"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-12 pb-5 price-wrap1">
                        <div class="col-12 mb-5 px-0">
                            <h2 class="display-5 text-center" id="prices">
                                {{ $t("price_list") }}
                            </h2>
                        </div>
                        <div class="row">
                            <div class="col-12 offset-0 offset-md-2 col-md-8">
                                <table class="table table-bordered price-table">
                                    <thead>
                                        <tr>
                                            <th colspan="3" class="text-center">
                                                {{ $t("price_table.head.row1.column1") }}
                                            </th>
                                        </tr>
                                        <tr>
                                            <th rowspan="2" class="align-middle text-center">
                                                {{ $t("price_table.head.row2.column1") }}
                                            </th>
                                            <th colspan="2" class="text-center">
                                                {{ $t("price_table.head.row2.column2") }}
                                            </th>
                                        </tr>
                                        <tr>
                                            <th class="text-center">
                                                {{ $t("price_table.head.row3.column1") }}
                                            </th>
                                            <th class="text-center">
                                                {{ $t("price_table.head.row3.column2") }}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                {{ $t("price_table.body.row1.column1") }}
                                            </td>
                                            <td>
                                                {{ $t("price_table.body.row1.column2") }}
                                            </td>
                                            <td>
                                                {{ $t("price_table.body.row1.column3") }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                {{ $t("price_table.body.row2.column1") }}
                                            </td>
                                            <td>
                                                {{ $t("price_table.body.row2.column2") }}
                                            </td>
                                            <td>
                                                {{ $t("price_table.body.row2.column3") }}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                {{ $t("price_table.body.row3.column1") }}
                                            </td>
                                            <td>
                                                {{ $t("price_table.body.row3.column2") }}
                                            </td>
                                            <td>
                                                {{ $t("price_table.body.row3.column3") }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p class="text-end">
                                    <em>
                                        {{ $t("price_mark") }}
                                    </em>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    data(){
        return {
            animated : false,
        };
    },
    mounted(){
        const anim = (el, val, i = 0) => {
            let time = 75;
            let maxTime = 500;
            let steps = Math.floor(maxTime / time);
            
            if (steps > val) {
                steps = val;
            }
            
            if (i > val) {
                el.innerText = val;
                return;
            }

            let increment = Math.floor(val / steps);
            increment = increment > 0 ? increment : 1;

            setTimeout(() => {
                el.innerText = i;
                i += increment;
                anim(el, val, i)   
            }, time);
        };

        const scrollHandler = () => {
            if (!this.animated){
                if (this.$refs.clientsQty && this.$refs.years) {
                    anim(this.$refs.clientsQty, parseInt(this.$refs.clientsQty.innerText.trim(), 10));
                    anim(this.$refs.years,  parseInt(this.$refs.years.innerText.trim(), 10));
                }
                window.removeEventListener("scroll", scrollHandler);
                this.animated = true;
            }
        };

        window.addEventListener(
            "scroll", 
            scrollHandler,
            { passive: true } 
        );
    },
    head(){
        return {
            title : "Prime Guide"
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";
$poland-img-url : "~assets/img/uk_poland.jpg";
$main-img-url : "~assets/img/main_bw.jpg";

.pointer {
    cursor: pointer;
}

.mh-75vh {
    min-height: 75vh;
}

.slogan {
    color : $app-main-color;
    background-color: $app-light-opacity-color
}

.pretty-number {
    color : $app-main-color;
}

.description {
    font-size: 21px;
    // background-color: $app-dark-opacity-color;
    background-color: $app-light-opacity-color;
    color: $app-dark-color;
}

.bg-custom-image {
    width: 100%;
    min-height: 80vh;
    background-image: url($main-img-url);
    background-repeat: no-repeat;
    background-size: cover;
    background-color: $app-main-opacity-color
}

.step-card {
    &:after {
        content: attr(data-step-number);
        position: absolute;
        font-size: 6rem;
        color: $app-main-color;
    }
    &.step-card-right:after {
        right: -6rem;
    }
    &.step-card-left:after {
        left: -6rem;
    }
    border: none!important;
}

@include media-breakpoint-down(md) {
    .step-card {
        &:after {
            content: none;
        }
    }
}

.list-wrap {
    background-color: $app-light-opacity-color
}

.list-header {
    background-color: $app-main-opacity-color;
    color: $app-light-color;
}

.price-wrap {
    background-color: $app-main-opacity-color;
}

.contacts-wrap {
    background-color: $app-dark-color;
    color : $app-light-color;
}

table.price-table {
    &.table-bordered {
        border-color: $app-main-color; 
    }

    thead {
        tr:first-child {
            background-color: $app-main-color;
            color: $app-light-color;
        }
    }
}
</style>