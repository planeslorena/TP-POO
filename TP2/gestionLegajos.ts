import { Alumno } from "./alumno";
import { ExamenRendido } from "./examenRendido";
import { Promedio } from "./promedio";
import * as rls from 'readline-sync';

export class GestorLegajos implements Promedio{
    private alumnos: Alumno[];

    public constructor() {
        this.alumnos = [];
    }

    public agregarAlumno():void {
        console.log('--------- DATOS DEL ALUMNO ---------')
        let nombre: string = rls.question("Ingrese nombre del alumno: ");
        let dni: number = rls.questionInt("Ingrese DNI: ");
        let alumno = new Alumno(nombre,dni);
        console.log('--------- MATERIAS RENDIDAS ---------')
        let agregarNota: string = rls.question("Desea agregar las notas del alumno? (S/N): ");
        while (agregarNota.toUpperCase()== 'S') {
            let materia: string = rls.question("Ingrese la materia rendida: ");
            let nota:number = rls.questionInt("Ingrese la nota: ");
            let examenRendido = new ExamenRendido(materia,nota);
            alumno.agregarExamenRendido(examenRendido);
            agregarNota = rls.question("Desea agregar mas notas del alumno? (S/N): ");
        }
        this.alumnos.push(alumno);
    }
    
    public calcularPromedio(): number {
        let promedio: number = 0;
        this.alumnos.forEach(alumno => {
            promedio += alumno.calcularPromedio();
        });
        return promedio/this.alumnos.length;
    }
}