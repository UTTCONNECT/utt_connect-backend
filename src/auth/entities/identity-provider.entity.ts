import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'identity_providers' })
export class IdentityProvider {
  @PrimaryGeneratedColumn('increment', { type: 'smallint' })
  id: number;

  @Column({ type: 'varchar', length: 32, unique: true })
  code: string;

  @Column({ type: 'varchar', length: 255 })
  description: string;
}
