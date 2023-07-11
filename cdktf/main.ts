import { App } from "cdktf";
import StackGres from "./terraform-stacks/StackGresOperator";
import StarRocks from "./terraform-stacks/StarRocksOperator";
import K3dCluster from "./terraform-stacks/K3dCluster";

const app = new App();

new K3dCluster(app, "k3d-cluster");
new StackGres(app, "stackgres-operator");
new StarRocks(app, "starrocks-operator");

app.synth();
