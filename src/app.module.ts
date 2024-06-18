import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { PostsModule } from './posts/posts.module';
import { BffModule } from './modules/bff/bff.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [AuthModule, BffModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
