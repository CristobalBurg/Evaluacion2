$().ready(function() {



    $("#formularioAvengers").validate({
        rules: {
            nombre: {
                required: true,
                minlength: 3
            },
            apellido: {
                required: true,
                minlength: 3
            },
            rut: {
                required: true,
                minlength: 9,
                maxlength: 10
            },
            email: {
                required: true
            },
            direccion: {
                required: true,
                minlength: 5,
                maxlength: 100
            },
            ciudad: {
                required: true,
            },
            comuna: {
                required: true
            },
            pwd: {
                required: true,
                minlength: 5
            },
            pwd2: {
                required: true,
                minlength: 5,
                equalTo: "#pwd"
            },
            comentario: {
                required: false,
                maxlength: 200
            }
        },
        messages: {
            nombre: {
                required: "Por favor ingrese su nombre",
                minlength: "El nombre debe tener Minimo 3 caracteres"
            },
            apellido: {
                required: "Ingrese su apellido",
                minlength: "El apellido debe tener al menos 3 carateres"
            },
            rut: {
                required: "Ingrese su rut",
                minlength: "Rut Invalido",
                maxlength: "Rut Inválido"
            },
            email: {
                required: "Ingrese su email",
                email: "Ingrese email válido"
            },
            direccion: {
                required: "Ingrese su Dirección",
                minlength: "Debe tener minimo 5 caracteres",
                maxlength: "Debe tener maximo 100 caracteres"
            },
            ciudad: {
                required: "Ingrese la ciudad",
            },
            comuna: {
                required: "Ingrese la comuna"
            },
            pwd: {
                required: "Ingrese su contraseña",
                minlength: "Debe tener minimo 5 caracteres",
                equalTo: "Las contraseñas no coinciden"

            },
            pwd2: {
                required: "Repita su contraseña",
                minlength: "Debe tener minimo 5 caracteres",
                equalTo: "Las contraseñas no coinciden"
            },
            comentario: {
                maxlength: "Máximo 200 caracteres"
            }

        }
    });
});

function mensaje() {
    var rut = $('#rut').val();
    var formulario = $('#formularioAvengers').serializeArray();
    console.log($('#formularioAvengers').serializeArray());

    if (!validaRut(rut)) {
        Swal.fire("Oops...", "Según nuestros datos del registro civil , su rut no existe. \n Recuerde separar el DV con un Guión (-)", "error");
        return;
    } else {
        for (var i in formulario) {
            if (formulario[i].value == '') {
                Swal.fire("Oops...", "el campo " + formulario[i].name + " debe ser llenado!", "error");
                $("#formularioAvengers").submit(function(e) {
                    e.preventDefault();
                });
                return;
            } else {
                Swal.fire("Felicidades", formulario[0].value + " " + formulario[1].value + " Estás más cerca de convertirte en un vengador", "success");
                $("#formularioAvengers").submit(function(e) {
                    e.preventDefault();
                });
            }
        }

    }


}


function validaRut(rutCompleto) {
    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto))
        return false;
    var tmp = rutCompleto.split('-');
    var digv = tmp[1];
    var rut = tmp[0];
    if (digv == 'K') digv = 'k';
    return (dv(rut) == digv);
}

function dv(T) {
    var M = 0,
        S = 1;
    for (; T; T = Math.floor(T / 10))
        S = (S + T % 10 * (9 - M++ % 6)) % 11;
    return S ? S - 1 : 'k';
}