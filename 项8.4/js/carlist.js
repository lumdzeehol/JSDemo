/* 
* @Author: Marte
* @Date:   2017-08-05 17:34:43
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-05 17:52:57
*/

/*加载购物车列表*/
function lz_loadCar(){
    var carlist = [];
    if (Cookie.get('carlist').length>0) {
        carlist = JSON.parse(Cookie.get('carlist'));
    }
    var total = 0;
    var lis = '';
    for(var i = 0;i < carlist.length;i++){
        var str =   '<li dataguid='+carlist[i].guid+' class="goods_item">'
                        +'<img src="'+carlist[i].imgurl+'" alt="" class="fl"/>'
                        +'<div class="item_msg fl">'
                            +'<p>'+carlist[i].title+'</p>'
                            +'<p>ID:#'+carlist[i].guid+'</p>'
                            +'<p>Size:default</p>'
                        +'</div>'
                        +'<div class="quanity fl">'
                            +'<button>-</button>'
                            +'<input type="number" value="'+carlist[i].qty+'"/>'
                            +'<button>+</button>'
                        +'</div>'
                        +'<div class="price_dv fl">'
                            +'<p><del>'carlist[i].price'</del></p>'
                            +'<p><span>'carlist[i].sale'</span></p>'
                        +'</div>'
                        +'<div class="total_dv fl">'
                            +'<p>''</p>'
                            +'<p>ss</p>'
                        +'</div>'
                        +'<span>$'+carlist[i].price+'</span>'
                        +'<span>'+carlist[i].qty+'</span>'
                    +'</li>';
        lis += str;
        total += carlist[i].qty*carlist[i].price;
    }
         
    lis += '<h3>Subtotal:<strong>$'+total+'</strong></h3><input type="submit" value="Checkout" />';
    var ul = document.getElementsByClassName('list2')[0];
    ul.innerHTML = lis;
    var item_num = ul.parentNode.getElementsByTagName('span')[0];
    var totalprice = ul.parentNode.getElementsByTagName('span')[1];
    item_num.innerHTML = ' ' + carlist.length + ' Items';
    totalprice.innerHTML = ' $'+total;

}
<li class="goods_item" data-guid="">
    <img src="" alt="" class="fl"/>
    <div class="item_msg fl">
        <p>GuuciguccigucciGuuciguccigucci</p>
        <p>ID:#22223</p>
        <p>Size:default</p>
    </div>
    <div class="quanity fl">
        <button>-</button>
        <input type="number" />
        <button>+</button>
    </div>
    <div class="price_dv fl">
        <p><del>s</del></p>
        <p><span>s</span></p>
    </div>
    <div class="total_dv fl">
        <p>s</p>
        <p>ss</p>
    </div>
    <div class="remove fl">
        <button>&times</button>
    </div>
</li>