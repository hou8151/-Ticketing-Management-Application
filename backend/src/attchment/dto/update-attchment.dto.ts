import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAttchmentDto } from './create-attchment.dto';
import { Issue } from 'src/issue/entities/issue.entity';

export class UpdateAttchmentDto extends PartialType(CreateAttchmentDto) {
    @ApiProperty()
    AttachmentID: number;

    @ApiProperty()
    issue: Issue;

    @ApiProperty()
    FileName: string | null;

    @ApiProperty()
    FilePath?: string | null;

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
}
