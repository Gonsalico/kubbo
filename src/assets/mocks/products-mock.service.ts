import { ProductModel } from '../models/product.model';
import { StockModel } from '../models/stock.model';
import { Injectable, OnInit } from '@angular/core';
import { Requirements } from '../models/requirements.model';

@Injectable({
    providedIn: 'root',
  })
  
export class ProductsMockService{

    products: ProductModel[] = PRODUCT_DATA;

    stock: StockModel[];

    getProducts(): ProductModel[]{
        return this.products;
    }

    getProduct(idProduct: number): ProductModel{
        return this.products.find(product => product.id === idProduct);
    }

    getStock(idProduct: number): StockModel[] {
        const result = STOCK_DATA.filter(stock => stock.idProduct === idProduct);
        return result;
    }

    changeStatus(idProduct: number, newValue: boolean){
        let id = this.products.findIndex(product => product.id === idProduct);
        this.products[id].enabled = newValue;
    }

    changeRequirement(idProduct: number, idRadio: number, newValue: boolean){
        let idProd = this.products.findIndex(product => product.id === idProduct);
        let idReq = this.products[idProd].requirements.findIndex(requi => requi.id === idRadio);

        console.log(idProd);
        console.log(idReq);
        this.products[idProd].requirements[idReq].value = newValue;
    }

}

const PRODUCT_DATA: ProductModel[] = [
    {id: 1, name: 'Té Matcha', sku: 'SKU 72056356', barcode: '1234567890', image: 'default.jpg', price: '6,95€', enabled: true, requirements: [
        {id: 1, name: 'Packaging personalizado', value: true},
        {id: 2,name: 'Plegable', value: false},
        {id: 3,name: 'Envío en el propio contenedor', value: false},
        {id: 4,name: 'Flyer promocional', value: false},
        {id: 5,name: 'Obsequio promocional', value: false},
        {id: 6,name: 'Peligroso', value: false},
        {id: 7,name: 'Frágil', value: false},
    ]},
    {id: 2, name: 'Té Matcha Premium', sku: 'SKU 89587365', barcode: '0987654321', image: 'default.jpg', price: '9,95€', enabled: true, requirements: [
        {id: 1, name: 'Packaging personalizado', value: true},
        {id: 2,name: 'Plegable', value: false},
        {id: 3,name: 'Envío en el propio contenedor', value: false},
        {id: 4,name: 'Flyer promocional', value: false},
        {id: 5,name: 'Obsequio promocional', value: false},
        {id: 6,name: 'Peligroso', value: false},
        {id: 7,name: 'Frágil', value: false},
    ]},
    {id: 3, name: 'Cuchara mediadora', sku: 'SKU 26730217', barcode: '6789012345', image: 'default.jpg', price: '13€', enabled: false, requirements: [
        {id: 1, name: 'Packaging personalizado', value: true},
        {id: 2,name: 'Plegable', value: false},
        {id: 3,name: 'Envío en el propio contenedor', value: false},
        {id: 4,name: 'Flyer promocional', value: false},
        {id: 5,name: 'Obsequio promocional', value: false},
        {id: 6,name: 'Peligroso', value: false},
        {id: 7,name: 'Frágil', value: false},
    ]},
    {id: 4, name: 'Hair & Nails', sku: 'SKU 22533329', barcode: '4567890236', image: 'default.jpg', price: '12€', enabled: false, requirements: [
        {id: 1, name: 'Packaging personalizado', value: true},
        {id: 2,name: 'Plegable', value: false},
        {id: 3,name: 'Envío en el propio contenedor', value: false},
        {id: 4,name: 'Flyer promocional', value: false},
        {id: 5,name: 'Obsequio promocional', value: false},
        {id: 6,name: 'Peligroso', value: false},
        {id: 7,name: 'Frágil', value: false},
    ]},
    {id: 5, name: 'Batidor de Bambú Chasan', sku: 'SKU 76996454', barcode: '1234567875', image: 'default.jpg', price: '62€', enabled: false, requirements: [
        {id: 1, name: 'Packaging personalizado', value: true},
        {id: 2,name: 'Plegable', value: false},
        {id: 3,name: 'Envío en el propio contenedor', value: false},
        {id: 4,name: 'Flyer promocional', value: false},
        {id: 5,name: 'Obsequio promocional', value: false},
        {id: 6,name: 'Peligroso', value: false},
        {id: 7,name: 'Frágil', value: false},
    ]},
    {id: 6, name: 'Té Menta', sku: 'SKU 76996454', barcode: '1234567875', image: 'default.jpg', price: '53€', enabled: false, requirements: [
        {id: 1, name: 'Packaging personalizado', value: true},
        {id: 2,name: 'Plegable', value: false},
        {id: 3,name: 'Envío en el propio contenedor', value: false},
        {id: 4,name: 'Flyer promocional', value: false},
        {id: 5,name: 'Obsequio promocional', value: false},
        {id: 6,name: 'Peligroso', value: false},
        {id: 7,name: 'Frágil', value: false},
    ]},
    {id: 7, name: 'Té Naranja', sku: 'SKU 76996454', barcode: '1234567875', image: 'default.jpg', price: '21€', enabled: false, requirements: [
        {id: 1, name: 'Packaging personalizado', value: true},
        {id: 2,name: 'Plegable', value: false},
        {id: 3,name: 'Envío en el propio contenedor', value: false},
        {id: 4,name: 'Flyer promocional', value: false},
        {id: 5,name: 'Obsequio promocional', value: false},
        {id: 6,name: 'Peligroso', value: false},
        {id: 7,name: 'Frágil', value: false},
    ]},
    {id: 8, name: 'Té Negro Ecológico', sku: 'SKU 76996454', barcode: '1234567875', image: 'default.jpg', price: '11€', enabled: false, requirements: [
        {id: 1, name: 'Packaging personalizado', value: true},
        {id: 2,name: 'Plegable', value: false},
        {id: 3,name: 'Envío en el propio contenedor', value: false},
        {id: 4,name: 'Flyer promocional', value: false},
        {id: 5,name: 'Obsequio promocional', value: false},
        {id: 6,name: 'Peligroso', value: false},
        {id: 7,name: 'Frágil', value: false},
    ]},
    {id: 9, name: 'Té verde', sku: 'SKU 76996454', barcode: '1234567875', image: 'default.jpg', price: '71€', enabled: false, requirements: [
        {id: 1, name: 'Packaging personalizado', value: true},
        {id: 2,name: 'Plegable', value: false},
        {id: 3,name: 'Envío en el propio contenedor', value: false},
        {id: 4,name: 'Flyer promocional', value: false},
        {id: 5,name: 'Obsequio promocional', value: false},
        {id: 6,name: 'Peligroso', value: false},
        {id: 7,name: 'Frágil', value: false},
    ]},
    {id: 10, name: 'Palas', sku: 'SKU 76996454', barcode: '1234567875', image: 'default.jpg', price: '62€', enabled: false, requirements: [
        {id: 1, name: 'Packaging personalizado', value: true},
        {id: 2,name: 'Plegable', value: false},
        {id: 3,name: 'Envío en el propio contenedor', value: false},
        {id: 4,name: 'Flyer promocional', value: false},
        {id: 5,name: 'Obsequio promocional', value: false},
        {id: 6,name: 'Peligroso', value: false},
        {id: 7,name: 'Frágil', value: false},
    ]},
    {id: 11, name: 'Flotador', sku: 'SKU 76996454', barcode: '1234567875', image: 'default.jpg', price: '31€', enabled: false, requirements: [
        {id: 1, name: 'Packaging personalizado', value: true},
        {id: 2,name: 'Plegable', value: false},
        {id: 3,name: 'Envío en el propio contenedor', value: false},
        {id: 4,name: 'Flyer promocional', value: false},
        {id: 5,name: 'Obsequio promocional', value: false},
        {id: 6,name: 'Peligroso', value: false},
        {id: 7,name: 'Frágil', value: false},
    ]},
    {id: 12, name: 'Bombilla', sku: 'SKU 76996454', barcode: '1234567875', image: 'default.jpg', price: '2€', enabled: false, requirements: [
        {id: 1, name: 'Packaging personalizado', value: true},
        {id: 2,name: 'Plegable', value: false},
        {id: 3,name: 'Envío en el propio contenedor', value: false},
        {id: 4,name: 'Flyer promocional', value: false},
        {id: 5,name: 'Obsequio promocional', value: false},
        {id: 6,name: 'Peligroso', value: false},
        {id: 7,name: 'Frágil', value: false},
    ]},
    {id: 13, name: 'Ordenador', sku: 'SKU 76996454', barcode: '1234567875', image: 'default.jpg', price: '3€', enabled: false, requirements: [
        {id: 1, name: 'Packaging personalizado', value: true},
        {id: 2,name: 'Plegable', value: false},
        {id: 3,name: 'Envío en el propio contenedor', value: false},
        {id: 4,name: 'Flyer promocional', value: false},
        {id: 5,name: 'Obsequio promocional', value: false},
        {id: 6,name: 'Peligroso', value: false},
        {id: 7,name: 'Frágil', value: false},
    ]},
    {id: 14, name: 'Móvil', sku: 'SKU 76996454', barcode: '1234567875', image: 'default.jpg', price: '1€', enabled: false, requirements: [
        {id: 1, name: 'Packaging personalizado', value: true},
        {id: 2,name: 'Plegable', value: false},
        {id: 3,name: 'Envío en el propio contenedor', value: false},
        {id: 4,name: 'Flyer promocional', value: false},
        {id: 5,name: 'Obsequio promocional', value: false},
        {id: 6,name: 'Peligroso', value: false},
        {id: 7,name: 'Frágil', value: false},
    ]},
  ];

const STOCK_DATA: StockModel[] = [
    {id: 1, quantity: 301, status: '80', idWarehouse: 1, nameWarehouse: 'BCN 1', cityWarehouse: 'Barcelona', countryWarehouse: 'España', idProduct: 2},
    {id: 2, quantity: 25, status: '10', idWarehouse: 2, nameWarehouse: 'BCN 2', cityWarehouse: 'Barcelona', countryWarehouse: 'España', idProduct: 2},
    {id: 3, quantity: 65, status: '15', idWarehouse: 3, nameWarehouse: 'BCN 5', cityWarehouse: 'Barcelona', countryWarehouse: 'España', idProduct: 2},
    {id: 4, quantity: 87, status: '15', idWarehouse: 4, nameWarehouse: 'BCN 7', cityWarehouse: 'Barcelona', countryWarehouse: 'España', idProduct: 2},
    {id: 5, quantity: 129, status: '25', idWarehouse: 5, nameWarehouse: 'CAD 2', cityWarehouse: 'Cádiz', countryWarehouse: 'España', idProduct: 2},
    {id: 6, quantity: 76, status: '15', idWarehouse: 6, nameWarehouse: 'CAD 4', cityWarehouse: 'Cádiz', countryWarehouse: 'España', idProduct: 2},
    {id: 7, quantity: 234, status: '60', idWarehouse: 7, nameWarehouse: 'LIS 2', cityWarehouse: 'Lisboa', countryWarehouse: 'Portugal', idProduct: 2},
    {id: 8, quantity: 75, status: '25', idWarehouse: 8, nameWarehouse: 'LIS 3', cityWarehouse: 'Lisboa', countryWarehouse: 'Portugal', idProduct: 2},
    {id: 9, quantity: 109, status: '35', idWarehouse: 9, nameWarehouse: 'PAR 3', cityWarehouse: 'París', countryWarehouse: 'Francia', idProduct: 2},
    {id: 10, quantity: 580, status: '90', idWarehouse: 10, nameWarehouse: 'MAD 1', cityWarehouse: 'Madrid', countryWarehouse: 'España', idProduct: 2},
    {id: 11, quantity: 123, status: '30', idWarehouse: 11, nameWarehouse: 'MAD 2', cityWarehouse: 'Madrid', countryWarehouse: 'España', idProduct: 2},
    {id: 12, quantity: 98, status: '25', idWarehouse: 12, nameWarehouse: 'MAD 4', cityWarehouse: 'Madrid', countryWarehouse: 'España', idProduct: 2},
    {id: 13, quantity: 238, status: '70', idWarehouse: 13, nameWarehouse: 'OPO 3', cityWarehouse: 'Oporto', countryWarehouse: 'Portugal', idProduct: 2},
    {id: 14, quantity: 56, status: '9', idWarehouse: 14, nameWarehouse: 'SEV 1', cityWarehouse: 'Sevilla', countryWarehouse: 'España', idProduct: 2},
    {id: 15, quantity: 34, status: '5', idWarehouse: 15, nameWarehouse: 'ZGZ 3', cityWarehouse: 'Zaragoza', countryWarehouse: 'España', idProduct: 2},
    {id: 16, quantity: 89, status: '12', idWarehouse: 16, nameWarehouse: 'ZGZ 5', cityWarehouse: 'Zaragoza', countryWarehouse: 'España', idProduct: 2},
    {id: 17, quantity: 542, status: '90', idWarehouse: 15, nameWarehouse: 'ZGZ 3', cityWarehouse: 'Zaragoza', countryWarehouse: 'España', idProduct: 1},
    {id: 18, quantity: 456, status: '78', idWarehouse: 16, nameWarehouse: 'ZGZ 5', cityWarehouse: 'Zaragoza', countryWarehouse: 'España', idProduct: 1},

  ];