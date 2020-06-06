let leAxios = {}
leAxios.httpRequest = function (paramObj, sucFun, errFun, complete) {
    var xmlhttp = null;
    /*
     * 关于XMLHttpRequest https://www.w3school.com.cn/xml/xml_http.asp 
     * 创建XMLHttpRequest对象，所有现代浏览器 (IE7+、Firefox、Chrome、Safari 以及 Opera) 都内建了 XMLHttpRequest 对象。
     * 老版本的 Internet Explorer（IE5 和 IE6）使用 ActiveX 对象：new ActiveXObject("Microsoft.XMLHTTP")
     * */
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else if (window.ActiveXObject) {//大可不必适配
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    /*判断是否支持请求*/
    if (xmlhttp == null) {
        alert('你的浏览器不支持XMLHttp');
        return;
    }
    /*请求方式，并且转换为大写*/
    var httpType = (paramObj.type || 'GET').toUpperCase();
    /*数据类型*/
    var dataType = paramObj.dataType || 'json';
    /*请求接口*/
    var httpUrl = paramObj.httpUrl || '';
    /*是否异步请求，默认异步*/
    var async = paramObj.async || true;

    /*请求接收*/
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                console.log(xmlhttp)
                /*成功回调函数*/
                sucFun({
                    code: xmlhttp.status,
                    mes: 'Ok',
                    data: xmlhttp.responseText,
                });
            } else {
                errFun;
            }
            if (complete) {
                complete
            }
        } else {
            /*暂不处理*/
        }
    }

    /*接口连接，先判断连接类型是post还是get*/
    if (httpType == 'GET') {
        let paramData = paramObj.data || [];
        let requestData = '';
        for (var name in paramData) {
            requestData += name + '=' + paramData[name] + '&';
        }
        requestData = requestData == '' ? '' : requestData.substring(0, requestData.length - 1);

        console.log(requestData)
        if (requestData != '') {
            httpUrl = httpUrl + '?' + requestData
        }
        xmlhttp.open("GET", httpUrl, async);
        xmlhttp.send(null);
    } else if (httpType == 'POST') {
        xmlhttp.open("POST", httpUrl, async);
        //发送合适的请求头信息
        if (dataType == 'json') {
            // application/json;charset=UTF-8
            xmlhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        } else {
            // application/x-www-form-urlencoded
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        }
        xmlhttp.send(JSON.stringify(paramObj.data));
    }
}
export default leAxios