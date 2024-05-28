import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProjectDto } from './create-project.dto';
import { Issue } from 'src/issue/entities/issue.entity';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {
    @ApiProperty()
    ProjectID: number;

    @ApiProperty()
    ProjectName: string | null;

    @ApiProperty()
    Description: string | null;

    @ApiProperty()
    Email: string | null;

    @ApiProperty()
    StartDate: Date | null;

    @ApiProperty()
    EndDate: Date | null;

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
    issues: Issue[];
}
