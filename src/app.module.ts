import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/task.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HelloModule } from './hello/hello.module';
import { PaymentsModule } from './payments/payments.module';

@Module({
  imports: [
    TaskModule,
    ProjectsModule,
    AuthModule,
    UsersModule,
    HelloModule,
    PaymentsModule,
  ],
})
export class AppModule {}
