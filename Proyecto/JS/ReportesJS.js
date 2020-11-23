var arrayReportes=[];
class Reportes{
	constructor(idReportes,CalificacionExterno,CalificacionInterno,Promedio,FechaEvaluacion,Evidencia,idReporteParcial){
		this.idReportes=idReportes;
		this.CalificacionExterno=CalificacionExterno;
		this.CalificacionInterno=CalificacionInterno;
		this.Promedio=Promedio;
		this.FechaEvaluacion=FechaEvaluacion;
		this.Evidencia=Evidencia;
		this.idReporteParcial=idReporteParcial;
	
	}
	toString(){
		return "idReportes: " + this.idReportes + ", CalificacionExterno: " + this.CalificacionExterno +
		", CalificacionInterno: " + this.CalificacionInterno + ", Promedio: " + this.Promedio + ", FechaEvaluacion: " +
		this.FechaEvaluacion + ", Evidencia: " + this.Evidencia + ", idReporteParcial: " + this.idReporteParcial;
				
	}
	guardar(){
		arrayReportes.push(this);
		
	}
	actualizar(){
		for(i=0;i<arrayReportes.length;i++){
			if(arrayReportes[i].idReportes==this.idReportes){
				arrayReportes[i]=this;
			}
		}
		
	}
	eliminar(){
		for(i=0;i<arrayReportes.length;i++){
			if(arrayReportes[i].idReportes==this.idReportes){
				arrayReportes.splice(i,1);
			}
		}
	}
	consultar(){
		for(i=0;i<arrayReportes.length;i++){
			if(arrayReportes[i].idReportes==this.idReportes){
				return arrayReportes[i];
			}
		}
		return null;		
	}
	function validar(form){
    var cad=validarIdReportes(form.idReportes.value);
    cad+=validarCalificacionExterno(parent(form.Semestre.value));
    cad+=validarCalificacionInterno(parseInt(form.Promedio.value));
    cad+=validarPromedio(parseInt(form.Creditos.value));
    cad+=validarFechaEvaluacion(form.FechaEvaluacion.value);
    cad+=validarEvidencia(form.Evidencia.value);
	cad+=validarIdReporteParcial(form.idReporteParcial.value);
    if(cad!=''){
        document.getElementById("notificaciones").innerHTML='<p>'+cad+'</p>';
        return false;
    }
    else{
       return true; 
    }
}
	function validarIdReportes(cad){
		if(cad.length==0){
			return 'Debes informar el ID del Reporte de Evaluacion <br>';
		}else{
			return '';
		}
	}
	function validarCalificacionExterno(valor){
		if(valor>=0 && valor<=100){
			return '';
		}else{
			return "Debes registrar una calificacion valido"
		}
	}
	function validarCalificacionInterno(valor){
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
	function validarEvidencia(cad){
		if(cad.length==0){
			return 'Debes informar la evidencia del reporte <br>';
		}else{
			return '';
		}
	}
	function validarIdReporteParcial(cad){
		if(cad.length==0){
			return 'Debes informar el ID del Reporte parcial <br>';
		}else{
			return '';
		}
	}
	
}