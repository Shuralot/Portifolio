import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC3x4OGYkBZBl42YGKssfzaPwcMlUck_NU",
  authDomain: "spp-1701.firebaseapp.com",
  projectId: "spp-1701",
  storageBucket: "spp-1701.firebasestorage.app",
  messagingSenderId: "150001021065",
  appId: "1:150001021065:web:917619fd6af4bf21bd1658",
  measurementId: "G-PJMGHHM4LE"
};

const bootstrap = () =>
  bootstrapApplication(App, {
    ...config,
    providers: [
      provideRouter(routes),
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideFirestore(() => getFirestore())
    ]
  });

export default bootstrap;
