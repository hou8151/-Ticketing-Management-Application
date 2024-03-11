import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentModule } from './comment/comment.module';
import { WorkfloModule } from './workflo/workflo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AttchmentModule } from './attchment/attchment.module';
import { ProjectModule } from './project/project.module';
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username:'postgres',
        password: 'postgres',
        database: 'api',
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
 
  CommentModule, 
  WorkfloModule,
  UserModule,
  AttchmentModule,
  ProjectModule
  ],
  controllers: [AppController, ],
  providers: [AppService],
})
export class AppModule {}
