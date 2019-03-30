import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, ManyToOne, OneToOne, JoinColumn, JoinTable } from 'typeorm';
import { AdresseEntity } from 'adresse/adresse.entity';

@Entity('adherent')
export class AdherentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int')
  numeroAdherent: number;

  @Column('varchar')
  nom: string;

  @Column('varchar')
  prenom: string;

  @Column('varchar')
  email: string;

  @Column('int')
  age: number;

  @Column('char')
  sexe: string;

  @Column('varchar')
  association: string;

  @Column('varchar')
  connuPar: string;

  @Column('datetime')
  inscriptionDate: Date;

  @Column('int')
  fraisInscription: number;

  @Column('text')
  autre: string;

  @Column({select: false})
  actif: number;

  @Column('int', {select: false})
  supprime: number;

  @Column('varchar', {select: false})
  statut: string;

  @ManyToOne(type => AdresseEntity, adresse => adresse.adherents)
  adresse: AdresseEntity;
}
