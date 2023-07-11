import { TerraformVariable } from "cdktf";
import { Construct } from "constructs";

export function useTfVar(scope: Construct, name: string, defaultValue?: any) {
  return new TerraformVariable(scope, name, {
    default: defaultValue,
  });
}
