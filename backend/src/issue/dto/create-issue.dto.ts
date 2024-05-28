import { ApiProperty } from "@nestjs/swagger";
import { Attachment } from "src/attchment/entities/attchment.entity";
import { Comment } from "src/comment/entities/comment.entity";
import { User } from "src/entity/User";
import { Project } from "src/project/entities/project.entity";

export class CreateIssueDto {
    @ApiProperty()
    issueId: number;

    @ApiProperty()
    Title: string;

    @ApiProperty()
    Description: string | null;

    @ApiProperty()
    Status: string;

    @ApiProperty()
    DueDate: Date | null;

    @ApiProperty()
    isDeleted: boolean | null;

    @ApiProperty()
    createdAt: Date | null;

    @ApiProperty()
    createdBy: number | null;

    @ApiProperty()
    updatedAt: Date | null;

    @ApiProperty()
    updatedBy: number | null;

    // This property is not included as it's a relationship, not a direct attribute of the Issue entity
   // @ApiProperty()
   //  attachments: Attachment;
  @ApiProperty()
    reporterId: User;

 //   @ApiProperty()
  // assigneeId: User;

  //  @ApiProperty()
   // projectId: Project;

    //@ApiProperty()
   // Priority: string;

   // @ApiProperty()
   //comments: Comment;
}
