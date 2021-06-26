import moment from "moment";

export default function ({ app, i18n }) {
    moment.locale(i18n.localeProperties.moment);

    app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
        moment.locale(i18n.localeProperties.moment);
    }
}