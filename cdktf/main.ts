import K3dCluster from "./terraform-stacks/K3dCluster";
import ProxySqlCluster from "./terraform-stacks/ProxySqlCluster";
import StackGres from "./terraform-stacks/StackGresOperator";
import StarRocks from "./terraform-stacks/StarRocksOperator";
import { App } from "cdktf";

const app = new App();

new K3dCluster(app, "k3d-cluster");
new ProxySqlCluster(app, "proxysql-cluster");
new StackGres(app, "stackgres-operator");
new StarRocks(app, "starrocks-operator");

app.synth();
