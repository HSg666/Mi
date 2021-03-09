window.onload = function () {
    //轮播JS代码 

    var items = document.getElementsByClassName('item');
    var points = document.getElementsByClassName('point');
    var goPreBtn = document.getElementById('goPre');
    var goNextBtn = document.getElementById('goNext');
    var time = 0;
    var index = 0;

    var clearActive = function () {
        for (var i = 0; i < items.length; i++) {
            items[i].className = 'item';
        }
        for (var i = 0; i < points.length; i++) {
            points[i].className = 'point';
        }
    }
    var goIndex = function () {
        clearActive();
        console.log(index);
        points[index].className = 'point active';
        items[index].className = 'item active';
    }

    var goNext = function () {
        if (index < 4) {
            index++;
        } else {
            index = 0;
        }
        goIndex();
    }
    var goPre = function () {
        if (index == 0) {
            index = 4;
        } else {
            index--;
        }
        goIndex();
    }

    goNextBtn.addEventListener('click', function () {
        goNext();
    })
    goPreBtn.addEventListener('click', function () {
        goPre();
    })
    for (var i = 0; i < points.length; i++) {
        points[i].addEventListener('click', function () {
            var pointIndex = this.getAttribute('data-index');
            index = pointIndex;
            goIndex();
            time = 0;
        })
    }

    setInterval(function () {
        time++;
        if (time == 30) {
            goNext();
            time = 0;
        }
    }, 100)

    //  轮播JS代码 

    // 懒加载开始
    lazyLoadInit({
        showTime: 1000,
        onLoadBackEnd: function (i, e) {
        }
        , onLoadBackStart: function (i, e) {
        }
    });
    // 懒加载结束 <img data-lazy-src

    //  返回顶部代码
    // 给window添加滚轮事件   
    $(window).scroll(function () {
        // 如果window的滚动大于300  那么盒子淡入  否则淡出
        if ($(this).scrollTop() > 300) {
            $('.toTop').fadeIn(700);
        } else {
            $('.toTop').fadeOut(700);
        }
    })
    // 给返回顶部盒子添加点击事件
    $('.toTop').click(function () {
        // 给页面添加动画
        $('html,body').animate({ scrollTop: 0 });
    })
    //  返回顶部代码 
}

