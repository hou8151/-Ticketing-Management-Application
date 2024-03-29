
import { ApiProperty } from "@nestjs/swagger";
import { Issue } from "src/issue/entities/issue.entity";

import { User } from "src/user/entities/user.entity";

import { Column, PrimaryGeneratedColumn, ManyToOne, Entity } from "typeorm";
@Entity({ name: 'Comment' })
export class Comment {
    @PrimaryGeneratedColumn({ type: "integer", name: "CommentID" })
    CommentID: number;

    @ApiProperty()
    @Column("text", { name: "Priority", nullable: true })
    Priority: string;

    @ApiProperty()
    @Column("text", { name: "Text", nullable: true })
    Text: string;

    @ApiProperty()
    @Column("boolean", { name: "isdeleted", nullable: true, default: false })
    isDeleted: boolean | null;

    @ApiProperty()
    @Column("timestamp with time zone", { name: "createdat", nullable: true })
    createdAt: Date | null;

    @ApiProperty()
    @Column("integer", { name: "createdby", nullable: true })
    createdBy: number | null;

    @ApiProperty()
    @Column("timestamp with time zone", { name: "updatedat", nullable: true })
    updatedAt: Date | null;

    @ApiProperty()
    @Column("integer", { name: "updatedby", nullable: true })
    updatedBy: number | null;

     //@ApiProperty()
    // @ManyToOne(() => User, user => user.comments)
    //   author: User;
}
