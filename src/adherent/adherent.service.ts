import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdherentEntity } from './adherent.entity';
import { Repository } from 'typeorm/repository/Repository';
import { ACTIF_VALUE } from 'Shared/Constants/constants';

@Injectable()
export class AdherentService {

    constructor(
        @InjectRepository(AdherentEntity)
        private readonly adherentRepository: Repository<AdherentEntity>,
    ){}

    async getAdherent(adh_id: number): Promise<AdherentEntity> {
        Logger.log("Get One Adherent");
        // return await this.adherentRepository.findOne(adh_id);
        return await this.adherentRepository
            .createQueryBuilder("adherent")
            // .select("adherent.nom")
            .leftJoinAndSelect("adherent.adresse", "adresse")
            .leftJoinAndSelect("adresse.ville", "ville")
            .where("adherent.id = :adh", {adh: adh_id})
            .andWhere("adherent.actif = :adh", {adh: ACTIF_VALUE})
            .getOne();
    }

    async getAdherents(): Promise<AdherentEntity[]> {
        Logger.log("Get all Adherents");
        // return await this.adherentRepository.find();
        return await this.adherentRepository
            .createQueryBuilder("adherent")
            .leftJoinAndSelect("adherent.adresse", "adresse")
            .leftJoinAndSelect("adresse.ville", "ville")
            .andWhere("adherent.actif = :adh", {adh: ACTIF_VALUE})
            .getMany();
    }

    async setAdherent(adherentEntity: AdherentEntity) {
        return this.adherentRepository.insert(adherentEntity);
    }
}
