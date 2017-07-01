import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AngularFireAuth]
})
export class AppComponent implements OnInit {
  // user: Observable<firebase.User>;
  displayName;
  photoURL;

  constructor(
    public afAuth: AngularFireAuth
  ) {
    // this.user = afAuth.authState;

    afAuth.authState.subscribe(authState => {
      if (!authState) {
        console.log('NOT LOGGED IN');
      } else {
        this.displayName = authState.displayName;
        this.photoURL = authState.photoURL;
      }
    });
  }

  ngOnInit() { }


  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(authState => {
        console.log('authState', authState);
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
