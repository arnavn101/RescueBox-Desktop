import {
  ElectronHandler,
  JobHandler,
  RegistrationHandler,
} from '../main/preload';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    electron: ElectronHandler;
    registration: RegistrationHandler;
    job: JobHandler;
  }
}

export {};
