import K3dCluster from "./terraform-stacks/K3dCluster";
import StackGres from "./terraform-stacks/StackGresOperator";
import { App } from "cdktf";

const app = new App();

new K3dCluster(app, "k3d-cluster");
new StackGres(app, "stackgres-operator");

app.synth();
