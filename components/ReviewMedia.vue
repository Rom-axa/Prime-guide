<template>
    <div>
        <div class="col-12">
            <div class="d-flex">
                <img class="me-3" src="~assets/img/profile-user.svg" alt="user icon">
                <div class="media-body">
                    <h5 class="mt-0" v-if="showTitle">{{ review.title }}</h5>
                    <p v-for="(contetnPart, i) in contentParts" :key="i" class="text-break">{{ contetnPart }}</p>
                </div>
            </div>
            <div>
                <small class="user-name">
                    Автор: {{ userName }}
                </small>
                <small class="date ms-3">
                    <i class="text-muted">
                        {{ review.date.format("LL HH:mm") }}
                    </i>
                </small>
            </div>
        </div>
    </div>
</template>

<script>
import Review from "@/classes/Review.js";

export default {
    props : {
        review : {
            type : Review,
            required : true,
        },
    },
    computed : {
        userName(){
            return this.review.userName ? this.review.userName : this.$t("reviews.anonim");
        },
        showTitle(){
            return this.review.title.length > 1;
        },
        contentParts(){
            return this.review.content.split("\n");
        }
    }
}
</script>