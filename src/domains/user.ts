import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, JoinColumn } from "typeorm"
import { Todo } from "domains/todo"

export type Role = "MASTER" | "ADMIN" | "USER"

@Entity({name: "users"})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    age: number

    @Column()
    name: string

    @Column({
      type: "enum",
      enum: ["MASTER", "ADMIN", "USER"],
      default: "USER",
    })
    role: Role

    @Column()
    email: string

    @Column()
    password: string

    @CreateDateColumn({name: "created_at"})
    createdAt: Date

    @OneToMany(
      () => Todo, 
      (todo) => todo.user,
      {
        nullable: true,
        createForeignKeyConstraints: true,
      }
    )
    @JoinColumn({
        name: "id", referencedColumnName: "uid"
    })
    todos?: Todo[]
}