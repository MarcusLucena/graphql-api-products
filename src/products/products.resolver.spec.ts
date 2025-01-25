import { Test, TestingModule } from '@nestjs/testing';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';
import { Product } from './product.model';
import * as productsData from '../data/mock-products.json';

describe('ProductsResolver', () => {
  let resolver: ProductsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsResolver,
        {
          provide: ProductsService,
          useValue: {
            findAll: jest
              .fn()
              .mockResolvedValue(
                (productsData as { products: Product[] }).products,
              ),
            findOne: jest
              .fn()
              .mockImplementation((code: string) =>
                Promise.resolve(
                  (productsData as { products: Product[] }).products.find(
                    (product: Product) => product.code === code,
                  ) || null,
                ),
              ),
          },
        },
      ],
    }).compile();

    resolver = module.get<ProductsResolver>(ProductsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('products', () => {
    it('should return an array of products', async () => {
      const result = await resolver.products();
      expect(result).toEqual(
        (productsData as { products: Product[] }).products,
      );
    });
  });

  describe('product', () => {
    it('should return a single product by code', async () => {
      const code = 'D22-2077-006';
      const result = await resolver.product(code);
      expect(result).toEqual(
        (productsData as { products: Product[] }).products.find(
          (product: Product) => product.code === code,
        ),
      );
    });

    it('should return null if product not found', async () => {
      const code = 'nonexistent';
      const result = await resolver.product(code);
      expect(result).toEqual(null);
    });
  });
});
