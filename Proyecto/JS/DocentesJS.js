var arrayDocentes=[];
class Docentes{
	constructor(NoDocentes,Escolaridad,CarreraAdscrito,CantidadProyectos){
		this.NoDocentes=NoDocentes;
		this.Escolaridad=Escolaridad;
		this.CarreraAdscrito=CarreraAdscrito;
		this.CantidadProyectos=CantidadProyectos;
	
	}
	toString(){
		return "NoDocentes: " + this.NoDocentes + ", Escolaridad: " + this.Escolaridad +
		", CarreraAdscrito: " + this.CarreraAdscrito + ", CantidadProyectos" + this.CantidadProyectos;
				
	}
	guardar(){
		arrayDocentes.push(this);
		
	}
	actualizar(){
		for(i=0;i<arrayDocentes.length;i++){
			if(arrayDocentes[i].NoDocentes==this.NoDocentes){
				arrayDocentes[i]=this;
			}
		}
		
	}
	
	consultar(){
		for(i=0;i<arrayDocentes.length;i++){
			if(arrayDocentes[i].NoDocentes==this.NoDocentes){
				return arrayDocentes[i];
			}
		}
		return null;		
	}
	function validar(form){
    var cad=validarNoDocentes(form.NoDocentes.value);
    cad+=validarEscolaridad(form.Escolaridad.value);
    cad+=validarCarreraAdscrito(form.CarreraAdscrito.value);
    cad+=validarCantidadProyectos(form.CantidadProyectos.value);
    if(cad!=''){
        document.getElementById("notificaciones").innerHTML='<p>'+cad+'</p>';
        return false;
    }
    else{
       return true; 
    }
}
	function validarNoDocentes(cad){
		if(cad.length==0){
			return 'Debes informar el numero de tu Docente <br>';
		}else{
			return '';
		}
	}
	function validarEscolaridad(cad){
		if(cad.length==0){
			return 'Debes informar la escolaridad de tu Docente <br>';
		}else{
			return '';
		}
	}
	function validarCarreraAdscrito(cad){
		if(cad.length==0){
			return 'Debes informar la carrera de tu docente <br>';
		}else{
			return '';
		}
	}
	function validarCantidadProyectos(cad){
		if(cad.length==0){
			return 'Debes informar la cantidad de proyectos <br>';
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