
 // Adjust the import path based on your actual structure
 import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

 import { ApiProperty } from '@nestjs/swagger';
import { Issue } from 'src/issue/entities/issue.entity';

@Entity({ name: 'User' })


export class User {
 
    
    @PrimaryGeneratedColumn({ type: "integer", name: "UserID" })
    UserID: number;
  
    @ApiProperty()
    @Column("text", { name: "Username", nullable: true})
    Username: string | null;
  
    @ApiProperty()
    @Column("text", { name: "Password", nullable: true })
    Password: string | null;
    
    @ApiProperty()
    @Column("text", { name: "Email", nullable: true })
    Email: string | null;
  
    @ApiProperty()
    @Column("text", { name: "Role", nullable: true })
    Role: string | null;
    
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
   
   
   @OneToMany(() => Issue, issue => issue.reporter)
    reportedIssues: Issue[];

   @OneToMany(() => Issue, issue => issue.assignee)
   assignedIssues: Issue[];
  
 
   
}
