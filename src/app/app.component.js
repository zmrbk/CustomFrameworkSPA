import { WFMComponent } from "framework";
import { appHeader } from "./common/app.header";

class AppComponent extends WFMComponent {
  constructor(config) {
    super(config);
  }
}

export const appComponent = new AppComponent({
  selector: "app-root",
  template: `
    <header></header>
    <router-outlet></router-outlet> 
  `,
});
