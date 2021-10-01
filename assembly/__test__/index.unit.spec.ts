import * as contract from "..";
import { Context } from "near-sdk-as";

// ------------------------- PERSONAS ------------------------- //

// Prueba para la función setVacuna
describe("Set Vacuna",()=>{
  it("Debería Registrar una Vacuna", () => {
    expect(() => {
      contract.setVacuna("cansino", "Cansino", "CanSino Biologics Inc", "Vector viral no replicante", "Inyección intramuscular", "1");
    }).not.toThrow();
  });
  it("Deberia Fallar sino enviamos en ID", () => {
    expect(() => {
      contract.setVacuna("", "Cansino", "CanSino Biologics Inc", "Vector viral no replicante", "Inyección intramuscular", "1");
    }).toThrow();
  });
  it("Debería fallar si no enviamos el nombre", () => {
    expect(() => {
      contract.setVacuna("cansino", "", "CanSino Biologics Inc", "Vector viral no replicante", "Inyección intramuscular", "1");
    }).toThrow();
  });
});

// Prueba para la función consultar vacunas
describe("Consultar todos las las vacunas",()=>{
  it("Debería consultar todas las vacunas", () => {
    expect(() => {
      contract.getVacunas();
    }).not.toThrow();
  });
});

// Prueba para la función consultarUsuario
describe("Buscar vacuna por ID",()=>{
  it("Debería buscar una vacuna por ID", () => {
    expect(() => {
      contract.getVacuna("cansino");
    }).not.toThrow();
  });
});


// ------------------------- PERSONAS ------------------------- //

// Prueba para la función setPersona
describe("Registrar una Persona",()=>{
  it("Debería registrar una Persona", () => {
    expect(() => {
      contract.setPersona("CURP","MEXICANA","JUAN HERNANDEZ","https://google.com/juan", "1965-07-30");
    }).not.toThrow();
  });
  it("Debería fallar sino enviamos ID", () => {
    expect(() => {
      contract.setPersona("","MEXICANA","JUAN HERNANDEZ","https://google.com/juan", "1965-07-30");
    }).toThrow();
  });
  it("Debería fallar si no enviamos nacionalidad", () => {
    expect(() => {
      contract.setPersona("CURP","","JUAN HERNANDEZ","https://google.com/juan", "1965-07-30");
    }).toThrow();
  });
  it("Debería fallar si no enviamos el nombre", () => {
    expect(() => {
      contract.setPersona("CURP","MEXICANA","","https://google.com/juan", "1965-07-30");
    }).toThrow();
  });
});

// Prueba para la función get
describe("Consultar todos personas",()=>{
  it("Debería consultar todas las personas", () => {
    expect(() => {
      contract.getPersonas();
    }).not.toThrow();
  });
});

// Prueba para la función getPersona
describe("Consultar persona por ID",()=>{
  it("Debería consultar persona por ID", () => {
    expect(() => {
      contract.getPersona("CURP");
    }).not.toThrow();
  });
  it("Debería fallar si no enviamos el ID", () => {
    expect(() => {
      contract.getPersona("");
    }).toThrow();
  });
});
// ------------------------- CERTIFICADOS DE VACUNACIÓN ------------------------- //

// Prueba para la función setCertificado
describe("Agregar un certificado de vacunación",()=>{
  it("Debería agregar un certificado de vacunación", () => {
    expect(() => {
      contract.setCertificado("2", "cansino", "CURP", "MEXICO", "2021-06-17", "005", 100);
    }).not.toThrow();
  });
  it("Debería fallar si no enviamos el ID", () => {
    expect(() => {
      contract.setCertificado("", "cansino", "CURP", "MEXICO", "2021-06-17", "005", 100);
    }).toThrow();
  });
  it("Debería fallar si no enviamos el sello digital", () => {
    expect(() => {
      contract.setCertificado("2", "cansino", "CURP", "MEXICO", "2021-06-17", "005", <u64>NaN);
    }).toThrow();
  });
  it("Debería fallar si no enviamos la vacuna_id", () => {
    expect(() => {
      contract.setCertificado("2", "", "CURP", "MEXICO", "2021-06-17", "005", 100);
    }).toThrow();
  });
  it("Debería fallar si no enviamos la persona_id", () => {
    expect(() => {
      contract.setCertificado("2", "cansino", "", "MEXICO", "2021-06-17", "005", 100);
    }).toThrow();
  });
});

// Prueba para la función consultas getCertificados
describe("Consultar certificados de vacunación",()=>{
  it("Debería consultar todos los certificados de vacunación", () => {
    expect(() => {
      contract.getCertificados();
    }).not.toThrow();
  });
  //ID
  it("Debería consultar certificado por ID", () => {
    expect(() => {
      contract.getCertificado("2");
    }).not.toThrow();
  });
  it("Debería fallar la consulta de certificado por ID por no enviar el ID", () => {
    expect(() => {
      contract.getCertificado("");
    }).toThrow();
  });
  //Persona
  it("Debería consultar certificado de vacunación por persona_id", () => {
    expect(() => {
      contract.getCertificadoPersona("CURP");
    }).not.toThrow();
  });
  it("Debería fallar consultar certificado de vacunación por persona_id por falta de persona_id", () => {
    expect(() => {
      contract.getCertificadoPersona("");
    }).toThrow();
  });
  //Vacuna
  it("Debería consultar certificado de vacunación por vacuna_id", () => {
    expect(() => {
      contract.getCertificadoVacuna("cansino");
    }).not.toThrow();
  });
  it("Debería fallar consultar certificado de vacunación por vacuna_id por falta de vacuna_id", () => {
    expect(() => {
      contract.getCertificadoVacuna("");
    }).toThrow();
  });
//Pais
  it("Debería consultar certificado de vacunación por país", () => {
    expect(() => {
      contract.getCertificadoPais("MEXICO");
    }).not.toThrow();
  });
  it("Debería fallar consultar certificado de vacunación por país por falta de país", () => {
    expect(() => {
      contract.getCertificadoPais("");
    }).toThrow();
  });
});

// ------------------------- CONTAGIOS ------------------------- //
describe("Agregar un contagio",()=>{
  it("Debería crear un contagio", () => {
    expect(() => {
      contract.setContagio("2", "CURP", "2", "2021-08-01", "2021-09-1", "MODERADO");
    }).not.toThrow();
  });
  //ID
  it("Debería fallar por falta de ID", () => {
    expect(() => {
      contract.setContagio("", "CURP", "2", "2021-08-01", "2021-09-1", "MODERADO");
    }).toThrow();
  });
  //persona_id
  it("Debería fallar por falta de persona_id", () => {
    expect(() => {
      contract.setContagio("2", "", "2", "2021-08-01", "2021-09-1", "MODERADO");
    }).toThrow();
  });
  //certificado_id
  it("Debería fallar por falta de certificado_id", () => {
    expect(() => {
      contract.setContagio("2", "CURP", "", "2021-08-01", "2021-09-1", "MODERADO");
    }).toThrow();
  });
});

describe("Listar contagios",()=>{
  it("Debería listar todos los contagios", () => {
    expect(() => {
      contract.getContagios();
    }).not.toThrow();
  });
});

describe("Consultar Contagios",()=>{
  //ID
  it("Buscar Contagio por ID", () => {
    expect(() => {
      contract.getContagio("2");
    }).not.toThrow();
  });
  it("Error al buscar contagio por ID, por falta de ID", () => {
    expect(() => {
      contract.getContagio("");
    }).toThrow();
  });
  //persona_id
  it("Buscar Contagio por persona_id", () => {
    expect(() => {
      contract.getContagioPersona("CURP");
    }).not.toThrow();
  });
  it("Error al buscar contagio por persona_id, por falta de persona_id", () => {
    expect(() => {
      contract.getContagioPersona("");
    }).toThrow();
  });
  //nivel_infeccion
  it("Buscar Contagio por nivel_infeccion", () => {
    expect(() => {
      contract.getContagioNivel_infeccion("MODERADO");
    }).not.toThrow();
  });
  it("Error al buscar contagio por nivel_infeccion, por falta de nivel_infeccion", () => {
    expect(() => {
      contract.getContagioNivel_infeccion("");
    }).toThrow();
  });
});