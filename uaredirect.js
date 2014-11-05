function uaredirect(f) {
	var n = navigator.userAgent.toLowerCase();
	if (n.indexOf('iphone')>-1 || n.indexOf('iPhone')>-1 || n.indexOf('ipod')>-1 || n.indexOf('android')>-1 || n.indexOf('ipad')>-1 || n.indexOf('ios')>-1) location.replace(f);
}
