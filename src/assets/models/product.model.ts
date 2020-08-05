import { Requirements } from "./requirements.model";

export class ProductModel {
    id: number;
    name: string;
    sku: string;
    barcode: string;
    image: string;
    price: string;
    enabled: boolean;
    requirements: Requirements[];
}