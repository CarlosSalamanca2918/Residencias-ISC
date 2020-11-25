var arrayUsuarios=[];
class Usuario{
	constructor(Nombre,Sexo,Telefono,Email,Estatus,tipoUsuario,Contraseña,idUsuario){
		this.Nombre=Nombre;
		this.Sexo=Sexo;
		this.Telefono=Telefono;
		this.Email=Email;
		this.tipoUsuario=tipoUsuario;
		this.Contraseña=Contraseña;
		this.idUsuario=idUsuario;
	}
	toString(){
		return "Nombre: " + this.Nombre + ", Sexo: " + this.Sexo +
		", Telefono: " + this.Telefono + ", Email: " + this.Email + ", tipoUsuario: " +
		this.tipoUsuario + ", Contraseña: " + this.Contraseña + ", idUsuario: " + this.idUsuario;
				
	}
	guardar(){
		arrayUsuarios.push(this);
		
	}
	actualizar(){
		for(i=0;i<arrayUsuarios.length;i++){
			if(arrayUsuarios[i].idUsuario==this.idUsuario){
				arrayUsuarios[i]=this;
			}
		}
		
	}
	
	consultar(){
		for(i=0;i<arrayUsuarios.length;i++){
			if(arrayUsuarios[i].idUsuario==this.idUsuario){
				return arrayUsuarios[i];
			}
		}
		return null;		
	}
	function validar(form){
    var cad=validarNombre(form.Titulo.value);
    cad+=validarSexo(parseInt(form.Estatus.options[form.Estatus.options.radio].value));
    cad+=ValidarTelefono(form.FechaRegistro.value);
    cad+=validarEmail(form.FechaAceptacion.value);
    cad+=validarEstatus(parseInt(form.Contenido.value));
    cad+=validarTipoUsuario(parseInt(form.Calificacion.value));
    cad+=validarContraseña(form.idProyecto.value);
    cad+=validarIdUsuario(form.NoDocente.value);
    if(cad!=''){
        document.getElementById("notificaciones").innerHTML='<p>'+cad+'</p>';
        return false;
    }
    else{
       return true; 
    }
}
	function validarNombre(cad){
		if(cad.length==0){
			return 'Debes informar el nombre del usuario <br>';
		}else{
			return '';
		}
	}
	function validarSexo(valor){
		if(valor==0){
			return 'Debes elegir un sexo<br>';
		}
		return '';
	}
	function validarTelefono(cad){
    var ban=false;
		if(cad.length==12){    
		   var patron=/\d{3}-\d{3}-\d{4}/;
		   if(patron.test(cad)){
			   return '';
		   } 
		   else{
				return 'El número de telefono no cumple el patrón ###-###-####.<br>';
		   }
		}
		else{
			return 'El telefono debe ser de 12 caracteres. <br>'
		}
	}
	function validarEmail(cad){
		var patron=/[a-z]\w*@\w+.\w+.*/;
			if(patron.test(cad)){
				return '';
			}
			else{
				return "La cuenta de correo electrónico no tiene el formato correcto. <br>";
			}
	}
	function validarEstatus(valor){
		if(valor==0){
			return 'Debes elegir un estatus<br>';
		}
		return '';
	}
	function validarTipoUsuario(valor){
		if(valor==0){
			return 'Debes elegir un tipo de usuario<br>';
		}
		return '';
	}
	function validarContraseña(valor){
		if(valor==0){
			return 'Debes elegir una contraseña<br>';
		}
		return '';
	}
	function validarIdUsuario(valor){
		if(valor==0){
			return 'Debes elegir un ID de Usuario<br>';
		}
		return '';
	}
	function preguntaEliminar(){
		eliminar=confirm("¿Deseas eliminar este registro?");
		if(eliminar){
			for(i=0;i<arrayAlumnos.length;i++){
				if(arrayAlumnos[i].NoControl==this.NoControl){
					arrayAlumnos.splice(i,1);
				}
			}	
		}else{
			alert('No has eliminado el registro')
		}
	}
}