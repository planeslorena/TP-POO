import { Stockeable } from "./stockeable";

export class Producto implements Stockeable {
    private nombre: string;
    private costo: number;
    private cantStock: number;
    private cantVendidos: number;
    private porcGanancia: number;

    public constructor(nombre: string, costo: number, stock:number, porcGanancia:number) {
        this.nombre = nombre;
        this.costo = costo;
        this.cantStock = stock;
        this.cantVendidos = 0;
        this.porcGanancia = porcGanancia;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getCosto(): number {
        return this.costo;
    }

    public setCosto(costo: number): void {
        this.costo = costo;
    }

    public getCantStock(): number {
        return this.cantStock;
    }

    public setCantStock(cantStock: number): void {
        this.cantStock = cantStock;
    }

    public getCantVendidos(): number {
        return this.cantVendidos;
    }

    public setCantVendidos(cantVendidos: number): void {
        this.cantVendidos = cantVendidos;
    }

    public getPorcGanancia(): number {
        return this.porcGanancia
    }

    public setPorcGanancia(porcGanancia: number): void {
        this.porcGanancia = porcGanancia;
    }

    public verStock(): void {
        console.log(`- ${this.nombre}: ${this.cantStock} unidades en stock`);
    }

    public verVentas(): void {
        console.log(`- ${this.nombre}: ${this.cantVendidos} unidades vendidas por un valor de ${this.cantVendidos*this.costo*(1+this.porcGanancia/100)}`);
    }
}
