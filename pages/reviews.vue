<template>
    <main>
        <section>
            <h1 class="text-center display-5 my-5">{{ $t('reviews.title') }}</h1>
            <div class="container-fluid mb-5">
                <div class="row py-2" v-if="fetching">
                    <div class="col-12 col-sm-10 col-md-8 col-lg-6 offset-0 offset-sm-1 offset-md-2 offset-lg-3 text-center">
                        <div class="spinner-border text-success" style="width: 7rem; height: 7rem;" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
                <template v-else>
                    <div :class="[ (i + 1) % 2 === 0 ? 'emphisized' : '', 'row', 'py-2']" v-for="(r, i) in reviews" :key="i">
                        <div class="col-12 col-sm-10 col-md-8 col-lg-6 offset-0 offset-sm-1 offset-md-2 offset-lg-3">
                            <review-media :review="r" class="mb-3"/>
                        </div>
                    </div>
                </template>
                <div class="row my-5" v-if="reviewsTotal > reviwsPackageSize">
                    <div class="col-12 col-sm-10 col-md-8 col-lg-6 offset-0 offset-sm-1 offset-md-2 offset-lg-3 text-center">
                        <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="reviewsTotal"
                            :page-size="reviwsPackageSize"
                            :current-page="page"
                            @current-change="fetch">
                        </el-pagination>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-12">
                        <hr>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-12 col-sm-10 col-md-8 col-lg-6 offset-0 offset-sm-1 offset-md-2 offset-lg-3">
                        <review-form @save="create" :loadin="creating" :disabled="creating" ref="form" />
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import ReviewMedia from "@/components/ReviewMedia.vue";
import ReviewForm from "@/components/ReviewForm.vue";

export default {
    components : {
        ReviewMedia,
        ReviewForm
    },
    data(){
        return {
            fetching : false,
            creating : false,
        };
    },
    methods : {
        ...mapActions({
            fetchReviews : "reviews/fetchReviews",
            createReview : "reviews/createReview",
        }),
        fetch(page){
            this.fetching = true;

            setTimeout(() => {
    
                this.fetchReviews(page)
                    .catch(e => {})
                    .then(() => this.fetching = false)
            }, 500);
        },
        create({ title, content, userName }){
            this.creating = true;

            this.$grecaptchSendAction("create_review")
                .then(rcaptchaToken => this.createReview({ title, content, userName, rcaptchaToken }))
                .then(() => this.$refs.form.reset())
                .then(() => {
                    this.$swal.fire({
                        icon : "success",
                        showConfirmButton : true,
                        title : this.$t("reviews.created_success"),
                        html : `<div style='max-width: 370px;'><p>${this.$t("reviews.created_message")}</p></div>`,
                    });
                })
                .catch(e => {})
                .then(() => this.creating = false);
        }
    },
    computed : {
        ...mapGetters({
            reviews : "reviews/list",
            reviwsPackageSize : "reviews/size",
            reviewsTotal : "reviews/total",
            page : "reviews/page",
        }),
    },
    created(){
        if (!this.reviews.length) {
            this.fetch(1);
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.emphisized {
    background-color : $app-main-opacity-color;
}
</style>