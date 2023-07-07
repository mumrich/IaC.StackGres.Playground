import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { provider, release } from "@cdktf/provider-helm";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new provider.HelmProvider(this, `${id}-helm-provider`, {
      kubernetes: {
        configPath: "~/.kube/config",
      },
    });

    new release.Release(this, `${id}-helm-release`, {
      name: "stackgres-operator",
      namespace: "stackgres",
      chart: "stackgres-operator",
      version: "1.5.0",
      repository:
        "https://stackgres.io/downloads/stackgres-k8s/stackgres/helm/",
      createNamespace: true,
      set: [
        {
          name: "adminui.service.type",
          value: "ClusterIP",
          type: "string",
        },
        {
          name: "cert.resetCerts",
          value: "true",
          type: "auto",
        },
      ],
      wait: true,
      waitForJobs: true,
    });
  }
}

const app = new App();
new MyStack(app, "cdktf");

app.synth();
