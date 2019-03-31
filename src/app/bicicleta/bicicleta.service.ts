
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Bicicleta} from './bicicleta';

const API_URL = "../../assets/";
const bicicletas = '/bicicletas.json';


/**
* The service provider for everything related to bikes
*/
@Injectable()
export class BicicletaService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

    /**
    * Returns the Observable object containing the list of books retrieved from the API
    * @returns The list of bikes in real time
    */
    getBicicletas(): Observable<Bicicleta[]> {
        return this.http.get<Bicicleta[]>(API_URL + bicicletas);
    }
}