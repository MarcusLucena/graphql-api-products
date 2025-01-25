import { Test, TestingModule } from '@nestjs/testing';
import { ProductsModule } from './products.module';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';

describe('ProductsModule', () => {
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [ProductsModule],
    }).compile();
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });

  it('should provide ProductsService', () => {
    const service = module.get<ProductsService>(ProductsService);
    expect(service).toBeDefined();
  });

  it('should provide ProductsResolver', () => {
    const resolver = module.get<ProductsResolver>(ProductsResolver);
    expect(resolver).toBeDefined();
  });
});
