function banner_autoPlay(){
	var banner = document.querySelector('#banner');
	var imglist = document.querySelector('.imglist').children;
	var pagecontrols = document.querySelector('.pagecontrol').children;
	var currentIndex = 0;
	var targetIndex = 1;
	var index = 0;

	imglist[index].children[0].style.opacity = 1;
	pagecontrols[index].style.backgroundColor = '#1375c2';
	function autoplay(){
		// index++;
		if (targetIndex >= imglist.length) {
			targetIndex = 0;
			currentIndex = imglist.length - 1;
		}else if (targetIndex ===0){
			currentIndex = imglist.length - 1;
		}else{
			currentIndex = targetIndex - 1;
		}
		roll();
		targetIndex++;
	}
	function roll(){
		if (currentIndex !== targetIndex) {
			animate(imglist[targetIndex].children[0],{'opacity':1});
			pagecontrols[targetIndex].style.backgroundColor = '#1375c2';
			animate(imglist[currentIndex].children[0],{'opacity':0});
			pagecontrols[currentIndex].style.backgroundColor = '';
			currentIndex = targetIndex;
		}
	}

	var timer = setInterval(autoplay,2000);
	banner.onmouseenter = function(){
		clearInterval(timer);
	}
	banner.onmouseleave = function(){
		timer = setInterval(autoplay, 2000);
	}
	     

	for(let j = 0;j < pagecontrols.length ; j++){
		pagecontrols[j].onmouseenter = function(){
			targetIndex = j;
			roll();
			// console.log(j);
			     
		}
	}
}

function initBrandWall(){
	     
	var brands = document.querySelectorAll('.brandcell');
	// var brandwall = document.querySelector('.brandwall');
	for(let i = 0; i < brands.length ; i++){
		brands[i].onmouseenter = function(ev){

			brands[i].children[1].style.display = 'block';
			animate(brands[i].children[2],{'bottom':0});
		}
		brands[i].onmouseleave = function(ev){
			brands[i].children[1].style.display = 'none';
			animate(brands[i].children[2],{'bottom':-45});
		}
	}
}