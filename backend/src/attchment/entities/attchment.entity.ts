import { ApiProperty } from "@nestjs/swagger";
import { Issue } from "src/issue/entities/issue.entity"; // Adjust the import path based on your actual structure
import { Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Entity } from "typeorm";

@Entity({ name: 'Attachment' })
export class Attachment {
    @PrimaryGeneratedColumn({ type: "integer", name: "AttachmentID" })
    AttachmentID: number;
    
   // @ApiProperty()
  // @ManyToOne(() => Issue, issue => issue.attachments)
   //@JoinColumn({ name: "IssueID" })
   // issue: Issue;
   @ManyToOne(() => Issue, issue => issue.attachments)
   issue: Issue;

    
    @Column("text", { name: "FileName", nullable: true })
    FileName: string | null;
  
    
    @Column("text", { name: "FilePath", nullable: true })
    FilePath?: string | null;
  
    
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
