import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { AdherentEntity } from 'adherent/adherent.entity';
import { VilleEntity } from 'ville/ville.entity';

@Entity('adresse')
export class AdresseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    numeroVoie: string;

    @Column('varchar')
    typeVoie: string;

    @Column('varchar')
    nomVoie: string;

    @Column('varchar')
    commentaire: string;

    @Column('varchar', {select: false})
    statut: string;

    @Column('tinyint', {select: false})
    supprime: string;

    @OneToMany(type => AdherentEntity, adherents => adherents.adresse)
    adherents: AdherentEntity[];

    @ManyToOne(type => VilleEntity, ville => ville.adresses)
    ville: VilleEntity;
}
