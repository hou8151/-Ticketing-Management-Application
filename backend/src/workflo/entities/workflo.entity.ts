import { ApiProperty } from "@nestjs/swagger";
import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Workflow {
    @PrimaryGeneratedColumn({ type: "integer", name: "WorkflowID" })
    WorkflowID: number;

    @ApiProperty()
    @Column({ type: "string", name: "Name" })
    Name: string;

    @ApiProperty()
    @Column({ type: "string", name: "Steps" })
    Steps: string;

    @ApiProperty()
    @Column("boolean", { name: "isdeleted", nullable: true, default: false })
    isDeleted: boolean | null;

    @ApiProperty()
    @Column("timestamp with time zone", { name: "createdat", nullable: true })
    createdAt: Date | null;

    @ApiProperty()
    @Column("integer", { name: "createdby", nullable: true })
    createdBy: number | null;

    @ApiProperty()
    @Column("timestamp with time zone", { name: "updatedat", nullable: true })
    updatedAt: Date | null;

    @ApiProperty()
    @Column("integer", { name: "updatedby", nullable: true })
    updatedBy: number | null;
}
