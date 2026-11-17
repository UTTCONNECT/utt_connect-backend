import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'audit_events' })
export class AuditEvent {
  @PrimaryColumn({
    name: 'occurred_at',
    type: 'timestamptz',
    default: () => 'now()',
  })
  occurredAt!: Date;

  @PrimaryColumn({
    name: 'id',
    type: 'uuid',
    default: () => 'gen_random_uuid()',
  })
  id!: string;

  @Column({ name: 'event_type_code', type: 'varchar', length: 80 })
  eventTypeCode!: string;

  @Column({ name: 'actor_user_id', type: 'uuid', nullable: true })
  actorUserId!: string | null;

  @Column({ name: 'subject_user_id', type: 'uuid', nullable: true })
  subjectUserId!: string | null;

  @Column({ name: 'magic_link_request_id', type: 'uuid', nullable: true })
  magicLinkRequestId!: string | null;

  @Column({ name: 'correlation_id', type: 'uuid', nullable: true })
  correlationId!: string | null;

  @Column({
    name: 'resource_type',
    type: 'varchar',
    length: 80,
    nullable: true,
  })
  resourceType!: string | null;

  @Column({
    name: 'resource_id',
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  resourceId!: string | null;

  @Column({ name: 'source_ip', type: 'inet', nullable: true })
  sourceIp!: string | null;

  @Column({ name: 'user_agent', type: 'text', nullable: true })
  userAgent!: string | null;

  @Column({ name: 'succeeded', type: 'boolean' })
  succeeded!: boolean;

  @Column({ name: 'payload', type: 'jsonb', default: () => "'{}'::jsonb" })
  payload!: Record<string, unknown>;
}
