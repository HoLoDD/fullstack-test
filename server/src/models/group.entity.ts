import { BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ObjectID, ObjectIdColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('Group')
export class Group extends BaseEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('varchar')
  description: string

  @OneToMany(
    () => User, 
    (user) => user.group,
    {cascade: true}
  )
  users: User[];

}