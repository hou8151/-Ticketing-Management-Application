import { ApiProperty } from "@nestjs/swagger";

export class CreateWorkfloDto {
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
