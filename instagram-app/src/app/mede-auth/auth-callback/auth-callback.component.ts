import { Component, OnInit } from '@angular/core';
import { MedeAuthService } from '../mede-auth.service';

@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss']
})
export class AuthCallbackComponent implements OnInit {

  constructor(private auth: MedeAuthService) { }

  ngOnInit(): void {
    console.log("Mede Auth callback Loaded");
    this.auth.handleLoginCallback();
  }

}
