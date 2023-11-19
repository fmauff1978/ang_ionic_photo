import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Storage, ref, uploadString, getDownloadURL } from '@angular/fire/storage';




@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  private async getLocation() {
    const location = await Geolocation.getCurrentPosition();
    return location.coords;
  }

  async takePhoto() {

    const {latitude, longitude} = await this.getLocation();
    const cameraPhoto = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 100
    });



  
}








}
