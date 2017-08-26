/* 
* @Author: 潘然然
* @Date:   2017-08-19 15:04:15
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-21 19:34:05
*/
function sign(){
    var box=document.querySelector('#mains .useLeft');
    var email=box.querySelector('#email');
    var password=box.querySelector('#password');
    var btn=box.querySelector('.btnSign');
    var showCode=document.getElementsByClassName('showCode')[0];
    var inVcode=document.getElementById('inVcode');
    var output=document.getElementsByClassName('output')[0];

    btn.onclick=function(){
        var _email=email.value;
        var reg=/^[\w\-\.]+@[\da-z\-]+(\.[a-z]{2,}){1,2}$/i;
        if(!reg.test(_email)){
            alert('邮箱不合法');
            return;
        }
        var _password=password.value;
        var reg=/^\S{6,19}$/;
        if(!reg.test(_password)){
            alert('密码不合法');
            return;
        }
        var _inVcode=inVcode.value;
        var _showCode=showCode.innerText;
        if(_inVcode.toLowerCase()!=_showCode.toLowerCase()){
            alert('验证码错误，请重新输入');
            showCode.innerHTML=vCode();
            inVcode.value="";
            return;
        }
        var xhr = new XMLHttpRequest();
        xhr.onload = function(){
            if(xhr.status==200||xhr.status==304){
                var res = xhr.responseText;

                if(res === 'yes'){
                    output.innerHTML =  _email + '未注册或者密码错误';
                }else if(res==='no'){
                    output.innerHTML = '登录成功';
                    setTimeout(function(){
                        output.innerHTML="";
                        window.location.href="../index.html";
                    },2000);
                }
            }
        }
        xhr.open('get','../api/sign.php?emailsign='+_email+'&password='+_password,true);
        xhr.send();
    }
}
function inCode(){
    var showCode=document.getElementsByClassName('showCode')[0];
    showCode.innerHTML=vCode();
    showCode.onclick=function(){
        showCode.innerHTML=vCode();
    }
    var showCode1=document.getElementsByClassName('showCode1')[0];
    showCode1.innerHTML=vCode();
    showCode1.onclick=function(){
        showCode1.innerHTML=vCode();
    }
}
function regist(){
    var box=document.querySelector('#mains .useRight');
    var email=box.querySelector('#email1');
    var password=box.querySelector('#password1');
    var confirmPassword=box.querySelector('#confirmPassword1');
    var btn=box.querySelector('.register');
    var output_email=box.querySelector('.output_email');
    var showCode=document.getElementsByClassName('showCode1')[0];
    var inVcode=document.getElementById('inVcode1');
    var output=document.getElementsByClassName('output1')[0];
    email.onblur = function(){
        var _email = email.value;

        var reg=/^[\w\-\.]+@[\da-z\-]+(\.[a-z]{2,}){1,2}$/i;
        if(!reg.test(_email)){
            output_email.innerHTML="邮箱不合法";
            return;
        }
        var xhr_email= new XMLHttpRequest();

        xhr_email.onload = function(){
            if(xhr_email.status==200||xhr_email.status==304){
                var res = xhr_email.responseText;
                console.log(res);
                if(res === 'no'){
                    output_email.innerHTML =  _email + '太受欢迎，请换一个';
                    btn.onclick="";
                }else if(res==='yes'){
                    output_email.innerHTML = '抢占用户名成功';
                    btn.onclick=registIn;
                }
            }
        }
        xhr_email.open('get','../api/sign.php?email='+_email,true);
        xhr_email.send();
    }
    function registIn(){
        var _email = email.value;

        var reg=/^[\w\-\.]+@[\da-z\-]+(\.[a-z]{2,}){1,2}$/i;
        if(!reg.test(_email)){
            output_email.innerHTML="邮箱不合法";
            alert('注册邮箱不合法');
            return;
        }

        var _password=password.value;
        var reg=/^\S{6,19}$/;
        if(!reg.test(_password)){
            alert('密码不合法');
            return;
        }
        var _conPassword=confirmPassword.value;
        if(_conPassword!=_password){
            alert('两次输入密码不相同，请重新输入');
            return;
        }
        var _inVcode=inVcode.value;
        var _showCode=showCode.innerText;
        if(_inVcode.toLowerCase()!=_showCode.toLowerCase()){
            alert('验证码错误，请重新输入');
            showCode.innerHTML=vCode();
            inVcode.value="";
            return;
        }
        var xhr= new XMLHttpRequest();

        xhr.onload = function(){
            if(xhr.status==200||xhr.status==304){
                var res = xhr.responseText;
                console.log(res);
                if(res === 'no'){
                    output.innerHTML =  _email + '已经注册成功，亲可以去浪了';
                }
            }
        }
        xhr.open('get','../api/sign.php?emailIn='+_email+'&password='+_password+'&email='+_email,true);
        xhr.send();
        output.innerHTML='恭喜您'+_email+"注册成功";
        
        setTimeout(function(){
            window.location.reload();
            output.innerHTML="";
        },1000);
    }
}
function initNav(){
    var nav_sec_items = document.querySelectorAll('.nav_sec_item');
    var nav_trd_items = document.querySelectorAll('.nav_trd');

    for(let i = 0; i < nav_sec_items.length ; i++){
        nav_sec_items[i].onmouseenter = function(){
            nav_sec_items[i].className = 'nav_sec_item_on';
            for(var j = 1;j<nav_sec_items[i].children.length; j++){
                // nav_sec_items[i].children[j].querySelector('a').style.color = '#C5CFCF';
                // var a_arr = nav_sec_items[i].children[j].querySelectorAll('a');
                // a_arr.style.color = '#C5CFCF';
                // console.log(nav_sec_items[i].children[j].querySelectorAll('a'));
                var nav_trd_item = nav_sec_items[i].querySelector('.nav_trd');
                animate(nav_trd_item,{top:0});
            }
        }
        nav_sec_items[i].onmouseleave = function(){
                nav_sec_items[i].className = 'nav_sec_item';
                for(var j = 1;j<nav_sec_items[i].children.length; j++){
                    // nav_sec_items[i].children[j].querySelector('a').style.color = '#C5CFCF';
                    // var a_arr = nav_sec_items[i].children[j].querySelectorAll('a');
                    // a_arr.style.color = '#C5CFCF';
                    // console.log(nav_sec_items[i].children[j].querySelectorAll('a'));
                    var nav_trd_item = nav_sec_items[i].querySelector('.nav_trd');
                    nav_trd_item.style.top = ''; 
                }
        }
    }
}