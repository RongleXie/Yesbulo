var _$ = ["input", "wfproduct", "radio", "请选择产品！", "", '请选择产品！', "input", "wfproductb", "radio", "请选择型号！", "", '请选择型号！', "", '请填写姓名！', '姓名格式不正确，请重新填写！', "", '请填写手机号码！', '手机号码格式不正确，请重新填写！', "", '请选择所在地区！', "", '请填写详细地址！', "", '请填写E-MAIL！', 'E-MAIL格式不正确，请重新填写！', "", '请填写验证码！', '验证码格式不正确，请重新填写！', "正在提交，请稍等 >>", "wfprovince", "wfcity", "wfarea", "wfcode", "wfcode", "?wfaction=codeimg&imgw=70&imgh=29&temp=", "", "showprice", "wfproduct", "wfproduct", "", "showprice", "paydiv", "block", "paydiv", "none", "wfform", "_self", "wfform", "_blank", '', "WFLLURL=", ";path=/", "wfddll"];
window.onerror = function() {
	return true
};

function postcheck() {
	try {
		var flag1 = 0x0;
		var dxa = document.getElementsByTagName(_$[0]);
		var radio1 = document.getElementsByName(_$[1]);
		for (var i = 0x0; i < radio1.length; i++) {
			if (radio1.item(i).checked == true) {
				flag1 = 0x1;
				break
			}
		};
		if (!flag1 && dxa[i].type == _$[2]) {
			alert(_$[3]);
			return false
		}
	} catch (ex) {};
	try {
		if (document.wfform.wfproduct.value == _$[4]) {
			alert(_$[5]);
			document.wfform.wfproduct.focus();
			return false
		}
	} catch (ex) {};
	try {
		var flag2 = 0x0;
		var dxb = document.getElementsByTagName(_$[6]);
		var radio2 = document.getElementsByName(_$[7]);
		for (var i = 0x0; i < radio2.length; i++) {
			if (radio2.item(i).checked == true) {
				flag2 = 0x1;
				break
			}
		};
		if (!flag2 && dxb[i].type == _$[8]) {
			alert(_$[9]);
			return false
		}
	} catch (ex) {};
	try {
		if (document.wfform.wfproductb.value == _$[10]) {
			alert(_$[11]);
			document.wfform.wfproductb.focus();
			return false
		}
	} catch (ex) {};
	try {
		if (document.wfform.username.value == _$[12]) {
			alert(_$[13]);
			document.wfform.username.focus();
			return false
		};
		var username = /^[一-龥]{2,6}$/;
		if (!username.test(document.wfform.username.value)) {
			alert(_$[14]);
			document.wfform.username.focus();
			return false
		}
	} catch (ex) {};
	try {
		if (document.wfform.mob.value == _$[15]) {
			alert(_$[16]);
			document.wfform.mob.focus();
			return false
		};
		var wfform = /^1[3,4,5,8,7]\d{9}$/;
		if (!wfform.test(document.wfform.mob.value)) {
			alert(_$[17]);
			document.wfform.mob.focus();
			return false
		}
	} catch (ex) {};
	try {
		if (document.wfform.wfprovince.value == _$[18]) {
			alert(_$[19]);
			document.wfform.wfprovince.focus();
			return false
		}
	} catch (ex) {};
	try {
		if (document.wfform.address.value == _$[20]) {
			alert(_$[21]);
			document.wfform.address.focus();
			return false
		}
	} catch (ex) {};
	try {
		if (document.wfform.wfemail.value == _$[22]) {
			alert(_$[23]);
			document.wfform.wfemail.focus();
			return false
		};
		var wfemail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		if (!wfemail.test(document.wfform.wfemail.value)) {
			alert(_$[24]);
			document.wfform.wfemail.focus();
			return false
		}
	} catch (ex) {};
	try {
		if (document.wfform.wfcode.value == _$[25]) {
			alert(_$[26]);
			document.wfform.wfcode.focus();
			return false
		};
		var regwfcode = /^\d{1,2}$/;
		if (!regwfcode.test(document.wfform.wfcode.value)) {
			alert(_$[27]);
			document.wfform.wfcode.focus();
			return false
		}
	} catch (ex) {};
	document.wfform.wfsubmit.disabled = true;
	document.wfform.wfsubmit.value = _$[28];
	return true
};
try {
	new PCAS(_$[29], _$[30], _$[31])
} catch (ex) {};
try {
	var thissrc = document.getElementById(_$[32]).src;

	function refreshCode() {
		document.getElementById(_$[33]).src = thissrc + _$[34] + Math.random()
	}
} catch (ex) {};

function pricea() {
	var wfproduct = document.wfform.wfprice.value;
	for (var i = 0x0; i < document.wfform.wfproduct.length; i++) {
		if (document.wfform.wfproduct[i].checked == true) {
			var wfproduct = document.wfform.wfproduct[i].alt;
			break
		}
	};
	if (document.wfform.wfmun.value == _$[35] || document.wfform.wfmun.value == 0x0) {
		var wfmun = 0x1
	} else {
		var wfmun = document.wfform.wfmun.value
	};
	var wfprice = wfproduct * wfmun;
	document.wfform.wfprice.value = wfprice;
	document.getElementById(_$[36]).innerHTML = wfprice
};

function priceb() {
	var wfcpxljg = document.getElementById(_$[37]);
	var wfproduct = wfcpxljg.options[document.getElementById(_$[38]).options.selectedIndex].title;
	if (document.wfform.wfmun.value == _$[39] || document.wfform.wfmun.value == 0x0) {
		var wfmun = 0x1
	} else {
		var wfmun = document.wfform.wfmun.value
	};
	var wfprice = wfproduct * wfmun;
	document.wfform.wfprice.value = wfprice;
	document.getElementById(_$[40]).innerHTML = wfprice
};

function changeItem(i) {
	var k = 0x3;
	for (var j = 0x0; j < k; j++) {
		if (j == i) {
			document.getElementById(_$[41] + j).style.display = _$[42]
		} else {
			document.getElementById(_$[43] + j).style.display = _$[44]
		}
	}
};

function opay() {
	document.getElementById(_$[45]).target = _$[46]
};

function opay2() {
	document.getElementById(_$[47]).target = _$[48]
};
var wfllref = _$[49];
if (document.referrer.length > 0x0) {
	wfllref = document.referrer
};
try {
	if (wfllref.length == 0x0 && opener.location.href.length > 0x0) {
		wfllref = opener.location.href
	}
} catch (e) {}
document.cookie = _$[50] + wfllref + _$[51];
document.getElementById(_$[52]).value = window.top.document.referrer;