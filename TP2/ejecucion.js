"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gestionLegajos_1 = require("./gestionLegajos");
var gestor1 = new gestionLegajos_1.GestorLegajos;
gestor1.agregarAlumno();
gestor1.agregarAlumno();
console.log(gestor1.calcularPromedio());
