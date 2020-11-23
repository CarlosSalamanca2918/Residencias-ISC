var arrayProyectos=[];
class Proyecto{
	constructor(Titulo,Estatus,FechaRegistro,FechaAceptacion,Contenido,Calificacion,idProyecto,NoDocente,idPeriodo,idAsesorExterno,idEmpresa){
		this.Titulo=Titulo;
		this.Estatus=Estatus;
		this.FechaRegistro=FechaRegistro;
		this.FechaAceptacion=FechaAceptacion;
		this.Contenido=Contenido;
		this.Calificacion=Calificacion;
		this.idProyecto=idProyecto;
		this.NoDocente=NoDocente;
		this.idPeriodo=idPeriodo;
		this.idAsesorExterno=idAsesorExterno;
		this.idEmpresa=idEmpresa;
	
	}
	toString(){
		return "Titulo: " + this.Titulo + ", Estatus: " + this.Estatus +
		", FechaRegistro: " + this.FechaRegistro + ", FechaAceptacion: " + this.FechaAceptacion + ", Contenido: " +
		this.Contenido + ", Calificacion: " + this.Calificacion + ", idProyecto: " + this.idProyecto + ", NoDocente: " +
		this.NoDocente + ", idPeriodo: " + this.idPeriodo + ", idAsesorExterno: " + this.idAsesorExterno + ", idEmpresa: " + this.idEmpresa;
				
	}
	guardar(){
		arrayProyectos.push(this);
		
	}
	actualizar(){
		for(i=0;i<arrayProyectos.length;i++){
			if(arrayProyectos[i].idProyecto==this.idProyecto){
				arrayProyectos[i]=this;
			}
		}
		
	}
	eliminar(){
		for(i=0;i<arrayProyectos.length;i++){
			if(arrayProyectos[i].idProyecto==this.idProyecto){
				arrayProyectos.splice(i,1);
			}
		}
	}
	consultar(){
		for(i=0;i<arrayProyectos.length;i++){
			if(arrayProyectos[i].idProyecto==this.idProyecto){
				return arrayProyectos[i];
			}
		}
		return null;		
	}
	function validar(form){
    var cad=validarTitulo(form.Titulo.value);
    cad+=validarEstatus(parseInt(form.Estatus.options[form.Estatus.options.radio].value));
    cad+=validarFechaRegistro(form.FechaRegistro.value);
    cad+=validarFechaAceptacion(form.FechaAceptacion.value);
    cad+=validarContenido(parseInt(form.Contenido.value));
    cad+=validarCalificacion(parseInt(form.Calificacion.value));
    cad+=validarIdProyecto(form.idProyecto.value);
    cad+=validarNoDocente(form.NoDocente.value);
    cad+=validarIdPeriodo(form.idPeriodo.value);
    cad+=validarIdAsesorExterno(form.idAsesorExterno.value);
    cad+=validarIdEmpresa(form.idEmpresa.value);
    if(cad!=''){
        document.getElementById("notificaciones").innerHTML='<p>'+cad+'</p>';
        return false;
    }
    else{
       return true; 
    }
}
	function validarTitulo(cad){
		if(cad.length==0){
			return 'Debes informar el titulo del proyecto <br>';
		}else{
			return '';
		}
	}
	function validarEstatus(valor){
		if(valor==0){
			return 'Debes elegir un estatus<br>';
		}
		return '';
	}
	function validarFechaRegistro(cad){
		var patron=/d{2}-\d{2}-\d{4}/;
		if(patron.test(cad)){
			return '';
		}
		else{
			return "La fecha de registro no tiene el formato correcto. <br>";
		}
	}
	function validarFechaAceptacion(cad){
		var patron=/d{2}-\d{2}-\d{4}/;
		if(patron.test(cad)){
			return '';
		}
		else{
			return "La fecha de aceptacion no tiene el formato correcto. <br>";
		}
	}
	function validarContenido(cad){
		if(cad.length==0){
			return 'Debes informar el Contenido del proyecto <br>';
		}else{
			return '';
		}
	}
	function validarCalificacion(valor){
		if(valor>=0 && valor<=100){
			return '';
		}else{
			return "Debes registrar una Calificacion valida"
		}
	}
	function validarIdProyecto(cad){
		if(cad.length==0){
			return 'Debes informar el ID del Proyecto <br>';
		}else{
			return '';
		}
	}
	function validarNoDocente(cad){
		if(cad.length==0){
			return 'Debes informar el Numero del docente <br>';
		}else{
			return '';
		}
	}
	function validarIdPeriodo(cad){
		if(cad.length==0){
			return 'Debes informar el ID del periodo <br>';
		}else{
			return '';
		}
	}
	function validarIdAsesorExterno(cad){
		if(cad.length==0){
			return 'Debes informar el ID del Asesor Externo <br>';
		}else{
			return '';
		}
	}
	function validarIdEmpresa(cad){
		if(cad.length==0){
			return 'Debes informar el ID de la Empresa <br>';
		}else{
			return '';
		}
	}
}