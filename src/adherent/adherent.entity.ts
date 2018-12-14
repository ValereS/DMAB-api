import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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

//   @Column({name: 'inscriptionDate'})
//   inscriptionDateString: string;

  @Column('int')
  fraisInscription: number;

  @Column('text')
  autre: string;

  @Column()
  actif: number;

  @Column('int')
  supprime: number;

  @Column('varchar')
  statut: string;

  @Column('int')
  adresse_id: number;
}
