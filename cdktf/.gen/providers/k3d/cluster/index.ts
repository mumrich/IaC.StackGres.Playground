// https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify how many agents you want to create.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#agents Cluster#agents}
  */
  readonly agents?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#id Cluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify k3s image that you want to use for the nodes.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#image Cluster#image}
  */
  readonly image?: string;
  /**
  * Cluster name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#name Cluster#name}
  */
  readonly name: string;
  /**
  * Join an existing network.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#network Cluster#network}
  */
  readonly network?: string;
  /**
  * Specify how many servers you want to create.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#servers Cluster#servers}
  */
  readonly servers?: number;
  /**
  * Specify a cluster token. By default, we generate one.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#token Cluster#token}
  */
  readonly token?: string;
  /**
  * env block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#env Cluster#env}
  */
  readonly env?: ClusterEnv[] | cdktf.IResolvable;
  /**
  * k3d block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#k3d Cluster#k3d}
  */
  readonly k3D?: ClusterK3D;
  /**
  * k3s block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#k3s Cluster#k3s}
  */
  readonly k3S?: ClusterK3S;
  /**
  * kube_api block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#kube_api Cluster#kube_api}
  */
  readonly kubeApi?: ClusterKubeApi;
  /**
  * kubeconfig block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#kubeconfig Cluster#kubeconfig}
  */
  readonly kubeconfig?: ClusterKubeconfig;
  /**
  * label block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#label Cluster#label}
  */
  readonly label?: ClusterLabel[] | cdktf.IResolvable;
  /**
  * port block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#port Cluster#port}
  */
  readonly port?: ClusterPort[] | cdktf.IResolvable;
  /**
  * registries block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#registries Cluster#registries}
  */
  readonly registries?: ClusterRegistries;
  /**
  * runtime block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#runtime Cluster#runtime}
  */
  readonly runtime?: ClusterRuntime;
  /**
  * volume block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#volume Cluster#volume}
  */
  readonly volume?: ClusterVolume[] | cdktf.IResolvable;
}
export interface ClusterCredentials {
}

export function clusterCredentialsToTerraform(struct?: ClusterCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class ClusterCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ClusterCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_certificate - computed: true, optional: false, required: false
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }

  // client_key - computed: true, optional: false, required: false
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }

  // cluster_ca_certificate - computed: true, optional: false, required: false
  public get clusterCaCertificate() {
    return this.getStringAttribute('cluster_ca_certificate');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // raw - computed: true, optional: false, required: false
  public get raw() {
    return this.getStringAttribute('raw');
  }
}

export class ClusterCredentialsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ClusterCredentialsOutputReference {
    return new ClusterCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterEnv {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#key Cluster#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#node_filters Cluster#node_filters}
  */
  readonly nodeFilters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#value Cluster#value}
  */
  readonly value?: string;
}

export function clusterEnvToTerraform(struct?: ClusterEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    node_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeFilters),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class ClusterEnvOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ClusterEnv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._nodeFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeFilters = this._nodeFilters;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._nodeFilters = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._nodeFilters = value.nodeFilters;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // node_filters - computed: false, optional: true, required: false
  private _nodeFilters?: string[]; 
  public get nodeFilters() {
    return this.getListAttribute('node_filters');
  }
  public set nodeFilters(value: string[]) {
    this._nodeFilters = value;
  }
  public resetNodeFilters() {
    this._nodeFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeFiltersInput() {
    return this._nodeFilters;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterEnvList extends cdktf.ComplexList {
  public internalValue? : ClusterEnv[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ClusterEnvOutputReference {
    return new ClusterEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterK3D {
  /**
  * Disable the creation of a volume for importing images.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#disable_image_volume Cluster#disable_image_volume}
  */
  readonly disableImageVolume?: boolean | cdktf.IResolvable;
  /**
  * Disable the creation of a LoadBalancer in front of the server nodes.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#disable_load_balancer Cluster#disable_load_balancer}
  */
  readonly disableLoadBalancer?: boolean | cdktf.IResolvable;
}

export function clusterK3DToTerraform(struct?: ClusterK3DOutputReference | ClusterK3D): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_image_volume: cdktf.booleanToTerraform(struct!.disableImageVolume),
    disable_load_balancer: cdktf.booleanToTerraform(struct!.disableLoadBalancer),
  }
}

export class ClusterK3DOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterK3D | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableImageVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableImageVolume = this._disableImageVolume;
    }
    if (this._disableLoadBalancer !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableLoadBalancer = this._disableLoadBalancer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterK3D | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableImageVolume = undefined;
      this._disableLoadBalancer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableImageVolume = value.disableImageVolume;
      this._disableLoadBalancer = value.disableLoadBalancer;
    }
  }

  // disable_image_volume - computed: false, optional: true, required: false
  private _disableImageVolume?: boolean | cdktf.IResolvable; 
  public get disableImageVolume() {
    return this.getBooleanAttribute('disable_image_volume');
  }
  public set disableImageVolume(value: boolean | cdktf.IResolvable) {
    this._disableImageVolume = value;
  }
  public resetDisableImageVolume() {
    this._disableImageVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableImageVolumeInput() {
    return this._disableImageVolume;
  }

  // disable_load_balancer - computed: false, optional: true, required: false
  private _disableLoadBalancer?: boolean | cdktf.IResolvable; 
  public get disableLoadBalancer() {
    return this.getBooleanAttribute('disable_load_balancer');
  }
  public set disableLoadBalancer(value: boolean | cdktf.IResolvable) {
    this._disableLoadBalancer = value;
  }
  public resetDisableLoadBalancer() {
    this._disableLoadBalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableLoadBalancerInput() {
    return this._disableLoadBalancer;
  }
}
export interface ClusterK3SExtraArgs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#arg Cluster#arg}
  */
  readonly arg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#node_filters Cluster#node_filters}
  */
  readonly nodeFilters?: string[];
}

export function clusterK3SExtraArgsToTerraform(struct?: ClusterK3SExtraArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arg: cdktf.stringToTerraform(struct!.arg),
    node_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeFilters),
  }
}

export class ClusterK3SExtraArgsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ClusterK3SExtraArgs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arg !== undefined) {
      hasAnyValues = true;
      internalValueResult.arg = this._arg;
    }
    if (this._nodeFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeFilters = this._nodeFilters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterK3SExtraArgs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arg = undefined;
      this._nodeFilters = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arg = value.arg;
      this._nodeFilters = value.nodeFilters;
    }
  }

  // arg - computed: false, optional: true, required: false
  private _arg?: string; 
  public get arg() {
    return this.getStringAttribute('arg');
  }
  public set arg(value: string) {
    this._arg = value;
  }
  public resetArg() {
    this._arg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argInput() {
    return this._arg;
  }

  // node_filters - computed: false, optional: true, required: false
  private _nodeFilters?: string[]; 
  public get nodeFilters() {
    return this.getListAttribute('node_filters');
  }
  public set nodeFilters(value: string[]) {
    this._nodeFilters = value;
  }
  public resetNodeFilters() {
    this._nodeFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeFiltersInput() {
    return this._nodeFilters;
  }
}

export class ClusterK3SExtraArgsList extends cdktf.ComplexList {
  public internalValue? : ClusterK3SExtraArgs[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ClusterK3SExtraArgsOutputReference {
    return new ClusterK3SExtraArgsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterK3S {
  /**
  * extra_args block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#extra_args Cluster#extra_args}
  */
  readonly extraArgs?: ClusterK3SExtraArgs[] | cdktf.IResolvable;
}

export function clusterK3SToTerraform(struct?: ClusterK3SOutputReference | ClusterK3S): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extra_args: cdktf.listMapper(clusterK3SExtraArgsToTerraform, true)(struct!.extraArgs),
  }
}

export class ClusterK3SOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterK3S | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extraArgs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterK3S | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._extraArgs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._extraArgs.internalValue = value.extraArgs;
    }
  }

  // extra_args - computed: false, optional: true, required: false
  private _extraArgs = new ClusterK3SExtraArgsList(this, "extra_args", false);
  public get extraArgs() {
    return this._extraArgs;
  }
  public putExtraArgs(value: ClusterK3SExtraArgs[] | cdktf.IResolvable) {
    this._extraArgs.internalValue = value;
  }
  public resetExtraArgs() {
    this._extraArgs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs.internalValue;
  }
}
export interface ClusterKubeApi {
  /**
  * Important for the `server` setting in the kubeconfig.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#host Cluster#host}
  */
  readonly host?: string;
  /**
  * Where the Kubernetes API will be listening on.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#host_ip Cluster#host_ip}
  */
  readonly hostIp?: string;
  /**
  * Specify the Kubernetes API server port exposed on the LoadBalancer.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#host_port Cluster#host_port}
  */
  readonly hostPort?: number;
}

export function clusterKubeApiToTerraform(struct?: ClusterKubeApiOutputReference | ClusterKubeApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    host_ip: cdktf.stringToTerraform(struct!.hostIp),
    host_port: cdktf.numberToTerraform(struct!.hostPort),
  }
}

export class ClusterKubeApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterKubeApi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._hostIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostIp = this._hostIp;
    }
    if (this._hostPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPort = this._hostPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterKubeApi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._hostIp = undefined;
      this._hostPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._hostIp = value.hostIp;
      this._hostPort = value.hostPort;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // host_ip - computed: false, optional: true, required: false
  private _hostIp?: string; 
  public get hostIp() {
    return this.getStringAttribute('host_ip');
  }
  public set hostIp(value: string) {
    this._hostIp = value;
  }
  public resetHostIp() {
    this._hostIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpInput() {
    return this._hostIp;
  }

  // host_port - computed: false, optional: true, required: false
  private _hostPort?: number; 
  public get hostPort() {
    return this.getNumberAttribute('host_port');
  }
  public set hostPort(value: number) {
    this._hostPort = value;
  }
  public resetHostPort() {
    this._hostPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPortInput() {
    return this._hostPort;
  }
}
export interface ClusterKubeconfig {
  /**
  * Directly switch the default kubeconfig's current-context to the new cluster's context.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#switch_current_context Cluster#switch_current_context}
  */
  readonly switchCurrentContext?: boolean | cdktf.IResolvable;
  /**
  * Directly update the default kubeconfig with the new cluster's context.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#update_default_kubeconfig Cluster#update_default_kubeconfig}
  */
  readonly updateDefaultKubeconfig?: boolean | cdktf.IResolvable;
}

export function clusterKubeconfigToTerraform(struct?: ClusterKubeconfigOutputReference | ClusterKubeconfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch_current_context: cdktf.booleanToTerraform(struct!.switchCurrentContext),
    update_default_kubeconfig: cdktf.booleanToTerraform(struct!.updateDefaultKubeconfig),
  }
}

export class ClusterKubeconfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterKubeconfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switchCurrentContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchCurrentContext = this._switchCurrentContext;
    }
    if (this._updateDefaultKubeconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateDefaultKubeconfig = this._updateDefaultKubeconfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterKubeconfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switchCurrentContext = undefined;
      this._updateDefaultKubeconfig = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switchCurrentContext = value.switchCurrentContext;
      this._updateDefaultKubeconfig = value.updateDefaultKubeconfig;
    }
  }

  // switch_current_context - computed: false, optional: true, required: false
  private _switchCurrentContext?: boolean | cdktf.IResolvable; 
  public get switchCurrentContext() {
    return this.getBooleanAttribute('switch_current_context');
  }
  public set switchCurrentContext(value: boolean | cdktf.IResolvable) {
    this._switchCurrentContext = value;
  }
  public resetSwitchCurrentContext() {
    this._switchCurrentContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchCurrentContextInput() {
    return this._switchCurrentContext;
  }

  // update_default_kubeconfig - computed: false, optional: true, required: false
  private _updateDefaultKubeconfig?: boolean | cdktf.IResolvable; 
  public get updateDefaultKubeconfig() {
    return this.getBooleanAttribute('update_default_kubeconfig');
  }
  public set updateDefaultKubeconfig(value: boolean | cdktf.IResolvable) {
    this._updateDefaultKubeconfig = value;
  }
  public resetUpdateDefaultKubeconfig() {
    this._updateDefaultKubeconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateDefaultKubeconfigInput() {
    return this._updateDefaultKubeconfig;
  }
}
export interface ClusterLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#key Cluster#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#node_filters Cluster#node_filters}
  */
  readonly nodeFilters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#value Cluster#value}
  */
  readonly value?: string;
}

export function clusterLabelToTerraform(struct?: ClusterLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    node_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeFilters),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class ClusterLabelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ClusterLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._nodeFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeFilters = this._nodeFilters;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._nodeFilters = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._nodeFilters = value.nodeFilters;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // node_filters - computed: false, optional: true, required: false
  private _nodeFilters?: string[]; 
  public get nodeFilters() {
    return this.getListAttribute('node_filters');
  }
  public set nodeFilters(value: string[]) {
    this._nodeFilters = value;
  }
  public resetNodeFilters() {
    this._nodeFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeFiltersInput() {
    return this._nodeFilters;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ClusterLabelList extends cdktf.ComplexList {
  public internalValue? : ClusterLabel[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ClusterLabelOutputReference {
    return new ClusterLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#container_port Cluster#container_port}
  */
  readonly containerPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#host Cluster#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#host_port Cluster#host_port}
  */
  readonly hostPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#node_filters Cluster#node_filters}
  */
  readonly nodeFilters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#protocol Cluster#protocol}
  */
  readonly protocol?: string;
}

export function clusterPortToTerraform(struct?: ClusterPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    host: cdktf.stringToTerraform(struct!.host),
    host_port: cdktf.numberToTerraform(struct!.hostPort),
    node_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeFilters),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export class ClusterPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ClusterPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPort = this._containerPort;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._hostPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPort = this._hostPort;
    }
    if (this._nodeFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeFilters = this._nodeFilters;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerPort = undefined;
      this._host = undefined;
      this._hostPort = undefined;
      this._nodeFilters = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerPort = value.containerPort;
      this._host = value.host;
      this._hostPort = value.hostPort;
      this._nodeFilters = value.nodeFilters;
      this._protocol = value.protocol;
    }
  }

  // container_port - computed: false, optional: false, required: true
  private _containerPort?: number; 
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }
  public set containerPort(value: number) {
    this._containerPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // host_port - computed: false, optional: true, required: false
  private _hostPort?: number; 
  public get hostPort() {
    return this.getNumberAttribute('host_port');
  }
  public set hostPort(value: number) {
    this._hostPort = value;
  }
  public resetHostPort() {
    this._hostPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPortInput() {
    return this._hostPort;
  }

  // node_filters - computed: false, optional: true, required: false
  private _nodeFilters?: string[]; 
  public get nodeFilters() {
    return this.getListAttribute('node_filters');
  }
  public set nodeFilters(value: string[]) {
    this._nodeFilters = value;
  }
  public resetNodeFilters() {
    this._nodeFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeFiltersInput() {
    return this._nodeFilters;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class ClusterPortList extends cdktf.ComplexList {
  public internalValue? : ClusterPort[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ClusterPortOutputReference {
    return new ClusterPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterRegistriesCreate {
  /**
  * Hostname to link to the created registry.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#host Cluster#host}
  */
  readonly host?: string;
  /**
  * Host port exposed to access the registry.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#host_port Cluster#host_port}
  */
  readonly hostPort?: string;
  /**
  * Docker image of the registry.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#image Cluster#image}
  */
  readonly image?: string;
  /**
  * Name of the registry to create.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#name Cluster#name}
  */
  readonly name?: string;
}

export function clusterRegistriesCreateToTerraform(struct?: ClusterRegistriesCreateOutputReference | ClusterRegistriesCreate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    host_port: cdktf.stringToTerraform(struct!.hostPort),
    image: cdktf.stringToTerraform(struct!.image),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class ClusterRegistriesCreateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterRegistriesCreate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._hostPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPort = this._hostPort;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterRegistriesCreate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._hostPort = undefined;
      this._image = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._hostPort = value.hostPort;
      this._image = value.image;
      this._name = value.name;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // host_port - computed: false, optional: true, required: false
  private _hostPort?: string; 
  public get hostPort() {
    return this.getStringAttribute('host_port');
  }
  public set hostPort(value: string) {
    this._hostPort = value;
  }
  public resetHostPort() {
    this._hostPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPortInput() {
    return this._hostPort;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface ClusterRegistries {
  /**
  * Specify path to an extra registries.yaml file.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#config Cluster#config}
  */
  readonly config?: string;
  /**
  * Connect to one or more k3d-managed registries running locally.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#use Cluster#use}
  */
  readonly use?: string[];
  /**
  * create block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#create Cluster#create}
  */
  readonly create?: ClusterRegistriesCreate;
}

export function clusterRegistriesToTerraform(struct?: ClusterRegistriesOutputReference | ClusterRegistries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    use: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.use),
    create: clusterRegistriesCreateToTerraform(struct!.create),
  }
}

export class ClusterRegistriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterRegistries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._use !== undefined) {
      hasAnyValues = true;
      internalValueResult.use = this._use;
    }
    if (this._create?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterRegistries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._config = undefined;
      this._use = undefined;
      this._create.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._config = value.config;
      this._use = value.use;
      this._create.internalValue = value.create;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // use - computed: false, optional: true, required: false
  private _use?: string[]; 
  public get use() {
    return this.getListAttribute('use');
  }
  public set use(value: string[]) {
    this._use = value;
  }
  public resetUse() {
    this._use = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInput() {
    return this._use;
  }

  // create - computed: false, optional: true, required: false
  private _create = new ClusterRegistriesCreateOutputReference(this, "create");
  public get create() {
    return this._create;
  }
  public putCreate(value: ClusterRegistriesCreate) {
    this._create.internalValue = value;
  }
  public resetCreate() {
    this._create.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create.internalValue;
  }
}
export interface ClusterRuntime {
  /**
  * Memory limit imposed on the agents nodes [From docker].
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#agents_memory Cluster#agents_memory}
  */
  readonly agentsMemory?: string;
  /**
  * GPU devices to add to the cluster node containers ('all' to pass all GPUs) [From docker].
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#gpu_request Cluster#gpu_request}
  */
  readonly gpuRequest?: string;
  /**
  * Memory limit imposed on the server nodes [From docker].
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#servers_memory Cluster#servers_memory}
  */
  readonly serversMemory?: string;
}

export function clusterRuntimeToTerraform(struct?: ClusterRuntimeOutputReference | ClusterRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agents_memory: cdktf.stringToTerraform(struct!.agentsMemory),
    gpu_request: cdktf.stringToTerraform(struct!.gpuRequest),
    servers_memory: cdktf.stringToTerraform(struct!.serversMemory),
  }
}

export class ClusterRuntimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterRuntime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentsMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentsMemory = this._agentsMemory;
    }
    if (this._gpuRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuRequest = this._gpuRequest;
    }
    if (this._serversMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.serversMemory = this._serversMemory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterRuntime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentsMemory = undefined;
      this._gpuRequest = undefined;
      this._serversMemory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentsMemory = value.agentsMemory;
      this._gpuRequest = value.gpuRequest;
      this._serversMemory = value.serversMemory;
    }
  }

  // agents_memory - computed: false, optional: true, required: false
  private _agentsMemory?: string; 
  public get agentsMemory() {
    return this.getStringAttribute('agents_memory');
  }
  public set agentsMemory(value: string) {
    this._agentsMemory = value;
  }
  public resetAgentsMemory() {
    this._agentsMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentsMemoryInput() {
    return this._agentsMemory;
  }

  // gpu_request - computed: false, optional: true, required: false
  private _gpuRequest?: string; 
  public get gpuRequest() {
    return this.getStringAttribute('gpu_request');
  }
  public set gpuRequest(value: string) {
    this._gpuRequest = value;
  }
  public resetGpuRequest() {
    this._gpuRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuRequestInput() {
    return this._gpuRequest;
  }

  // servers_memory - computed: false, optional: true, required: false
  private _serversMemory?: string; 
  public get serversMemory() {
    return this.getStringAttribute('servers_memory');
  }
  public set serversMemory(value: string) {
    this._serversMemory = value;
  }
  public resetServersMemory() {
    this._serversMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversMemoryInput() {
    return this._serversMemory;
  }
}
export interface ClusterVolume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#destination Cluster#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#node_filters Cluster#node_filters}
  */
  readonly nodeFilters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster#source Cluster#source}
  */
  readonly source?: string;
}

export function clusterVolumeToTerraform(struct?: ClusterVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    node_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeFilters),
    source: cdktf.stringToTerraform(struct!.source),
  }
}

export class ClusterVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ClusterVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._nodeFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeFilters = this._nodeFilters;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._nodeFilters = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._nodeFilters = value.nodeFilters;
      this._source = value.source;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // node_filters - computed: false, optional: true, required: false
  private _nodeFilters?: string[]; 
  public get nodeFilters() {
    return this.getListAttribute('node_filters');
  }
  public set nodeFilters(value: string[]) {
    this._nodeFilters = value;
  }
  public resetNodeFilters() {
    this._nodeFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeFiltersInput() {
    return this._nodeFilters;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class ClusterVolumeList extends cdktf.ComplexList {
  public internalValue? : ClusterVolume[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ClusterVolumeOutputReference {
    return new ClusterVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster k3d_cluster}
*/
export class Cluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k3d_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pvotal-tech/k3d/0.0.6/docs/resources/cluster k3d_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'k3d_cluster',
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
    this._agents = config.agents;
    this._id = config.id;
    this._image = config.image;
    this._name = config.name;
    this._network = config.network;
    this._servers = config.servers;
    this._token = config.token;
    this._env.internalValue = config.env;
    this._k3D.internalValue = config.k3D;
    this._k3S.internalValue = config.k3S;
    this._kubeApi.internalValue = config.kubeApi;
    this._kubeconfig.internalValue = config.kubeconfig;
    this._label.internalValue = config.label;
    this._port.internalValue = config.port;
    this._registries.internalValue = config.registries;
    this._runtime.internalValue = config.runtime;
    this._volume.internalValue = config.volume;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agents - computed: false, optional: true, required: false
  private _agents?: number; 
  public get agents() {
    return this.getNumberAttribute('agents');
  }
  public set agents(value: number) {
    this._agents = value;
  }
  public resetAgents() {
    this._agents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentsInput() {
    return this._agents;
  }

  // credentials - computed: true, optional: false, required: false
  private _credentials = new ClusterCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
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

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // servers - computed: false, optional: true, required: false
  private _servers?: number; 
  public get servers() {
    return this.getNumberAttribute('servers');
  }
  public set servers(value: number) {
    this._servers = value;
  }
  public resetServers() {
    this._servers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers;
  }

  // token - computed: true, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // env - computed: false, optional: true, required: false
  private _env = new ClusterEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: ClusterEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // k3d - computed: false, optional: true, required: false
  private _k3D = new ClusterK3DOutputReference(this, "k3d");
  public get k3D() {
    return this._k3D;
  }
  public putK3D(value: ClusterK3D) {
    this._k3D.internalValue = value;
  }
  public resetK3D() {
    this._k3D.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k3DInput() {
    return this._k3D.internalValue;
  }

  // k3s - computed: false, optional: true, required: false
  private _k3S = new ClusterK3SOutputReference(this, "k3s");
  public get k3S() {
    return this._k3S;
  }
  public putK3S(value: ClusterK3S) {
    this._k3S.internalValue = value;
  }
  public resetK3S() {
    this._k3S.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k3SInput() {
    return this._k3S.internalValue;
  }

  // kube_api - computed: false, optional: true, required: false
  private _kubeApi = new ClusterKubeApiOutputReference(this, "kube_api");
  public get kubeApi() {
    return this._kubeApi;
  }
  public putKubeApi(value: ClusterKubeApi) {
    this._kubeApi.internalValue = value;
  }
  public resetKubeApi() {
    this._kubeApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeApiInput() {
    return this._kubeApi.internalValue;
  }

  // kubeconfig - computed: false, optional: true, required: false
  private _kubeconfig = new ClusterKubeconfigOutputReference(this, "kubeconfig");
  public get kubeconfig() {
    return this._kubeconfig;
  }
  public putKubeconfig(value: ClusterKubeconfig) {
    this._kubeconfig.internalValue = value;
  }
  public resetKubeconfig() {
    this._kubeconfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigInput() {
    return this._kubeconfig.internalValue;
  }

  // label - computed: false, optional: true, required: false
  private _label = new ClusterLabelList(this, "label", false);
  public get label() {
    return this._label;
  }
  public putLabel(value: ClusterLabel[] | cdktf.IResolvable) {
    this._label.internalValue = value;
  }
  public resetLabel() {
    this._label.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }

  // port - computed: false, optional: true, required: false
  private _port = new ClusterPortList(this, "port", false);
  public get port() {
    return this._port;
  }
  public putPort(value: ClusterPort[] | cdktf.IResolvable) {
    this._port.internalValue = value;
  }
  public resetPort() {
    this._port.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port.internalValue;
  }

  // registries - computed: false, optional: true, required: false
  private _registries = new ClusterRegistriesOutputReference(this, "registries");
  public get registries() {
    return this._registries;
  }
  public putRegistries(value: ClusterRegistries) {
    this._registries.internalValue = value;
  }
  public resetRegistries() {
    this._registries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registriesInput() {
    return this._registries.internalValue;
  }

  // runtime - computed: false, optional: true, required: false
  private _runtime = new ClusterRuntimeOutputReference(this, "runtime");
  public get runtime() {
    return this._runtime;
  }
  public putRuntime(value: ClusterRuntime) {
    this._runtime.internalValue = value;
  }
  public resetRuntime() {
    this._runtime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime.internalValue;
  }

  // volume - computed: false, optional: true, required: false
  private _volume = new ClusterVolumeList(this, "volume", false);
  public get volume() {
    return this._volume;
  }
  public putVolume(value: ClusterVolume[] | cdktf.IResolvable) {
    this._volume.internalValue = value;
  }
  public resetVolume() {
    this._volume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agents: cdktf.numberToTerraform(this._agents),
      id: cdktf.stringToTerraform(this._id),
      image: cdktf.stringToTerraform(this._image),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      servers: cdktf.numberToTerraform(this._servers),
      token: cdktf.stringToTerraform(this._token),
      env: cdktf.listMapper(clusterEnvToTerraform, true)(this._env.internalValue),
      k3d: clusterK3DToTerraform(this._k3D.internalValue),
      k3s: clusterK3SToTerraform(this._k3S.internalValue),
      kube_api: clusterKubeApiToTerraform(this._kubeApi.internalValue),
      kubeconfig: clusterKubeconfigToTerraform(this._kubeconfig.internalValue),
      label: cdktf.listMapper(clusterLabelToTerraform, true)(this._label.internalValue),
      port: cdktf.listMapper(clusterPortToTerraform, true)(this._port.internalValue),
      registries: clusterRegistriesToTerraform(this._registries.internalValue),
      runtime: clusterRuntimeToTerraform(this._runtime.internalValue),
      volume: cdktf.listMapper(clusterVolumeToTerraform, true)(this._volume.internalValue),
    };
  }
}
