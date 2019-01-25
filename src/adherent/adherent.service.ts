import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdherentEntity } from './adherent.entity';
import { Repository } from 'typeorm/repository/Repository';
import { AdherentDTO } from 'DTO/adherent.DTO';

@Injectable()
export class AdherentService {

    constructor(
        @InjectRepository(AdherentEntity)
        private readonly adherentRepository: Repository<AdherentEntity>,
    ){}

    async getAdherent(adh_id: number): Promise<AdherentEntity> {
        return await this.adherentRepository.findOne(adh_id);
    }

    async getAdherents(): Promise<AdherentEntity[]> {
        return await this.adherentRepository.find();
    }

    async setAdherent(adherentEntity: AdherentEntity) {
        return this.adherentRepository.insert(adherentEntity);
    }
}
