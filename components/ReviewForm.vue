<template>
    <form action="" @submit.prevent="save">
        <h3>{{ $t("reviews.form.title") }}</h3>
        <div class="row  mt-2">
            <div class="col">
                <input v-model="form.title"
                    :class="[isValid('title') ? 'is-valid' : '', 'form-control']" 
                    type="text" 
                    :placeholder="$t('reviews.form.placeholders.title')" 
                    maxlength="220"
                    :disabled="disabled">
                <small class="text-muted form-text">{{ $t("reviews.form.labels.unnecessary") }}</small>
            </div>
            <div class="col">
                <input v-model="form.userName"
                    :class="[isValid('userName') ? 'is-valid' : '', 'form-control']"
                    type="text"
                    :placeholder="$t('reviews.form.placeholders.userName')"
                    maxlength="220"
                    :disabled="disabled">
                <small class="text-muted form-text">{{ $t("reviews.form.labels.unnecessary") }}</small>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col">
                <textarea v-model="form.content"
                    :class="[hasError('content') ? 'is-invalid' : '', isValid('content') ? 'is-valid' : '', 'form-control']"
                    :placeholder="$t('reviews.form.placeholders.content')"
                    :disabled="disabled" />
                <div class="invalid-feedback" :style="{ opacity : hasError('content') ? 1 : 0 }">
                    {{ getError('content') }}
                </div>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col d-flex align-items-center">
                <button type="submit" class="btn btn-outline-success" :disabled="disabled">{{ $t('reviews.form.send_btn') }}</button>
                <div v-show="sending" class="spinner-border text-success ms-3" role="status">
                    <span class="visually-hidden">{{ $t('reviews.form.sending') }}...</span>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    props : {
        disabled : {
            type : Boolean,
            required : false,
            default : false,
        },
        sending : {
            type : Boolean,
            required : false,
            default : false,
        },
    },
    data(){
        return {
            errors : {
                content : null,
            },
            form : {
                title : "",
                userName : "",
                content : "",
            },
        };
    },
    methods : {
        save(){
            if (!this.validate()) {
                return;
            }

            this.$emit("save", {
                title : this.form.title.trim(),
                userName : this.form.userName.trim(),
                content : this.form.content.trim(),
            });
        },
        validate(){
            if (!this.isValid('content')) {
                this.errors.content = this.$t("reviews.form.validation.content");
                return false;
            } else {
                this.errors.content = null;
            }

            return true;
        },
        isValid(field){
            switch (field) {
                case "content" :
                    return this.form.content.trim().length > 6;
                case "title" : 
                    return this.form.title.trim().length > 2;
                case "userName" : 
                    return this.form.userName.trim().length > 2;
            }
            ;
        },
        hasError(field){
            return field in this.errors && this.errors[field] !== null;
        },
        getError(field){
            return field in this.errors
                ? (this.errors[field] ? this.errors[field] : "")
                : "";
        },
        reset(){
            this.form.title = "";
            this.form.content = "";
            this.form.userName = "";
        },
    },
}
</script>

<style lang="scss" scoped>
    textarea {
        max-height: 12em;
        min-height: 12em;
    }

    .invalid-feedback {
        height: 3em;
    }
</style>