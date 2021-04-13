<template>
    <div class="modal fade" ref="modal" aria-hidden="true" tabindex="-1">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <embed v-for="pdfFile in files"
                    :src="pdfFile.path"
                    v-show="pdfFile.equals(currentFile)"
                    :key="pdfFile.name"
                    type="application/pdf"/>
            </div>
        </div>
    </div>
</template>

<script>
import PdfFile from "@/classes/PdfFile.js"

export default {
    props : {
        files : {
            type : Array,
            required : true,
        },
    },
    data(){
        return {
            modal : null,
            currentFile : null,
        };
    },
    methods : {
        showFile(pdfFile){
            if (pdfFile instanceof PdfFile) {
                this.currentFile = pdfFile;
                this.modal.show();
            }
        },
    },
    mounted(){
        this.modal = new this.$bootstrap.Modal(this.$refs.modal);
    },
}
</script>

<style lang="scss" scoped>
    embed {
        width: 100%;
        height: 85vh;
    }
</style>