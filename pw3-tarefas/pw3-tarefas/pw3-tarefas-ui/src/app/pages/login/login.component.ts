import { Component, OnInit, inject } from '@angular/core';
import { Task } from '../../model/task';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
imports:[CommonModule, ReactiveFormsModule],

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
 exportclassLoginComponent{
  privateformBuilder= inject(FormBuilder);
  privateloginService = inject(LoginService);
  privaterouter= inject(Router);
  loginForm!: FormGroup;
  errorMessage:string= '';
  constructor(){
  this.loginForm =this.formBuilder.group({
  username:['',[Validators.required]],
  password:['',[Validators.required]]
   });
  }
 }

  login(){
 if (this.loginForm.valid) {
 constusername= this.loginForm.value.username;
 constpassword= this.loginForm.value.password;
 this.loginService.autenticar(username, password).subscribe({
 next: (value)=> {
 this.router.navigateByUrl('/')
 this.loginForm.reset();
 },
 error:(err)=> {
 console.log('Problema na autenticação',err)
 },
 })
 }
 }