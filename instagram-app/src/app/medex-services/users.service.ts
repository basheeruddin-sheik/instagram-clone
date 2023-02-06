import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  checkUserAvailability(username: string) {
    return this.http.get(environment.url + environment.users.checkUsernameAvailability + username).pipe(
      map((res: any) => res.isUserNameAvailable)
    )
  }

  createUser(user: User) {
    return this.http.post(environment.url + environment.users.createUser, user).pipe(
      map((res: any) => res.user)
    )
  }
}
