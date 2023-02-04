import { Component, OnInit } from '@angular/core';
import { MedeAuthService } from './mede-auth.service';

@Component({
  selector: 'app-mede-auth',
  templateUrl: './mede-auth.component.html',
  styleUrls: ['./mede-auth.component.scss']
})
export class MedeAuthComponent implements OnInit {

  constructor(
    public medeAuthService: MedeAuthService
  ) { }

  ngOnInit(): void {
    console.log("Mede Auth Loaded");
  }

}
