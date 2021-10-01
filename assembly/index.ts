import { logging } from 'near-sdk-as'
import { vacunas, Vacuna, personas, Persona, certificados, Certificado, contagios, Infeccion} from "./models";

// Método de Vacunate
export function vacunate(): string {
  return '¡Vacunate!';
}

// ------------------------- Métodos del smart contract de Vacunas ------------------------- //

// Método para registrar una nueva Vacuna
export function setVacuna(id: string, nombre: string, fabricante: string, tipo: string, administracion: string, dosis: string): void{
  assert(id.length>0,"ID de Vacuna es requerido");
  assert(nombre.length>0 ,"El nombre de la Vacuna es requerido");
  assert(fabricante.length>0,"El fabricante es requerido");
  assert(tipo.length>0,"El tipo de vacuna es requerido");
  assert(administracion.length>0,"El tipo de administración de la Vacuna es requerido");
  assert(dosis.length>0,"El número de dosis es requerido");
  let vacuna = new Vacuna(id, nombre, fabricante, tipo, administracion, dosis);
  vacunas.push(vacuna);
}

// Método para consultar todos los tipos de Vacuna
export function getVacunas(): Array<Vacuna>{
  let result = new Array<Vacuna>(vacunas.length);
  for (let i = 0; i < vacunas.length; i++){
    let vacuna = vacunas[i];
    result[i] = vacuna;
  }
  return result;
}

// Método para consultar un vacuna por id de vacuna
export function getVacuna(id: string): Vacuna | null {
  assert(id.length>0,"ID de vacuna es requerido");
  for (let i = 0; i < vacunas.length; i++) {
    if (vacunas[i].id == id) {
      let find = vacunas[i];
      return find;
    }
  }
  return null;
}

// ------------------------- Métodos del smart contract de Personas ------------------------- //
// Método para registrar una nueva Vacuna
export function setPersona(id: string, nacionalidad: string, nombre: string, foto: string, fecha_nacimiento:string): void{
  assert(id.length>0,"ID es requerido");
  assert(nacionalidad.length>0 ,"La nacionalidad  es requerida");
  assert(nombre.length>0,"El nombre es requerido");
  assert(foto.length>0,"La URL de la foto es requerida");
  assert(fecha_nacimiento.length>0,"La fecha de Nacimiento es requerida");
  let persona = new Persona(id, nacionalidad, nombre, foto, fecha_nacimiento);
  personas.push(persona);
}
// Método para consultar todas las personas
export function getPersonas(): Array<Persona>{
  let result = new Array<Persona>(personas.length);
  for (let i = 0; i < personas.length; i++){
    let persona = personas[i];
    result[i] = persona;
  }
  return result;
}

// Método para consultar un Persona por id
export function getPersona(id: string): Persona | null {
  assert(id.length>0,"ID es requerido");
  for (let i = 0; i < personas.length; i++) {
    if (personas[i].id == id) {
      let find = personas[i];
      return find;
    }
  }
  return null;
}

// ------------------------- Métodos del smart contract de Certificados de Vacunación ------------------------- //
// Método para registrar un certificado
export function setCertificado(id: string, vacuna_id: string, persona_id: string, pais: string, fecha_aplicacion: string, lote_vacuna: string, sello_digital: u64): void{
  assert(id.length>0,"ID de Vacuna es requerido");
  assert(vacuna_id.length>0 ,"El nombre de la Vacuna es requerido");
  assert(persona_id.length>0,"El fabricante es requerido");
  assert(pais.length>0,"El tipo de vacuna es requerido");
  assert(fecha_aplicacion.length>0,"El tipo de administración de la Vacuna es requerido");
  assert(lote_vacuna.length>0,"El número de dosis es requerido");
  assert(sello_digital>0,"El sello es requerido");
  let certificado = new Certificado(id, vacuna_id, persona_id, pais, fecha_aplicacion, lote_vacuna, sello_digital);
  certificados.push(certificado);
}
// Método para listar todas los certificados
export function getCertificados(): Array<Certificado>{
  let result = new Array<Certificado>(certificados.length);
  for (let i = 0; i < certificados.length; i++){
    let list = certificados[i];
    result[i] = list;
  }
  return result;
}
// Método para consultar certificado por id
export function getCertificado(id: string): Certificado | null {
  assert(id.length>0,"ID es requerido");
  for (let i = 0; i < certificados.length; i++) {
    if (certificados[i].id == id) {
      let find = certificados[i];
      return find;
    }
  }
  return null;
}

// Método para consultar certificado por id de persona
export function getCertificadoPersona(id: string): Certificado | null {
  assert(id.length>0,"ID es requerido");
  for (let i = 0; i < certificados.length; i++) {
    if (certificados[i].persona_id == id) {
      let find = certificados[i];
      return find;
    }
  }
  return null;
}

// Método para consultar certificado por id de vacuna
export function getCertificadoVacuna(id: string): Certificado | null {
  assert(id.length>0,"ID es requerido");
  for (let i = 0; i < certificados.length; i++) {
    if (certificados[i].vacuna_id == id) {
      let find = certificados[i];
      return find;
    }
  }
  return null;
}

// Método para consultar certificado por País
export function getCertificadoPais(pais: string): Certificado | null {
  assert(pais.length>0,"País es requerido");
  for (let i = 0; i < certificados.length; i++) {
    if (certificados[i].pais == pais) {
      let find = certificados[i];
      return find;
    }
  }
  return null;
}

// ------------------------- Métodos del smart contract de Certificados de Contagios ------------------------- //
// Método para registrar un certificado
export function setContagio(id:string, persona_id: string, certificado_id: string, fecha_contagio: string, fecha_recuperacion: string, nivel_infeccion: string): void{
  assert(id.length>0,"ID de Vacuna es requerido");
  assert(persona_id.length>0 ,"persona_id es requerido");
  assert(certificado_id.length>0,"certificado_id es requerido");
  assert(fecha_contagio.length>0,"Fecha de contagio es requerida");
  assert(fecha_recuperacion.length>0,"Fecha de recuperacion es requerida");
  assert(nivel_infeccion.length>0,"Nivel de infección es requerido");
  let contagio = new Infeccion(id, persona_id, certificado_id, fecha_contagio, fecha_recuperacion, nivel_infeccion);
  contagios.push(contagio);
}
// Método para listar todas los contagios
export function getContagios(): Array<Infeccion>{
  let result = new Array<Infeccion>(contagios.length);
  for (let i = 0; i < contagios.length; i++){
    let list = contagios[i];
    result[i] = list;
  }
  return result;
}
// Método para consultar contagio por id
export function getContagio(id: string): Infeccion | null {
  assert(id.length>0,"ID es requerido");
  for (let i = 0; i < contagios.length; i++) {
    if (contagios[i].id == id) {
      let find = contagios[i];
      return find;
    }
  }
  return null;
}

// Método para consultar contagio por persona_id
export function getContagioPersona(id: string): Infeccion | null {
  assert(id.length>0,"ID es requerido");
  for (let i = 0; i < contagios.length; i++) {
    if (contagios[i].persona_id == id) {
      let find = contagios[i];
      return find;
    }
  }
  return null;
}

// Método para consultar contagio por nivel_infeccion
export function getContagioNivel_infeccion(nivel_infeccion: string): Infeccion | null {
  assert(nivel_infeccion.length>0,"nivel_infeccion es requerido");
  for (let i = 0; i < contagios.length; i++) {
    if (contagios[i].nivel_infeccion == nivel_infeccion) {
      let find = contagios[i];
      return find;
    }
  }
  return null;
}
