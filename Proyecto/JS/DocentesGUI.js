var op="";
function mostrarDiv(NoDocente){
	document.getElementById(NoDocente).style.display="block";
}
function ocultarDiv(NoDocente){
	document.getElementById(NoDocente).style.display="none";
}
function inicializarDivs(){
	mostrarDiv("ListadoGeneral");
	ocultarDiv("DatosIndividuales");
	consultaGeneral();
}
function nuevo(){
	op="c";
	document.getElementById("Titulo").innerHTML="<h1> Registro de Docentes</h1>";
	ocultarDiv("ListadoGeneral");
	reset();
	mostrarDiv("DatosIndividuales");
}
function editar(NoDocente){
	op="u";
	document.getElementById("titulo").innerHTML="<h1> Edición de Docentes </h1>";
	ocultarDiv("ListadoGeneral");
	reset();
	var obj=new Docente(NoDocente,"","","");
	var obj2=obj.consultar();
	document.getElementById("NoDocente").value=obj2.NoDocente;
	document.getElementById("Escolaridad").value=obj2.Escolaridad;
	document.getElementById("CarreraAdscrito").value=obj2.CarreraAdscrito;
	document.getElementById("CantidadProyectos").value=obj2.CantidadProyectos;
	mostrarDiv("DatosIndividuales")
}
function realizarOperacion(){
	var obj;
	switch(op){
		case "c":
			obj=new Docente(
				document.getElementById("NoDocente").value,
				document.getElementById("Escolaridad").value,
				document.getElementById("CarreraAdscrito").value,
				document.getElementById("CantidadProyectos").value);
				obj.guardar();
				inicializarDivs();
				break;
		case "u":
				document.getElementById("NoDocente").value,
				document.getElementById("Escolaridad").value,
				document.getElementById("CarreraAdscrito").value,
				document.getElementById("CantidadProyectos").value);
				obj.actualizar();
				inicializarDivs();
				break;
	}
}
function consultaGeneral(){
	var table=document.getElementById("datos");
	eliminarTabla();
	for(i=0;i<arrayDocentes.length;i++){
		var tr=document.createElement("tr");
		var objeto=arrayDocentes[i];
		for(p in objeto){
			var td=document.createElement("td");
			var txt=document.createTextNode(objeto[p]);
			td.appendChild(txt);
			tr.appendChild(td);
		}
		var link=crearLink(arrayDocentes[i].NoDocente,"editar");
		var td=document.createElement("td");
		td.appendChild(link);
		tr.appendChild(td);
		link=crearLink(arrayDocentes[i].NoDocente,"eliminar");
		td.document.createElement("td");
		td.appendChild(link);
		tr.appendChild(td);
		table.appendChild(tr);
	}
	
}
function crearLink(NoDocente,operacion){
	var link=document.createElement("a");
	var img=document.createElement("img");
	img.setAttribute("src","../Imagenes/" + operacion + ".png");
	link.appendChild(img);
	link.setAttribute("href","javascript: "+ operacion+"("+NoDocente+")");
	return link;
}
function cancelar(){
	inicializarDivs();
}
function eliminarTabla(){
	var table=document.getElementById("datos");
	for(i=table.rows.length-1;i>0;i--){
		table.removeChild(table.rows[i])
	}
}
function reset(){
	document.getElementById("NoDocente").value="";
	document.getElementById("Escolaridad").value="";
	document.getElementById("CarreraAdscrito").value="";
	document.getElementById("CantidadProyectos").value="";
}