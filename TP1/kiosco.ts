import { Producto } from "./producto";
import { Stockeable } from "./stockeable";

export class Kiosco implements Stockeable {
    private productos: Producto[];

    public constructor() {
        this.productos = [];
    }

    public agregarProducto(producto: Producto) {
        this.productos.push(producto);
    }

    public vender(producto: Producto, cant: number) {
        if (producto.getCantStock() >= cant) {
            producto.setCantVendidos(producto.getCantVendidos() + cant);
            producto.setCantStock(producto.getCantStock() - cant);
        } else {
            console.log(`No se puede realizar la venta, quedan en stock ${producto.getCantStock()} unidades de ${producto.getNombre()}`)
        }
    }

    public verStock(): void {
        console.log('---------------STOCK----------------')
        this.productos.forEach(element => {
            element.verStock();
        });
    }

    public verVentas(): void {
        let totalVendido: number = 0;
        console.log('---------------VENTAS----------------')
        this.productos.forEach(element => {
            element.verVentas();
            totalVendido += element.getCantVendidos() * element.getCosto() * (1 + element.getPorcGanancia() / 100)
        });
        console.log(`---------TOTAL VENDIDO $${totalVendido}----------`);
    }
}