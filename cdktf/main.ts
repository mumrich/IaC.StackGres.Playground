import { App } from "cdktf";
import StackGres from "./StackGres";

const app = new App();

new StackGres(app, "stackgres");

app.synth();
