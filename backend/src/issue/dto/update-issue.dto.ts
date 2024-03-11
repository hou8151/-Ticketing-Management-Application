import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateIssueDto } from './create-issue.dto';

export class UpdateIssueDto extends PartialType(CreateIssueDto) {
    @ApiProperty()
    @ApiProperty()
    IssueID: number;

    @ApiProperty()
    Title  : string ;

    @ApiProperty()
    Description?: string;

    @ApiProperty()
    Reporter: number;

    @ApiProperty()
    Assignee: number;

    @ApiProperty()
    Priority: string;
    
    @ApiProperty()
    Status: string;

    @ApiProperty()
    DueDate: Date;

     
     @ApiProperty()
     isDeleted?: number;
  
     @ApiProperty()
     createdAt?: Date;
  
     @ApiProperty()
     createdBy?: number;
  
     @ApiProperty()
     updatedAt?: Date;
  
     @ApiProperty()
     updatedBy?: number;
}
