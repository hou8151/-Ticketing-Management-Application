
import { ApiProperty } from "@nestjs/swagger";
import { Issue } from "src/issue/entities/issue.entity";

import { User } from "src/user/entities/user.entity";

import { Column, PrimaryGeneratedColumn, ManyToOne, Entity, JoinColumn } from "typeorm";
@Entity({ name: 'Comment' })
export class Comment {
    @PrimaryGeneratedColumn({ type: "integer", name: "CommentID" })
    CommentID: number;


    @ManyToOne(() => Issue, issue => issue.comments)
    issue: Issue;

    @ManyToOne(() => User)
    author: User;

    @Column("text", { name: "Priority", nullable: true })
    Priority: string;

   
    @Column("text", { name: "Text", nullable: true })
    Text: string;

    
    @Column("boolean", { name: "isdeleted", nullable: true, default: false })
    isDeleted: boolean | null;

   
    @Column("timestamp with time zone", { name: "createdat", nullable: true })
    createdAt: Date | null;

   
    @Column("integer", { name: "createdby", nullable: true })
    createdBy: number | null;

    @Column("timestamp with time zone", { name: "updatedat", nullable: true })
    updatedAt: Date | null;

    
    @Column("integer", { name: "updatedby", nullable: true })
    updatedBy: number | null;

}
