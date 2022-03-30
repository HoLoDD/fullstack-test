import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ObjectID, ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('Group')
export class Group extends BaseEntity {
  
  @PrimaryGeneratedColumn()
  id: ObjectID;

  @Column('varchar')
  name: string;

  @Column('varchar')
  description: string

  @ManyToMany(
    () => User,
  )
  @JoinTable()
  users: User[];

}