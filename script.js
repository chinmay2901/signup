$(document).ready(function(){

	$('.help-block').hide();

	$("#btn1").click(function(){
		alert('btnclick');


		if($('#pass').val().length < 8 || $('#pass').val().length > 15) {
		
			$('#pass').val("");
			$('#pass_confrm').val("");
			$('#pass').focus();
			$('#pass_div').addClass("has-error");
			$('#pass_hb').show();
			alert("hiii");
		}
		


		if($('#pass').val() != $('#pass_confrm').val()) {
			
			$('#pass').val("");
			$('#pass_confrm').val("");
			$('#pass').focus();
			$('#pass_div').addClass("has-error");
			$('#pass_confrm_hb').show();
		}

		if(isNaN($('#dob_day').val()){
		
			$('#dob_day').val("");
			$('#dob_day').focus();
			$('#dob_day_div').addClass("has-error");
			$('#dob_day_hb').show();
		}

		if(isNaN($('#dob_year').val()){
			
			$('#dob_year').val("");
			$('#dob_year').focus();
			$('#dob_year_div').addClass("has-error");
			$('#dob_year_hb').show();
		}

		if(isNaN($('#tel_no').val()){
			
			$('#tel_no').val("");
			$('#tel_no').focus();
			$('#tel_no_div').addClass("has-error");
			$('#tel_no_hb').show();
		}


		<!-- Email id verification -->

		var a,i,s;
		for(i = 0; i < $('#email_id').length; i++){
			if($('#email_id').val().charAt(i) == '@'){
				a++;
			}
			if($('#email_id').val().charAt(i) == ' '){
				s++;
			}
		}

		if(a != 1 || s > 0 || $('#email_id').val().slice(($('#email_id').val().length - 12),11) != "@mymail.com"){
			$('#email_id').val("");
			$('#email_id').focus();
			$('#email_id_div').addClass("has-error");
			$('#email_id_hb').show();
		}

		






		});
	});