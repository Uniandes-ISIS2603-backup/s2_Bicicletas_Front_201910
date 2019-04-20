import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Marca} from './marca';
import {MarcaDetail} from './marca-detail';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment.prod';

const API_URL = environment.apiURL;
const marcas = '/marcas';

/**
 * El proveedor de servicios relacionados con las marcas
 */
@Injectable()
export class MarcaService{

    /**
     * Constructor del servicio de la marca
     * @param http Cliente http para los requests
     */
    constructor(private http: HttpClient){}

    /***
     * Obtiene la lista de marcas
     */
    getMarcas(): Observable<Marca[]>{
        return this.http.get<Marca[]>(API_URL + marcas);
    }

    /**
     * Obtener una marca con el id especificado
     * @param marcaId Id de la marca a obtener
     */
    getMarcaDetail(marcaId): Observable<MarcaDetail>{
        return this.http.get<MarcaDetail>((API_URL + marcas + '/' + marcaId));
    }

    /**
     * Crea una marca
     * @param marca Marca a crear
     */
    createMarca(marca): Observable<MarcaDetail> {
        return this.http.post<MarcaDetail>(API_URL + marcas, marca);
    }

    /**
     * Actualiza una marca
     * @param marca Marca a actualizar
     */
    updateMarca(marca): Observable<MarcaDetail>{
        return this.http.put<MarcaDetail>(API_URL + marcas + '/' + marca.id, marca);
    }
}