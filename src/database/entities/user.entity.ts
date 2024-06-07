import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  isActive: boolean;

  @Column()
  address: string;

  @Column()
  country: string;

  @Column()
  isBeneficiary: boolean;

  @Column()
  isPrimary: boolean;
}
