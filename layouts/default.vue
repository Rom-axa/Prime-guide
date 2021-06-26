<template>
	<div>
		<header>
	        <main-menu></main-menu>
		</header>
		<div>
			<Nuxt />
		</div>
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
		<footer>
			<go-top bg-color="#296a54"></go-top>
			© prime-guide.com 2018 all rights are reserved
		</footer>
		<pdf-file-modal ref="pdfFileModal" :files="pdfFiles"></pdf-file-modal>
	</div>
</template>

<script>
import "@/scss/app.scss";
import MainMenu from "@/components/MainMenu.vue";
import PdfFileModal from "@/components/PdfFileModal.vue";
import GoTop from '@/components/GoTop.vue';
import PdfFile from "@/classes/PdfFile.js"

export default {
    components : {
        MainMenu,
		GoTop,
		PdfFileModal
    },
	data(){
		return {
	        pdfFiles : ["form-ua-work", "act-new", "request-for-passport"],
		};
	},
	created(){
        this.pdfFiles.splice(0, Infinity, ...this.pdfFiles.map(name => new PdfFile(name)));
        
        this.$eventBus.$on("app.show.pdf", pdfFileName => {
            this.$refs.pdfFileModal.showFile(this.pdfFiles.find(pdfFIle => pdfFIle.name === pdfFileName))
        });
	},
	mounted(){
        setTimeout(() => {
            this.$initGoogleMap(this.$refs.map);
        }, 4000);
	}
}
</script>

<style lang="scss" scoped>
@import "@/scss/var.scss";

footer {
	background-color: $app-main-color;
	color: $app-light-color;
	text-align: center;
}

.contacts-wrap {
    background-color: $app-dark-color;
    color : $app-light-color;
}
</style>
