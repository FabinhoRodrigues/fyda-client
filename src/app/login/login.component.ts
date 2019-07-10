import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { UsuarioForm } from './usuarioForm';
import { getLocaleDayPeriods } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

usuario: Array<any>;

private usuarioForm : UsuarioForm = new UsuarioForm();


  constructor(private loginService : LoginService) { }

  ngOnInit() {
  this.listar();
  }
    
  logar(){
    
    // console.log(this.usuarioForm);
    // if(this.usuarioForm.email ===  && this.usuarioForm.senha){

    
  }

  listar(){
    this.loginService.listar()
    .subscribe(dados => this.usuario = dados);
   
  }

}
