import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'magic_link_requests' })
export class MagicLinkRequest {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id', type: 'uuid', nullable: true })
  userId: string | null;

  @Column({ type: 'citext' })
  email: string;

  @Column({ name: 'status_code', type: 'varchar', length: 32, default: 'requested' })
  statusCode: string;

  @Column({ name: 'correlation_id', type: 'uuid', unique: true })
  correlationId: string;

  @Column({ name: 'continue_url', type: 'text' })
  continueUrl: string;

  @Column({ name: 'client_nonce_hash', type: 'bytea', nullable: true })
  clientNonceHash: Buffer | null;

  @Column({ name: 'requested_ip', type: 'inet', nullable: true })
  requestedIp: string | null;

  @Column({ name: 'user_agent', type: 'text', nullable: true })
  userAgent: string | null;

  @Column({ name: 'firebase_event_id', type: 'varchar', length: 255, nullable: true })
  firebaseEventId: string | null;

  @CreateDateColumn({ name: 'requested_at', type: 'timestamptz' })
  requestedAt: Date;

  @Column({ name: 'sent_at', type: 'timestamptz', nullable: true })
  sentAt: Date | null;

  @Column({ name: 'expires_at', type: 'timestamptz' })
  expiresAt: Date;

  @Column({ name: 'consumed_at', type: 'timestamptz', nullable: true })
  consumedAt: Date | null;

  @Column({ name: 'failure_code', type: 'varchar', length: 100, nullable: true })
  failureCode: string | null;

  @Column({ name: 'failure_detail', type: 'varchar', length: 500, nullable: true })
  failureDetail: string | null;

  @Column({ type: 'jsonb', default: () => "'{}'::jsonb" })
  metadata: Record<string, unknown>;
}