import { WFMComponent, router, http, _ } from "framework";

class HomePageComponent extends WFMComponent {
  constructor(config) {
    super(config);

    this.data = {
      title: "Main page",
      linkTitle: "Link to the another page",
      ip: "Loading...",
    };
  }

  events() {
    return {
      "click .js-link": "goToTabs",
    };
  }

  goToTabs(event) {
    event.preventDefault();
    router.navigate("tabs");
  }

  afterInit() {
    http.get("https://api.ipify.org/?format=json").then(({ ip }) => {
      _.delay(2000).then(() => {
        this.data.ip = ip;
        this.render();
      });
    });
  }
}

export const homePageComponent = new HomePageComponent({
  selector: "home-page",
  template: `
    <div class="row">
      <div class="col s6 offset-s3" style="margin-top: 40px;">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">Main page</span>
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
            <p>{{ip}}</p>
          </div>
          <div class="card-action">
            <a href="#" class="js-link">Link to the another page</a>
          </div>
        </div>
      </div>
    </div>
  `,
});
