import { ExamenRendido } from "./examenRendido";
import { Promedio } from "./promedio";

export class Alumno implements Promedio{
    private nombre: string;
    private dni: number;
    private examenes: ExamenRendido[];

    public constructor(nombre: string, dni: number) {
        this.nombre = nombre;
        this.dni = dni;
        this.examenes = [];
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getDni(): number {
        return this.dni;
    }

    public setDni(dni: number): void {
        this.dni = dni;
    }

   public agregarExamenRendido(examenRendido:ExamenRendido): void {
        this.examenes.push(examenRendido);
   }

   public calcularPromedio(): number {
        let promedio:number = 0;   
        this.examenes.forEach(examen => {
            promedio += examen.getNota();
        });
        return promedio/this.examenes.length;
   }
}

