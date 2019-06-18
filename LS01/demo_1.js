// 使用IIFE函数立即执行表达式避免变量的全局污染
(function(){
    var x =10;
    document.onclick = function(){
        console.log('x=',x);
    }
})();     

var x;
x = 23;
if(x > 22){
    x += 2;
}else{
    console.log('x不大于22');
}

var xx = 234;
if(234 == xx){ // 反写
    console.log('相等');
}