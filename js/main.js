/* main.js */
$(document).ready(function(){

    /* 스플래쉬 */
    function imagesProgress() {
        var $container = $('#splash'),
            $bub = $container.find('span'),
    
            imgLoad = imagesLoaded('body'),
            imgTotal = imgLoad.images.length,
    
            imgLoaded = 0,
            current = 0,
    
            Timer = setInterval(updateProgress, 1000 / 60);
            imgLoad.on('progress', function () {
                imgLoaded++;
            });
    
        function updateProgress() {
            var target = (imgLoaded / imgTotal) * 100;
            current += (target - current) * 0.1;
    
            $bub.css({ bottom:current + '%' });
            
            if(current >= 100){
                clearInterval(Timer);
                $container.addClass('progress-complete');
                $container.animate({ opacity:0 },1000).delay(1000).animate({top:'-100%'});
            }
            if(current > 99.9){
                current = 100;
            }

            }//updateProgress()
        }//imagesProgress()
    imagesProgress();


    /* switch 클릭 */
    $("li.switch a").click(function(){
        if($(this).parent('li').hasClass('on')){
            $(this).parent('li').removeClass('on');
        }else{
            $(this).parent('li').addClass('on');
        }
    });

    /* 채팅상담 */
    $(".someone:nth-of-type(1)").animate({
        opacity:'1',
    },500,);

    $(".someone:nth-of-type(1) ul>li").delay(500).animate({
        height:'75px',
        width:'200px',
        opacity:'1'
    });

    $(".myself li").delay(2000).animate({
        height:'16px',
        width:'100px',
        opacity:'1'
    },500,);

    $(".someone:nth-of-type(2)").delay(3500).animate({
        opacity:'1',
    },500,);
    $(".someone:nth-of-type(2) ul>li").eq(0).delay(4000).animate({
        height:'55px',
        width:'100px',
        opacity:'1'
    });
    $(".someone:nth-of-type(2) ul>li").eq(1).delay(5000).animate({
        height:'55px',
        width:'130px',
        opacity:'1'
    });

    /* 메인화면 주간스탬프 클릭 */
    $("table.week td").click(function(){
        if($(this).hasClass('on')){
            $(this).removeClass('on');
        }else{
            $(this).addClass('on');
        }
    });

    /* 메인화면 일간스탬프 클릭 */
    $(".days span").click(function(){
        if($(this).hasClass('on')){
            $(this).removeClass('on');
        }else{
            $(this).addClass('on');
        }
    });


    /* 메인화면 미리보기조작 */
    var timer;
    timer = setTimeout(function(){
        $("table.week td").eq(6).trigger('click');
    },500);
    timer = setTimeout(function(){
        $("table.week td").eq(5).trigger('click');
    },1000);
    timer = setTimeout(function(){
        $("table.week td").eq(4).trigger('click');
    },1500);
    timer = setTimeout(function(){
        $("table.week td").eq(3).trigger('click');
    },2000);
    timer = setTimeout(function(){
        $("table.week td").eq(2).trigger('click');
    },2500);
    timer = setTimeout(function(){
        $("table.week td").eq(1).trigger('click');
    },3000);
    timer = setTimeout(function(){
        $("table.week td").eq(0).trigger('click');
    },3500);
    timer = setTimeout(function(){
        $("table.week td").trigger('click');
    },4500);
    timer = setTimeout(function(){
        clearTimeout(timer);
    },5000);

    /* 양치기 상태 */
    $(".week td").click(function(){
        var week = $(".week").find('td.on').length;
        if(week < 4) {
            $(".character").removeClass('basic').addClass('low');
            $("p.condi").removeClass('good').removeClass('basic').addClass('low');
            $("p.warning").css({"opacity":"1"});
            $("b.eyes").css({"animation":"none"});
        }else if(week < 7){
            $(".character").removeClass('low').addClass('basic');
            $("p.condi").removeClass('good').removeClass('low').addClass('basic');
            $("p.warning").css({"opacity":"0"});
            $("b.eyes").css({"animation":"none"});
        }else{
            $(".character").removeClass('basic').removeClass('low');
            $("p.condi").removeClass('basic').removeClass('low').addClass('good');
            $("p.warning").css({"opacity":"0"});
            $("b.eyes").css({"animation":"wink 3s ease 2s infinite"});
            var time;
            time = setTimeout(function(){
                alert("주간 양치미션을 완료하였습니다.")
                clearTimeout(time);
            },500);
        }
    });



    /* 메인 drower메뉴 아이콘 클릭 */
    $("span.drower_icon").click(function(){
        $(".drower").addClass('on');
    });
    $("span.drower_close").click(function(){
        $(".drower").removeClass('on');
    });

    /* 고객센터 내질문내역 클릭 */
    $(".my_qna>h4").click(function(){
        if($(".my_qna").hasClass('on')){
            $(".my_qna").removeClass('on');
        }else{
            $(".my_qna").addClass('on');
        }
    });

    /* 고객센터 키워드 클릭 */
    $(".kyword>ul>li").click(function(){
        if($(this).hasClass('on')){
            $(this).removeClass('on');
        }else{
            $(this).addClass('on');
        }
    });

    $(".keybord input[type='text']").focus(function(){
        $(".keybord").addClass('on');
    });
    $(".keybord").mouseleave(function(){
        $(".keybord").removeClass('on');
    });

    /* 고객센터 미리보기조작 */
    var timer4;
    timer4 = setTimeout(function(){
        $(".my_qna>h4").trigger("click");
    },2500);
    timer4 = setTimeout(function(){
        $(".my_qna>h4").trigger("click");
    },3500);
    timer4 = setTimeout(function(){
        clearTimeout(timer4);
    },4000);


    /* tab2 plu min */
    var target = 0;
    $(".tab2_menu a.plu").click(function(){
        if(target==10){
            $(".tab2_num").text(target);
        }else{
            $(".tab2_num").text(target+1);
            target = target+1;
        }
    });
    $(".tab2_menu a.min").click(function(){
        if(target==0){
            $(".tab2_num").text(target);
        }else{
            $(".tab2_num").text(target-1);
            target = target-1;
        }
    });

    
    var today = new Date();

    var nowMon = today.getMonth();
    var nowDay = today.getDate();

    console.log(today);
    console.log(nowMon);
    console.log(nowDay);
    
    /* tab2 그래프 월간*/
    $(".l_glaph ul>li").eq(0).text(nowMon-3);
    $(".l_glaph ul>li").eq(1).text(nowMon-2);
    $(".l_glaph ul>li").eq(2).text(nowMon-1);
    $(".l_glaph ul>li").eq(3).text(nowMon);
    $(".l_glaph ul>li").eq(4).text(nowMon+1);

    /* tab3 일정 일 */
    $(".today>em").text(nowDay);

    /* today 버튼 */
    /* $("#calender .ui-datepicker .ui-datepicker-buttonpane button").click(function(){
        $(".today>em").text(nowDay);
        console.log(nowDay);
    }); */

    /* Ai진단 키워드 가져오기 */
    var tipp = [];
    var list1 = "";
    $(".dia_ai form button").click(function(e){
        e.preventDefault();
        if($("ul.Ai_kyword>li").hasClass('on')){
            tipp = $("ul.Ai_kyword>li.on").text();        
            console.log(tipp);

            list1 ="<li>" + tipp + "<a href='#'></a></li>";
        }else{
            tipp = $("input").val();
            console.log(tipp);

            list1 ="<li>" + tipp + "<a href='#'></a></li>";
        }
        $(".dia").find('ul').append(list1);
        
        /* Ai진단 상단키워드 클릭 */
        $(".dia ul>li").click(function(){
            $(this).addClass('on').siblings().removeClass('on');
        });
        /* Ai진단 상단키워드 삭제 */
        $(".dia li>a").click(function(e){
            e.preventDefault();
            $(this).parent('li').css({
                "animation":"del 1s ease 0s 1",
                "opacity":"0",
                "height":"0",
                "padding":"0 20px",
                "margin-top":"0"
            });
        });
    });


    /* camera 클릭 */
    $("span.camera").click(function(){
        if($(this).parents('main').hasClass('photo')){
            $(this).parents('main').removeClass('photo');
        }else{
            $(this).parents('main').addClass('photo');
        }
    });

    /* Ai진단 상단키워드 클릭 */
    $(".dia ul>li").click(function(){
        $(this).addClass('on').siblings().removeClass('on');
    });
    /* Ai진단 상단키워드 삭제 */
    $(".dia li>a").click(function(e){
        e.preventDefault();
        $(this).parent('li').css({
            "animation":"del 1s ease 0s 1",
            "opacity":"0",
            "height":"0",
            "padding":"0 20px",
            "margin-top":"0"
        });
    });

    /* Ai진단 키워드 클릭 */
    $(".Ai_kyword>li").click(function(){
        if($(this).hasClass('on')){
            $(this).removeClass('on');
        }else{
            $(this).addClass('on').siblings().removeClass('on');
        }
    });


    //리스트 on, input 중복 선택 제거
    $(".dia_ai form input").focus(function(){
        $(".Ai_kyword>li").removeClass('on');
    });
    $(".Ai_kyword>li").click(function(){
        $(".dia_ai form input").val('');
    });


    /* 양치기Ai진단 미리보기조작 */
    var timer2;
    timer2 = setTimeout(function(){
        $(".camera").parents('main').addClass('photo');
    },1000);
    timer2 = setTimeout(function(){
        $(".Ai_kyword").children('li').eq(1).addClass('on');
    },1500);
    timer2 = setTimeout(function(){
        $(".dia_ai form button").trigger("click");
    },2000);
    timer2 = setTimeout(function(){
        $(".Ai_kyword>li").removeClass('on');
        $(".dia_ai form input").val('증상테스트');
    },2500);
    timer2 = setTimeout(function(){
        $(".dia_ai form button").trigger("click");
    },3000);
    timer2 = setTimeout(function(){
        $(".dia ul>li").eq(3).trigger("click");
    },3500);
    timer2 = setTimeout(function(){
        $(".dia ul>li").eq(3).children('a').trigger("click");
    },4000);
    timer2 = setTimeout(function(){
        $(".dia ul>li").eq(4).trigger("click");
    },5000);
    timer2 = setTimeout(function(){
        $(".dia ul>li").eq(4).children('a').trigger("click");
    },5500);
    timer2 = setTimeout(function(){
        $(".dia_ai form input").val('');
        $(".camera").parents('main').removeClass('photo');
    },6500);
    timer2 = setTimeout(function(){
        clearTimeout(timer2);
    },7000);

    
    /* tab4 검색 창 열기 */
    $("form.search button").click(function(e){
        if($("form.search").hasClass('on')){
        }else{
            e.preventDefault();
            $("form.search").addClass('on');
        }
    });
    $("form.search").mouseleave(function(){
        if($("form.search").hasClass('on')) $(this).removeClass('on');
    });

    /* tab4 미리보기 조작 */
    var timer3;
    timer3 = setTimeout(function(){
        $(".search button").trigger("click");
    },1000);
    timer3 = setTimeout(function(){
        $(".search button").trigger("mouseleave");
    },2000);
    timer3 = setTimeout(function(){
        clearTimeout(timer3);
    },2500);



    /* banner */
    var $bnnNum = 0;
    lastNum = $(".banner ul.banner_list>li").size() - 1;
    
    /* 다음 */
    $(".next").click(function(){
        $bnnNum++;
        if($bnnNum > lastNum)$bnnNum = 0;
        $(".banner ul.banner_list>li").removeClass('view');
        $(".banner ul.banner_list>li").eq($bnnNum).addClass('view');

        $(".control>li").removeClass('on');
        $(".control>li").eq($bnnNum).addClass('on');
    });
    /* 이전 */
    $(".prev").click(function(){
        $bnnNum--;
        if($bnnNum < 0)$bnnNum = lastNum;
        $("ul.banner_list>li").removeClass('view').eq($bnnNum).addClass('view');
        $(".control>li").removeClass('on').eq($bnnNum).addClass('on');
    });

    /* mobile swipe */
    $(".banner").bind("swipeleft", function () {
        $(".next").trigger("click");
    });

    $(".banner").bind("swiperight", function () {
        $(".prev").trigger("click");
    });


    /* 컨트롤 클릭 */
    var $bnnNum = 0;
    var $banner = $(".control>li").click(function(e){
        e.preventDefault();
        $bnnNum = $banner.index(this);
        $("ul.banner_list>li").removeClass('view').eq($bnnNum).addClass('view');
        $(".control>li").removeClass('on').eq($bnnNum).addClass('on');
    });
    $bnnNum = $banner.index(this) + 1;
    /* 컨트롤 오토 */
    function autoBanner(){
        $bnnNum++;
        if ($bnnNum > lastNum) $bnnNum = 0;
        $("ul.banner_list>li").removeClass('view').eq($bnnNum).addClass('view');
        $(".control>li").removeClass('on').eq($bnnNum).addClass('on');
    }
    
    var $autoBnn = setInterval(autoBanner,3000);

    /* 배너 재생 명령 */
    var flag = true;
    $(".control>li").click(function(){
        if(flag){
            clearInterval($autoBnn);
            flag = false;
        }else{
            $autoBnn = setInterval(autoBanner,3000);
            flag = true;
        }
    });
    /* //banner end */


    /* search like 클릭 */
    $(".like").click(function(e){
        e.preventDefault();
        if($(this).hasClass('on')){
            $(this).removeClass('on');
        }else{
            $(this).addClass('on');
        }
        $(this).siblings(".heart").css({"animation":"heart 1s linear .8s 1"});
    });
    /* search like 클릭 */
    $(".share").click(function(e){
        e.preventDefault();
    });


    /* search 미리보기 조작 */
    var timer5;
    timer5 = setTimeout(function(){
        $(".dentistry li").eq(0).find("em.like").trigger('click');
    },1000);
    timer5 = setTimeout(function(){
        clearTimeout(timer5);
    },1500);

})