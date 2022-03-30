import { DataSourceOptions } from 'typeorm';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      DB_TYPE: "postgres";
      POSTGRES_PORT: string;
      POSTGRES_USER: string;
      POSTGRES_PASSWORD: string;
      POSTGRES_DB: string;
    }
  }
}

export {}