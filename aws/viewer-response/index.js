function handler(event) {

    var response = event.response;
    var headers = response.headers;

    headers['strict-transport-security'] = { value: 'max-age=31536000; includeSubdomains; preload'};
    headers['content-security-policy'] = { value: "base-uri 'self'; block-all-mixed-content; connect-src 'self' wss://surreal.io/rpc https://version.surrealdb.com https://contact.surrealdb.com https://www.google-analytics.com/ https://api.mixpanel.com; default-src 'none'; font-src 'self'; form-action 'none'; frame-ancestors 'self'; img-src 'self' https://cdn.brandsafe.io/ https://www.google-analytics.com/ https://www.linkedin.com/px/ https://*.ads.linkedin.com/; manifest-src 'self'; media-src 'self' https://surrealdb.s3.amazonaws.com/; script-src 'self' https://www.google-analytics.com/ https://cdn.mxpnl.com/; style-src 'self'; upgrade-insecure-requests; worker-src 'self'" };
    headers['permissions-policy'] = { value: "accelerometer=(), ambient-light-sensor=(), autoplay=(), battery=(), camera=(), cross-origin-isolated=(), display-capture=(), document-domain=(), encrypted-media=(), execution-while-not-rendered=(), execution-while-out-of-viewport=(), fullscreen=(), geolocation=(), gyroscope=(), keyboard-map=(), magnetometer=(), microphone=(), midi=(), navigation-override=(), payment=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(), usb=(), web-share=(), xr-spatial-tracking=()" };
    headers['feature-policy'] = { value: "accelerometer 'none'; battery 'none'; camera 'none'; display-capture 'none'; fullscreen 'none'; geolocation 'none'; microphone 'none'; midi 'none'; payment 'none'; usb 'none'" };
    headers['x-content-type-options'] = { value: 'nosniff' };
    headers['x-frame-options'] = { value: 'DENY' };
    headers['x-xss-protection'] = { value: '1; mode=block' };
    headers['referrer-policy'] = { value: 'no-referrer' };
    headers['expect-ct'] = { value: 'enforce, max-age=86400' };

    return response;

}
