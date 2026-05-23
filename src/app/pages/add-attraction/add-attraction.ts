import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Attraction } from '../../services/attraction';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-attraction',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule, CommonModule],
  templateUrl: './add-attraction.html',
  styleUrl: './add-attraction.scss',
})
export class AddAttraction {

  attractionForm!: FormGroup;

  attractions = [
    { value: 'museum', viewValue: 'Museum' },
    { value: 'park', viewValue: 'Park' },
    { value: 'historical', viewValue: 'Historical' },
    { value: 'nature', viewValue: 'Nature' },
    { value: 'entertainment', viewValue: 'Entertainment' },
  ];


  constructor(
    private fb: FormBuilder,
    private attractionService: Attraction
  ) {

    this.attractionForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      location: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      images: this.fb.array([], [Validators.required, this.minArrayLength(1)])
    });
  }


  // Add this custom validator above or inside the class
  minArrayLength(min: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      const arr = control as FormArray;
      return arr.length >= min ? null : { minArrayLength: true };
    };
  }




  get images(): FormArray {
    return this.attractionForm.get('images') as FormArray;
  }

  selectedFilesText = '';

  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files) {

      this.images.clear();

      Array.from(input.files).forEach(file => {
        this.images.push(this.fb.control(file));
      });

      this.images.updateValueAndValidity();

      this.selectedFilesText = Array.from(input.files)
        .map(file => file.name)
        .join(', ');
    }
  }





  submit() {
    console.log(this.attractionForm.value);
  }
}
