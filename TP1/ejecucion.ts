import { Producto } from "./producto";
import { Kiosco} from "./kiosco";

let alfajores = new Producto('Alfajor Jorgito', 100, 25, 50);
let chocolates = new Producto ('CHocolate Milka', 250,16,100);
let chupetines = new Producto('Chupetines Arcor', 20, 50,75);
let pastillas = new Producto('Pastillitas Yapa',25, 25,100);
let papitas = new Producto('Papitas Lays', 235, 10,65);
let galletitas = new Producto('Galletitas Pepitos', 120, 7,75);

let miKiosko = new Kiosco;

miKiosko.agregarProducto(alfajores);
miKiosko.agregarProducto(chocolates);
miKiosko.agregarProducto(chupetines);
miKiosko.agregarProducto(pastillas);
miKiosko.agregarProducto(papitas);
miKiosko.agregarProducto(galletitas);

miKiosko.vender(alfajores, 5);
miKiosko.vender(chocolates,2);
miKiosko.vender(pastillas,7);
miKiosko.vender(galletitas,8);

miKiosko.verStock();
miKiosko.verVentas();

