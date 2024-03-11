import { ApiProperty } from "@nestjs/swagger";
import { Issue } from "src/issue/entities/issue.entity"; // Adjust the import path based on your actual structure
import { Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";


export class Attachment {
    @PrimaryGeneratedColumn({ type: "integer", name: "AttachmentID" })
    AttachmentID: number;

    @ApiProperty()
    @Column({ type: "integer", name: "IssueID" })
    IssueID: number;

    @ManyToOne(() => Issue, issue => issue.attachments) // Establishing Many-to-One relationship with Issue
    @JoinColumn({ name: "IssueID" }) // Specify the foreign key column
    issue: Issue;

    @ApiProperty()
    @Column("text", { name: "FileName", nullable: true })
    FileName: string | null;

    @ApiProperty()
    @Column("text", { name: "FilePath", nullable: true })
    FilePath?: string | null;

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
}
