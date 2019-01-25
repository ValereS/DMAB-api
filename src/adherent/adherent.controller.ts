import { Controller, Get, Post, Param, Header, Put, Body } from '@nestjs/common';
import { AdherentService } from './adherent.service';
import { AdherentEntity } from './adherent.entity';
import { ROUTE_ADHERENT } from 'config/routes';
import { AdherentDTOMapper } from 'Mapper/adherentDTOMapper';
import { AdherentDTO } from 'DTO/adherent.DTO';

@Controller(ROUTE_ADHERENT)
export class AdherentController {
    constructor(
        private adherentService: AdherentService,
    ) {}

    @Get('/s')
    @Header('Cache-Control', 'none')
    getAdherents(): Promise<AdherentEntity[]> {
        return this.adherentService.getAdherents();
    }

    @Get(':id')
    getAdherent(@Param('id') id): Promise<AdherentEntity> {
        return this.adherentService.getAdherent(id);
    }

    @Put('/add')
    setAdherent(@Body() adherentDTO: any) {
        this.adherentService.setAdherent(adherentDTO);
    }
}
