import { ApiProperty } from "@nestjs/swagger";

export class CreateCommentDto {
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
