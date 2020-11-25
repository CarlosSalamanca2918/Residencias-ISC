var arrayPeriodosRegistro=[];
class periodosRegistro{
	constructor(idPeriodo,Nombre,FechaInicio,FechaFin){
		this.idPeriodo=idPeriodo;
		this.Nombre=Nombre;
		this.FechaInicio=FechaInicio;
		this.FechaFin=FechaFin;	
	}
	toString(){
		return "idPeriodo: " + this.idPeriodo + ", Nombre: " + this.Nombre +
		", FechaInicio: " + this.FechaInicio + ", FechaFin: " + this.FechaFin;
				
	}
	guardar(){
		arrayPeriodosRegistro.push(this);
		
	}
	actualizar(){
		for(i=0;i<arrayPeriodosRegistro.length;i++){
			if(arrayPeriodosRegistro[i].idPeriodo==this.idPeriodo){
				arrayPeriodosRegistro[i]=this;
			}
		}
		
	}
	
	consultar(){
		for(i=0;i<arrayPeriodosRegistro.length;i++){
			if(arrayPeriodosRegistro[i].idPeriodo==this.idPeriodo){
				return arrayPeriodosRegistro[i];
			}
		}
		return null;		
	}
	function validar(form){
    var cad=validarIdPeriodo(form.idPeriodo.value);
    cad+=validarNombre(form.Nombre.value);
    cad+=validarFechaInicio(form.FechaInicio.value);
    cad+=validarFechaFin(form.FechaFin.value);
    if(cad!=''){
        document.getElementById("notificaciones").innerHTML='<p>'+cad+'</p>';
        return false;
    }
    else{
       return true; 
    }
}
	function validarIdPeriodo(cad){
		if(cad.length==0){
			return 'Debes informar el ID del Periodo <br>';
		}else{
			return '';
		}
	}
	function validarNombre(cad){
		if(cad.length==0){
			return 'Debes informar el nombre <br>';
		}else{
			return '';
		}
	}
	function validarFechaInicio(cad){
		var patron=/d{2}-\d{2}-\d{4}/;
		if(patron.test(cad)){
			return '';
		}
		else{
			return "La fecha no tiene el formato correcto. <br>";
		}
	}
	function validarFechaFin(cad){
		var patron=/d{2}-\d{2}-\d{4}/;
		if(patron.test(cad)){
			return '';
		}
		else{
			return "La fecha no tiene el formato correcto. <br>";
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