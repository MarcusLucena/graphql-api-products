import { ObjectType, Field, Float } from '@nestjs/graphql';

@ObjectType()
class ProductDetails {
  @Field()
  name: string;

  @Field()
  description: string;
}

@ObjectType()
export class Product {
  @Field()
  code: string;

  @Field()
  name: string;

  @Field()
  available: boolean;

  @Field()
  visible: boolean;

  @Field((type) => ProductDetails)
  details: ProductDetails;

  @Field()
  fullPriceInCents: string;

  @Field()
  salePriceInCents: string;

  @Field((type) => Float)
  rating: number;

  @Field()
  image: string;

  @Field()
  stockAvailable: boolean;
}
