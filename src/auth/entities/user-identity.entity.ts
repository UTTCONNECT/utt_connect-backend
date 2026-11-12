import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user_identities' })
export class UserIdentity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id', type: 'uuid' })
  userId: string;

  @Column({ name: 'provider_id', type: 'smallint' })
  providerId: number;

  @Column({ name: 'provider_subject', type: 'varchar', length: 255 }) 
  providerSubject: string;

  @Column({ name: 'provider_email', type: 'citext', nullable: true }) 
  providerEmail: string | null;

  @Column({ name: 'claims_snapshot', type: 'jsonb', default: () => "'{}'::jsonb" })
  claimsSnapshot: Record<string, unknown>;

  @CreateDateColumn({ name: 'linked_at', type: 'timestamptz' })
  linkedAt: Date;

  @Column({ name: 'last_verified_at', type: 'timestamptz', nullable: true }) 
  lastVerifiedAt: Date | null;
}