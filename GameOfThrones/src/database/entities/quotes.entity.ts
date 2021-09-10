import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Quotes{
    @PrimaryGeneratedColumn()
    quote_id: number;

    @Column()
    sentence: string;

    @Column()
    name: string;

    @Column()
    slug: string;

    @Column()
    house_name: string;

    @Column()
    house_slug: string;
}