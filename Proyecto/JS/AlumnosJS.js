var arrayAlumnos=[];
class Alumnos{
	constructor(NoControl,Semestre,Promedio,Creditos,NombreCarrera,idUsuarios){
		this.NoControl=NoControl;
		this.Semestre=Semestre;
		this.Promedio=Promedio;
		this.Creditos=Creditos;
		this.NombreCarrera=NombreCarrera;
		this.idUsuarios=idUsuarios;
	
	}
	toString(){
		return "NoControl: " + this.NoControl + ", Semestre: " + this.Semestre +
		", Promedio: " + this.Promedio + ", Creditos: " + this.Creditos + ", NombreCarrera: " +
		this.NombreCarrera + ", idUsuarios: " + this.idUsuarios;
				
	}
	guardar(){
		arrayAlumnos.push(this);
		
	}
	actualizar(){
		for(i=0;i<arrayAlumnos.length;i++){
			if(arrayAlumnos[i].NoControl==this.NoControl){
				arrayAlumnos[i]=this;
			}
		}
		
	}
	
	consultar(){
		for(i=0;i<arrayAlumnos.length;i++){
			if(arrayAlumnos[i].NoControl==this.NoControl){
				return arrayAlumnos[i];
			}
		}
		return null;		
	}
	function validar(form){
    var cad=validarNoControl(form.NoControl.value);
    cad+=validarSemestre(parseInt(form.Semestre.value));
    cad+=validarPromedio(parseInt(form.Promedio.value));
    cad+=validarCreditos(parseInt(form.Creditos.value));
    cad+=validarNombreCarrera(parseInt(form.NombreCarrera.value));
    cad+=validarIdUsuarios(form.idUsuarios.value);
    if(cad!=''){
        document.getElementById("notificaciones").innerHTML='<p>'+cad+'</p>';
        return false;
    }
    else{
       return true; 
    }
}
	function validarNoControl(cad){
		var patron=/\d{8}/;
			if(patron.test(cad)){
				return '';
			}
			else{
				return "El número de control debe ser de 8 dígitos <br>";
			}
	}
	function validarSemestre(valor){
		if(valor>=1 && valor<=9){
			return '';
		}else{
			return "Debes registrar un semestre valido"
		}
		
	}
	function validarPromedio(valor){
		if(valor>=0 && valor<=100){
			return '';
		}else{
			return "Debes registrar un promedio valido"
		}
	}
	function validarCreditos(valor){
		if(valor>=1 && valor<=260){
			return '';
		}
		else{
			return "Los creditos exceden el rango <br>"
		}
	}
	function validarNombreCarrera(cad){
		if(cad.length==0){
			return 'Debes informar el nombre de tu carrera <br>';
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