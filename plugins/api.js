export default function({ $axios, env }, inject){
    const api = $axios.create({
        headers: {
            common: {
                Accept: 'text/plain, */*'
            }
        }
    });

    api.setBaseURL(env.apiURL);

    inject('api', api);
}