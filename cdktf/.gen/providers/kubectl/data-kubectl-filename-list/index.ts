// https://registry.terraform.io/providers/gavinbunney/kubectl/1.14.0/docs/data-sources/filename_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKubectlFilenameListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.14.0/docs/data-sources/filename_list#id DataKubectlFilenameList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.14.0/docs/data-sources/filename_list#pattern DataKubectlFilenameList#pattern}
  */
  readonly pattern: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.14.0/docs/data-sources/filename_list kubectl_filename_list}
*/
export class DataKubectlFilenameList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kubectl_filename_list";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.14.0/docs/data-sources/filename_list kubectl_filename_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKubectlFilenameListConfig
  */
  public constructor(scope: Construct, id: string, config: DataKubectlFilenameListConfig) {
    super(scope, id, {
      terraformResourceType: 'kubectl_filename_list',
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
    this._pattern = config.pattern;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // basenames - computed: true, optional: false, required: false
  public get basenames() {
    return this.getListAttribute('basenames');
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

  // matches - computed: true, optional: false, required: false
  public get matches() {
    return this.getListAttribute('matches');
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      pattern: cdktf.stringToTerraform(this._pattern),
    };
  }
}
