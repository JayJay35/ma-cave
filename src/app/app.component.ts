import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: "AIzaSyCWx03aojf5HaLmrRg6sh4rA_tO6ssHeMg",
      authDomain: "ma-cave-f3f50.firebaseapp.com",
      databaseURL: "https://ma-cave-f3f50.firebaseio.com",
      projectId: "ma-cave-f3f50",
      storageBucket: "ma-cave-f3f50.appspot.com",
      messagingSenderId: "951449670443"
    };
    firebase.initializeApp(config);
  }

}
