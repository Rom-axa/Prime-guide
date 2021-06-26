import moment from "moment";

export default function({}, inject){
    inject("moment", moment);
}