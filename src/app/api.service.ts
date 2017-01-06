import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class ApiService {
  apiUrl='http://erikagtierrez.hemael.com';

  constructor(private http: Http) { }

  getUsuarios(){
    return this.http.get(this.apiUrl + '/usuarios').map(
			(response: Response) => response.json()
		);
  }

  getUsuarioEmail(correo:string){
  return this.http.get(this.apiUrl + '/usuarios/' + correo).map(
			(response: Response) => response.json()
		);
  }

  getUsuarioPuntos(correo:string){
  return this.http.get(this.apiUrl + '/usuarios/' + correo).map(
			(response: Response) => response.json()
		);
  }

  createUser(cedula:string,nombre:string,apellido:string,direccion:string,telefono:string,correo:string,contrasena:string){
    let headers = new Headers({ 'Content-Type': 'application/json' })
		let user = {
			"cedula": cedula,
			"nombre": nombre,
      "apellido":apellido,
			"direccion": direccion,
			"telefono": telefono,
			"correo": correo,
      "contrasena": contrasena
		}
		console.log((user));
		return this.http.post(this.apiUrl + '/usuarios', JSON.stringify(user), { headers: headers }).map(
			(data: Response) => data.json()
		);
  }

  updateUser(cedula:string,nombre:string,apellido:string,direccion:string,telefono:string,correo:string,contrasena:string){
    let headers = new Headers({ 'Content-Type': 'text/plain' })
		let user = {
			"cedula": cedula,
			"nombre": nombre,
      "apellido":apellido,
			"direccion": direccion,
			"telefono": telefono,
			"correo": correo,
      "contrasena":contrasena
    	}
		return this.http.put(this.apiUrl + '/usuarios', JSON.stringify(user), { headers: headers }).map(
			(data: Response) => data.json()
		);
  }  

    deleteUser(correo:string){
		return this.http.delete(this.apiUrl + '/usuarios/'+correo).map(
			(data: Response) => data.json()
		);
  }  

  sendEmail(nombre:string,mensaje:string,correo:string){
    let headers = new Headers({ 'Content-Type': 'application/json' })    
    let email = {
			"nombre": nombre,
			"correo": correo,
      "mensaje":mensaje
		}
    return this.http.get(this.apiUrl + '/contactanos' + JSON.stringify(email), { headers: headers }).map(
        (response: Response) => response.json()
      );
    }


}
