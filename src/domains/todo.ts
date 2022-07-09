import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm"
import { User } from "domains/user"

@Entity({name: "todos"})
export class Todo {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    uid: number

    @Column()
    title: string

    @Column({
      name: "is_done",
      default: false,
    })
    idDone: boolean

    @CreateDateColumn({name: "created_at"})
    createdAt: Date

    @ManyToOne(() => User, {
        eager: true,
        onDelete: "RESTRICT",
    })
    @JoinColumn(
        { name: "uid", referencedColumnName: "id" },
    )
    user: User
}