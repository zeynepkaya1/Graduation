import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginFormGroup!: FormGroup;
  registerFormGroup!: FormGroup;

  // form: FormGroup = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  // });

  // submit() {
  //   if (this.form.valid) {
  //     this.submitEM.emit(this.form.value);
  //   }
  // }
  // @Input()
  // error!: string | null;

  // @Output() submitEM = new EventEmitter();

  // isSignedIn= false;

  constructor(
    private firebaseservice: FirebaseService,
    private snackBar: MatSnackBar,
    private router: Router

  ) {
    this.loginFormGroup = new FormGroup(
      {
        email: new FormControl(""),
        password: new FormControl("")

      },
      Validators.required
    );

    this.registerFormGroup = new FormGroup(
      {
        name: new FormControl(""),
        surname: new FormControl(""),
        email: new FormControl("", Validators.email),
        password: new FormControl("", Validators.minLength(6))
      },
      Validators.required
    );
  }

  ngOnInit(): void {
  }

  login() {
    if (this.loginFormGroup.valid) {
      this.firebaseservice.login(
        this.loginFormGroup.get("email")?.value,
        this.loginFormGroup.get("password")?.value
      ).then(result => {
        if (result) {
          //add nagivation
          this.router.navigate([""]);
        }
        else {
          this.snackBar.open("Unable to login", "close", { duration: 4000 });
        }
      }).catch(err => {
        this.snackBar.open("Unable to login", "close", { duration: 4000 });
      });
    }
  }

  async register() {
    if (this.registerFormGroup.valid) {
      this.firebaseservice.signUp(
        this.registerFormGroup.get("email")?.value,
        this.registerFormGroup.get("password")?.value,
        this.registerFormGroup.get("name")?.value,
        this.registerFormGroup.get("surname")?.value,
      ).then(result => {
        this.router.navigate([""]);
      }).catch(err => {
        this.snackBar.open("Unable to regiser", "close", { duration: 4000 });
      });
    }
  }

}
