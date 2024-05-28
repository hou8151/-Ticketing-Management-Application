import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCommentDto } from './create-comment.dto';
import { Issue } from 'src/issue/entities/issue.entity';
import { User } from "src/entity/User";

export class UpdateCommentDto extends PartialType(CreateCommentDto) {
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
