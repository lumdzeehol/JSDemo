
// 侧边栏下方商品列表
function inUl1(){
var arr1=[{name:"2016漏背深V领低胸性感气质吊带连衣裙",
    price:68,
    sale:58,
    guid:001,
    imgurl:'images/p1.png'
},{
    name:"韩国进口 Qnigirls正品秋季新款时尚背带针织连衣裙",
    price:138,
    sale:140,
    guid:002,
    imgurl:'images/p2.png'
},{
    name:"2017新款韩版显瘦气质淑女田园小清新甜美",
    price:98,
    sale:90,
    guid:003,
    imgurl:'images/p3.png'
}];
var mainBodyU1=document.getElementById('mainBodyU1');
var lis=arr1.map(function(item){
        return '<li data-guid="'+item.guid+'">'
        +'<a href="html/goods.html?name='+encodeURI(item.name)+'&imgurl='+item.imgurl+'&price='+item.price+'&sale='+item.sale+'&guid='+item.guid+'"><img src="'+item.imgurl+'"/></a>'
            +'<p>'+item.name+'</p>'
            +'<p>原价：<del>'+item.price+'</del></p>'
            +'<p class="sale">现价：<span>'+item.sale+'</span></p>'
            +'<p>优惠：'+(item.price-item.sale)+'</p>'
        +'</li>';
        }).join('');
    mainBodyU1.innerHTML=lis;

}
//主商品列表
function inUl2(ranks){
    var arr2=[{
    name:"2016漏背深V领低胸性感气质吊带连衣裙",
    price:68,
    sale:58,
    guid:001,
    imgurl:'images/p1.png'
},{
    name:"韩国进口 Qnigirls正品秋季新款时尚背带针织连衣裙",
    price:138,
    sale:140,
    guid:002,
    imgurl:'images/p2.png'
},{
    name:"2017新款韩版显瘦气质淑女田园小清新甜美",
    price:98,
    sale:90,
    guid:003,
    imgurl:'images/p3.png'
},{
    name:"2016漏背深V领低胸性感气质吊带连衣裙",
    price:69,
    sale:68,
    guid:004,
    imgurl:'images/p1.png'
},{
    name:"韩国进口 Qnigirls正品秋季新款时尚背带针织连衣裙",
    price:148,
    sale:139,
    guid:005,
    imgurl:'images/p2.png'
},{
    name:"2017新款韩版显瘦气质淑女田园小清新甜美",
    price:99,
    sale:98,
    guid:006,
    imgurl:'images/p3.png'
},{
    name:"2016漏背深V领低胸性感气质吊带连衣裙",
    price:78,
    sale:77,
    guid:007,
    imgurl:'images/p1.png'
},{
    name:"韩国进口 Qnigirls正品秋季新款时尚背带针织连衣裙",
    price:128,
    sale:121,
    guid:008,
    imgurl:'images/p2.png'
},{
    name:"2017新款韩版显瘦气质淑女田园小清新甜美",
    price:88,
    sale:80,
    guid:009,
    imgurl:'images/p3.png'
},{
    name:"2016漏背深V领低胸性感气质吊带连衣裙",
    price:48,
    sale:40,
    guid:010,
    imgurl:'images/p1.png'
},{
    name:"韩国进口 Qnigirls正品秋季新款时尚背带针织连衣裙",
    price:118,
    sale:110,
    guid:011,
    imgurl:'images/p2.png'
},{
    name:"2017新款韩版显瘦气质淑女田园小清新甜美",
    price:78,
    sale:70,
    guid:012,
    imgurl:'images/p3.png'
},{
    name:"2016漏背深V领低胸性感气质吊带连衣裙",
    price:66,
    sale:60,
    guid:013,
    imgurl:'images/p1.png'
},{
    name:"韩国进口 Qnigirls正品秋季新款时尚背带针织连衣裙",
    price:136,
    sale:130,
    guid:014,
    imgurl:'images/p2.png'
},{
    name:"2017新款韩版显瘦气质淑女田园小清新甜美",
    price:79,
    sale:70,
    guid:015,
    imgurl:'images/p3.png'
},{
    name:"2016漏背深V领低胸性感气质吊带连衣裙",
    price:65,
    sale:60,
    guid:016,
    imgurl:'images/p1.png'
},{
    name:"韩国进口 Qnigirls正品秋季新款时尚背带针织连衣裙",
    price:135,
    sale:130,
    guid:017,
    imgurl:'images/p2.png'
},{
    name:"2017新款韩版显瘦气质淑女田园小清新甜美",
    price:80,
    sale:79,
    guid:018,
    imgurl:'images/p3.png'
},{
    name:"2016漏背深V领低胸性感气质吊带连衣裙",
    price:69,
    sale:60,
    guid:019,
    imgurl:'images/p1.png'
},{
    name:"韩国进口 Qnigirls正品秋季新款时尚背带针织连衣裙",
    price:129,
    sale:120,
    guid:020,
    imgurl:'images/p2.png'
}]
var goodsUl=document.getElementsByClassName('goodsUl')[0];
//价格从高到低排序
if(ranks=='up'){
    goodsUl.innerHTML='';
    var arr3=[];
    arr3=arr2.slice(0);
    arr3.sort(function(a,b){
        return Number(b['sale'])-Number(a['sale']);
    })
    var lis=arr3.map(function(item){
        return '<li data-guid="'+item.guid+'">'
        +'<a href="html/goods.html?name='+encodeURI(item.name)+'&imgurl='+item.imgurl+'&price='+item.price+'&sale='+item.sale+'&guid='+item.guid+'"><img src="'+item.imgurl+'"/></a>'
            +'<p>'+item.name+'</p>'
            +'<p>原价：<del>'+item.price+'</del></p>'
            +'<p class="sale">现价：<span>'+item.sale+'</span></p>'
            +'<p>优惠：'+(item.price-item.sale)+'</p>'
        +'</li>';
        }).join('');
    goodsUl.innerHTML=lis;
    //价格从低到高排序
}else if(ranks=='down'){
    goodsUl.innerHTML='';
    var arr4=[];
    arr4=arr2.slice(0);
    arr4.sort(function(a,b){
        return Number(a['sale'])-Number(b['sale']);
    })
    var lis=arr4.map(function(item){
        return '<li data-guid="'+item.guid+'">'
        +'<a href="html/goods.html?name='+encodeURI(item.name)+'&imgurl='+item.imgurl+'&price='+item.price+'&sale='+item.sale+'&guid='+item.guid+'"><img src="'+item.imgurl+'"/></a>'
            +'<p>'+item.name+'</p>'
            +'<p>原价：<del>'+item.price+'</del></p>'
            +'<p class="sale">现价：<span>'+item.sale+'</span></p>'
            +'<p>优惠：'+(item.price-item.sale)+'</p>'
        +'</li>';
        }).join('');
    goodsUl.innerHTML=lis;
}else{
var lis=arr2.map(function(item){
        return '<li data-guid="'+item.guid+'">'
        +'<a href="html/goods.html?name='+encodeURI(item.name)+'&imgurl='+item.imgurl+'&price='+item.price+'&sale='+item.sale+'&guid='+item.guid+'"><img src="'+item.imgurl+'"/></a>'
            +'<p>'+item.name+'</p>'
            +'<p>原价：<del>'+item.price+'</del></p>'
            +'<p class="sale">现价：<span>'+item.sale+'</span></p>'
            +'<p>优惠：'+(item.price-item.sale)+'</p>'
        +'</li>';
        }).join('');
    goodsUl.innerHTML=lis;
}
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
            var nav = document.querySelector('.nav_left');
            var nav_sec = nav.querySelector('.nav_sec');
            nav.style.position = 'fixed';
            nav.style.top = 38+'px';
            nav_sec.style.display = 'block';
        }else{
            toTop.style.display = "none";
            topSearch.style.display="none";
            var nav = document.querySelector('.nav_left');
            var nav_sec = nav.querySelector('.nav_sec');
            nav.style.position = 'relative';
            nav.style.top = '';
            nav_sec.style.display = '';
            // nav_sec.
        }
    }
}
//价格从高到低排序
function priceUp(){
    var mainBody2=document.getElementsByClassName('mainBody2')[0];
    var a3=mainBody2.getElementsByClassName('a3')[0];
    a3.onclick=function(){
        inUl2('up');
        a3.style.color="red";
        a4.style.color="#333";
    }
}
// 价格从低到高排序
function priceDown(){
    var mainBody2=document.getElementsByClassName('mainBody2')[0];
    var a4=mainBody2.getElementsByClassName('a4')[0];
    a4.onclick=function(){
        inUl2('down');
        a4.style.color="red";
        a3.style.color="#333";

    }
}
