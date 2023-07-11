// https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface K3DProviderConfig {
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs#alias K3DProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs k3d}
*/
export class K3DProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k3d";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs k3d} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options K3DProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: K3DProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'k3d',
      terraformGeneratorMetadata: {
        providerName: 'k3d',
        providerVersion: '0.0.6',
        providerVersionConstraint: '0.0.6'
      },
      terraformProviderSource: 'pvotal-tech/k3d'
    });
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}
