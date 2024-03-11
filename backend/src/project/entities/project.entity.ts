import { ApiProperty } from "@nestjs/swagger";
import { Issue } from "src/issue/entities/issue.entity";
import { Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
 // Adjust the import path based on your actual structure

export class Project {
    @PrimaryGeneratedColumn({ type: "integer", name: "ProjectID" })
    ProjectID: number;

    @ApiProperty()
    @Column("text", { name: "ProjectName", nullable: true })
    ProjectName: string | null;

    @ApiProperty()
    @Column("text", { name: "Description", nullable: true })
    Description: string | null;

    @ApiProperty()
    @Column("text", { name: "Email", nullable: true })
    Email: string | null;

    @ApiProperty()
    @Column("timestamp with time zone", { name: "StartDate", nullable: true })
    StartDate: Date | null;

    @ApiProperty()
    @Column("timestamp with time zone", { name: "EndDate", nullable: true })
    EndDate: Date | null;

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

    @OneToMany(() => Issue, issue => issue.project)
    issues: Issue[];
}
