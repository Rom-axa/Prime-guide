import Vue from 'vue'
import localeEN from 'element-ui/lib/locale/lang/ru-RU'
import localeRU from 'element-ui/lib/locale/lang/ua'
import { Pagination, Icon } from 'element-ui'

const getCurrentLocale = (locale) => {
    const locales = {
        en: localeEN,
        ru: localeRU
    };
    const defaultLocale = 'ua';

    return locale in locales ? locales[locale] : locales[defaultLocale]
}

export default ({ store }) => {
    Vue.use(Pagination, {
        i18n: (key) => {
            const locale = getCurrentLocale(store.$i18n.locale)

            key = key.split('.').reduce((t, c) => `${t}["${c}"]`)
            return eval(`locale.${key}`)
        }
    });
    Vue.use(Icon);
}

