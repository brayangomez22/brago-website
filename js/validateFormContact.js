//=============================================
// VALIDATE CONTACT FORM 
//=============================================



    $("input").focus(function(){
        $(".alert").remove();
    })

    $("textarea").focus(function(){
        $(".alert").remove();
    })

    function validateContactUs(){

        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#note").val();

        //------- NAME VALIDATION --------

        if(name == ""){

            $("#name").before('<h6 class="alert alert-danger">Escriba por favor el nombre</h6>');

            return false;

        }else{

            var expression = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;	

            if(!expression.test(name)){

                $("#name").before('<h6 class="alert alert-danger">Escriba por favor sólo letras sin caracteres especiales</h6>');

                return false;

            }

        }

        //------- EMAIL VALIDATION --------

        if(email== ""){

            $("#email").before('<h6 class="alert alert-danger">Escriba por favor el email</h6>');
            
            return false;

        }else{

            var expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

            if(!expression.test(email)){
                
                $("#email").before('<h6 class="alert alert-danger">Escriba por favor correctamente el correo electrónico</h6>');
                
                return false;
            }	

        }

        //------- MESSAGE VALIDATION --------

        if(message == ""){

            $("#note").before('<h6 class="alert alert-danger">Escriba por favor un mensaje</h6>');
            
            return false;

        }else{

            var expression = /^[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]*$/;

            if(!expression.test(message)){
                
                $("#note").before('<h6 class="alert alert-danger">Escriba el mensaje sin caracteres especiales</h6>');
                
                return false;
            }	

        }

        return true;

    }