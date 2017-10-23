import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  name: any;
  state: string;

  constructor(public af: AngularFireAuth, private router: Router) {

    this.af.authState.subscribe(auth => {
      if (auth) {
        this.name = auth;
      }
    });

  }

  logout() {
    this.af.auth.signOut();
  }

  ngOnInit() {
  }

}
