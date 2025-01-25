import { Injectable } from '@nestjs/common';
import { ProductsData } from './product.type';
import productsData from '../data/mock-products.json';

@Injectable()
export class ProductsService {
  private products: ProductsData['products'] = (productsData as ProductsData)
    .products;

  findAll() {
    return this.products;
  }

  findOne(code: string) {
    return this.products.find((product) => product.code === code) || null;
  }
}
