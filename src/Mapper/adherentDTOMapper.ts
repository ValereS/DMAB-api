import { AdherentEntity } from 'adherent/adherent.entity';
import { AdherentDTO } from 'DTO/adherent.DTO';

export class AdherentDTOMapper {
    getAdherentsDTO(adhList: AdherentEntity[]) {
        const adhDTOList = new Array<AdherentDTO>();
        adhDTOList.forEach(adh => {
            const adhDTO = new AdherentDTO();

            adhDTO.id = adh.id;
            adhDTO.numeroAdherent = adh.numeroAdherent;
            adhDTO.nom = adh.nom;
            adhDTO.prenom = adh.prenom;
            adhDTO.email = adh.email;
            adhDTO.age = adh.age;
            adhDTO.sexe = adh.sexe;
            adhDTO.association = adh.association;
            adhDTO.connuPar = adh.connuPar;
            adhDTO.inscriptionDate  = new Date(adh.inscriptionDate);
            adhDTO.fraisInscription = adh.fraisInscription;
            adhDTO.autre = adh.autre;
            adhDTO.actif = adh.actif;
            adhDTO.supprime = adh.supprime;
            adhDTO.statut = adh.statut;
            adhDTO.adresse_id = adh.adresse_id;

            adhDTOList.push(adhDTO);
        });
        return adhDTOList;
    }
}