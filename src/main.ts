



import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';



if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    importProvidersFrom(IonicModule.forRoot({})),
    provideRouter(routes),
    importProvidersFrom(provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyA6j99jogA-UjGzEdKicyoZS6KP1TMG4p8",
      authDomain: "phototag-536fe.firebaseapp.com",
      projectId: "phototag-536fe",
      storageBucket: "phototag-536fe.appspot.com",
      messagingSenderId: "671753256085",
      appId: "1:671753256085:web:4ce5132c74da0cc5c9ef9c"
    }))),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(provideStorage(() => getStorage()))
  ]
});



