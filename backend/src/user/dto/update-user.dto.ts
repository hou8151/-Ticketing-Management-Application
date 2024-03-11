import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
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
