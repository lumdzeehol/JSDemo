/* 
* @Author: 潘然然
* @Date:   2017-08-05 23:25:26
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-08 19:05:03
*/

function toTop1(){
    var toTop=document.getElementsByClassName('toTop')[0];   
    toTop.onclick=function(){
        var timer=setInterval(function(){
            scrollBy(0,-50);
            if(scrollY<=0){
            clearInterval(timer);
            }
        },30);
    }
}
function goodsListIn(){
    var imgurl=document.getElementById('imgurl');
        var goodsName=document.getElementsByClassName('goodsname')[0];
        var size=document.getElementsByClassName('size1')[0];
        var color=document.getElementsByClassName('color1')[0];
        //尺码点击事件
        size.onclick=function(e){
          e=e||window.event;
          var target=e.target||e.srcElement;
          var ul=target.parentNode;
          var lis=ul.children;
          
          if(target.tagName=='LI'){
            for(var i=0;i<lis.length;i++){
            lis[i].style.border='1px solid #ccc';
            lis[i].style.color='#000';
          }
            target.style.border='1px solid orange';
            target.style.color='red';
          }
        } 
        // 颜色点击事件
        color.onclick=function(e){
          e=e||window.event;
          var target=e.target||e.srcElement;
          var ul=target.parentNode;
          var lis=ul.children;
          
          if(target.tagName=='LI'){
            for(var i=0;i<lis.length;i++){
            lis[i].style.border='1px solid #ccc';
            lis[i].style.color='#000';
          }
            target.style.border='1px solid orange';
            target.style.color='red';
          }
        } 

        var price=document.getElementsByClassName('price')[0];
        var price1=document.getElementsByClassName('price')[1];
        var price2=document.getElementsByClassName('price')[2];

        var price_1=document.getElementsByClassName('price_1')[0];
        var price_2=document.getElementsByClassName('price_2')[0];
        var price_3=document.getElementsByClassName('price_3')[0];

        var params = location.search.substring(1).split('&');
        var sales;
        var picsurl;
        params.forEach(function(item){
            var arr = item.split('=');

            // 解码
            var val = decodeURI(arr[1])

            if(arr[0] == 'name'){
                goodsName.innerHTML = val;
            }else if(arr[0] == 'imgurl'){
                imgurl.src = '../'+val;
                picsurl=val;
            }else if(arr[0] == 'sale'){
                sales=val;
                price.innerHTML = '￥'+val;
                price2.innerHTML = 'py'+val;
                price_1.innerHTML='￥'+(val-10);
                price_2.innerHTML='￥'+(val-20);
                price_3.innerHTML='￥'+(val-30);
            }else if(arr[0] == 'price'){
                price1.innerHTML = 'py'+val;
            }
        });
        //加数量下面显示当前价格
        var price3=document.getElementsByClassName('price')[3];
        var qty=document.getElementById('qty');
        qty.focus();
        qty.value=1;
        price3.innerHTML=sales+' py6.x '+1+'  =  <span class="s1">'+(sales*1)+'  py6.</span>';
        qty.onchange=function(){
          var _qty=qty.value;
          if(_qty<=0){
            qty.value=1;
            price3.innerHTML=sales+' py6.x '+1+'  =  <span class="s1">'+(sales*1)+'  py6.</span>';
          }
          if(_qty>0&&_qty<5){
            var res=sales+' py6.x '+_qty+'  =  <span class="s1">'+(sales*_qty)+'  py6.</span>';
            price3.innerHTML=res;
          }
          if(_qty>=5&&_qty<10){
            var res=(sales-10)+' py6.x '+_qty+'  =  <span class="s1">'+((sales-10)*_qty)+'  py6.</span>';
            price3.innerHTML=res;
          }
          if(_qty>=10&&_qty<20){
            var res=(sales-20)+' py6.x '+_qty+'  =  <span class="s1">'+((sales-20)*_qty)+'  py6.</span>';
            price3.innerHTML=res;
          }
          if(_qty>=20){
            var res=(sales-30)+' py6.x '+_qty+'  =  <span class="s1">'+((sales-30)*_qty)+'  py6.</span>';
            price3.innerHTML=res;
          }
        }
        // 图片点击显示主图处
        var pics=document.getElementsByClassName('pics')[0];
        
        pics.children[0].children[0].src='../'+picsurl;
        pics.children[0].children[0].setAttribute('data-Src','../'+picsurl)
        pics.onclick=function(e){
          e=e||window.event;
          var target=e.target||e.srcElement;
          for(var i=0;i<pics.children.length;i++){
            pics.children[i].className="";
          }
          if(target.tagName=='IMG'){           
            var Src=target.getAttribute('data-Src');
            imgurl.src=Src;
            target.parentNode.classList.add("changeC");
          }
        }
        //点击购物车生成购物车cookie
        var arr_goods=[];
        //判断cookie是否有记录
        var cookies=document.cookie;
        if(cookies.length>0){
            cookies=cookies.split('; ');
            cookies.forEach(function(item){
                var arr=item.split('=');
                if(arr[0]==='cartlist'){
                    arr_goods=JSON.parse(arr[1]);
                }
            })
        };
        var buyCarBtn=document.getElementsByClassName('buyCarBtn')[0];
        buyCarBtn.onclick=function(){
          var CarBtnIn=document.getElementsByClassName('CarBtnIn')[0];
          CarBtnIn.style.display="block";
          setTimeout(function(){
            CarBtnIn.style.display="none";
          },1000);
          var params1= location.search.substring(1).split('&');
          var qty=document.getElementById('qty');
          var goodsObj={};
          var name_p;
          var imgurl_p;
          var sale_p;
          var price_p;
          var guid_p;
          params1.forEach(function(item){
            var arr = item.split('=');

            // 解码
            var val = decodeURI(arr[1])

            if(arr[0] == 'name'){
                  name_p= val;
            }else if(arr[0] == 'imgurl'){
                 imgurl_p= '../'+val;
            }else if(arr[0] == 'sale'){
                 sale_p = val;
            }else if(arr[0] == 'price'){
                 price_p = val;
            }else if(arr[0]=='guid'){
                 guid_p=val;
            }
        });
           var guid=guid_p;
                for(var i=0;i<arr_goods.length;i++){
                    if(arr_goods[i].guid===guid){
                        arr_goods[i].qty=Number(arr_goods[i].qty)+Number(qty.value);
                        break;
                    }
                }
                if(i==arr_goods.length){
                    var goods={
                        guid:guid_p,
                        imgurl:imgurl_p,
                        name:name_p,
                        price:price_p,
                        sale:sale_p,
                        qty:qty.value
                    }
                    arr_goods.push(goods);                  
                }
                var now = new Date();
                now.setDate(now.getDate()+7);
            document.cookie='cartlist='+JSON.stringify(arr_goods)+';expires='+now+';path=/';
            lz_loadCar();
        }
        
        //tab标签切换
        var tabss=document.getElementsByClassName('tabss')[0];
        var lis=tabss.children;

        var tabsBox=document.getElementById('tabsBox');
        var divs=tabsBox.children;
        for(var i=0;i<lis.length;i++){
            lis[i].index=i;
            lis[i].onclick=function(){
                for(var j=0;j<lis.length;j++){
                    lis[j].className="";
                    divs[j].className="tabs clearfixed";
                }
                this.className="selected";
                divs[this.index].className="tabs selectedBox clearfixed";               
            }
        }
}
// 1.验证码
function l_verCode(){
    function vCode(){
        var arr_char = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
        var res_code = '';
        for(var i=0;i<4;i++){
            var idx = parseInt(Math.random()*arr_char.length);
            res_code += arr_char[idx];
        }
        return res_code;
    } 
    var verificationCode = document.getElementById("verification_code");
    verificationCode.innerHTML= vCode();
}
//2.星星
function l_conment(){
    var reBottom = document.getElementsByClassName("re_bottom")[0];
    var star = reBottom.getElementsByClassName("star")[0];
    var starArr = star.children;
    var res_star = 0;
    function starEffect(e){
        e= e || window.event;
        var target = e.target || e.srcElement;
        if(target.tagName.toLowerCase()=='i'){
            for(var j =0;j<starArr.length;j++){
            starArr[j].className = "iconfont icon-star";
            }
        var idx =target.getAttribute("data-idx");
        for(var i=0;i<5;i++){
            if(i<=idx){
                starArr[i].className = "iconfont icon-star active";
                res_star = idx;
            }
        }
    }
    }
    star.onmouseover = starEffect;
    // 点击星星事件
    star.onclick = function(e){
        star.onmouseover = null;
        starEffect();
    }
// 3.评论及点击传送评论内容 //待完善绿条 2017/8/8
function l_sendReview(){
    //获取元素 name content picture 提交按钮
    var yourname = document.getElementById("yourname");
    var content = document.getElementById("content");
    var picture = document.getElementById("picture");
    var subtn = document.getElementById("subtn");
    var verificationCode = document.getElementById("verification_code");
    var input_vcode = document.getElementById("input_vcode");
    var result = verificationCode.innerText;
    var obj = {};
    var arr = [];
    var num = 0;
    var num1 = 0;
    var arrRnum1 =0;
     // 点击重新生成验证码 重新赋值
      verificationCode.onclick = function(){
        l_verCode();
        result = verificationCode.innerText;
      }
      
    subtn.onclick = function(){
       if( input_vcode.value.toLowerCase() === result && (yourname.value!=="")&& (content.value!=="") ){
               var now = new Date();
               var year = now.getFullYear();
               var month = now.getMonth()+1;
               var day = now.getDate();
               var time = year +'/'+ month +'/'+ day;
               obj = {
                   name: yourname.value,
                   content: content.value,
                   time: time
               }
               arr.push(obj);
               num++;
               num1++;
           }else{
               alert("请检查输入是否完整，验证码是否正确");   
           }
           //提交后清空输入框的值
           yourname.value = "";
           content.value = "";
           input_vcode.value = "";
           //生成列表
           var reviewList = document.getElementsByClassName("review_list")[0];
           var ulReviewList = reviewList.children[0]; 
           arr.forEach(function(item){
                var li = document.createElement("li");
                li.className = "clear";
                var p1 = document.createElement("p");
                p1.className = "fl left";
                var star_comment=document.createElement('span');
                star_comment.innerHTML='<i class="iconfont icon-star"></i><i class="iconfont icon-star"></i><i class="iconfont icon-star"></i><i class="iconfont icon-star"></i><i class="iconfont icon-star"></i>';
                p1.innerHTML = '<span class="date">'+item.time+'</span>'+
                    '<span class="name">'+item.name+'</span>'+
                    '<span class="zan"><i class="iconfont icon-zan2"></i>(0)<i class="iconfont icon-zan21"></i>(2)</span>';
                var comment_date=p1.firstElementChild;
                p1.insertBefore(star_comment,comment_date);
                //根据获取的值确定输入框的星星样式
                var stars_comment=star_comment.children;
                for(var i=0;i<=res_star;i++){
                    stars_comment[i].className='iconfont icon-star l_star';
                }
                var p2 = document.createElement("p");  
                p2.innerHTML = '<p class="content">'+item.content+'</p>'+
                    '<img src="" alt="" />'+
                    '<span class="thank">thank you</span>';
                p2.className = "fl right";
                li.appendChild(p1);
                li.appendChild(p2);
                ulReviewList.appendChild(li); 
           });
          //清空数组
          arr = [];   
          l_getReviews();
          // 获取点亮不同星星的评论人数
          function l_getReviews(){
              var five_starnum = document.getElementById("five_starnum");
              var four_starnum = document.getElementById("four_starnum");
              var three_starnum = document.getElementById("three_starnum");
              var two_starnum = document.getElementById("two_starnum");
              var one_starnum = document.getElementById("one_starnum");
              if(res_star==0 ){
                one_starnum.innerText = Number(one_starnum.innerText)+ num;
                num=0;
              }else if(res_star==1){
                two_starnum.innerText = Number(two_starnum.innerText)+ num;
                num=0;
              }else if(res_star==2){
                three_starnum.innerText = Number(three_starnum.innerText)+ num;
                num=0;
              }else if(res_star==3){
                four_starnum.innerText = Number(four_starnum.innerText)+ num;
                num=0;
              }else if(res_star==4){
                five_starnum.innerText = Number(five_starnum.innerText)+ num;
                num=0;
              }
          }
          //绿条
          //写入评论人数
          var reviewN = document.getElementById("reviewN");
          reviewN.innerText = num1;
          l_averStar();
          // 点亮平均星星
          function l_averStar(){
                var arrS = ulReviewList.children;
                var s =arrS.length;
                var arrRnum = (Number(res_star)+ Number(1));
                arrRnum1 =arrRnum1 + arrRnum;
                console.log(arrRnum1);
                var c =Math.round(arrRnum1/s);
                console.log(c);
                var averageStar = document.getElementsByClassName("averageStar")[0];
                console.log(averageStar);
                var arrAver = averageStar.children;
                console.log(arrAver);
                for(var k =0; k<arrAver.length;k++){
                  if(k<=(c-1)){
                    arrAver[k].classList.add("active");
                  } 
              }
          }
        
      }
}
l_sendReview();
}
//3.点击收缩
function l_customerImg(){
    var mainBodyU1=document.getElementById('mainBodyU1');
    var customer = document.getElementById('customer');
    var customerBox = document.getElementsByClassName("customer")[0];
    customerBox.onclick = function(e){
        e= e || window.event;
        var target = e.target || window.srcElement;
        if(target.id === "customer" && mainBodyU1.className === "show"){
          mainBodyU1.classList.toggle('hidden');
           mainBodyU1.classList.remove("show");
        }else if(target.id === "customer" && mainBodyU1.className === "hidden"){
           mainBodyU1.classList.toggle('show');
           mainBodyU1.classList.remove("hidden");
        }
    }
}
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
        +'<a href="goods.html?name='+encodeURI(item.name)+'&imgurl='+item.imgurl+'&price='+item.price+'&sale='+item.sale+'&guid='+item.guid+'"><img src="../'+item.imgurl+'"/></a>'
            +'<p>'+item.name+'</p>'
            +'<p>原价：<del>'+item.price+'</del></p>'
            +'<p class="sale">现价：<span>'+item.sale+'</span></p>'
            +'<p>优惠：'+(item.price-item.sale)+'</p>'
        +'</li>';
        }).join('');
    mainBodyU1.innerHTML=lis;
}