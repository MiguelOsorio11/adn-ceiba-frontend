import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cita } from '../../shared/model/Cita';


@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {

  cita : Cita;

  constructor
  (
    public dialogRef : MatDialogRef<CrearCitaComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Cita
  ) { }

  ngOnInit(): void {
  }

}
