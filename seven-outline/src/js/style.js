/* 
* @Author: lmm
* @Date:   2017-08-12 11:58:07
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-21 19:49:24
*/

function l_createTags(){
    var tags = document.querySelector('.tags');
    var tass = document.querySelector('.tass');
    var str = 'abcdefghijklmnopqrstuvwxyz';
    var arr = str.split('');
    arr.forEach(function(item){
        var a = document.createElement("a");
        a.innerText = item.toUpperCase();
        a.href= '#';
        tags.firstElementChild.insertBefore(a,tass); 
    });
}
//修改： 梁嫚嫚  8/19
function l_listSellerss(){
    var goodsUl=document.querySelector('.goodsUl');
    var res = l_getData_index(goodsUl,12);
    var list = res.map(item=>{
        return `<li data-guid="${item.guid}">  
            <a href="html/goods.html?name=${(item.name)}&imgurl=${item.imgurl}&price=${item.price}&sale=${item.sale}&guid=${item.guid}"><img src="${item.imgurl.slice(3)}"/></a>
            <p>${item.name}</p>
            <p>原价：<del>${item.price}</del></p>
            <p class="sale">现价：<span>${item.sale}</span></p>
            <p>优惠：${item.price-item.sale}</p>
        </li>`
    }).join('');
    goodsUl.innerHTML=list; 
}   
//左右换页按钮 
function l_scroll(){
    var arr_prev=document.querySelector('.arr_prev');
            var arr_next=document.querySelector('.arr_next');
            var arr_ul=document.querySelector('.arr_ul');   
            arr_prev.onclick=function(){
            arr_prev.style.display = 'none';
            arr_next.style.display = 'none';
              var left=arr_ul.offsetLeft;
              if(left<=-715){ 
                arr_ul.style.left= '-715px';
                arr_prev.style.display = 'block';
                arr_next.style.display = 'block';
                return;
              }
              animate(arr_ul,{left:-715},function(){
                arr_prev.style.display = 'block';
                arr_next.style.display = 'block';
              });

            }
            arr_next.onclick=function(){
            arr_next.style.display = 'none';
            arr_prev.style.display = 'none';
              var left=arr_ul.offsetLeft;
              if(left>=730){
                arr_ul.style.left='730px';
                // arr_prev.style.display = 'block';
                // arr_next.style.display = 'block';
                return;
              }
              animate(arr_ul,{left:30},function(){
                arr_next.style.display = 'block';
                arr_prev.style.display = 'block';
              });
            }  
}
//修改： 梁嫚嫚  8/19
function l_arrivalsList(){
    var arr_ul=document.querySelector('.arr_ul');
    var res = l_getData_index(arr_ul,8);
    var list = res.map(item=>{
        return `<li data-guid="${item.guid}">  
            <a href="html/goods.html?name=${(item.name)}&imgurl=${item.imgurl}&price=${item.price}&sale=${item.sale}&guid=${item.guid}"><img src="${item.imgurl.slice(3)}"/></a>
            <p>${item.name}</p>
            <p>原价：<del>${item.price}</del></p>
            <p class="sale">现价：<span>${item.sale}</span></p>
            <p>优惠：${item.price-item.sale}</p>
        </li>`
    }).join('');
    arr_ul.innerHTML=list; 
}  
//头部onmouseover和onmouseout事件
function l_headerEvent(){
    var ali_1 = document.querySelector('.ali_1');
    var li_2 = document.querySelector('.li_2');
    var list1 = document.querySelector('.list1');
    var list_box = document.querySelector('.list_box');
    ali_1.onmouseover = function(){
        clearTimeout(ali_1.timer);
        clearTimeout(li_2.timer);
        list_box.style.display = 'none';
        li_2.classList.remove('hover');
        ali_1.classList.add('hover');
        list1.style.display = 'block';
    }
    ali_1.onmouseout = function(){     
      ali_1.timer =setTimeout(function(){
          list1.style.display = 'none';
          ali_1.classList.remove('hover');
      },1500);  
    }
     li_2.onmouseover= function(){
        clearTimeout(li_2.timer);
        clearTimeout(ali_1.timer);
        li_2.classList.add('hover');
        list1.style.display = 'none';
        ali_1.classList.remove('hover');
        list_box.style.display = 'block';
    }
    
    li_2.onmouseout = function(){
        
        li_2.timer= setTimeout(function(){
        list_box.style.display = 'none';
        li_2.classList.remove('hover');
        },1500); 
    }
}

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

/*导航吸顶*/
function nav_margnet(){
    window.onscroll=function(){
        if(scrollY>150){
            var nav = document.querySelector('.nav_left');
            var nav_sec = nav.querySelector('.nav_sec');
            nav.style.position = 'fixed';
            nav.style.top = 0;
            nav_sec.style.display = 'block';

        }else{
            var nav = document.querySelector('.nav_left');
            var nav_sec = nav.querySelector('.nav_sec');
            nav.style.position = 'relative';
            nav.style.top = '';
            nav_sec.style.display = '';
        }
    }
}
