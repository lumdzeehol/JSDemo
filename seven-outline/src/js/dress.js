/*林知灏更改*/
var currentOrder = '';
// 侧边栏下方商品列表
// 修改梁嫚嫚 8/19
function ll_side(){
    var mainBodyU1=document.getElementById('mainBodyU1');
    console.log(mainBodyU1);
    var res = l_getData(mainBodyU1,3);
    var list = res.map(item=>{
        return `<li data-guid="${item.guid}">  
            <a href="goods.html?name=${(item.name)}&imgurl=${item.imgurl}&price=${item.price}&sale=${item.sale}&guid=${item.guid}"><img src="${item.imgurl}"/></a>
            <p>${item.name}</p>
            <p>原价：<del>${item.price}</del></p>
            <p class="sale">现价：<span>${item.sale}</span></p>
            <p>优惠：${item.price-item.sale}</p>
        </li>`
    }).join('');
    mainBodyU1.innerHTML=list; 
}  

//主商品列表

/*林知灏更改*/

//主商品列表
function inUl2(page){

    var goodsUl=document.getElementsByClassName('goodsUl')[0];
    var order;
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status === 200 || xhr.status === 304) {
            var data_arr = JSON.parse( xhr.responseText ).data;
            var lis=data_arr.map(function(item){
                return '<li data-guid="'+item.guid+'">'
                +'<a href="goods.html?name='+encodeURI(item.name)+'&imgurl='+item.imgurl+'&price='+item.price+'&sale='+item.sale+'&guid='+item.guid+'"><img src="'+item.imgurl+'"/></a>'
                    +'<p>'+item.name+'</p>'
                    +'<p>原价：<del>'+item.price+'</del></p>'
                    +'<p class="sale">现价：<span>'+item.sale+'</span></p>'
                    +'<p>优惠：'+(item.price-item.sale)+'</p>'
                +'</li>';
                }).join('');
            goodsUl.innerHTML=lis;
        }  
    } 

    var request_url ;
    if (currentOrder === "asc") {
        request_url = "../api/goods.php?page="+page + "&order=asc";
    }else if(currentOrder === "desc"){
        request_url = "../api/goods.php?page="+page + "&order=desc";
    }else{
        request_url = "../api/goods.php?page="+page;
    }
    console.log(request_url);
         
    xhr.open("GET",request_url,true);
    xhr.send();
}
/*林知灏更改*/
function initPage(){
    var pageControl = document.querySelectorAll('.ss');
    var xhr = new XMLHttpRequest();

    xhr.onload = function(){
    
        if (xhr.status === 200 || xhr.status === 304) {
            var data = JSON.parse(xhr.responseText);
            var count = data.numofPages;
            for(var j = 0; j < pageControl.length ; j++){            
                for(var i = 0; i < count; i++){
                    var a = document.createElement('a');
                    a.innerHTML = i+1;
                    a.dataset.idx = i+1;
                    a.onclick = function(){
                        var len=this.parentNode.children.length;
                        var pageslast=this.parentNode.parentNode.parentNode.parentNode.querySelectorAll('.ss')[1];
                        var pagesfirst=this.parentNode.parentNode.parentNode.parentNode.querySelectorAll('.ss')[0];
                        console.log(pageslast);
                        for(var k=0;k<len;k++){
                            pageslast.children[k].className="";
                            pagesfirst.children[k].className="";
                        }
                        pagesfirst.children[this.dataset.idx-1].className='active';
                        pageslast.children[this.dataset.idx-1].className='active';
                        inUl2(this.dataset.idx);                            
                    }.bind(a);
                    pageControl[j].appendChild(a);
                    pageControl[j].children[0].className='active';
                }
            }
        }
    };
    xhr.open("GET","../api/goods.php?page=1",true);
    xhr.send();
}

//返回顶部按钮和吸顶菜单
function toTop1(){
    var topSearch = document.getElementById("topSearch");
    var toTop=document.getElementsByClassName('toTop')[0];   
    toTop.onclick=function(){
        var timer=setInterval(function(){
            scrollBy(0,-50);
            if(scrollY<=0){
            clearInterval(timer);
            }
        },30);
    }
    window.onscroll=function(){
        if(scrollY>150){
            toTop.style.display = "block";
            topSearch.style.display="block";
        }else{
            toTop.style.display = "none";
            topSearch.style.display="none";
        }
    }
}
/*林知灏更改*/
//价格从高到低排序
function priceUp(){
    var mainBody2=document.getElementsByClassName('mainBody2')[0];
    var a3=mainBody2.getElementsByClassName('a3')[0];
    var a4=mainBody2.getElementsByClassName('a4')[0];
    a3.onclick=function(){
        console.log('desc');
             
        currentOrder = "desc"
        inUl2(1);
        a3.style.color="red";
        a4.style.color="#333";
        console.log(3232323);
             
    }
}
// 价格从低到高排序
function priceDown(){
    var mainBody2=document.getElementsByClassName('mainBody2')[0];
    var a3=mainBody2.getElementsByClassName('a3')[0];
    var a4=mainBody2.getElementsByClassName('a4')[0];
    a4.onclick=function(){
        currentOrder = "asc"
        console.log('asc');
             
        inUl2(1);
        a4.style.color="red";
        a3.style.color="#333";

    }
}

//侧边栏菜单点击收缩
function dress_menu_p(){
    var uls = document.querySelectorAll('#mains .body1Top .u1');
    for(var i=0;i<uls.length;i++){
        var btnI=uls[i].children[0].children[0];
        btnI.onclick=function(e){
            var target=e.target;
            if(target.tagName=="I"){
                var ul=target.parentNode.parentNode;
                var lis=ul.querySelectorAll('li');
                for(var k=0;k<lis.length;k++){
                    if(lis[k].classList.contains('hide')){
                        for(var n=0;n<lis.length;n++){
                            lis[n].className="hide";
                        }
                    };
                }
                var thisbtn=this;
                var j=lis.length-1;
                clearInterval(this.timer);
                this.timer=setInterval(function(){
                    if(lis[j].classList.contains('hide')){
                        lis[j].classList.remove('hide');
                    }else{
                        lis[j].classList.add('hide');
                    }                   
                    --j;
                    if(j<0){
                    clearInterval(thisbtn.timer);
                    }
                },100)
            }
            
        }
    }
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