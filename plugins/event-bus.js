import Vue from "vue";

const eventBus = new Vue();

export default function({}, inject){
    inject("eventBus", eventBus);
}