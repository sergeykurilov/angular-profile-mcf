import * as process from "process";

export const environment = {
  production: true,
  profile: process.env?.['PROD_PROFILE']
};
