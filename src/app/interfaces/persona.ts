export interface Persona {
  id?: number; // con el signo de interrogación se indica que el campo es opcional
  nombre: string;
  apellido: string;
  correo: string;
  tipoDocumento: string;
  documento: number;
  fechaNacimiento: Date;
}
