import { Construct } from "constructs";
import { TerraformIterator, Fn, TerraformStack } from "cdktf";
import { KubectlProvider } from "../.gen/providers/kubectl/provider";
import * as kubectl from "../.gen/providers/kubectl";

export default class StarRocksOperator extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    function idPrefixer(postfix: string): string {
      return `${id}-${postfix}`;
    }

    new KubectlProvider(this, idPrefixer("kubectl-provider"), {
      configPath: "~/.kube/config",
    });

    // const foo = new kubectl.dataKubectlFileDocuments.DataKubectlFileDocuments(this, "crds", {
    //   content: Fn.file("")
    // })

    const yamlfiles =
      new kubectl.dataKubectlFilenameList.DataKubectlFilenameList(
        this,
        idPrefixer("yaml-files"),
        {
          pattern: "./terraform-stacks/assets/*.yaml",
        }
      );

    const fileListIterator = TerraformIterator.fromList(yamlfiles.matches);

    new kubectl.manifest.Manifest(this, idPrefixer("starrocks-manifest"), {
      forEach: fileListIterator,
      yamlBody: Fn.file(fileListIterator.value),
    });
  }
}
