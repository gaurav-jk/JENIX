import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { IonicModule } from '@ionic/angular';
// import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {
  // email: string = '';
  // password: string = '';
  myAccountForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }
  // constructor(private http: HttpClient,private fb: FormBuilder, private router: Router) { }
  ngOnInit() {
    this.myAccountForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onSubmit() {
    if (this.myAccountForm.valid) {
      console.log(this.myAccountForm.value);
      this.router.navigate(['/home']);
    }
  }
  goToLogin() {
  
    this.router.navigate(['/home']);
  }
  // login() {
  //   let credentials = {
  //     email: this.email,
  //     password: this.password
  //   };
  //   this.http.post('http://localhost:3000/api/auth/signin', credentials)
  //     .subscribe({
  //       next: (res: any) => {
  //         console.log(res);
  //         localStorage.setItem('User', JSON.stringify(res));
  //         this.router.navigateByUrl('', { replaceUrl: true });
  //       },
  //      // error: (e) => console.error(e),
  //       complete: () => console.info('complete') 
  //   }
  //   )
    
  //   console.log(credentials);
  // }
}