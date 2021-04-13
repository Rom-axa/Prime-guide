<template>
    <div @click="scrollTop"
        class="scroll-top-btn"
        tabindex="0"
        v-show="isShown">
        <div class="vue-go-top__content">
            <div class="vue-go-top__ripple"
                style="top: -42px; left: -36px; width: 200%; height: 200%; background-color: rgba(255, 255, 255, 0.5);"
            ></div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isShown : false,
        };
    },
    methods : {
        scrollTop(){
            window.scroll(0, 0); 
        },
        show(){
            this.isShown = true;
        },
        hide(){
            this.isShown = false;
        }
    },
    created(){
        window.onscroll = () => {
            if (window.scrollY > 350) {
                this.show();
            } else {
                this.hide();
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.scroll-top-btn {
    width: 70px;
    height: 70px;
    right: 50px;
    position: fixed;
    bottom: calc(100px);
    z-index: 1000;
    color: rgb(255, 255, 255);
    background-size: contain;
    background-color: rgb(41, 106, 84);
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg version=%271.1%27 xmlns=%27http://www.w3.org/2000/svg%27 width=%2710px%27 height=%2710px%27%3E %3Cpolygon fill=%27%23ffffff%27 stroke=%27none%27 points=%278.589,6.945 5,3.22 1.413,6.945 1.052,6.598 5,2.499 8.948,6.598%27 /%3E %3C/svg%3E");
    box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 2px;
    border-radius: 50%;
    cursor: pointer;
}
</style>