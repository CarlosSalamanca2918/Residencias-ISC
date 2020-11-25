function cargarOpcion(){
	var ajax=new XMLHttpRequest();
	ajax.onreadystatechange=function(){
		if (this.status==200 && this.readyState==4){
			alert(this.responseText);
		}
	};
	ajax.open("Get","opcion.txt",true);
	ajax.send();
}
function Registrar(){
	var idem = $("#idEmpresa").value;
	var nom = $("#Nombre").value;
	var rfc = $("#RFC").value;
	var gir = $("#Giro").value;
	var dir = $("#Direccion").value;
	var tel = $("#Telefono").value;
	$.ajax({
		type: "POST",
		dataType: "html",
		url: "altaEmpresa.html",
		data: "idEmpresa= "+idem+", Nombre= "+nom+", RFC= "+rfc+", Giro= "+gir+", Direccion= "+dir+", Telefono"+tel,
		success: function(resp){
					$("#Respuesta").html(resp);
		}
	});
}