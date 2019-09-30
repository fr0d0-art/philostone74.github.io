// скрипт анимации перемещения блоков кирпича с верхней части блока в нижнюю часть 
$(document).ready(function(){
  $('.groot_bg').mouseover(function(){
    $(this).addClass('groot-div_bg-1');
  });
});
$(document).ready(function(){
  $('.brick_bg').mouseover(function(){
    $(this).addClass('brick-div_bg-1');
  });
});
$(document).ready(function(){
  $('.rock_bg').mouseover(function(){
    $(this).addClass('rock-div_bg-1');
  });
});
// скрипт движения глаз за курсором мыши
$(document).ready(function() {
        $('#pupil').spyEye({a: 14,b: 4,x: 86,y: 124});
});

// скрипты которые отображают background фон при наведении на выбор категории камня
var one = document.getElementById("brick");
one.onmouseover = function(){brickBackground.style.visibility = 'visible',
									  brickBackground.style.opacity = '1'};
one.onmouseout = function(){brickBackground.style.visibility = 'hidden',
									 brickBackground.style.opacity = '0'};

var two = document.getElementById("groot");
two.onmouseover = function(){grootBackground.style.visibility = 'visible',
									  grootBackground.style.opacity = '1'};
two.onmouseout = function(){grootBackground.style.visibility = 'hidden',
									 grootBackground.style.opacity = '0'};

var three = document.getElementById("rock");
three.onmouseover = function(){rockBackground.style.visibility = 'visible',
									  rockBackground.style.opacity = '1'};
three.onmouseout = function(){rockBackground.style.visibility = 'hidden',
									 rockBackground.style.opacity = '0'};

// скрипты которые отображают background фон при открытии модального окна
$(document).ready(function(){
  $('.openBrick').click(function(){
   $("#modalBrick").on('shown.bs.modal', function(){
    $('#brickBackground').css({'visibility' : 'visible', 'opacity' : '1'});
  });
});
  $("#modalBrick").on('hidden.bs.modal', function(){
    $('#brickBackground').css({'visibility' : 'hidden', 'opacity' : '0'});
  });
});

$(document).ready(function(){
  $('.openGroot').click(function(){
   $("#modalGroot").on('shown.bs.modal', function(){
    $('#grootBackground').css({'visibility' : 'visible', 'opacity' : '1'});
  });
});
  $("#modalGroot").on('hidden.bs.modal', function(){
    $('#grootBackground').css({'visibility' : 'hidden', 'opacity' : '0'});
  });
});

$(document).ready(function(){
  $('.openRock').click(function(){
   $("#modalRock").on('shown.bs.modal', function(){
    $('#rockBackground').css({'visibility' : 'visible', 'opacity' : '1'});
  });
});
  $("#modalRock").on('hidden.bs.modal', function(){
    $('#rockBackground').css({'visibility' : 'hidden', 'opacity' : '0'});
  });
});

// скрипты которые открывают окно подробнее в модальном окне камня
function myfuncBrick() {
var chbox = document.getElementById('chbBrick');
var block = document.getElementById('modalAboutBrick');
var text = document.getElementById('modalAboutPBrick');
    if (chbox.checked) 
    	{block.style.width = "100%",
 		 text.style.opacity = "1",
 		 text.style.transform = "translateX(0px)";}
    else 
    	{block.style.width = "0%",
 		 text.style.opacity = "1",
 		 text.style.transform = "translateX(1000px)";}
  };
  function myfuncGroot() {
var chbox = document.getElementById('chbGroot');
var block = document.getElementById('modalAboutGroot');
var text = document.getElementById('modalAboutPGroot');
    if (chbox.checked) 
    	{block.style.width = "100%",
 		 text.style.opacity = "1",
 		 text.style.transform = "translateX(0px)";}
    else 
    	{block.style.width = "0%",
 		 text.style.opacity = "1",
 		 text.style.transform = "translateX(1000px)";}
  };
  function myfuncRock() {
var chbox = document.getElementById('chbRock');
var block = document.getElementById('modalAboutRock');
var text = document.getElementById('modalAboutPRock');
    if (chbox.checked) 
    	{block.style.width = "100%",
 		 text.style.opacity = "1",
 		 text.style.transform = "translateX(0px)";}
    else 
    	{block.style.width = "0%",
 		 text.style.opacity = "1",
 		 text.style.transform = "translateX(1000px)";}
  };

// скрипт для анимации одного блока производства
var forma_back = document.getElementById("working-navigation__forma_back");
forma_back.onmouseover = function(){this.style.bottom = '220px', this.style.opacity = '0'};

// скрипт который открывает блок с информацией в секции производства
$('#nav-bag').click(function(e){
	$('.working-info_div').removeClass('fadeOut').css({'visibility' : 'visible' , 'transition-delay' : '0s'}).addClass('fadeIn');
  $('#working-info_div-div').html("<span>М</span>ы используем специальный гипс для декоративного камня, который отличает изделие от обычного строительного гипса преимуществами:<ul><li>Составом: высокопрочный гипс, наполнители, цемент, модифицирующие добавки;</li><li>Проще приготовлять смесь, добавляем только воду;</li><li>Отливаем без использования вибростола и на выходе получаем продукцию без пузырей;</li><li>Оптимальная жизнеспособность раствора для отливки;</li><li>Короткие сроки расформовки;</li><li>Экологичность;</li></ul>");
  $(this).tooltip('hide');
	$('.working-border').css({'opacity' : '0', 'transition' : '1s'});
	e.preventDefault()
});
$('#nav-bucket').click(function(e){
  $('.working-info_div').removeClass('fadeOut').css({'visibility' : 'visible' , 'transition-delay' : '0s'}).addClass('fadeIn');
  $('#working-info_div-div').html("<span>Д</span>алее: <ul> <li> Смешиваем с чистой водой в емкости в пропорции 50% сухой смеси и 50% чистой воды; </li> <li> Тщательно перемешиваем при помощи строительного миксера; </li> <li> Главная задача размешать все в однородную массу до состояния сметанной консистенции; </li> <li> Рзбиваем миксером все комки которые образуются при контакте гипса с водой; </li> <li> После приступаем к следующей стадии разработки камня; </li> </ul>");
  $(this).tooltip('hide');
  $('.working-border').css({'opacity' : '0', 'transition' : '1s'});
  e.preventDefault()
});
$('#nav-bucket-paint').click(function(e){
  $('.working-info_div').removeClass('fadeOut').css({'visibility' : 'visible' , 'transition-delay' : '0s'}).addClass('fadeIn');
  $('#working-info_div-div').html("<span>З</span>аливаем полученную смесь в форму: <ul> <li> Тщательно перемешанная гипсовая субстанция заливается в смоченную заранее форму изготовленную из силикона либо из полиуритана; </li> <li> Пропорционнально размещаем по форме; </li> <li> Выравниваем поверхность; </li> <li> Оставляем без движения залитую форму; </li> <li> Ждем 30 - 60 минут; </li> </ul>");
  $(this).tooltip('hide');
  $('.working-border').css({'opacity' : '0', 'transition' : '1s'});
  e.preventDefault()
});
$('#nav-forma-bricks').click(function(e){
  $('.working-info_div').removeClass('fadeOut').css({'visibility' : 'visible' , 'transition-delay' : '0s'}).addClass('fadeIn');
  $('#working-info_div-div').html("<span>Ч</span>ерез определенное время достаем из формы мокрый камень: <ul> <li> Хоть гипс и схватился и принял внешний вид отпечатка формы, он тем не менее до сих пор мокрый и может легко изменить свою геометрию под воздействием внешних факторов; </li> <li> Основная задача периода расформовки заключается в том чтобы осторожно достать камень из формы и не сломать его на части; </li> <li> После расформовки занимаемся просмотром внешнего вида изделий, после чего камни не прошедшие условия естественного отбора, считаются недееспособными и списываются в мусорное ведро; </li> <li> Все камни которые удовлетворяют условия отбора помещаются в корзину для прохождения следующей стадии производства; </li> </ul>");
  $(this).tooltip('hide');
  $('.working-border').css({'opacity' : '0', 'transition' : '1s'});
  e.preventDefault()
});
$('#nav-fan').click(function(e){
  $('.working-info_div').removeClass('fadeOut').css({'visibility' : 'visible' , 'transition-delay' : '0s'}).addClass('fadeIn');
  $('#working-info_div-div').html("<span>Д</span>алее камень проходит процесс сушки: <ul> <li> Расформованный камень помещается в корзины которые размещаются в специально произведенной сушке в нашем цехе; </li> <li> После чего происходит самый долгосрочный процесс производства выгонка влаги из камня; </li> <li> Специально разработанная сушилка нагревает воздух до 40 градусов в закрытом пространстве, а вся влага которая постепенно выходит из гипсауходит через вентиляцию; </li> <li> На сушку изделий уходит в среднем 1-2 суток; </li> </ul>");
  $(this).tooltip('hide');
  $('.working-border').css({'opacity' : '0', 'transition' : '1s'});
  e.preventDefault()
});
$('#nav-box').click(function(e){
  $('.working-info_div').removeClass('fadeOut').css({'visibility' : 'visible' , 'transition-delay' : '0s'}).addClass('fadeIn');
  $('#working-info_div-div').html("<span>Г</span>отовый сухой камень укладываем в коробки: <ul> <li> После сушки горячий камень как горячие пирожки из сушки достаются и проходят осмотр по готовности продукции; </li> <li> В соответствии с нормами полностью сухой камень отбирается, а тот что не прошел отбор помещается обратно доспевать в сушку; </li> <li> После чего готовый камень помещаем в фирменные коробки; </li> <li> После чего, после вашего заказа коробки укладываются в багажный отдел автомобиля и мчатся в соответствии с правилами ПДД на встречу с вами; </li> </ul>");
  $(this).tooltip('hide');
  $('.working-border').css({'opacity' : '0', 'transition' : '1s'});
  e.preventDefault()
});
// скрипт закрывает блок с информацией в секции производства
$('#working-info_close').click(function(e){
	$('.working-info_div').removeClass('fadeIn').addClass('fadeOut').css({'transition-delay':'2s', 'visibility' : 'hidden'});
	$('.working-border').css({'opacity' : '1', 'transition' : '1s'});
	e.preventDefault()
});
// скрипт который добавляет тени для блоков производства при наведении
$('.working-navigation__div').mouseover(function(){
	$(this).css({'transition':'none', 'border-radius' : '50%', 'border' : '0.1px solid black', 'box-shadow' : '0 0 50px rgb(119, 139, 235)'});
});
$('.working-navigation__div').mouseout(function(){
	$(this).css({'border' : 'none' , 'border-radius' : '0px', 'box-shadow' : 'none', 'transition' : 'none'});
});
// Скрипт для анимации блока производства при прокрутки страницы
$(function() {
    var bag = $(".working-svg__circle__minor:nth-child(1)"),
    	  bucket = $(".working-svg__circle__minor:nth-child(2)"),
    	  bucketPaint = $(".working-svg__circle__minor:nth-child(3)"),
    	  formaBricks = $(".working-svg__circle__minor:nth-child(4)"),
    	  fan = $(".working-svg__circle__minor:nth-child(5)"),
    	  box = $(".working-svg__circle__minor:nth-child(6)");
    	  thorn = $(".working-svg_thorn");
    $(window).scroll(function() {
    	var scroll = $(window).scrollTop();
    		 offset = $('#working').offset().top - 300;
         if (scroll > offset) {
         	  thorn.css({'transition' : '1.5s', 'opacity' : '1'});
            bag.css({'transition' : '1s', 'transform' : 'translate(-150%, -75%)', 'opacity' : '1'});
            bucket.css({'transition' : '1.3s', 'transform' : 'translate(0%, -150%)', 'opacity' : '1'});
            bucketPaint.css({'transition' : '1.6s', 'transform' : 'translate(150%, -75%)', 'opacity' : '1'});
            formaBricks.css({'transition' : '1.9s', 'transform' : 'translate(-150%, 75%', 'opacity' : '1'});
            fan.css({'transition' : '2.1s', 'transform' : 'translate(0%, 150%)', 'opacity' : '1'});
            box.css({'transition' : '2.4s', 'transform' : 'translate(150%, 75%)', 'opacity' : '1'});
        }
         else {
          	thorn.css({'transition' : '1.5s', 'opacity' : '0'});
        		bag.css({'transition' : '1s', 'transform' : 'translate(0%, 0%)', 'opacity' : '0'});
            bucket.css({'transition' : '1.3s', 'transform' : 'translate(0%, 0%)', 'opacity' : '0'});
            bucketPaint.css({'transition' : '1.6s', 'transform' : 'translate(0%, 0%)', 'opacity' : '0'});
            formaBricks.css({'transition' : '1.9s', 'transform' : 'translate(0%, 0%', 'opacity' : '0'});
            fan.css({'transition' : '2.1s', 'transform' : 'translate(0%, 0%)', 'opacity' : '0'});
            box.css({'transition' : '2.4s', 'transform' : 'translate(0%, 0%)', 'opacity' : '0'});
        }
    });
});
$(function() {
    var bag = $(".working-svg__circle__minor:nth-child(1)"),
        bucket = $(".working-svg__circle__minor:nth-child(2)"),
        bucketPaint = $(".working-svg__circle__minor:nth-child(3)"),
        formaBricks = $(".working-svg__circle__minor:nth-child(4)"),
        fan = $(".working-svg__circle__minor:nth-child(5)"),
        box = $(".working-svg__circle__minor:nth-child(6)");
        thorn = $(".working-svg_thorn");
$(window).scroll(function() {
    	var scroll = $(window).scrollTop();
    		 offset = $('#faq').offset().top - 300;
         if (scroll > offset) {
          	thorn.css({'transition' : '1.5s', 'opacity' : '0'});
        		bag.css({'transition' : '1s', 'transform' : 'translate(0%, 0%)', 'opacity' : '0'});
            bucket.css({'transition' : '1.3s', 'transform' : 'translate(0%, 0%)', 'opacity' : '0'});
            bucketPaint.css({'transition' : '1.6s', 'transform' : 'translate(0%, 0%)', 'opacity' : '0'});
            formaBricks.css({'transition' : '1.9s', 'transform' : 'translate(0%, 0%', 'opacity' : '0'});
            fan.css({'transition' : '2.1s', 'transform' : 'translate(0%, 0%)', 'opacity' : '0'});
            box.css({'transition' : '2.4s', 'transform' : 'translate(0%, 0%)', 'opacity' : '0'});
        }
        else{
        }
   });
});
// подключение подсказок bootstrap над ссылками
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});
