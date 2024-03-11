import { ApiProperty } from "@nestjs/swagger";

export class CreateProjectDto {
    @ApiProperty()
    ProjectID ?: number;
  
    @ApiProperty()
    ProjectName?: string;
  
    @ApiProperty()
    Description?: string;
    
    @ApiProperty()
    StartDate ?: number;
    
    @ApiProperty()
    EndDate ?: number;
     
     @ApiProperty()
     isDeleted?: number;
  
     @ApiProperty()
     createdAt?: number;
  
     @ApiProperty()
     createdBy?: number;
  
     @ApiProperty()
     updatedAt?: number;
  
     @ApiProperty()
     updatedBy?: number;
}
