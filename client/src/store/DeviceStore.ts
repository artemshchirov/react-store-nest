import { makeAutoObservable } from "mobx";

export interface Device {
  id: number;
  name: string;
}

export interface Devices extends Device {
  price: number;
  rating: number;
  img: string;
}

export default class DeviceStore {
  private _types: Device[];
  private _brands: Device[];
  private _devices: Devices[];
  private _selectedType: Device | null;

  constructor() {
    this._types = [
      { id: 0, name: "Smartphones" },
      { id: 1, name: "Computers" },
      { id: 2, name: "Notebooks" },
      { id: 3, name: "Refrigerators" },
    ];
    this._brands = [
      { id: 0, name: "Samsung" },
      { id: 1, name: "Apple" },
    ];
    this._devices = [
      {
        id: 0,
        name: "Iphone 11 pro",
        price: 1000,
        rating: 1,
        img: "https://images.unsplash.com/photo-1611791485440-24e8239a0377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTIlMjBwcm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 1,
        name: "Iphone 12 pro",
        price: 2000,
        rating: 2,
        img: "https://images.unsplash.com/photo-1611791485440-24e8239a0377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTIlMjBwcm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 2,
        name: "Iphone 13 pro",
        price: 3000,
        rating: 3,
        img: "https://images.unsplash.com/photo-1611791485440-24e8239a0377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTIlMjBwcm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 3,
        name: "Iphone 14 pro",
        price: 4000,
        rating: 4,
        img: "https://images.unsplash.com/photo-1611791485440-24e8239a0377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTIlMjBwcm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
    ];
    this._selectedType = null

    makeAutoObservable(this);
  }

  setTypes(types: Device[]) {
    this._types = types;
  }

  setBrands(brands: Device[]) {
    this._brands = brands;
  }

  setDevices(devices: Devices[]) {
    this._devices = devices;
  }

  setSelectedType(type: Device) {
    this._selectedType = type;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }
}
