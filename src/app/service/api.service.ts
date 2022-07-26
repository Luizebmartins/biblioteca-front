import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  baseUri:string = 'https://sistema-biblioteca-production.up.railway.app';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  
  constructor(private http: HttpClient) { }

  // ----- USER API ------

  login(data: any): Observable<any> {
    let url = `${this.baseUri}/funcionarios/login/`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  
  criarFuncionario(data: any): Observable<any> {
    let url = `${this.baseUri}/funcionarios`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  criarAssociado(data: any): Observable<any> {
    let url = `${this.baseUri}/associados`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  cadastrarPublicacao(data: any): Observable<any> {
    let url = `${this.baseUri}/publicacoes`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  cadastrarExemplar(data: any): Observable<any> {
    let url = `${this.baseUri}/exemplares`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  buscarExemplarPorIsbn(isbn: string): Observable<any> {
    let url = `${this.baseUri}/exemplares/${isbn}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.errorHandler)
    )
  }
  
  buscarExemplaresDisponiveis(isbn: string): Observable<any> {
    let url = `${this.baseUri}/exemplaresDisponiveis/${isbn}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.errorHandler)
    )
  }

  cadastrarEmprestimo(data: any): Observable<any> {
    let url = `${this.baseUri}/emprestimos`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  devolverLivro(data: any): Observable<any> {
    let url = `${this.baseUri}/devolverExemplar`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  buscarEmprestimosAtrasados(): Observable<any> {
    let url = `${this.baseUri}/emprestimosAtrasados`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.errorHandler)
    )
  }

  cadastrarReserva(data: any): Observable<any> {
    let url = `${this.baseUri}/reservas`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  buscarReservasPorIsbn(isbn: string): Observable<any> {
    let url = `${this.baseUri}/reservas/${isbn}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.errorHandler)
    )
  }

  anularReserva(data: any): Observable<any> {
    let url = `${this.baseUri}/anularReserva`;
    return this.http.put(url, data,  {responseType: 'text'})
      .pipe(
        catchError(this.errorHandler)
      )
  }

  
  buscarAssociados(): Observable<any> {
    let url = `${this.baseUri}/associados`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.errorHandler)
    )
  }

  buscarPublicacoes(): Observable<any> {
    let url = `${this.baseUri}/publicacoes`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.errorHandler)
    )
  }


  errorHandler(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}