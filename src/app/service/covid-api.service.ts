import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Order } from '../interfaces/order.interface';
// import { Position } from '../interfaces/position.interface';
// import { WalletHistory } from '../interfaces/wallet-history.interface';
// import { OrderBook } from '../interfaces/order-book.interface';
// import { Candle } from '../interfaces/candle.interface';

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {

  private readonly apiUrl = 'http://localhost:3000'

  constructor(private _httpClient: HttpClient) { }

  getCovidData(data: string): Observable<any[]> {
    let url = `${this.apiUrl}/covid`
    return this._httpClient.get<any[]>(`${url}/${data}`);
  }

}