/* 
* @Author: Marte
* @Date:   2017-08-05 17:34:43
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-09 09:09:10
*/

/*加载购物车列表*/
function lz_shoppingLoadCar(){
    var carlist = [];
    if (Cookie.get('cartlist').length>0) {
        console.log(45554343);
             
        carlist = JSON.parse(Cookie.get('cartlist'));
    }
    console.log(carlist);
    var total = 0;
    var totalSave = 0;
    var lis = '';
    for(var i = 0;i < carlist.length;i++){
        // console.log('sale:'+ carlist[i].sale);
        var sellPrice = carlist[i].sale;
        if (carlist[i].qty > 5) {
            sellPrice = carlist[i].sale - 20;
        }else if(carlist[i].qty > 10){
            sellPrice = carlist[i].sale - 30;
        }else if(carlist[i].qty > 20){
            sellPrice = carlist[i].sale - 40;
        }
        var str =   '<li data-guid='+carlist[i].guid+' class="goods_item">'
                        +'<img src="'+carlist[i].imgurl+'" alt="" class="fl"/>'
                        +'<div class="item_msg fl">'
                            +'<p>'+carlist[i].name+'</p>'
                            +'<p>ID:#'+carlist[i].guid+'</p>'
                            +'<p>Size:default</p>'
                        +'</div>'
                        +'<div class="quanity fl">'
                            +'<button class="minus">-</button>'
                            +'<input type="number" min="1" value="'+carlist[i].qty+'"/>'
                            +'<button class="plus">+</button>'
                        +'</div>'
                        +'<div class="price_dv fl">'
                            +'<p><del>'+carlist[i].price+'</del></p>'
                            +'<p><span>'+sellPrice+'</span></p>'
                        +'</div>'
                        +'<div class="total_dv fl">'
                            +'<p>$<span>'+sellPrice*carlist[i].qty+'</span></p>'
                            +'<p>You save $<span>'+(carlist[i].price*carlist[i].qty-sellPrice*carlist[i].qty)+'</span></p>'
                        +'</div>'
                        +'<div class="remove fl">'
                            +'<button>&times</button>'
                        +'</div>'
                    +'</li>';
        lis += str;
             
        total += carlist[i].qty*sellPrice;
        totalSave += carlist[i].qty*carlist[i].price - carlist[i].qty*sellPrice;
    }
         
    var ul = document.getElementsByClassName('shopcar_list')[0];
    ul.innerHTML = lis;
    //添加点击事件
    ul.onclick = op_carlistitem;
    for (var i = 0; i <carlist.length; i++) {
        var numInput = ul.children[i].children[2].children[1];
        numInput.onchange = onItemNumberChange;
    };
    var totalPrice = document.getElementsByClassName('car_bottom_rt')[0].children[0].children[0];
    var totalSaveTag = document.getElementsByClassName('car_bottom_rt')[0].children[1];
    console.log(total);
    totalPrice.innerHTML = total;
    console.log(totalPrice.innerHTML,totalPrice);
    // console.log('total inner '+totalPrice.innerHTML);
         
    totalSaveTag.innerHTML = 'You save' + totalSave;
}

function onItemNumberChange(){
    var item_num = parseInt(this.value);
    if (isNaN(item_num)||item_num<1) {alert('请输入数字!'); return false;}
    var guid = this.parentNode.parentNode.dataset.guid;
    var carlist = [];
    if (Cookie.get('cartlist').length>0) {
        carlist = JSON.parse(Cookie.get('cartlist'));
    }
    for(var i = 0;i < carlist.length ; i++){
        if (carlist[i].guid === guid) {
            carlist[i].qty = item_num;

        }
    }
    console.log(33333)
         
    var cookieStr = JSON.stringify(carlist);
    var now = new Date();
    now.setDate(now.getDate()+7);
    document.cookie = 'cartlist='+cookieStr+';expires='+now+';path=/';
    lz_shoppingLoadCar();
}

function op_carlistitem(ev){
    ev = ev||window.event;
    var target = ev.target||ev.srcElement;
    var totalP = 0;
    var totalSP = 0;
    //点击remove时
    if (target.parentNode.classList.contains('remove')) {
        var guid = target.parentNode.parentNode.dataset.guid;
        var isdel = confirm('是否删除商品?');
        if (isdel) {
            var cookies = JSON.parse(Cookie.get('cartlist'));
            for(var i = 0;i < cookies.length;i++){
                if (cookies[i].guid === guid) {      
                    cookies.splice(i,1);
                    break;
                }
            }
        var now = new Date();
        now.setDate(now.getDate()+7);
        document.cookie = 'cartlist='+JSON.stringify(cookies)+';expires='+now+';path=/';

        lz_shoppingLoadCar();
        }else{
            return false;
        }
    }else if(target.className === 'plus'){             
        var guid =  target.parentNode.parentNode.dataset.guid;
        var cookies = JSON.parse(Cookie.get('cartlist'));
        var quanity = target.parentNode.querySelector('input');
        for(var i = 0;i < cookies.length;i++){
            if (cookies[i].guid === guid) {      
                cookies[i].qty ++;
                quanity.value = cookies[i].qty;
                var sellPrice = cookies[i].sale;
                if (cookies[i].qty > 5) {
                    sellPrice = cookies[i].sale - 20;
                }else if(cookies[i].qty > 10){
                    sellPrice = cookies[i].sale - 30;
                }else if(cookies[i].qty > 20){
                    sellPrice = cookies[i].sale - 40;
                }
                var sale = target.parentNode.nextElementSibling.children[1].children[0];
                var totalprice = target.parentNode.parentNode.querySelector('.total_dv').children[0];
                var save = totalprice.nextElementSibling;
                sale.innerHTML = sellPrice;
                totalprice.children[0].innerHTML = sellPrice*cookies[i].qty;
                save.children[0].innerHTML = (cookies[i].qty*cookies[i].price - cookies[i].qty*sellPrice);
                totalP += sellPrice*cookies[i].qty;
                totalSP += cookies[i].price*cookies[i].qty - sellPrice*cookies[i].qty;
            }
        }
            var now = new Date();
            now.setDate(now.getDate()+7);
        document.cookie='cartlist='+JSON.stringify(cookies)+';expires='+now+';path=/';
    }else if(target.className === 'minus'){             
        var guid =  target.parentNode.parentNode.dataset.guid;
        console.log(target.parentNode);
             
        var cookies = JSON.parse(Cookie.get('cartlist'));
        var quanity = target.parentNode.querySelector('input');
        for(var i = 0;i < cookies.length;i++){
            if (cookies[i].guid === guid) {    
                cookies[i].qty--;
                if (cookies[i].qty<1) {
                    cookies[i].qty = 1;
                }
                quanity.value = cookies[i].qty;
                 var sellPrice = cookies[i].sale;
                if (cookies[i].qty > 5) {
                    sellPrice = cookies[i].sale - 20;
                }else if(cookies[i].qty > 10){
                    sellPrice = cookies[i].sale - 30;
                }else if(cookies[i].qty > 20){
                    sellPrice = cookies[i].sale - 40;
                }
                var sale = target.parentNode.nextElementSibling.children[1].children[0];
                var totalprice = target.parentNode.parentNode.querySelector('.total_dv').children[0];
                var save = totalprice.nextElementSibling;
                sale.innerHTML = sellPrice;
                totalprice.children[0].innerHTML = sellPrice*cookies[i].qty;
                save.children[0].innerHTML = (cookies[i].qty*cookies[i].price - cookies[i].qty*sellPrice);
                totalP += sellPrice*cookies[i].qty;
                totalSP += cookies[i].price*cookies[i].qty - sellPrice*cookies[i].qty;
            }
        }
        var now = new Date();
        now.setDate(now.getDate()+7);
        document.cookie='cartlist='+JSON.stringify(cookies)+';expires='+now+';path=/';
    }else{
        return false;
    }
        var totalTag = document.getElementsByClassName('car_bottom_rt')[0].children[0].children[0];
        var totalSaveTag = document.getElementsByClassName('car_bottom_rt')[0].children[1];
        totalTag.innerHTML = totalP;
        totalSaveTag.innerHTML ='You save '+ totalSP;

}


// <li class="goods_item" data-guid="">
//     <img src="" alt="" class="fl"/>
//     <div class="item_msg fl">
//         <p>GuuciguccigucciGuuciguccigucci</p>
//         <p>ID:#22223</p>
//         <p>Size:default</p>
//     </div>
//     <div class="quanity fl">
//         <button>-</button>
//         <input type="number" />
//         <button>+</button>
//     </div>
//     <div class="price_dv fl">
//         <p><del>s</del></p>
//         <p><span>s</span></p>
//     </div>
//     <div class="total_dv fl">
//         <p>s</p>
//         <p>ss</p>
//     </div>
//     <div class="remove fl">
//         <button>&times</button>
//     </div>
// </li>