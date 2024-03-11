import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
    UserID: number;
    @ApiProperty()
    
    Username?: string;
  
    @ApiProperty()
    Password?: string;
  
    @ApiProperty()
    Email?: string;
    
    @ApiProperty()
    Role?: string;
     
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
