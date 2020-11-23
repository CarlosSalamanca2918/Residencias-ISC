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
	eliminar(){
		for(i=0;i<arrayDocentes.length;i++){
			if(arrayDocentes[i].NoDocentes==this.NoDocentes){
				arrayDocentes.splice(i,1);
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
	
}