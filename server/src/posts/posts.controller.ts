import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) { }

  @ApiOperation({ summary: 'Create post' })
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  // TODO: change name "create" -> "createPost"
  create(@Body() dto: CreatePostDto, @UploadedFile() image: Express.Multer.File) {
    return this.postsService.createPost(dto, image);
  }
}
