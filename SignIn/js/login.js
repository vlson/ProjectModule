//登陆错误弹出窗
var alertWindow = function(text, icon){
	var icons = ['warning', 'error', 'right'];
	window.$.popup({
		type: 1,
		animate:{
			type: 1,
			target: 1
		},
		head: {
			yes: 0,
		},
		opBut: {
			yes: 0,
		},
		autoClose: {
			yes: 1,
			time: 1.5s,
		},
		but: {
			ues: 0
		},
		con: {
			text: [1, text],
			img: [1, icons[icon]],
		}
	});
};
//登陆验证
function loginCheck(){
	var userName = $('#userName').val();
	var password = $('#password').val();
	var verificationCode = $('#verificationCode').val();
	if(userName == '' || userName == '请输入用户名'){
		alertWindow("用户名不能为空", 0);
		$('#userName').focus();
		return false;
	}else if(password == '' || password == '请输入密码'){
		alertWindow("密码不能为空", 0);
		$('#password').focus();
		return false;
	}else if(verificationCode == '' || verificationCode == '请输入验证码'){
		alertWindow("验证码不能为空", 0);
		$('#verificationCode').focus();
		return false;
	}
	//允许提交
	$('#userLoginAction').submit();
}