$(document).ready(function () {
	// 底部年份动态化
    $('.year').html(new Date().getFullYear());
	
	// 异步加载一言
	(function getHitokoto() {
	    $.ajax({
	        url: "https://api.imjad.cn/hitokoto/?encode=jsc&charset=utf-8&length=50",
	        //url: "https://v1.hitokoto.cn/?encode=json&charset=utf-8",
	        dataType: "jsonp",
	        async: true,
	        jsonp: "callback",
	        jsonpCallback: "hitokoto",
	        success: function (result) {
	            $('#hitokoto').html(result.hitokoto)
	        },
	        error: function () {
	            $('#hitokoto').html("读取数据失败了的说……_(:з」∠)_")
	        }
	    });
	})();
});
document.oncontextmenu=function(t){window.event&&(t=window.event);try{var e=t.srcElement;return"INPUT"==e.tagName&&"text"==e.type.toLowerCase()||"TEXTAREA"==e.tagName?!0:!1}catch(n){return!1}},document.onpaste=function(t){window.event&&(t=window.event);try{var e=t.srcElement;return"INPUT"==e.tagName&&"text"==e.type.toLowerCase()||"TEXTAREA"==e.tagName?!0:!1}catch(n){return!1}},document.oncopy=function(t){window.event&&(t=window.event);try{var e=t.srcElement;return"INPUT"==e.tagName&&"text"==e.type.toLowerCase()||"TEXTAREA"==e.tagName?!0:!1}catch(n){return!1}},document.oncut=function(t){window.event&&(t=window.event);try{var e=t.srcElement;return"INPUT"==e.tagName&&"text"==e.type.toLowerCase()||"TEXTAREA"==e.tagName?!0:!1}catch(n){return!1}},document.onselectstart=function(t){window.event&&(t=window.event);try{var e=t.srcElement;return"INPUT"==e.tagName&&"text"==e.type.toLowerCase()||"TEXTAREA"==e.tagName?!0:!1}catch(n){return!1}};
