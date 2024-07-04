import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Persona } from 'src/app/interfaces/persona';
import { AgregarEditarPersonaComponent } from '../agregar-editar-persona/agregar-editar-persona.component';

const listPersonas: Persona[] = [
  {
    nombre: 'Juan',
    apellido: 'Perez',
    correo: 'juan@gmail.com',
    tipoDocumento: 'CC',
    documento: 123456789,
    fechaNacimiento: new Date(),
  },
  {
    nombre: 'Maria',
    apellido: 'Magdalena',
    correo: 'mariaM@gmail.com',
    tipoDocumento: 'DNI',
    documento: 987654321,
    fechaNacimiento: new Date(),
  },

  {
    nombre: 'Maria',
    apellido: 'Magdalena',
    correo: 'mariaM@gmail.com',
    tipoDocumento: 'DNI',
    documento: 987654321,
    fechaNacimiento: new Date(),
  },

  {
    nombre: 'Maria',
    apellido: 'Magdalena',
    correo: 'mariaM@gmail.com',
    tipoDocumento: 'DNI',
    documento: 987654321,
    fechaNacimiento: new Date(),
  },

  {
    nombre: 'Maria',
    apellido: 'Magdalena',
    correo: 'mariaM@gmail.com',
    tipoDocumento: 'DNI',
    documento: 987654321,
    fechaNacimiento: new Date(),
  },
];

@Component({
  selector: 'app-list-personas',
  templateUrl: './list-personas.component.html',
  styleUrls: ['./list-personas.component.css'],
})
export class ListPersonasComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'nombre',
    'apellido',
    'correo',
    'tipoDocumento',
    'documento',
    'fechaNacimiento',
    'acciones',
  ];
  dataSource = new MatTableDataSource<Persona>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(listPersonas);
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Elementos por página';
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addEditPersona() {
    const dialogRef = this.dialog.open(AgregarEditarPersonaComponent, {
      width: '550px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
