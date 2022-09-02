import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.services';
import { Persona } from './persona.model';

@Injectable()

export class DataServices {
    constructor (private httpClient: HttpClient, private loginService: LoginService){}


    //Cargar Personas
    cargarPersonas():Observable<any>{
        const token = this.loginService.getIdToken(); 
        return this.httpClient.get('https://listadopersonas-317a8-default-rtdb.firebaseio.com/datos.json?auth=' + token);
    }

    //Guardar Personas
    guardarPersonas(personas: Persona[]){
        const token = this.loginService.getIdToken(); 
        this.httpClient.put('https://listadopersonas-317a8-default-rtdb.firebaseio.com/datos.json?auth=' + token, personas)
        .subscribe(
            response => console.log("resultado guardar Personas: " + response),
            error => console.log("Error al guadar Personas: " + error)
        )
    }

    // Modificar persona
    modificarPersona(indice:number, persona: Persona) {
        const token = this.loginService.getIdToken();
        let url: string;
        url ='https://listadopersonas-317a8-default-rtdb.firebaseio.com/datos/' + indice + '.json?auth=' + token;
        this.httpClient.put(url, persona).subscribe(
            response => console.log('resultado modificar persona' + response),
            error => console.log('hubo un error' + error)
        )
    }

    // eliminar registro

    eliminarPersona(index: number){
        const token = this.loginService.getIdToken();
        let url: string;
        url ='https://listadopersonas-317a8-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token;
        this.httpClient.delete(url).subscribe(
            response => console.log('resultado eliminar persona' + response),
            error => console.log('hubo un error al eliminar' + error)
        )
    }
}