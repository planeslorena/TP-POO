"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestorLegajos = void 0;
var alumno_1 = require("./alumno");
var examenRendido_1 = require("./examenRendido");
var rls = require("readline-sync");
var GestorLegajos = /** @class */ (function () {
    function GestorLegajos() {
        this.alumnos = [];
    }
    GestorLegajos.prototype.agregarAlumno = function () {
        console.log('--------- DATOS DEL ALUMNO ---------');
        var nombre = rls.question("Ingrese nombre del alumno: ");
        var dni = rls.questionInt("Ingrese DNI: ");
        var alumno = new alumno_1.Alumno(nombre, dni);
        console.log('--------- MATERIAS RENDIDAS ---------');
        var agregarNota = rls.question("Desea agregar las notas del alumno (S/N): ");
        while (agregarNota.toUpperCase() == 'S') {
            var materia = rls.question("Ingrese la materia rendida: ");
            var nota = rls.questionInt("Ingrese la nota: ");
            var examenRendido = new examenRendido_1.ExamenRendido(materia, nota);
            alumno.agregarExamenRendido(examenRendido);
            agregarNota = rls.question("Desea agregar mas notas del alumno(S/N): ");
        }
        this.alumnos.push(alumno);
    };
    GestorLegajos.prototype.calcularPromedio = function () {
        var promedio = 0;
        this.alumnos.forEach(function (alumno) {
            promedio += alumno.calcularPromedio();
        });
        return promedio / this.alumnos.length;
    };
    return GestorLegajos;
}());
exports.GestorLegajos = GestorLegajos;
