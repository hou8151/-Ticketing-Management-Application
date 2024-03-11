import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProjectDto } from './create-project.dto';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {
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
