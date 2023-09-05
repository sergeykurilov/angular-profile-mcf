import * as process from "process";

export const environment = {
  production: true,
  url: process.env?.['PROD_PROFILE']
};
