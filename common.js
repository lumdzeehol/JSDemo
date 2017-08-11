/* 
* @Author: Marte
* @Date:   2017-08-10 15:16:00
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-10 15:39:35
*/


/*封装Cookie对象获取cookie*/
var Cookie = {
    /**
     * 获取cookie
     * @param  {String} name [cookie名]
     * @return {String}      [name对应的cookie]
     */
    get:function(name){
        var cookie = document.cookie;
        /*若长度为0，即不存在该cookie，返回空*/
        if (cookie.length===0) {
            return '';
        }
        cookie = cookie.split('; ');
        var result;
        cookie.forEach(function(item){
            var arr = item.split('=');
            if (arr[0] === name) {
                result = arr[1];
            }
        });
        return result;
    },
    /**
     * 设置cookie
     * @param {String} name    [cookie名称]
     * @param {String} val     [cookie值]
     * @param {String} expires [有效期]
     * @param {String} path    [cookie路径]
     */
    set:function(name,val,expires,path){
        var cookieStr = name + '=' + val;
        if (expires) {
            cookieStr += '; expires=' + expires;
        }
        if (path) {
            cookieStr += '; path' + path;
        }
        document.cookie = cookieStr;
    },
    /**
     * 移除cookie
     * @param  {String} name [cookie名]
     */
    remove:function(name){
        var now = new Date();
        now.setDate(now.getDate() - 1);
        Cookie.set(name,'',now);
    }
}

/**
 * 动画函数
 * @param  {Element}   ele      [发生动画的元素]
 * @param  {Object}   attrSet  [发生动画的属性集合]
 * @param  {Function} callback [动画执行完成后的回调函数]
 */
function animate(ele,attrSet,callback){
    
}