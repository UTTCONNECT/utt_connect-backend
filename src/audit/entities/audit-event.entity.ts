import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('audit_events')
export class AuditEvent {
  @PrimaryColumn({ type: 'timestamptz', default: () => 'now()' })
  occurred_at!: Date;

  @PrimaryColumn({ type: 'uuid', default: () => 'gen_random_uuid()' })
  id!: string;

  @Column({ type: 'varchar', length: 80 })
  event_type_code!: string;

  @Column({ type: 'uuid', nullable: true })
  actor_user_id!: string;

  @Column({ type: 'uuid', nullable: true })
  subject_user_id!: string;

  @Column({ type: 'uuid', nullable: true })
  magic_link_request_id!: string;

  @Column({ type: 'uuid', nullable: true })
  correlation_id!: string;

  @Column({ type: 'varchar', length: 80, nullable: true })
  resource_type!: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  resource_id!: string;

  @Column({ type: 'inet', nullable: true })
  source_ip!: string;

  @Column({ type: 'text', nullable: true })
  user_agent!: string;

  @Column({ type: 'boolean' })
  succeeded!: boolean;

  @Column({ type: 'jsonb', default: {} })
  payload!: any;
}