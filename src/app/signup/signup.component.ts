import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MemberService } from 'src/Services/member.service';
import { SnackBarService } from 'src/Services/snack-bar.service';
import {MatToolbarModule} from '@angular/material/toolbar'; 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

  password = true; 
  confirmPassword =true;
  signupForm:any = FormGroup;
  responseMessage:any ;

  constructor(private formBuilder : FormBuilder, private router:Router, private snackbarService: SnackBarService,
     private memberService: MemberService,
     private ngxService : NgxUiLoaderService,
     public dialog: MatDialogRef<SignupComponent>) { }

  ngOnInit(): void {

    this.signupForm = this.formBuilder.group({
      cin: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      type: ['', [Validators.required]],
      cv: ['', [Validators.required]],
      photo: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['',[Validators.required]]
    })
  }

  validateSubmit(){
    if(this.signupForm.controls['password'].value != this.signupForm.controls['confirmPassword'].value ){
      return true;
    }else{
      return false;
    }
  }
  

  handleSubmit(){
    this.ngxService.start();
    this.memberService.saveMember(this.signupForm.value).then(
      (response)=>{
        this.ngxService.stop();
        this.snackbarService.openSnackBar("Member Added Successfully", "Success");
        this.dialog.close();
      },
      (error)=>{
        this.ngxService.stop();
        this.snackbarService.openSnackBar("Error while adding Member", "Error");
        this.dialog.close();
      }
    )
  }

}
