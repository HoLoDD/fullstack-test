import { group } from 'console';
import { Entity, Column, BaseEntity, CreateDateColumn, ManyToMany, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Group } from './group.entity';


@Entity('User')
export class User extends BaseEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {unique: true})
  username: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(
    () => Group,
    (group) => group.users
  )
  group: Group
}