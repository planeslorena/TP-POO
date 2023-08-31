import { GestorLegajos } from "./gestionLegajos";

const gestor1 = new GestorLegajos;

gestor1.agregarAlumno();
gestor1.agregarAlumno();

console.log(gestor1.calcularPromedio());
