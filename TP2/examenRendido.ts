export class ExamenRendido {
    private materia: string;
    private nota: number;

    constructor( materia: string, nota: number) {
        this.materia = materia;
        this.nota = nota;
    }

    public getMateria(): string {
        return this.materia;
    }

    public setMateria(materia: string): void {
        this.materia = materia;
    }

    public getNota(): number {
        return this.nota;
    }

    public setNota(nota: number): void {
        this.nota = nota;
    }
}