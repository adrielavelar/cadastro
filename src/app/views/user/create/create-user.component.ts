import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import axios from 'axios';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgxMaskDirective],
  providers: [provideNgxMask({})],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private _snackbar: MatSnackBar) { }
  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    email: new FormControl(''),
    cpf: new FormControl(''),
    address: new FormControl(''),
    state: new FormControl(''),
    cep: new FormControl(''),
    city: new FormControl(''),
  });
  submitted = false;

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        cpf: ['', Validators.required],
        address: ['', Validators.required],
        state: ['', Validators.required],
        cep: ['', Validators.required],
        city: ['', Validators.required],
      }
    );
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.save();
  }

  openSnackBar(message: string, type: string) {
    if (type === 'error') {
      this._snackbar.open(message, 'fechar', {
        duration: 5000,
        panelClass: ['red-snackbar']
      });
    }
    else {
      this._snackbar.open(message, 'fechar', {
        duration: 5000,
        panelClass: ['blue-snackbar']
      });
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  async save() {
    axios.post("https://65b94ecfb71048505a8aa165.mockapi.io/api/user", this.form.value)
      .then((response) => {
        this.openSnackBar('Sucesso', 'sucesso');
        this.form.reset();
      })
      .catch((error) => {
        this.openSnackBar(error, 'error');
      })
  }
}

