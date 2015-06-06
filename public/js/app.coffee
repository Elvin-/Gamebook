Gamebook=
	init:->

		$(".input-group").on('focus',".form-control",->
			   $(this).closest('.input-group, .form-group').addClass 'focus'
			).on "blur",->
               $(this).closest('.input-group, .form-group').removeClass 'focus'