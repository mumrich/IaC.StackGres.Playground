// https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Select the cluster that the node shall connect to.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/node#cluster Node#cluster}
  */
  readonly cluster?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/node#id Node#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify k3s image used for the node(s).
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/node#image Node#image}
  */
  readonly image?: string;
  /**
  * Memory limit imposed on the node [From docker]
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/node#memory Node#memory}
  */
  readonly memory?: string;
  /**
  * Node name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/node#name Node#name}
  */
  readonly name: string;
  /**
  * Specify node role [server, agent].
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/node#role Node#role}
  */
  readonly role?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/node k3d_node}
*/
export class Node extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k3d_node";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/node k3d_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NodeConfig
  */
  public constructor(scope: Construct, id: string, config: NodeConfig) {
    super(scope, id, {
      terraformResourceType: 'k3d_node',
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
    this._cluster = config.cluster;
    this._id = config.id;
    this._image = config.image;
    this._memory = config.memory;
    this._name = config.name;
    this._role = config.role;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster - computed: false, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
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

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
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

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster: cdktf.stringToTerraform(this._cluster),
      id: cdktf.stringToTerraform(this._id),
      image: cdktf.stringToTerraform(this._image),
      memory: cdktf.stringToTerraform(this._memory),
      name: cdktf.stringToTerraform(this._name),
      role: cdktf.stringToTerraform(this._role),
    };
  }
}
