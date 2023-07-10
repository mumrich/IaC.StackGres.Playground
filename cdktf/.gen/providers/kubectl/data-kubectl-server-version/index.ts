// https://registry.terraform.io/providers/gavinbunney/kubectl/1.14.0/docs/data-sources/server_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKubectlServerVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.14.0/docs/data-sources/server_version#id DataKubectlServerVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.14.0/docs/data-sources/server_version kubectl_server_version}
*/
export class DataKubectlServerVersion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kubectl_server_version";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.14.0/docs/data-sources/server_version kubectl_server_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKubectlServerVersionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataKubectlServerVersionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'kubectl_server_version',
      terraformGeneratorMetadata: {
        providerName: 'kubectl',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // build_date - computed: true, optional: false, required: false
  public get buildDate() {
    return this.getStringAttribute('build_date');
  }

  // git_commit - computed: true, optional: false, required: false
  public get gitCommit() {
    return this.getStringAttribute('git_commit');
  }

  // git_version - computed: true, optional: false, required: false
  public get gitVersion() {
    return this.getStringAttribute('git_version');
  }

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

  // major - computed: true, optional: false, required: false
  public get major() {
    return this.getStringAttribute('major');
  }

  // minor - computed: true, optional: false, required: false
  public get minor() {
    return this.getStringAttribute('minor');
  }

  // patch - computed: true, optional: false, required: false
  public get patch() {
    return this.getStringAttribute('patch');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
