import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { filter, map, Observable, tap } from "rxjs";
import { ECategoriesType, IAukro, IAukroCategories, IAukroItems } from "../interfaces/aukro-items.interface";

@Injectable({
  providedIn: 'root'
})
export class JsonFetchService {

    DATA_URL = 'https://aukro.cz/backend/api/homepage';

    constructor(private http: HttpClient) {
    }

    // respectively to json already created - didnt check for undefined values

    public getImagesList(): Observable<IAukroItems[]> {
         return this.http.get("https://aukro.cz/backend/api/homepage").pipe(map((res) => (res as  IAukro).mainPart), map((content) => {
            return (content as IAukroCategories[]).filter(item =>  item.type === ECategoriesType.CrazyPricesItems)[0];
         }), map((data) => 
            data.content.items
         ));
     }
}
