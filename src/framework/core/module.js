import { initComponents } from "./component/init-components";
import { initRouting } from "./routing/init-routing";

export class Module {
  constructor(config) {
    this.components = config.components;
    this.bootstrapComp = config.bootstrap;
    this.routes = config.routes;
  }

  start() {
    initComponents(this.bootstrapComp, this.components);
    initRouting(this.routes);
  }
}
