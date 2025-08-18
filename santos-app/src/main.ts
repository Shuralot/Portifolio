import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { App } from './app/app';
import { routes } from './app/app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

bootstrapApplication(App, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)), provideFirebaseApp(() => initializeApp({ projectId: "spp-1701", appId: "1:150001021065:web:917619fd6af4bf21bd1658", storageBucket: "spp-1701.firebasestorage.app", apiKey: "AIzaSyC3x4OGYkBZBl42YGKssfzaPwcMlUck_NU", authDomain: "spp-1701.firebaseapp.com", messagingSenderId: "150001021065", measurementId: "G-PJMGHHM4LE" })), provideFirestore(() => getFirestore())
  ]
}).catch(err => console.error(err));
