import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Device } from './device.model';
import { CreateDeviceDto } from './dto/create-device.dto';
import { DeviceInfo } from '../device-info/device-info.model';
import { FilesService } from '../files/files.service';



@Injectable()
export class DeviceService {
  constructor(
    @InjectModel(Device)
    private deviceRepository: typeof Device,
    private fileService: FilesService,
  ) { }


  async createDevice(dto: CreateDeviceDto, image: any) { // TODO refactor any
    const fileName = await this.fileService.createFile(image);
    const device = await this.deviceRepository.create({ ...dto, image: fileName });
    return device;
  }


  async getAllDevices(page: number, limit: number, typeId?: number, brandId?: number) {
    const offset = page * limit - limit;
    const where = brandId && typeId
      ? { brandId, typeId }
      : brandId
        ? { brandId }
        : typeId
          ? { typeId }
          : {};
    const devices = await this.deviceRepository.findAndCountAll({ where, limit, offset });
    console.log('page ==>', page);
    console.log('limit ==>', limit);
    console.log('typeId ==>', typeId);
    console.log('brandId ==>', brandId);
    console.log('where ==>', where);
    console.log('devices ==>', devices);
    return devices;
  }


  async getOne(id: string) {
    const device = await this.deviceRepository.findOne({
      where: { id },
      include: [{ model: DeviceInfo, as: 'info' }],
    });
    return device;
  }


  async updateRating() {
    // TODO update rating of current device when user send new rating. Inject deviceService and user updateRating(dto)
    // const rating = await this.deviceRepository.findAll({ include: { all: true } });
    // return rating;
  }
}
