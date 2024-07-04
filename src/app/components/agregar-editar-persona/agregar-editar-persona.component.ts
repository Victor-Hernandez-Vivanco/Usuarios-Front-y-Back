import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Persona } from 'src/app/interfaces/persona';

@Component({
  selector: 'app-agregar-editar-persona',
  templateUrl: './agregar-editar-persona.component.html',
  styleUrls: ['./agregar-editar-persona.component.css'],
})
export class AgregarEditarPersonaComponent implements OnInit {
  tipoDocumento: string[] = ['CI Nacional', 'CI Extranjera', 'PASAPORTE'];
  form: FormGroup;

  maxDate = new Date();

  constructor(
    public dialogRef: MatDialogRef<AgregarEditarPersonaComponent>,
    private fb: FormBuilder
  ) {
    this.maxDate = new Date();
    this.form = this.fb.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
          Validators.pattern('^[a-zA-Z ]*$'),
        ],
      ],
      apellido: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
          Validators.pattern('^[a-zA-Z ]*$'),
        ],
      ],
      correo: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.maxLength(50),
          Validators.pattern(
            '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'
          ),
        ],
      ],
      tipoDocumento: ['', Validators.required],
      documento: [
        '',
        [
          Validators.required,
          Validators.maxLength(12),
          Validators.pattern(/^\d{1,2}\d{3}\d{3}-[\dkK]$/),
        ],
      ],
      fechaNacimiento: ['', Validators.required],
    });
  }

  ngOnInit() {}

  cancelar() {
    this.dialogRef.close();
  }

  addEditPersona() {
    // if (this.form.invalid) {
    //   return;
    // }
    // console.log(this.form.value);

    const persona: Persona = {
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      correo: this.form.value.correo,
      tipoDocumento: this.form.value.tipoDocumento,
      documento: this.form.value.documento,
      fechaNacimiento: this.form.value.fechaNacimiento,
    };

    console.log(`Nueva persona agregada ${persona}`);
  }
}
