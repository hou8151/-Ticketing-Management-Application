import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateWorkfloDto } from './create-workflo.dto';

export class UpdateWorkfloDto extends PartialType(CreateWorkfloDto) {
    @ApiProperty()
    WorkflowID: number;

    @ApiProperty()
    Name: string;

    @ApiProperty()
    Steps: string;

   
     
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
