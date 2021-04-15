const webpack = require('webpack');

export default {
    ssr: false, // Disable Server Side rendering
    env: {
        baseURL: process.env.BASE_URL,
        officeLocationLat : process.env.OFFICE_LOCATION_LAT,
        officeLocationLng : process.env.OFFICE_LOCATION_LNG,
        googleKey : process.env.GOOGLE_KEY,
    },
    analyze: {
        analyzerMode: 'static'
    },
    mode: 'spa',
    router: {
        base: '/'
    },
    dev: process.env.NODE_ENV !== "production",
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { 'http-equiv': 'cache-control', content: 'max-age=3600' },
        ],   
        link: [
            {
                rel: 'apple-touch-icon"',
                sizes: '180x180',
                href: '/apple-touch-icon.png',
            },
            {
                rel: 'icon',
                sizes: '32x32',
                type: 'image/png',
                href: '/favicon-32x32.png',
            },
            {
                rel: 'icon',
                sizes: '16x16',
                type: 'image/png',
                href: '/favicon-16x16.png',
            },
            {
                rel: 'manifest',
                href: '/site.webmanifest',
            },
            {
                rel: 'mask-icon',
                href: '/safari-pinned-tab.svg',
                color: '#5bbad5',
            },
        ],
    },
    plugins : [
        '@/plugins/google.maps.js',
        '@/plugins/bootstrap.js',
        '@/plugins/event-bus.js',
    ],
    server: {
        port: 3000,
        host: '192.168.0.104',
        timing: false
    },
    modules : [
        ['nuxt-i18n',
        {
            locales: [
                { code: 'ua', file: 'ua.json', dir: 'ltr' },
                { code: 'ru', file: 'ru.json', dir: 'ltr' }
            ],
            defaultLocale: 'ua',
            langDir : '~/locales/'
        }],
    ],
    build : {
        plugins: [
            new webpack.ProvidePlugin({
              $: 'jquery',
              jQuery: 'jquery',
              'window.jQuery': 'jquery',
              Popper: ['popper.js', 'default'],
            }),
        ],
        extend(config) {
            // Find the rule which contains a assets file extension
            const assetsLoader = config.module.rules.find(rule => rule.test.test('.png'));
      
            // Overwrite the test regex and add `pdf`
            assetsLoader.test = /\.(png|jpe?g|gif|svg|webp|pdf)$/i;
      
            return config;
        },
    },
}