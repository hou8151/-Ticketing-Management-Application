import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCommentDto } from './create-comment.dto';

export class UpdateCommentDto extends PartialType(CreateCommentDto) {
    @ApiProperty()
    CommentID: number;

    @ApiProperty()
    IssueID: number;

    @ApiProperty()
    Author: number;

   
     
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
