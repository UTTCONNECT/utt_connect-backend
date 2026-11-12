import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user_statuses' })
export class UserStatus {
  @PrimaryColumn({ type: 'varchar', length: 32 })
  code: string;

  @Column({ type: 'varchar', length: 255 }) 
  description: string;
}