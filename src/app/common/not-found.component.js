import { WFMComponent } from "framework";

class NotFound extends WFMComponent {
  constructor(config) {
    super(config);
  }
}

export const notFound = new NotFound({
  selector: "not-found",
  template: `
    <div style="display: flex; align-items: center; justify-content: center">
      <div>
        <h2 style="color: red;">Page not found :(</h2>
        <a href="#" style="display: flex; justify-content: center">Link to home page</a>
      </div>
    </div>    
  `,
});
