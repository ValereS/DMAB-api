import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdresseEntity } from './adresse.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([AdresseEntity]),
    ],
})
export class AdresseModule {}
