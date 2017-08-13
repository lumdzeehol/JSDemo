function banner_autoPlay(){
	var imglist = document.querySelector('.imglist').children;
	var pagecontrols = document.querySelector('.pagecontrol').children;
	var currentIndex = 0;
	var targetIndex = 1;
	var index = 0;
	for(var i = 0; i < imglist.length ; i++){
		// imglist[i].children[0].style.opacity = 0;
	}
	imglist[index].children[0].style.opacity = 1;
	pagecontrols[index].style.backgroundColor = '#1375c2';
	function autoplay(){
		index++;
		if (index >= imglist.length) {
			index = 0;
		}else if (index<0){
			index = imglist.length - 1;
		}

		animate(imglist[index].children[0],{'opacity':1});
		pagecontrols[index].style.backgroundColor = '#1375c2';

		if (index===0) {
			animate(imglist[imglist.length - 1].children[0],{'opacity':0});
			pagecontrols[imglist.length - 1].style.backgroundColor = '';
		}else{
			animate(imglist[index - 1].children[0],{'opacity':0});
			pagecontrols[index - 1].style.backgroundColor = '';
		}
	}
	var timer = setInterval(autoplay,2000);
}