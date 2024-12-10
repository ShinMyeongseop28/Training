/* function nightDayHandler(self){
    var target = document.querySelector('body');
    if (self.value === 'night') {
        target.style.backgroundColor = 'black';
        target.style.color = 'white';
        self.value = 'day';

        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
            alist[i].style.color = 'powderblue';
            i = i + 1;
        }
    } else {
        target.style.backgroundColor = 'white';
        target.style.color = 'black';
        self.value = 'night';

        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
            alist[i].style.color = 'blue';
            i = i + 1;
        }
    }
} */

/* function LinksSetColor(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
        alist[i].style.color = color;
        i = i + 1;
    }
}
function BodySetColor(color){
    document.querySelector('body').style.color = color;
}
function BodySetBackgorundColor(color){
    document.querySelector('body').style.backgroundColor = color;
}
function nightDayHandler(self){
    var target = document.querySelector('body');
    if (self.value === 'night') {
        Body.SetBackgorundColor('black');
        Body.SetColor('white');
        self.value = 'day';

        Links.SetColor('powderblue');
    } else {
        Body.SetBackgorundColor('white');
        Body.SetColor('black');
        self.value = 'night';

        Links.SetColor('blue');
    }
} */

    var Links = {
        setColor:function (color){
            // var alist = document.querySelectorAll('a');
            // var i = 0;
            // while(i < alist.length){
            //     alist[i].style.color = color;
            //     i = i + 1;
            // }
            $('a').css('color', color);
        }
    }
    var Body = {
        setColor:function (color){
            // document.querySelector('body').style.color = color;
            $('body').css('color', color);
        },
        setBackgorundColor:function (color){
            // document.querySelector('body').style.backgroundColor = color;
            $('body').css('backgroundColor', color);
        }
    }
    function nightDayHandler(self){
        var target = document.querySelector('body');
        if (self.value === 'night') {
            Body.setBackgorundColor('black');
            Body.setColor('white');
            self.value = 'day';

            Links.setColor('white');
        } else {
            Body.setBackgorundColor('white');
            Body.setColor('black');
            self.value = 'night';

            Links.setColor('blue');
        }
    }