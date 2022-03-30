import { Entity, ObjectID, Column, BaseEntity, PrimaryColumn, CreateDateColumn, JoinColumn, ManyToMany, JoinTable, ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Group } from './group.entity';

@Entity('User')
export class User extends BaseEntity {
  
  @PrimaryGeneratedColumn()
  id: ObjectID;

  @Column('varchar', {unique: true})
  username: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToMany(
    () => Group,
  )
  groups: Group[]
}