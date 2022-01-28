import { Egreso } from "./egreso.model";

export class EgresoServicio{
    egresos:Egreso[]=[
      new Egreso("renta", 900),
      new Egreso("ropa", 400)
    ];

    eliminar(egreso:Egreso){
      const indice:number= this.egresos.indexOf(egreso);
      this.egresos.splice(indice,1);
    }
}