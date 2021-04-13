<template>
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
            <nuxt-link :to="localePath('/')">
                <img class="navbar-brand logo px-4" src="~assets/img/logo.png" alt="Prime Guide">
            </nuxt-link>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-main-menu" aria-controls="navbar-main-menu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar-main-menu">
                <div class="navbar-wrap">
                    <div class="navbar-nav">
                        <nuxt-link class="nav-link big-link" :to="localePath('/#steps')">{{ $t("menu.first_item") }}</nuxt-link >
                    </div>
                    <div class="navbar-nav">
                        <div class="dropdown">
                            <button ref="lang" class="btn btn-secondary dropdown-toggle p-0 m-0 h-100 border-0" type="button" id="drop-down-menu" data-bs-toggle="dropdown" aria-expanded="false">
                                <img class="m-0 m-0 p-0 h-100 border-0 lang-img" :src="require(`@/assets/img/${$i18n.locale}_rs.png`)" alt="ua">
                            </button>
                            <ul class="dropdown-menu dropdown-menu-dark p-0 m-0" aria-labelledby="drop-down-menu">
                                <li class="pointer">
                                    <nuxt-link :to="switchLocalePath('ua')">
                                        <img class="dropdown-item active m-0 my-1 p-0 lang-img" src="~assets/img/ua_rs.png" alt="ua">
                                    </nuxt-link>
                                </li>
                                <li class="pointer">
                                    <nuxt-link :to="switchLocalePath('ru')">
                                        <img class="dropdown-item m-0 my-1 p-0 lang-img" src="~assets/img/ru_rs.png" alt="ru">
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
    color: rgba(255, 255, 255, 0.75)!important;
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
    height: 3em;
    width: auto;
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
        align-items: flex-end;
    }
}

    
</style>