import { Component, NgZone, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/Services/Auth.service';
import { MatDialogRef, MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
 
 

  constructor(private authservice:AuthService , private router : Router ,private ngZone : NgZone, private dialog: MatDialog) { }
 Google():void{
  this.authservice.doGoogleLogin().then(()=>{this.suceessRedirect()})//dogoogle login serveur prédéfinis
  .catch(error=>console.log("error"))//authservice est un service
 }
  suceessRedirect() {
   this.ngZone.run(()=> //ngzone mesh traj3ou ypointi 3el app
   this.router.navigate(['/members']))
  }
  ngOnInit(): void {
  }
  handleSignUp(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width="550px";
    this.dialog.open(SignupComponent, dialogConfig)
    //this.router.navigate(['/signup'])
  }

  onLoginButtonClicked(email: string, password: string) {
    this.authservice.login(email, password).subscribe((res: HttpResponse<any>) => {
      if (res.status === 200) {
        // we have logged in successfully
        this.router.navigate(['/dashboard']);
      }
      console.log(res);
      
    });

  }


}
