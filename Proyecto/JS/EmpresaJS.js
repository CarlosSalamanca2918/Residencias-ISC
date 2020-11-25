var arrayEmpresa=[];
class Empresa{
	constructor(idEmpresa,Nombre,RFC,Giro,Direccion,Telefono){
		this.idEmpresa=idEmpresa;
		this.Nombre=nombre;
		this.RFC=RFC;
		this.Giro=Giro;
		this.Direccion=Direccion;
		this.Telefono=Telefono;
	
	}
	toString(){
		return "idEmpresa: " + this.idEmpresa + ", Nombre: " + this.Nombre +
		", RFC: " + this.RFC + ", Giro: " + this.Giro + ", Direccion: " +
		this.Direccion + ", Telefono: " + this.Telefono;
				
	}
	guardar(){
		arrayEmpresa.push(this);
		
	}
	actualizar(){
		for(i=0;i<arrayEmpresa.length;i++){
			if(arrayEmpresa[i].idEmpresa==this.idEmpresa){
				arrayEmpresa[i]=this;
			}
		}
		
	}
	
	consultar(){
		for(i=0;i<arrayEmpresa.length;i++){
			if(arrayEmpresa[i].idEmpresa==this.idEmpresa){
				return arrayEmpresa[i];
			}
		}
		return null;		
	}
	function validar(form){
    var cad=validarIdEmpresa(form.idEmpresa.value);
    cad+=validarNombre(form.Nombre.value);
    cad+=validarRFC(form.RFC.value);
    cad+=validarGiro(form.Giro.value);
    cad+=validarDireccion(parseInt(form.Direccion.value));
    cad+=validarTelefono(form.Telefono.value);
    if(cad!=''){
        document.getElementById("notificaciones").innerHTML='<p>'+cad+'</p>';
        return false;
    }
    else{
       return true; 
    }
}
	function validarIdEmpresa(cad){
		if(cad.length==0){
			return 'Debes informar el ID de tu Empresa <br>';
		}else{
			return '';
		}
	}
	function validarNombre(cad){
		if(cad.length==0){
			return 'Debes informar el nombre de la empresa.<br>';
		}
		else{
			return '';
		}
	}
	function validarRFC(cad){
    var patron=/[a-z]\[a-z]\[a-z]\[a-z]\d{2}\d{2}\d{2}\[a-z]\[a-z]\[a-z]/;
		if(patron.test(cad)){
			return '';
		}
		else{
			return "El RFC no tiene el formato correcto. <br>";
		}
	}
	function validarGiro(cad){
		if(cad.length==0){
			return 'Debes informar el giro de tu Empresa <br>';
		}else{
			return '';
		}
	}
	function validarDireccion(cad){
		if(cad.length==0){
			return 'Debes informar la dirección de tu empresa <br>';
		}else{
			return '';
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