<template>
    <div class="row py-5 contacts-wrap mx-0">
        <div class="col-6 d-flex justify-content-center">
            <div ref="map" style="width: 350px; height: 250px"></div>
        </div>
        <div class="col-6">
            <h3 class="display-5" id="contacts">
                {{ $t("contacts.title") }}
            </h3>
            <div>
                <br>
                <span>
                    {{ $t("contacts.adress") }}
                </span>
                <br>
                <span>
                    {{ $t("contacts.phone") }}: +380664387722 (Viber)
                </span>
                <br>
                <span>
                    E-mail: unona-office@urk.net
                </span>
                <br>
                <span>
                    {{ $t("contacts.see_also") }}
                    <a class="link-light" href="//translate-nikopol.com.ua/" target="_blank">translate-nikopol.com.ua/</a>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	mounted(){
        setTimeout(() => {
            this.$initGoogleMap(this.$refs.map);
        }, 4000);
	}
}
</script>