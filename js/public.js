var UICtrl = {};

UICtrl.alert = function(options){
	var options = options||{}
	var div =  document.createElement('div');
	div.className = 'alert';
	div.innerHTML = '<div class="alert-title">提示</div>'+
					'<div class="alert-tips">'+options+'</div>'+
					'<button class="alert-btn">确定</button>'	
	document.body.appendChild(div);
}

