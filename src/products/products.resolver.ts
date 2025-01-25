import { Resolver, Query, Args } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './product.model';

@Resolver((of) => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query((returns) => [Product])
  products() {
    return this.productsService.findAll();
  }

  @Query((returns) => Product, { nullable: true })
  product(@Args('code') code: string) {
    return this.productsService.findOne(code);
  }
}
