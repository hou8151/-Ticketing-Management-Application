import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/entity/User";
import { Issue } from "src/issue/entities/issue.entity";

export class CreateCommentDto {
    @ApiProperty()
    CommentID: number;

    @ApiProperty()
    issue: Issue;

    @ApiProperty()
    author: User;

     @ApiProperty()
     Text: string;
  
     @ApiProperty()
     createdAt?: Date;
  
     @ApiProperty()
     createdBy?: number;
  
     @ApiProperty()
     updatedAt?: Date;
  
     @ApiProperty()
     updatedBy?: number;
}
