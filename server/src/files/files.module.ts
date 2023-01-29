import { Module } from '@nestjs/common';
import { FilesService } from './files.service';

//************************************
//* TODO Generally move all to Nginx *
//************************************

@Module({
  providers: [FilesService],
  exports: [FilesService],
})
export class FilesModule { }
