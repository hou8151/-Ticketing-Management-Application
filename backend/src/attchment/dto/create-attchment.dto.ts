import { ApiProperty } from "@nestjs/swagger";

export class CreateAttchmentDto {
  
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
