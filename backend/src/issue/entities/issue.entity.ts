
import { ApiProperty } from "@nestjs/swagger";
import { Attachment } from "src/attchment/entities/attchment.entity";
import { Comment } from "src/comment/entities/comment.entity";

import { Project } from "src/project/entities/project.entity";
import { User } from "src/user/entities/user.entity";
import { Column, PrimaryGeneratedColumn, ManyToOne, JoinTable, OneToMany, Entity, OneToOne, JoinColumn, ManyToMany } from "typeorm";

@Entity({ name: 'Issue' })
export class Issue {
  
  @PrimaryGeneratedColumn({ type: "integer", name: "IssueID" })
  issueId: number;

 
  @Column({ type: "varchar", name: "Title",nullable: true })
  title: string| null;

  
  @Column("text", { name: "Description", nullable: true })
  description: string | null;

  
  @Column("text", { name: "Status", nullable: true })
  status: string;

 
  @Column("timestamp with time zone", { name: "DueDate", nullable: true })
  dueDate: Date | null;

  
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

  @Column("text", { name: "Priority", nullable: true })
 priority: string;
  
 
  @ManyToOne(() => User, user => user.reportedIssues)
  reporter: User;
 
 // @ManyToOne(() => User, user => user.reportedIssues)
 //reporterId: User;

 @ManyToOne(() => User, user => user.assignedIssues)
 assignee: User;
 // @ApiProperty()
 // @ManyToOne(() => User, user => user.assignedIssues)
 // assigneeId: User;
 @ManyToOne(() => Project, project => project.issues)
 project: Project;

 // @ApiProperty()
//  @ManyToOne(() => Project, project => project.issues)
//  projectId: Project;
 @ManyToMany(() => Comment)
 @JoinTable()
 comments: Comment[];

  
  

@OneToMany(() => Attachment, attachment => attachment.issue) // Define the relationship with attachments
attachments: Attachment[]; // Collection of attachments associated with the issue

    //@OneToMany(() => Attachment, attachment => attachment.issue)
 // attachments: Attachment[];

//  @ApiProperty()
 // @OneToMany(() => Comment, comment => comment.issueId)
 // @JoinColumn({ name: 'issueId' }) // Specify the name of the foreign key column
//  comments: Comment[];
  
}
