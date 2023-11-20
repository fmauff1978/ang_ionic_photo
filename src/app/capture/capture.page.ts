import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PhotoService } from '../photo.service';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.page.html',
  styleUrls: ['./capture.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CapturePage  {



  constructor(private ps: PhotoService) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method


  openCamera(){

    this.ps.takePhoto();
    console.log ("clicado");

  }

}
