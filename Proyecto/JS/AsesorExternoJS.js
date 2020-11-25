var arrayAsesorExterno=[];
class AsesorExterno{
	constructor(idAsesorExterno,Nombre,Email,Telefono,Puesto,idEmpresa){
		this.idAsesorExterno=idAsesorExterno;
		this.Nombre=nombre;
		this.Email=Email;
		this.Telefono=Telefono;
		this.Puesto=Puesto;
		this.idEmpresa=idEmpresa;
	
	}
	toString(){
		return "idAsesorExterno: " + this.idAsesorExterno + ", Nombre: " + this.Nombre +
		", Email: " + this.Email + ", Telefono: " + this.Telefono + ", Puesto: " +
		this.Puesto + ", idEmpresa: " + this.idEmpresa;
				
	}
	guardar(){
		arrayAsesorExterno.push(this);
		
	}
	actualizar(){
		for(i=0;i<arrayAsesorExterno.length;i++){
			if(arrayAsesorExterno[i].idAsesorExterno==this.idAsesorExterno){
				arrayAsesorExterno[i]=this;
			}
		}
		
	}
	
	consultar(){
		for(i=0;i<arrayAsesorExterno.length;i++){
			if(arrayAsesorExterno[i].idAsesorExterno==this.idAsesorExterno){
				return arrayAsesorExterno[i];
			}
		}
		return null;		
	}
	function validar(form){
    var cad=validarIdAsesorExterno(form.idAsesorExterno.value);
    cad+=validarNombre(form.Nombre.value);
    cad+=validarEmail(form.Email.value);
    cad+=validarTelefono(form.Telefono.value);
    cad+=validarPuesto(parseInt(form.Puesto.value));
    cad+=validarIdEmpresa(form.idEmpresa.value);
    if(cad!=''){
        document.getElementById("notificaciones").innerHTML='<p>'+cad+'</p>';
        return false;
    }
    else{
       return true; 
    }
}
	function validarIdAsesorExterno(cad){
		if(cad.length==0){
			return 'Debes informar el ID de tu Asesor Externo <br>';
		}else{
			return '';
		}
	}
	function validarNombre(cad){
		if(cad.length==0){
			return 'Debes informar el nombre del Asesor Externo.<br>';
		}
		else{
			return '';
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
	function validarPuesto(cad){
		if(cad.length==0){
			return 'Debes informar el puesto de tu Asesor Externo <br>';
		}else{
			return '';
		}
	}
	function validarIdEmpresa(cad){
		if(cad.length==0){
			return 'Debes informar el ID de la empresa <br>';
		}else{
			return '';
		}
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