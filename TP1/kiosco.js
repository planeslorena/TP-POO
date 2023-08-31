"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kiosco = void 0;
var Kiosco = /** @class */ (function () {
    function Kiosco() {
        this.productos = [];
    }
    Kiosco.prototype.agregarProducto = function (producto) {
        this.productos.push(producto);
    };
    Kiosco.prototype.vender = function (producto, cant) {
        if (producto.getCantStock() >= cant) {
            producto.setCantVendidos(producto.getCantVendidos() + cant);
            producto.setCantStock(producto.getCantStock() - cant);
        }
        else {
            console.log("No se puede realizar la venta, quedan en stock ".concat(producto.getCantStock(), " unidades de ").concat(producto.getNombre()));
        }
    };
    Kiosco.prototype.verStock = function () {
        console.log('---------------STOCK----------------');
        this.productos.forEach(function (element) {
            element.verStock();
        });
    };
    Kiosco.prototype.verVentas = function () {
        var totalVendido = 0;
        console.log('---------------VENTAS----------------');
        this.productos.forEach(function (element) {
            element.verVentas();
            totalVendido += element.getCantVendidos() * element.getCosto() * (1 + element.getPorcGanancia() / 100);
        });
        console.log("---------TOTAL VENDIDO $".concat(totalVendido, "----------"));
    };
    return Kiosco;
}());
exports.Kiosco = Kiosco;
