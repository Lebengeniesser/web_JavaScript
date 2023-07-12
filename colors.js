var Body = {
    setColor:function (color){
        document.querySelector('body').style.color=color;
    },// 여러개 쓸때 ,가 있어야한다.
    setBackgroundColor:function(color){
        document.querySelector('body').style.backgroundColor=color;
    }
}
var Links = {
    SetColor:function(color){
        var alist = document.querySelectorAll('a');
        var i = 0;
    while(i < alist.length){
        console.log(alist[i]);
        alist[i].style.color= color;
        i = i +1;
    }
    }
}
// function BodySetColor(color){
//     document.querySelector('body').style.color=color;
// }
// function BodySetBackgroundColor(color){
//     document.querySelector('body').style.backgroundColor=color;
// }
function nightDayHandler(self){
var target = document.querySelector('body');
if (self.value === 'night3'){
    Body.setBackgroundColor('black');
    Body.setColor('yellow');
    self.value = 'day';

    Links.SetColor('powderblue');
}    
else{
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night3';

    Links.SetColor('blue');
}
}  