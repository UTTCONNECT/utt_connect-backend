import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'magic_link_statuses' })
export class MagicLinkStatus {
  @PrimaryColumn({ type: 'varchar', length: 32 })
  code: string;

  @Column({ type: 'varchar', length: 255 }) 
  description: string;

  @Column({ name: 'is_terminal', type: 'boolean' })
  isTerminal: boolean;
}