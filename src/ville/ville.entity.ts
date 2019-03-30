import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "../../node_modules/typeorm";
import { AdresseEntity } from "adresse/adresse.entity";

@Entity('ville')
export class VilleEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    codePostal: string;

    @Column('varchar')
    nom: string;

    @Column('tinyint', {select: false})
    supprime: string;

    @OneToMany(type => AdresseEntity, adresse => adresse.ville)
    adresses: AdresseEntity[];
}