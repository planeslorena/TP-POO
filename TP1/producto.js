"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
var Producto = /** @class */ (function () {
    function Producto(nombre, costo, stock, porcGanancia) {
        this.nombre = nombre;
        this.costo = costo;
        this.cantStock = stock;
        this.cantVendidos = 0;
        this.porcGanancia = porcGanancia;
    }
    Producto.prototype.getNombre = function () {
        return this.nombre;
    };
    Producto.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Producto.prototype.getCosto = function () {
        return this.costo;
    };
    Producto.prototype.setCosto = function (costo) {
        this.costo = costo;
    };
    Producto.prototype.getCantStock = function () {
        return this.cantStock;
    };
    Producto.prototype.setCantStock = function (cantStock) {
        this.cantStock = cantStock;
    };
    Producto.prototype.getCantVendidos = function () {
        return this.cantVendidos;
    };
    Producto.prototype.setCantVendidos = function (cantVendidos) {
        this.cantVendidos = cantVendidos;
    };
    Producto.prototype.getPorcGanancia = function () {
        return this.porcGanancia;
    };
    Producto.prototype.setPorcGanancia = function (porcGanancia) {
        this.porcGanancia = porcGanancia;
    };
    Producto.prototype.verStock = function () {
        console.log("- ".concat(this.nombre, ": ").concat(this.cantStock, " unidades en stock"));
    };
    Producto.prototype.verVentas = function () {
        console.log("- ".concat(this.nombre, ": ").concat(this.cantVendidos, " unidades vendidas por un valor de ").concat(this.cantVendidos * this.costo * (1 + this.porcGanancia / 100)));
    };
    return Producto;
}());
exports.Producto = Producto;
