import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('audit_event_types')
export class AuditEventType {
  @PrimaryColumn({ type: 'varchar', length: 80 })
  code!: string;

  @Column({ type: 'varchar', length: 255 })
  description!: string;
}