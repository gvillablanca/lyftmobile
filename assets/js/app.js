$(document).ready(function(){	
  //al cargar vaciar todos los inputs 
  $('input').val("");
   //splash
  	$('.page-home').hide();
  	setTimeout(function(){ 
  		$('.img-logo').fadeOut(500);
  		$('.page-home').show();
  	},  3000);
   //botones sing in y back
  	$('.verify, .sing-up, .register, .register-finish').hide();
  	$('#sing-up').click(function(){
  		$('.verify, .login, .register, .register-finish').hide();
  		$('.sing-up').show();
  	});
  	$('#btn-back').click(function(){
  		$('.login').show();
  		$('.verify, .sing-up, .register, .register-finish').hide();  		
  	});  	

   //validar en sing in que no este input vacio y deshabilitar boton
  	$('.btn-next').click(function(){
    var input = $('.input-number').val();
    $('.input-number').val("");  
  		if(input !== ""){
     $('.btn-next').removeClass("disabled");//preguntar porquqe no se activa este coso
      alert('LAB:216');
      $('.verify').show();
      $('.login, .sing-up, .register, .register-finish').hide(); 
  		}
	  });
   
   //funciones de botones next y back
   $('#btn-back2').click(function(){
    $('.sing-up').show();
    $('.verify, .login, .register , .register-finish').hide();    
   });
   $('.btn-next2').click(function(){
    $('.register').show();
    $('.verify, .login, .sing-up, .register-finish').hide();    
   });
   $('#btn-back3').click(function(){
    $('.verify').show();
    $('.sing-up, .login, .register, .register-finish').hide();    
   });
   $('.btn-next3').click(function(){
    $('.register-finish').show();
    $('.verify, .login, .sing-up, .register').hide();

   });	
   $('#btn-inicio').click(function(){
    $('.login').show();
    $('.verify, .sing-up, .register, .register-finish').hide();    
   });	

   $('.btn-next2').click(function(){
    var code1 = $('.code1').val();
    var code2 = $('.code2').val();
    var code3 = $('.code3').val();
 
    if(code1 == "2" || code1 == "5" && code2 =="1" || code2 =="4" && code3 ==="6" || code3 =="7"){
      $('.register').show();
      $('.login, .sing-up, .verify, .register-finish').hide();
      $('input').val(""); 
    }else{
      $('input').val("");
      alert("codigo incorrecto");
      $('.verify').show();
      $('.login, .sing-up, .register, .register-finish').hide(); 
    }
   });

   $('.resend-code').click(function(){
     alert('tu nuevo codigo es: 547');
   });

   $('.btn-next3').click(function(){
    var name = $('.input-name').val();
    var email = $('.input-email').val();
 
    if(email !== "" && name !== ""){
      $('.btn-next3').removeClass("disabled");
      $('input').val("");
      $('.register-finish').show();
      $('.login, .sing-up, .register, .verify ').hide();
    }
   });

   //validar que los inputs solo pueda ingresarse numeros
   $('.numeric').keyup(function (){
     this.value = (this.value + '').replace(/[^0-9]/g, '');
   });

	});

