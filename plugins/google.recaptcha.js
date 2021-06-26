let isReady = true;

export default ({ env }, inject) => {
    inject('grecaptchSendAction', action => {
        const sendAction = () => grecaptcha.execute(env.googleRecaptchaKey, { action });

        if (isReady) {
            return sendAction();
        }

        return new Promise((res, rej) => {
            const checkCaptcha = () => {
                setTimeout(() => {
                    if (isReady) {
                        res(sendAction);
                        return;
                    } else {
                        checkCaptcha();
                    }
                }, 200);
            };

            checkCaptcha();
        })

    });
 
     const script = window.document.createElement("script");
     script.src = `https://www.google.com/recaptcha/api.js?render=${env.googleRecaptchaKey}`;
     script.defer = "true";
     window.document.body.appendChild(document.body.appendChild(script));

    setTimeout(() => {
        window.grecaptcha.ready(() => {
            isReady = true;
        });
    },1000);
 }