
 // Adjust the import path based on your actual structure
 import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';

 import { ApiProperty } from '@nestjs/swagger';
import { Issue } from 'src/issue/entities/issue.entity';
import { Comment } from 'src/comment/entities/comment.entity';
@Entity({ name: 'User' })


export class User {
 
    
    @PrimaryGeneratedColumn({ type: "integer", name: "UserID" })
    userID: number;

   
    @Column("text", { name: "Username", nullable: true })
    username: string | null;

    
    @Column("text", { name: "Password", nullable: true })
    password: string | null;

   
    @Column("text", { name: "Email", nullable: true })
    email: string | null;

    
    @Column("text", { name: "Role", nullable: true })
    role: string | null;

   
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

    @OneToMany(() => Issue, issue => issue.reporter)
    reportedIssues: Issue[];
    
   // @OneToOne(() => Issue, issue => issue.reporterId)
   // @JoinColumn()
 // reportedIssues: Issue[];

   @OneToMany(() => Issue, issue => issue.assignee)
   assignedIssues: Issue[];
   // @ApiProperty()
   // @OneToMany(() => Issue, issue => issue.assigneeId)
   // assignedIssues: Issue[];

    
}
