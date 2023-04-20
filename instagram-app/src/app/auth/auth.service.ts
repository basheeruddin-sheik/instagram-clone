import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject, tap } from 'rxjs';
import { UsersService } from '../medex-services/users.service';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	private isLoggedInSource = new Subject();
	isLoggedIn = this.isLoggedInSource.asObservable();

	onAuthFailureUrl = "/auth";
	accessToken$ = new BehaviorSubject<string>(""); // ?

	constructor(
		private usersService: UsersService
	) { }

	checkToken(): Observable<boolean> {
		const token = localStorage.getItem('_auth');
		if (!token) {
			return of(false);
		}

		return this.usersService.checkToken(token).pipe(
			tap((res: any) => {
				if (res.isValid) return of(true)
				else {
					this.removeToken();
					return of(false);
				}
			}),
		)
	}


	getToken() {
		return localStorage.getItem('_auth');
	}

	setToken(token: string) {
		this.accessToken$.next(token);
		localStorage.setItem('_auth', token);
		return true;
	}

	removeToken() {
		this.accessToken$.next("");
		localStorage.clear();
		// if (!this.checkToken()) {
		// 	return true;
		// }
		// return false;
	}

	setUsername(username: string) {
		localStorage.setItem('username', username);
		return true;
	}

	getUsername() {
		return localStorage.getItem('username');
	}
}
