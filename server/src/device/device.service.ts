import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Device } from './device.model';
import { CreateDeviceDto } from './dto/create-device.dto';



@Injectable()
export class DeviceService {
  constructor(
    @InjectModel(Device)
    private deviceRepository: typeof Device,
  ) { }


  async createDevice(dto: CreateDeviceDto) {
    const device = await this.deviceRepository.create(dto);
    return device;
  }


  async getAllDevices() {
    const devices = await this.deviceRepository.findAll({ include: { all: true } });
    return devices;
  }


  async getOne() {
    const device = await this.deviceRepository.findOne({
      include: { all: true },
    });
    return device;
  }

  async updateRating() {
    // TODO update rating of current device when user send new rating. Inject deviceService and user updateRating(dto)
    // const rating = await this.deviceRepository.findAll({ include: { all: true } });
    // return rating;
  }
}
