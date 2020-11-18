//=============================================
// VALIDATE CONTACT FORM 
//=============================================

$(window).on("load", function(){

    $("input").focus(function(){
        $(".alert").remove();
    })

    $("textarea").focus(function(){
        $(".alert").remove();
    })

    let formContact = document.getElementById('formContact');

    formContact.addEventListener('submit', function(e){
        let name = $("#name").val();
        let email = $("#email").val();
        let message = $("#note").val();
        let success = false;

        //------- NAME VALIDATION --------

        if(name == ""){

            $("#name").before('<h6 class="alert alert-danger">Escriba por favor el nombre</h6>');

            success = false;

        }else{

            let expression = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;	

            if(!expression.test(name)){

                $("#name").before('<h6 class="alert alert-danger">Escriba por favor sólo letras sin caracteres especiales</h6>');

                success = false;

            }else{
                success = true;
            }

        }

        //------- EMAIL VALIDATION --------

        if(email== ""){

            $("#email").before('<h6 class="alert alert-danger">Escriba por favor el email</h6>');
            
            success = false;

        }else{

            let expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

            if(!expression.test(email)){
                
                $("#email").before('<h6 class="alert alert-danger">Escriba por favor correctamente el correo electrónico</h6>');
                
                success = false;
            }else{
                success = true;
            }

        }

        //------- MESSAGE VALIDATION --------

        if(message == ""){

            $("#note").before('<h6 class="alert alert-danger">Escriba por favor un mensaje</h6>');
            
            success = false;

        }else{

            let expression = /^[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]*$/;

            if(!expression.test(message)){
                
                $("#note").before('<h6 class="alert alert-danger">Escriba el mensaje sin caracteres especiales</h6>');
                
                success = false;
            }else{
                success = true;
            }	

        }

        if(success == false){
            e.preventDefault();
        }else{
            e.preventDefault();

            document.getElementById('formContact').reset();

            swal({

                type: "success",
                title: "¡Gracias por el mensaje, muy pronto te respondere!",
                showConfirmButton: true,
                confirmButtonText: "Cerrar"
    
            }).then(function(result){
    
                if(result.value){
                
                    window.location = "#main";
    
                }
    
            });
        }

    })

})