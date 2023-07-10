import { App } from "cdktf";
import StackGres from "./terraform-stacks/StackGres";
import StarRocks from "./terraform-stacks/StarRocks";

const app = new App();

new StackGres(app, "stackgres");
new StarRocks(app, "starrocks");

app.synth();
