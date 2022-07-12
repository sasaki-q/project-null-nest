import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity({name: "messaging"})
export class Messaging {
    @PrimaryGeneratedColumn()
    id: number

    @Column({name: "from_uid"})
    fromUid: number

    @Column({name: "to_uid"})
    toUid: number

    @Column({type: "enum", default: "text"})
    type: "text" | "image"

    @Column()
    contents: string

    @CreateDateColumn({name: "created_at",type: 'timestamp', precision: 0, default: Date.now() })
    readonly createdAt: Date
}