
import { ApiProperty } from "@nestjs/swagger";
import { Issue } from "src/issue/entities/issue.entity";
import { Column, PrimaryGeneratedColumn, OneToMany, Entity, ManyToMany, JoinTable } from "typeorm";
 // Adjust the import path based on your actual structure
 @Entity({ name: 'Project' })
export class Project {
    @PrimaryGeneratedColumn({ type: "integer", name: "ProjectID" })
    projectID: number;

    @ApiProperty()
    @Column("text", { name: "ProjectName", nullable: true })
    projectName: string | null;

    @ApiProperty()
    @Column("text", { name: "Description", nullable: true })
    description: string | null;

    @ApiProperty()
    @Column("text", { name: "Email", nullable: true })
    email: string | null;

    @ApiProperty()
    @Column("timestamp with time zone", { name: "StartDate", nullable: true })
    startDate: Date | null;

    @ApiProperty()
    @Column("timestamp with time zone", { name: "EndDate", nullable: true })
    endDate: Date | null;

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
