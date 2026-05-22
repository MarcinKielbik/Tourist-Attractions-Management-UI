import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
   {value: 'museum', viewValue: 'Museum'},
   {value: 'park', viewValue: 'Park'},
   {value: 'historical', viewValue: 'Historical'},
   {value: 'nature', viewValue: 'Nature'},
   {value: 'entertainment', viewValue: 'Entertainment'},
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
      images: this.fb.array([])
    });


  }


  submit() {
    throw new Error('Method not implemented.');
  }


  onFilesSelected($event: Event) {
    throw new Error('Method not implemented.');
  }

}
