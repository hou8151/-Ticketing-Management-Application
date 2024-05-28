import { ApiProperty } from "@nestjs/swagger";
import { Issue } from "src/issue/entities/issue.entity";

export class CreateAttchmentDto {
  
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
