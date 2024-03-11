import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAttchmentDto } from './create-attchment.dto';

export class UpdateAttchmentDto extends PartialType(CreateAttchmentDto) {
    @ApiProperty()
   A 
   @ApiProperty()
   AttachmentID?: number;

   @ApiProperty()
   IssueID?: number;

   @ApiProperty()
   FileName?: string;
   
   @ApiProperty()
    FilePath?: string;
 
    
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
