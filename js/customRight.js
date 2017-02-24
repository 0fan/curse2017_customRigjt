window.onload = function(){
	document.addEventListener('contextmenu',function(e){

		e.preventDefault();

		var customRight = document.querySelector('.customRight'),
			container   = document.querySelector('.customRight-block'),
			containerX  = container.offsetLeft,
			containerY  = container.offsetTop,
			containerW  = container.offsetWidth,
			containerH  = container.offsetHeight,
			x           = e.pageX,
			y           = e.pageY;

		if( x >= containerX && x <= containerX + containerW && y >= containerY && y <= containerY + containerH ){
			customRight.style.left    = x + 'px';
			customRight.style.top     = y + 'px';
			customRight.style.display = 'block';
		}else{
			customRight.style.display = 'none';
		}

	});

	document.addEventListener('click',function(e){
		if(e.button === 2){
			return;
		}

		customRight = document.querySelector('.customRight');
		customRight.style.display = 'none';
	});
}