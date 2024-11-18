import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaClient } from '@prisma/client';
import { PaginationDto } from 'src/common';

@Injectable()
export class ProductService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger("ProductService");
  async onModuleInit() {
    this.$connect();
    this.logger.log('Database connected');
  }
  create(createProductDto: CreateProductDto) {
    return this.product.create({ data: createProductDto }).then((product) => {
      return product;
    });
  }

  findAll(paginationDto: PaginationDto) {
    const { limit, page } = paginationDto;

    return this.product.findMany({
      take: limit,
      skip: (page - 1) * limit
    })

  }

  findOne(id: number) {
    return this.product.findUnique({ where: { id } });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const { id: __, ...data } = updateProductDto;

    return this.product.update({ where: { id }, data: data });
  }


}
