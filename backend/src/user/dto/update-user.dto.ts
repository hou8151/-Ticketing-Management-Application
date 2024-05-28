import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { Issue } from 'src/issue/entities/issue.entity';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty()
    UserID: number;

    @ApiProperty()
    Username: string | null;

    @ApiProperty()
    Password: string | null;

    @ApiProperty()
    Email: string | null;

    @ApiProperty()
    Role: string | null;

    @ApiProperty()
    isDeleted: boolean | null;

    @ApiProperty()
    createdAt: Date | null;

    @ApiProperty()
    createdBy: number | null;

    @ApiProperty()
    updatedAt: Date | null;

    @ApiProperty()
    updatedBy: number | null;

    @ApiProperty()
    reportedIssues: Issue[];

    @ApiProperty()
    assignedIssues: Issue[];
}
