$("#aDatos").click(function() {
    $('html, body').animate({
        scrollTop: $("#Datos").offset().top
    }, 800);
});
$("#aNacionalidad").click(function() {
    $('html, body').animate({
        scrollTop: $("#Nacionalidad").offset().top
    }, 800);
});
$("#aCorreos").click(function() {
    $('html, body').animate({
        scrollTop: $("#Correos").offset().top
    }, 800);
});
$("#aTelefonos").click(function() {
    $('html, body').animate({
        scrollTop: $("#Telefonos").offset().top
    }, 800);
});
$("#aContactos").click(function() {
    $('html, body').animate({
        scrollTop: $("#Contactos").offset().top
    }, 800);
});
$("#aDirecciones").click(function() {
    $('html, body').animate({
        scrollTop: $("#Direcciones").offset().top
    }, 800);
});
function visible_recupera(){
	$('#principal').hide();
	$('#recuperar').show();
}
function visible_registro(){
	$('#principal').hide();
	$('#registro').show();
}
function visible_registro_recupera(){
	$('#recuperar').hide();
	$('#registro').show();
}
function visible_con_sesion(){
	$('#principal').hide();
	$('#conIngreso').show();
  $('#infoGeneral').show();
	$('#perfil').show();
}
var $item = $('.carousel .item'); 
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight); 
$item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$('.carousel').carousel({
  interval: false,
  pause: "true"
});