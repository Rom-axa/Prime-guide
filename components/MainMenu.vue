<template>
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
            <nuxt-link :to="localePath('/')">
                <img class="navbar-brand logo px-4" src="~assets/img/logo.png" style="height: 60px;width: 120px" alt="Prime Guide">
            </nuxt-link>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-main-menu" aria-controls="navbar-main-menu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar-main-menu">
                <div class="navbar-wrap">
                    <div class="navbar-nav">
                        <nuxt-link class="nav-link big-link" :to="localePath('/')">{{ $t("menu.first_item") }}</nuxt-link>
                        <nuxt-link class="nav-link big-link" :to="localePath('/reviews')">{{ $t("menu.second_item") }}</nuxt-link>
                    </div>
                    <div class="navbar-nav">
                        <div class="dropdown d-flex align-items-center">
                            <button ref="lang" class="btn btn-secondary dropdown-toggle m-0 border-0 d-flex justify-content-between bg-main" style="width: 10em;padding: 0 0.5em;" type="button" id="drop-down-menu" data-bs-toggle="dropdown" aria-expanded="false">
                                <span>{{ $t(`menu.langs.${$i18n.locale}`) }}</span>
                                <img class="m-0 m-0 p-0 border-0 lang-img ml-1" :src="require(`@/assets/img/${$i18n.locale}_rs.png`)" alt="ua">
                            </button>
                            <ul class="dropdown-menu dropdown-menu-dark p-0 m-0 border-0" aria-labelledby="drop-down-menu">
                                <li class="pointer bg-main py-1" style="width: 10em;padding: 0 0.5em;">
                                    <nuxt-link :to="switchLocalePath('ua')" class="d-flex align-items-center justify-content-between text-white text-decoration-none">
                                        <span>{{ $t(`menu.langs.ua`) }}</span>
                                        <img class="dropdown-item active m-0 my-1 p-0 lang-img ml-1" src="~assets/img/ua_rs.png" alt="ua">
                                    </nuxt-link>
                                </li>
                                <li class="pointer bg-main py-1" style="width: 10em;padding: 0 0.5em;">
                                    <nuxt-link :to="switchLocalePath('ru')" class="d-flex align-items-center justify-content-between text-white text-decoration-none">
                                        <span>{{ $t(`menu.langs.ru`) }}</span>
                                        <img class="dropdown-item m-0 my-1 p-0 lang-img ml-1" src="~assets/img/ru_rs.png" alt="ru">
                                    </nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.pointer {
    cursor: pointer;
}

a.nuxt-link-exact-active {
    color: #ffffff!important;
}

.navbar {
    // background-color: $app-dark-color!important;
    background-color: $app-main-color!important;
}

.logo {
    background-color: $app-main-color;
}

#navbar-main-menu {
    margin-left: 15%;
}

.big-link {
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.75);
}

.dropdown {
    padding: 0;
    margin: 0;
    height: 3em;
}

.dropdown-toggle:after {
    content: none;
}

.lang-img {
    height: 1.5em;
    width: auto;
}

.bg-main {
    background-color: $app-main-color!important;
}

.dropdown-menu {
    min-width: unset;
}

.navbar-wrap {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
}

@include media-breakpoint-down(xl) {
    #navbar-main-menu {
        margin-left: 5%;
    }
}

@include media-breakpoint-down(lg) {
    .navbar {
        padding-left: 0;
        padding-right: 0;
    }
}
@include media-breakpoint-down(md) {
    .navbar-wrap {
        flex-direction: column;
        padding-bottom: 1em;
        align-items: flex-start;
    }
}

    
</style>