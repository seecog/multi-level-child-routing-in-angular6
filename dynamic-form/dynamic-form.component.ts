import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  private docForm: FormGroup;

  constructor(private fb: FormBuilder) { }


  ngOnInit() {
    this.docForm = this.fb.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required]],
      speciality: ['', [Validators.required]],
      patients: this.fb.array([ ])

    });
  }
  addPatient()
  {
    let Patients=<FormArray> this.docForm.get("patients");
    Patients.push(this.createPatientForm());
  }
  submit()
  {
    console.log(this.docForm.value);
  }
  createPatientForm() {
    return this.fb.group({
      patient_name: [''],
      patient_age: [''],
      patient_dieases: ['']

    })
  }
  delete(index)
  {
    const patients = <FormArray>this.docForm.get("patients");
    console.log(patients);
    patients.removeAt(index);
    console.log(patients);

  }
}
