(function() {
	console.log('这是 simple-chrome-plugin-demo 的content-script！');
    document.getElementById("password").setAttribute('value','111111');
    document.getElementById('form').submit();
})();