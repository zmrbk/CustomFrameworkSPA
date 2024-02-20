import { appModule } from "./app/app.module";
import { bootstrap, _ } from "framework";

_.delay(1000).then(() => {
  bootstrap(appModule);
});
