import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { AuthService } from '../services/auth.service';
import {User} from "../model/user.model";


@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
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
            .subscribe((user) =>
            {
                this.router.navigate([this.returnUrl]);
            });
    }

}
