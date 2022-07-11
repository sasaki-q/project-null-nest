import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity({name: "users"})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({name: "thirdparty_uid"})
    thirdpartyUid: string

    @Column()
    email: string

    @Column({name: "profile_image_url"})
    profileImageUrl: string

    @Column({name: "self_introduction"})
    selfIntroduction: string

    @CreateDateColumn({name: "created_at",type: 'timestamp', precision: 0, default: Date.now() })
    readonly createdAt: Date
}