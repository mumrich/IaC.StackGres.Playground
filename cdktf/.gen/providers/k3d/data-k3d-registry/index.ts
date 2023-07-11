// https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/data-sources/registry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK3DRegistryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/data-sources/registry#id DataK3DRegistry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Registry name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/data-sources/registry#name DataK3DRegistry#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/data-sources/registry k3d_registry}
*/
export class DataK3DRegistry extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k3d_registry";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/data-sources/registry k3d_registry} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK3DRegistryConfig
  */
  public constructor(scope: Construct, id: string, config: DataK3DRegistryConfig) {
    super(scope, id, {
      terraformResourceType: 'k3d_registry',
      terraformGeneratorMetadata: {
        providerName: 'k3d',
        providerVersion: '0.0.6',
        providerVersionConstraint: '0.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
