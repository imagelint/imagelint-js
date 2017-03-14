(function() {
    var root = 'https://a1.imagelint.com';
    
    function isValidURL(url) {
        return url.substr(0, 7) === 'http://' || url.substr(0, 8) === 'https://';
    }
    
    function error(message) {
        throw message;
    }
    
    function removeProtocol(url) {
        return url.replace(/^https?:\/\//, '');
    }
    
    function removeFragment(url) {
        return url.replace(/#.*$/, '')
    }
    
    function sanitize(url) {
        return removeProtocol(removeFragment(url));
    }
    
    function getURLParams(params) {
        var mappings = {
            width: 'il-width',
            height: 'il-height',
            dpr: 'il-dpr'
        };
        var newParams = {};
        var length = 0;
        for (var key in params) {
            if(typeof mappings[key] !== 'undefined') {
                length++;
                newParams[mappings[key]] = params[key]
            }
        }
        if(length === 0) {
            return false;
        }
        return newParams;
    }
    
    function stringifyParams(url, params) {
        var urlParams = getURLParams(params);
        if (!urlParams) {
            return '';
        }
        var hasQueryParams = url.indexOf('?') !== -1;
        var paramsArray = [];
        for (var key in urlParams) {
            paramsArray.push(key + '=' + urlParams[key]);
        }
        return (hasQueryParams ? '&' : '?') + paramsArray.join('&');
    }
    
    function build(url, params) {
        return root + '/' + sanitize(url) + stringifyParams(url, params);
    }
    
    var Imagelint = {
        get: function(url, params) {
            if(!isValidURL(url)) {
                error('The URL you specified is invalid: ' + url);
                return '';
            }
            return build(url, params);
        }
    };
    if (typeof module !== "undefined" && module !== null) {
        module.exports = Imagelint;
    } else {
        window.Imagelint = Imagelint;
    }    
})();