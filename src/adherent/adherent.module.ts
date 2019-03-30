import { Module } from '@nestjs/common';
import { AdherentEntity } from './adherent.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdherentController } from './adherent.controller';
import { AdherentService } from './adherent.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([AdherentEntity]),
      ],
      controllers: [AdherentController],
      providers: [AdherentService],
})
export class AdherentModule {}
