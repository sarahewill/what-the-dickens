import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../../services/users/users.service';
import { first } from 'rxjs/operators';
import { MessageService } from '../../services/messages/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: null,
      lastName: null,
      userName: null,
      email: null,
    });
  }

  onSubmit(): void {
    if (!this.registerForm.valid) {
      return;
    } else {
      this.usersService
        .register(this.registerForm.value)
        .pipe(first())
        .subscribe(
          (data) => {
            this.messageService.add('User Registered');
            this.router.navigate(['home']);
          },
          (error) => {
            this.messageService.add('Error');
          }
        );
    }
  }
}
