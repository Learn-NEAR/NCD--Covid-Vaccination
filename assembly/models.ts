import { PersistentVector } from "near-sdk-as";

// Exportando la clase Vacuna
@nearBindgen
export class Vacuna {
    id: string; //pfzier
    nombre: string; //Pfzer
    fabricante: string; //BioNTech, Fosun Pharma, Pfizer
    tipo: string; //ARN
    administracion: string; //Inyección intramuscular
    dosis: string;
    constructor(id: string, nombre: string, fabricante: string, tipo: string, administracion: string, dosis: string){
        this.id = id;
        this.nombre = nombre;
        this.fabricante = fabricante;
        this.tipo = tipo;
        this.administracion = administracion;
        this.dosis = dosis;
    }
}

// Exportando la clase Persona
@nearBindgen
export class Persona {
    id: string;
    nacionalidad: string;
    nombre: string;
    foto: string;
    fecha_nacimiento: string;
    constructor(id: string, nacionalidad: string, nombre: string, foto: string, fecha_nacimiento:string){
        this.id = id;
        this.nacionalidad = nacionalidad;
        this.nombre = nombre;
        this.foto = foto;
        this.fecha_nacimiento = fecha_nacimiento;
    }   
}

// Exportando la clase Certificado
@nearBindgen
export class Certificado {
    id: string;
    vacuna_id: string;
    persona_id: string;
    pais: string;
    fecha_aplicacion: string;
    lote_vacuna: string;
    sello_digital: u64;
    constructor(id: string, vacuna_id: string, persona_id: string, pais: string, fecha_aplicacion: string, lote_vacuna: string, sello_digital: u64){
        this.id = id;
        this.vacuna_id = vacuna_id;
        this.persona_id = persona_id;
        this.pais = pais;
        this.fecha_aplicacion = fecha_aplicacion;
        this.lote_vacuna = lote_vacuna;
        this.sello_digital = sello_digital;
    }   
}

// Exportando la clase Infeccion por covid
@nearBindgen
export class Infeccion {
    id: string;
    persona_id: string;
    certificado_id: string;
    fecha_contagio: string;
    fecha_recuperacion: string;
    nivel_infeccion: string;
    constructor(id:string, persona_id: string, certificado_id: string, fecha_contagio: string, fecha_recuperacion: string, nivel_infeccion: string){
        this.id = id;
        this.persona_id = persona_id;
        this.certificado_id = certificado_id;
        this.fecha_contagio = fecha_contagio;
        this.fecha_recuperacion = fecha_recuperacion;
        this.nivel_infeccion = nivel_infeccion;
    }
}

 export const vacunas = new PersistentVector<Vacuna>("v");
 export const personas = new PersistentVector<Persona>("p");
 export const certificados = new PersistentVector<Certificado>("c");
 export const contagios = new PersistentVector<Infeccion>("i");