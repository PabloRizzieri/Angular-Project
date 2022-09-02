import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
// import * as firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Listado de Personas';
  constructor(private loginService: LoginService){}


  ngOnInit(): void{
    firebase.initializeApp({
      apiKey: "AIzaSyBKvINHvD38fyLT0HD-SEbE0d77Z_6jPm4",
      authDomain: "listadopersonas-317a8.firebaseapp.com",
    })
  }

  isAutenticado(){
    return this.loginService.isAutenticado();
  }

  salir(){
    this.loginService.logout()
  }
}
