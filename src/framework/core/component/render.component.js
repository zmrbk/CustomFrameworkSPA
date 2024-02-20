import { _ } from "../../tools/utils";

export function renderComponent(comp) {
  if (!_.isUndefined(comp.onInit)) comp.onInit();
  comp.render();
  if (!_.isUndefined(comp.afterInit)) comp.afterInit();
}
