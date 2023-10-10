import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

import {RegisterRequestInterface} from 'src/app/auth/types/registerRequest.interface'
import {UserInterface} from 'src/app/shared/types/user.interface'
import {environment} from 'src/environments/environment'
import {TokenRequestInterface} from "../types/tokenRequest.interface";
import {TokenResponseInterface} from "../types/tokenResponseInterface";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<UserInterface> {
    const url = environment.apiUrl + '/users'
    return this.http.post<UserInterface>(url, data)
  }


  getCurrentUser(): Observable<UserInterface> {
    const url = environment.apiUrl + '/users/me'
    return this.http.get<UserInterface>(url)
  }

  login(data: TokenRequestInterface): Observable<TokenResponseInterface> {
    const url = environment.apiUrl + '/token'
    let fd = new FormData()
    fd.append('username', data.username)
    fd.append('password', data.password)
    return this.http.post<TokenResponseInterface>(url, fd)
  }
}
