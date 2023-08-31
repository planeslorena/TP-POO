"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
var Alumno = /** @class */ (function () {
    function Alumno(nombre, dni) {
        this.nombre = nombre;
        this.dni = dni;
        this.examenes = [];
    }
    Alumno.prototype.getNombre = function () {
        return this.nombre;
    };
    Alumno.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Alumno.prototype.getDni = function () {
        return this.dni;
    };
    Alumno.prototype.setDni = function (dni) {
        this.dni = dni;
    };
    Alumno.prototype.agregarExamenRendido = function (examenRendido) {
        this.examenes.push(examenRendido);
    };
    Alumno.prototype.calcularPromedio = function () {
        var promedio = 0;
        this.examenes.forEach(function (examen) {
            promedio += examen.getNota();
        });
        return promedio / this.examenes.length;
    };
    return Alumno;
}());
exports.Alumno = Alumno;
