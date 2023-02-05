import { makeAutoObservable } from "mobx";

export interface IDevice {
  id: number;
  name: string;
}

export interface IDevices extends IDevice {
  price: number;
  rating: number;
  img: string;
}

export default class DeviceStore {
  private _types: IDevice[];
  private _brands: IDevice[];
  private _devices: IDevices[];
  private _selectedType: IDevice | null;

  constructor() {
    this._types = [
      { id: 0, name: "Smartphones" },
      { id: 1, name: "Computers" },
      { id: 2, name: "Notebooks" },
      { id: 3, name: "Refrigerators" },
      { id: 4, name: "Laptops" },
      { id: 5, name: "Tablets" },
    ];
    this._brands = [
      { id: 0, name: "Samsung" },
      { id: 1, name: "Apple" },
      { id: 2, name: "Xiaomi" },
      { id: 3, name: "Honor" },
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
      {
        id: 4,
        name: "Iphone 15 pro",
        price: 4000,
        rating: 5,
        img: "https://images.unsplash.com/photo-1611791485440-24e8239a0377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTIlMjBwcm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 5,
        name: "Iphone 16 pro",
        price: 4000,
        rating: 4,
        img: "https://images.unsplash.com/photo-1611791485440-24e8239a0377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTIlMjBwcm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 6,
        name: "Iphone 17 pro",
        price: 4000,
        rating: 3,
        img: "https://images.unsplash.com/photo-1611791485440-24e8239a0377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTIlMjBwcm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 7,
        name: "Iphone 18 pro",
        price: 4000,
        rating: 2,
        img: "https://images.unsplash.com/photo-1611791485440-24e8239a0377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTIlMjBwcm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        id: 8,
        name: "Iphone 19 pro",
        price: 4000,
        rating: 1,
        img: "https://images.unsplash.com/photo-1611791485440-24e8239a0377?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTIlMjBwcm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
    ];
    this._selectedType = null

    makeAutoObservable(this);
  }

  setTypes(types: IDevice[]) {
    this._types = types;
  }

  setBrands(brands: IDevice[]) {
    this._brands = brands;
  }

  setDevices(devices: IDevices[]) {
    this._devices = devices;
  }

  setSelectedType(type: IDevice) {
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
