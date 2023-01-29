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
import { ApiResponse } from '@nestjs/swagger/dist';



@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) { }

  
  @ApiOperation({ summary: 'Create post' })
  @ApiResponse({ status: 201, type: Post })
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(@Body() dto: CreatePostDto, @UploadedFile() image: Express.Multer.File) {
    return this.postsService.createPost(dto, image);
  }


  // TODO getAll


  // TODO getPostsByUser
}
