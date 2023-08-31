"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamenRendido = void 0;
var ExamenRendido = /** @class */ (function () {
    function ExamenRendido(materia, nota) {
        this.materia = materia;
        this.nota = nota;
    }
    ExamenRendido.prototype.getMateria = function () {
        return this.materia;
    };
    ExamenRendido.prototype.setMateria = function (materia) {
        this.materia = materia;
    };
    ExamenRendido.prototype.getNota = function () {
        return this.nota;
    };
    ExamenRendido.prototype.setNota = function (nota) {
        this.nota = nota;
    };
    return ExamenRendido;
}());
exports.ExamenRendido = ExamenRendido;
