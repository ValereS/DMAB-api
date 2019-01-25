import { AdherentEntity } from 'adherent/adherent.entity';
import { AdherentDTO } from 'DTO/adherent.DTO';

export class AdherentDTOMapper {
    getAdherentsDTO(adhList: AdherentEntity[]) {
        const adhDTOList = new Array<AdherentDTO>();
        adhList.forEach(adh => {
            const adhDTO = new AdherentDTO();

            adhDTO.id = adh.id;
            adhDTO.numberAdherent = adh.numeroAdherent;
            adhDTO.name = adh.nom;
            adhDTO.firstname = adh.prenom;
            adhDTO.email = adh.email;
            adhDTO.age = adh.age;
            adhDTO.sex = adh.sexe;
            adhDTO.association = adh.association;
            adhDTO.knownBy = adh.connuPar;
            adhDTO.registrationDate  = new Date(adh.inscriptionDate);
            adhDTO.registrationFee = adh.fraisInscription;
            adhDTO.other = adh.autre;
            adhDTO.statut = adh.statut;
            adhDTO.adresse_id = adh.adresse_id;

            adhDTOList.push(adhDTO);
        });
        return adhDTOList;
    }
}