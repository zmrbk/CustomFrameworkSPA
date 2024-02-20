import { _ } from "../../tools/utils";
import { renderComponent } from "../component/render.component";
import { router } from "./router";

export class RoutingModule {
  constructor(routes) {
    this.routes = routes;
  }

  init() {
    window.addEventListener("hashchange", renderRoute.bind(this));
    renderRoute.call(this);
  }
}

function renderRoute() {
  let url = router.getUrl();
  let route = this.routes.find((eachRoute) => eachRoute.path === url);

  if (_.isUndefined(route)) {
    route = this.routes.find((eachRoute) => eachRoute.path === "**");
  }

  document.querySelector(
    "router-outlet",
  ).innerHTML = `<${route.component.selector}></${route.component.selector}>`;
  renderComponent(route.component);
}
