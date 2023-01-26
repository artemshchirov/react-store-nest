import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class FilesService {


  // TODO async work with filesystem
  async createFile(file): Promise<string> {
    try {
      const fileName = v4() + '.jpg';
      const filePath = path.resolve(__dirname, '..', 'static');

      if (!fs.existsSync(filePath)) fs.mkdirSync(filePath, { recursive: true });

      fs.writeFileSync(path.join(filePath, fileName), file.buffer);
      return fileName;

    } catch (err) {
      throw new HttpException(
        'Error while saving file to disk',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
