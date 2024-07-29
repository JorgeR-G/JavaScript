class Producto {
    static contadorProducto = 0;

    constructor(nombre, precio){
        this._idProducto = ++ Producto.contadorProducto;
        this._nombre = nombre;
        this._precio = precio;
    }

    
    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    get precio(){
        return this._precio;
    }

    set nombre(nombre){
        return this.nombre = nombre;
    }

    set precio(precio){
        return this._precio = precio;
    }

    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`;
    }
}

class Orden {
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agrergarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
        }
        else{
            console.log('No se puede agregar más productos');
        }
    }

    calcularTotal(){
        let TotalVenta = 0;
        for(let producto of this._productos){
            TotalVenta += producto.precio;
        }
        return TotalVenta;
    }

    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this._productos){
            productosOrden += '\n{' + producto.toString() + '} ';
        }
        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()}, Productos: ${productosOrden}`);
    }
    
}

let producto1 = new Producto('Pantalón', 200);
let producto2 = new Producto('Camisa', 100);

let orden1 = new Orden();
orden1.agrergarProducto(producto1);
orden1.agrergarProducto(producto2);
orden1.mostrarOrden();

let orden2 = new Orden();
let producto3 = new Producto('Cinturon', 50);
orden2.agrergarProducto(producto3);
orden2.agrergarProducto(producto1);
orden2.agrergarProducto(producto2);
orden2.agrergarProducto(producto3);
orden2.agrergarProducto(producto1);
orden2.agrergarProducto(producto2);
orden2.mostrarOrden();

