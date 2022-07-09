import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, JoinColumn } from "typeorm"

export type Role = "MASTER" | "ADMIN" | "USER"

@Entity({name: "users"})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @PrimaryGeneratedColumn({name: "thirdparty_uid"})
    thirdpartyUid: string

    @Column()
    email: string

    @CreateDateColumn({name: "created_at"})
    createdAt: Date
}