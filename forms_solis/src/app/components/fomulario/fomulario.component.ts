import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgModel, FormBuilder, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fomulario',
  templateUrl: './fomulario.component.html',
  styleUrls: ['./fomulario.component.css']
})
export class FomularioComponent implements OnInit {

  course_name: string = "Angular";
  selection: any = {};

  genders: string[] = ['male', 'female', 'other'];

  fg: FormGroup = this.fb.group({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    age: new FormControl('', [Validators.min(10), Validators.required, Validators.max(100)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl(this.selection, [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    validated: new FormControl('', [Validators.requiredTrue])})

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  generaListaErrores() {
    return [
      this.fg?.get('name')?.errors,
      this.fg?.get('lastName')?.errors,
      this.fg?.get('age')?.errors,
      this.fg?.get('email')?.errors,
      this.fg?.get('gender')?.errors,
      this.fg?.get('password')?.errors,
      this.fg?.get('validated')?.errors
    ]
  }

  submit() {
    console.log(this.generaListaErrores());
    // console.log(this.fg.errors);
    console.log(this.selection);
    console.log(this.fg.controls['gender'].value);
    
  }

}
