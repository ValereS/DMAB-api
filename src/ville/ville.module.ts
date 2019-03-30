import { Module } from '@nestjs/common';
import { TypeOrmModule } from '../../node_modules/@nestjs/typeorm';
import { VilleEntity } from './ville.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([VilleEntity]),
    ],
})
export class VilleModule {}
