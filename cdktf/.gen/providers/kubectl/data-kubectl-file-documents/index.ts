// https://registry.terraform.io/providers/gavinbunney/kubectl/1.14.0/docs/data-sources/file_documents
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKubectlFileDocumentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.14.0/docs/data-sources/file_documents#content DataKubectlFileDocuments#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.14.0/docs/data-sources/file_documents#id DataKubectlFileDocuments#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.14.0/docs/data-sources/file_documents kubectl_file_documents}
*/
export class DataKubectlFileDocuments extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kubectl_file_documents";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gavinbunney/kubectl/1.14.0/docs/data-sources/file_documents kubectl_file_documents} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKubectlFileDocumentsConfig
  */
  public constructor(scope: Construct, id: string, config: DataKubectlFileDocumentsConfig) {
    super(scope, id, {
      terraformResourceType: 'kubectl_file_documents',
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
    this._content = config.content;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // documents - computed: true, optional: false, required: false
  public get documents() {
    return this.getListAttribute('documents');
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

  // manifests - computed: true, optional: false, required: false
  private _manifests = new cdktf.StringMap(this, "manifests");
  public get manifests() {
    return this._manifests;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content: cdktf.stringToTerraform(this._content),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
