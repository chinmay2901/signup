$(document).ready(function(){

	$('.help-block').hide();
	

	$('#btn1').click(function(){
		$('.help-block').hide();
		var flag = 0;

		
        // Checking for empty elements

		if($('.form-control').val() == ""){
			alert("All fields are compulsory");
			flag = 1;
		}
		if($('#name_f').val() == ""){
			alert("Do not leave first name field empty")
		}
		if($('#name_l').val() == ""){
			alert("Do not leave last name field empty")
		}
		if($('#email_id').val() == ""){
			alert("Do not leave email id field empty")
		}


		if($('#pass').val().length < 8 || $('#pass').val().length > 15) {
		
			$('#pass').val("");
			$('#pass_confrm').val("");
			$('#pass').focus();
			$('#pass_div').addClass("has-error");
			$('#pass_hb').show();
			flag = 1;
			
		}

		if($('#pass').val() != $('#pass_confrm').val()) {
			
			$('#pass').val("");
			$('#pass_confrm').val("");
			$('#pass').focus();
			$('#pass_div').addClass("has-error");
			$('#pass_confrm_hb').show();
			flag = 1;
		}

		if(isNaN($('#dob_day').val())){
		
			$('#dob_day').val("");
			$('#dob_day').focus();
			$('#dob_day_div').addClass("has-error");
			$('#dob_day_hb').show();
			flag = 1;
		}

		if(isNaN($('#dob_year').val())){
			
			$('#dob_year').val("");
			$('#dob_year').focus();
			$('#dob_year_div').addClass("has-error");
			$('#dob_year_hb').show();
			flag = 1;
		}

		if(isNaN($('#tel_no').val())){
			
			$('#tel_no').val("");
			$('#tel_no').focus();
			$('#tel_no_div').addClass("has-error");
			$('#tel_no_hb').show();
			flag = 1;
		}


		<!-- Email id verification -->

		var a,i,s;
		s = 0;
		a = 0;
		for(i = 0; i < $('#email_id').length; i++){
			if($('#email_id').val().charAt(i) == '@'){
				a++;
			}
			if($('#email_id').val().charAt(i) == ' '){
				s++;
			}
		}

		if(a > 0 || s > 0){
			$('#email_id').val("");
			$('#email_id').focus();
			$('#email_div').addClass("has-error");
			$('#email_hb').show();
			flag = 1;
		}

		if(flag == 0){
			alert("Form submitted successfully! thankyou!");
			$('.help-block').addClass("has-success");
		}

		


	});

})