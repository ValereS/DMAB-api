import { Module } from '@nestjs/common';
import { AppController } from 'app.controller';
import { AppService } from 'app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AdherentModule } from 'adherent/adherent.module';
import { AdresseModule } from 'adresse/adresse.module';
import { VilleModule } from './ville/ville.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AdherentModule,
    AdresseModule,
    VilleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
