import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DeviceInfo } from '../device-info/device-info.model';



@Injectable()
export class DeviceInfoService {
  constructor(
    @InjectModel(DeviceInfo)
    private deviceInfoRepository: typeof DeviceInfo,
  ) { }


  async createDeviceInfo(info: string, deviceId: number) { // TODO need to be dto or just parameter is ok?
    const deviceInfo = JSON.parse(info)

    deviceInfo.forEach(i => {
      console.log('deviceInfo i ==>', i)
      this.deviceInfoRepository.create({ title: i.title, description: i.description, deviceId: deviceId })
    });
  }
}