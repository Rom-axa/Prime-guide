<template>
	<div>
		<header>
	        <main-menu></main-menu>
		</header>
		<div>
			<Nuxt />
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
}
</script>

<style lang="scss" scoped>
@import "@/scss/var.scss";

footer {
	background-color: $app-main-color;
	color: $app-light-color;
	text-align: center;
}
</style>
