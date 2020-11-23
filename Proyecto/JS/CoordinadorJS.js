var arrayCoordinador=[];
class Coordinador{
	constructor(idCoordinador,NombreCarrera,Tcreditos,NombreCoordinador,idUsuarios){
		this.idCoordinador=idCoordinador;
		this.NombreCarrera=NombreCarrera;
		this.Tcreditos=Tcreditos;
		this.NombreCoordinador=NombreCoordinador;
		this.idUsuarios=idUsuarios;
	
	}
	toString(){
		return "idCoordinador: " + this.idCoordinador + ", NombreCarrera: " + this.NombreCarrera +
		", Tcreditos: " + this.Tcreditos + ", NombreCoordinador: " + this.NombreCoordinador + ", idUsuarios: " + this.idUsuarios;
				
	}
	guardar(){
		arrayCoordinador.push(this);
		
	}
	actualizar(){
		for(i=0;i<arrayCoordinador.length;i++){
			if(arrayCoordinador[i].idCoordinador==this.idCoordinador){
				arrayCoordinador[i]=this;
			}
		}
		
	}
	eliminar(){
		for(i=0;i<arrayCoordinador.length;i++){
			if(arrayCoordinador[i].idCoordinador==this.idCoordinador){
				arrayCoordinador.splice(i,1);
			}
		}
	}
	consultar(){
		for(i=0;i<arrayCoordinador.length;i++){
			if(arrayCoordinador[i].idCoordinador==this.idCoordinador){
				return arrayCoordinador[i];
			}
		}
		return null;		
	}
	function validar(form){
    var cad=validarIdCoordinador(form.idCoordinador.value);
    cad+=validarNombreCarrera(form.NombreCarrera.value);
    cad+=ValidarTotalCreditos(parseInt(form.Tcreditos.value));
    cad+=validarNombreCoordinador(form.NombreCoordinador.value);
    cad+=validarIdUsuarios(form.idUsuarios.value);
    if(cad!=''){
        document.getElementById("notificaciones").innerHTML='<p>'+cad+'</p>';
        return false;
    }
    else{
       return true; 
    }
}
	function validarIdCoordinador(cad){
		if(cad.length==0){
			return 'Debes informar el ID del Coordinador <br>';
		}else{
			return '';
		}
	}
	function validarNombreCarrera(cad){
		if(cad.length==0){
			return 'Debes informar el nombre de tu carrera <br>';
		}else{
			return '';
		}
	}
	function validarTotalCreditos(valor){
		if(valor>=1 && valor<=260){
			return '';
		}
		else{
			return "Los creditos exceden el rango <br>"
		}
	}
	function validarNombreCoordinador(cad){
		if(cad.length==0){
			return 'Debes informar el nombre del Coordinador <br>';
		}else{
			return '';
		}
	}
	function validarIdUsuarios(cad){
		if(cad.length==0){
			return 'Debes informar el ID del usuario <br>';
		}else{
			return '';
		}
	}
}