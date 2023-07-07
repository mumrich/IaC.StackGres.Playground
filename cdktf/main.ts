import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { provider, release } from "@cdktf/provider-helm";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new provider.HelmProvider(scope, id, {
      kubernetes: {
        configPath: "~/.kube/config",
      },
    });

    new release.Release(scope, id, {
      name: "stackgres-operator",
      namespace: "stackgres",
      chart:
        "https://stackgres.io/downloads/stackgres-k8s/stackgres/latest/helm/stackgres-operator.tgz",
      createNamespace: true,
      set: [
        {
          name: "adminui.service.type",
          value: "ClusterIP",
          type: "string",
        },
      ],
    });
  }
}

const app = new App();
new MyStack(app, "cdktf");

app.synth();
