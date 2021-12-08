import { Module } from '@nestjs/common';
import { PriceListService } from './environment/services/price-list.service';
import { PRICE_LIST_CONTROLLERS } from './controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PriceList } from '../../database';
import { UserModule } from '../user/user.module';
import { ClinicModule } from '../clinic/clinic.module';
import { OWNER_CONTROLLERS } from '../owner/controllers';
import { BaseRepositoryProvider, PriceListRepository } from '../../core';
import { WorkModule } from '../work/work.module';
import { PriceListServiceProvider } from './environment';

@Module({
  imports: [TypeOrmModule.forFeature([PriceList]), ClinicModule, WorkModule],
  controllers: PRICE_LIST_CONTROLLERS,
  providers: [
    PriceListServiceProvider,
    BaseRepositoryProvider(PriceListRepository),
  ],
  exports: [PriceListServiceProvider],
})
export class PriceListModule {}
