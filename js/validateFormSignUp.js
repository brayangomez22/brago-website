$(window).on("load", function(){

	$("input").focus(function(){
        $(".alert").remove();
    })

	let formSignUp = document.getElementById('formSignUp');

    formSignUp.addEventListener('submit', function(e){

		let success = false;

		/*=============================================
		NAME VALIDATION
		=============================================*/

		var name = $("#name").val();

		if(name == ""){

			$("#name").parent().before('<h6 class="alert alert-danger">No se permiten números ni caracteres especiales</h6> <div class="alert alert-warning"><strong>ATENCIÓN:</strong> Este campo es obligatorio</div>')

			success = false;

		}else{
			
			var expression =  /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
			
			if(!expression.test(name)){
				$("#name").parent().before('<h6 class="alert alert-danger">No se permiten números ni caracteres especiales</h6>')
				success = false;
			}else{
				success = true;
			}

		}
		
		/*=============================================
		EMAIL VALIDATION
		=============================================*/

		var email = $("#email").val();

		if(email == ""){

			$("#email").parent().before('<h6 class="alert alert-danger">Este campo es obligatorio</h6>')

			success = false;

		}else{

			var expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

			if(!expression.test(email)){

				$("#email").parent().before('<h6 class="alert alert-danger">Escriba correctamente el correo electrónico</h6>')

				success = false;
			}else{
				success = true;
			}
			
		}

		/*=============================================
		PASSWORD VALIDATION
		=============================================*/

		var password = $("#password").val();

		if(password == ""){

			$("#password").parent().before('<h6 class="alert alert-danger">Este campo es obligatorio</h6>')
			
			success = false;

		}else{

			var expression = /^[a-zA-Z0-9]*$/;

			if(!expression.test(password)){

				$("#password").parent().before('<h6 class="alert alert-danger">No se permiten caracteres especiales</h6>')
				
				success = false;
			}else{
				success = true;
			}
			
		}

		if(success == false){
            e.preventDefault();
        }else{
			e.preventDefault();

            document.getElementById('formSignUp').reset();

            swal({

                type: "success",
                title: "¡Gracias por registrarse, ahora eres parte de Brago!",
                showConfirmButton: true,
                confirmButtonText: "Cerrar"
    
            }).then(function(result){
    
                if(result.value){
                
                    window.location = "../#main";
    
                }
    
            });
        }
	})
})