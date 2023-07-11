import { App } from "cdktf";
import StackGres from "./terraform-stacks/StackGres";
import StarRocks from "./terraform-stacks/StarRocks";
import K3dCluster from "./terraform-stacks/K3dCluster";

const app = new App();

new StackGres(app, "stackgres");
new StarRocks(app, "starrocks");
new K3dCluster(app, "k3d-cluster");

app.synth();
