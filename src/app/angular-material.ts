import {NgModule} from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatNativeDateModule, MatOptionModule, MatSelectModule} from '@angular/material';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatOptionModule,
    MatAutocompleteModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatOptionModule,
    MatAutocompleteModule,
  ],
})
export class MaterialModule { }
