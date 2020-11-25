var arrayReportesPa=[];
class ReportesPa{
	constructor(idReportePa,Nombre,NoReporte,FechaEvaluacion,idPeriodo){
		this.idReportePa=idReportePa;
		this.Nombre=Nombre;
		this.NoReporte=NoReporte;
		this.FechaEvaluacion=FechaEvaluacion;
		this.idPeriodo=idPeriodo;
	
	}
	toString(){
		return "idReportePa: " + this.idReportePa + ", Nombre: " + this.Nombre +
		", NoReporte: " + this.NoReporte + ", FechaEvaluacion: " + this.FechaEvaluacion  + ", idPeriodo: " + this.idPeriodo;			
	}
	guardar(){
		arrayReportesPa.push(this);
		
	}
	actualizar(){
		for(i=0;i<arrayReportesPa.length;i++){
			if(arrayReportesPa[i].idReportePa==this.idReportePa){
				arrayReportesPa[i]=this;
			}
		}
		
	}
	
	consultar(){
		for(i=0;i<arrayReportesPa.length;i++){
			if(arrayReportesPa[i].idReportePa==this.idReportesPa){
				return arrayReportesPa[i];
			}
		}
		return null;		
	}
	function validar(form){
    var cad=validarIdReportesPa(form.idReportesPa.value);
    cad+=validarNombre(parent(form.Nombre.value));
    cad+=validarNoReporte(parseInt(form.NoReporte.value));
    cad+=validarFechaEvaluacion(form.FechaEvaluacion.value);
	cad+=validarIdPeriodo(form.idPeriodo.value);
    if(cad!=''){
        document.getElementById("notificaciones").innerHTML='<p>'+cad+'</p>';
        return false;
    }
    else{
       return true; 
    }
}
	function validarIdReportesPa(cad){
		if(cad.length==0){
			return 'Debes informar el ID del Reporte Parcial <br>';
		}else{
			return '';
		}
	}
	function validarNombre(cad){
		if(cad.length==0){
			return 'Debes informar el INombre <br>';
		}else{
			return '';
		}
	}
	function validarNoReporte(valor){
		if(valor>=0 && valor<=100){
			return '';
		}else{
			return "Debes registrar una calificacion valido"
		}
	}
	function validarFechaEvaluacion(cad){
		var patron=/d{2}-\d{2}-\d{4}/;
		if(patron.test(cad)){
			return '';
		}
		else{
			return "La fecha no tiene el formato correcto. <br>";
		}
	}

	function validarIdPeriodo(cad){
		if(cad.length==0){
			return 'Debes informar el ID del Reporte parcial <br>';
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