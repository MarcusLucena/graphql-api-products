import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { ProductsData } from './product.type';
import * as productsData from '../data/mock-products.json';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of products', () => {
      const result: ProductsData['products'] = (productsData as ProductsData)
        .products;
      expect(service.findAll()).toEqual(result);
    });
  });

  describe('findOne', () => {
    it('should return a single product by code', () => {
      const code = 'D22-2077-006';
      const result = (productsData as ProductsData).products.find(
        (product) => product.code === code,
      );
      expect(service.findOne(code)).toEqual(result);
    });

    it('should return null if product not found', () => {
      const code = 'nonexistent';
      expect(service.findOne(code)).toBeNull();
    });
  });
});
