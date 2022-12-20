import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { User } from '../models/user';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
    loading = false;
    loginForm: FormGroup;
    submitted = false;  
    returnUrl: string;
    ctlUsername: FormControl;
    ctlPassword: FormControl;
    hide: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService
    ) {
        // redirect to home if already logged in
        if (this.authService.getUser) {
            this.router.navigate(['/user']);
        }
    }

    ngOnInit() {
    
        this.ctlUsername = this.formBuilder.control('', Validators.required);
        this.ctlPassword = this.formBuilder.control('', Validators.required);
        this.loginForm = this.formBuilder.group({
            username: this.ctlUsername,
            password: this.ctlPassword
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/user';
    }

    get form() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.loginForm.invalid) 
            return;

        const user = new User();
        user.username = this.form['username'].value;
        user.password = this.form['password'].value;

        this.authService.login(user)
            .subscribe({
                next: () => this.router.navigate([this.returnUrl]),
                error: (error) => {
                    this.loginForm.get("username").setErrors({ custom: error.error.description });
                    this.loading = false;
                },
                //complete: () => console.log('request terminated')
            });

            /*
            error => {
                    const errors = error.error.errors;
                    for (let field in errors) {
                        this.loginForm.get(field.toLowerCase()).setErrors({ custom: errors[field] })
                    }
                    this.loading = false;
            */

    }

}
