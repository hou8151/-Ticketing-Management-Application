import { ApiProperty } from "@nestjs/swagger";
import { Attachment } from "src/attchment/entities/attchment.entity";

import { Project } from "src/project/entities/project.entity";
import { User } from "src/user/entities/user.entity";
import { Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable, OneToMany } from "typeorm";


export class Issue {
    @PrimaryGeneratedColumn({ type: "integer", name: "AttachmentID" })
    IssueID: number;

    @ApiProperty()
    @Column({ type: "string", name: "Title" })
    Title: string;

    @ApiProperty()
    @Column("text", { name: "Description", nullable: true })
    Description: string | null;

    @ApiProperty()
    @ManyToOne(() => User, user => user.reportedIssues)
    reporter: User;

    @ApiProperty()
    @ManyToOne(() => User, user => user.assignedIssues)
    assignee: User;

    @ApiProperty()
    @ManyToOne(() => Project, project => project.issues)
    project: Project;

    @ApiProperty()
    @Column("text", { name: "Priority", nullable: true })
    Priority: string;

    @ApiProperty()
    @Column("text", { name: "Status", nullable: true })
    Status: string;

    @ApiProperty()
    @Column({ type: "number", name: "Assignee" })
    DueDate: Date;

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

    @ManyToMany(() => Comment)
    @JoinTable()
    comments: Comment[];

    @OneToMany(() => Attachment, attchment => attchment.IssueID)
    attachments: Attachment[];
}
