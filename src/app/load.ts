import {AppModule} from "./app.module";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

const mount = ()=> {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
}

export{ mount };
