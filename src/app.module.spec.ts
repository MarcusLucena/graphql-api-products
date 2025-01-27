import { Test, TestingModule } from '@nestjs/testing';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ProductsModule } from './products/products.module';

describe('AppModule', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
          driver: ApolloDriver,
          autoSchemaFile: 'schema.gql',
        }),
        ProductsModule,
      ],
    }).compile();
  });

  it('should be defined', () => {
    expect(app).toBeDefined();
  });

  it('should have GraphQLModule configured with ApolloDriver', () => {
    const graphqlModule = app.get<GraphQLModule>(GraphQLModule);
    expect(graphqlModule).toBeDefined();
    expect(graphqlModule.constructor.name).toBe('GraphQLModule');
  });

  it('should have ProductsModule imported', () => {
    const productsModule = app.get<ProductsModule>(ProductsModule);
    expect(productsModule).toBeDefined();
  });
});
