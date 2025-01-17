// https://www.terraform.io/docs/providers/snowflake/r/function
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies a comment for the function.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function#comment Function#comment}
  */
  readonly comment?: string;
  /**
  * The database in which to create the function. Don't use the | character.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function#database Function#database}
  */
  readonly database: string;
  /**
  * The handler method for Java / Python function.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function#handler Function#handler}
  */
  readonly handler?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function#id Function#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Imports for Java / Python functions. For Java this a list of jar files, for Python this is a list of Python files.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function#imports Function#imports}
  */
  readonly imports?: string[];
  /**
  * The language of the statement
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function#language Function#language}
  */
  readonly language?: string;
  /**
  * Specifies the identifier for the function; does not have to be unique for the schema in which the function is created. Don't use the | character.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function#name Function#name}
  */
  readonly name: string;
  /**
  * Specifies the behavior of the function when called with null inputs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function#null_input_behavior Function#null_input_behavior}
  */
  readonly nullInputBehavior?: string;
  /**
  * List of package imports to use for Java / Python functions. For Java, package imports should be of the form: package_name:version_number, where package_name is snowflake_domain:package. For Python use it should be: ('numpy','pandas','xgboost==1.5.0').
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function#packages Function#packages}
  */
  readonly packages?: string[];
  /**
  * Specifies the behavior of the function when returning results
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function#return_behavior Function#return_behavior}
  */
  readonly returnBehavior?: string;
  /**
  * The return type of the function
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function#return_type Function#return_type}
  */
  readonly returnType: string;
  /**
  * Required for Python functions. Specifies Python runtime version.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function#runtime_version Function#runtime_version}
  */
  readonly runtimeVersion?: string;
  /**
  * The schema in which to create the function. Don't use the | character.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function#schema Function#schema}
  */
  readonly schema: string;
  /**
  * Specifies the javascript / java / sql / python code used to create the function.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function#statement Function#statement}
  */
  readonly statement: string;
  /**
  * The target path for the Java / Python functions. For Java, it is the path of compiled jar files and for the Python it is the path of the Python files.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function#target_path Function#target_path}
  */
  readonly targetPath?: string;
  /**
  * arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function#arguments Function#arguments}
  */
  readonly arguments?: FunctionArguments[] | cdktf.IResolvable;
}
export interface FunctionArguments {
  /**
  * The argument name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function#name Function#name}
  */
  readonly name: string;
  /**
  * The argument type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/function#type Function#type}
  */
  readonly type: string;
}

export function functionArgumentsToTerraform(struct?: FunctionArguments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class FunctionArgumentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FunctionArguments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FunctionArguments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
    }
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class FunctionArgumentsList extends cdktf.ComplexList {
  public internalValue? : FunctionArguments[] | cdktf.IResolvable

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
  public get(index: number): FunctionArgumentsOutputReference {
    return new FunctionArgumentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/function snowflake_function}
*/
export class Function extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_function";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/function snowflake_function} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FunctionConfig
  */
  public constructor(scope: Construct, id: string, config: FunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_function',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.43.0',
        providerVersionConstraint: ' ~> 0.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._database = config.database;
    this._handler = config.handler;
    this._id = config.id;
    this._imports = config.imports;
    this._language = config.language;
    this._name = config.name;
    this._nullInputBehavior = config.nullInputBehavior;
    this._packages = config.packages;
    this._returnBehavior = config.returnBehavior;
    this._returnType = config.returnType;
    this._runtimeVersion = config.runtimeVersion;
    this._schema = config.schema;
    this._statement = config.statement;
    this._targetPath = config.targetPath;
    this._arguments.internalValue = config.arguments;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // handler - computed: false, optional: true, required: false
  private _handler?: string; 
  public get handler() {
    return this.getStringAttribute('handler');
  }
  public set handler(value: string) {
    this._handler = value;
  }
  public resetHandler() {
    this._handler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handlerInput() {
    return this._handler;
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

  // imports - computed: false, optional: true, required: false
  private _imports?: string[]; 
  public get imports() {
    return this.getListAttribute('imports');
  }
  public set imports(value: string[]) {
    this._imports = value;
  }
  public resetImports() {
    this._imports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importsInput() {
    return this._imports;
  }

  // language - computed: false, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
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

  // null_input_behavior - computed: false, optional: true, required: false
  private _nullInputBehavior?: string; 
  public get nullInputBehavior() {
    return this.getStringAttribute('null_input_behavior');
  }
  public set nullInputBehavior(value: string) {
    this._nullInputBehavior = value;
  }
  public resetNullInputBehavior() {
    this._nullInputBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullInputBehaviorInput() {
    return this._nullInputBehavior;
  }

  // packages - computed: false, optional: true, required: false
  private _packages?: string[]; 
  public get packages() {
    return this.getListAttribute('packages');
  }
  public set packages(value: string[]) {
    this._packages = value;
  }
  public resetPackages() {
    this._packages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesInput() {
    return this._packages;
  }

  // return_behavior - computed: false, optional: true, required: false
  private _returnBehavior?: string; 
  public get returnBehavior() {
    return this.getStringAttribute('return_behavior');
  }
  public set returnBehavior(value: string) {
    this._returnBehavior = value;
  }
  public resetReturnBehavior() {
    this._returnBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnBehaviorInput() {
    return this._returnBehavior;
  }

  // return_type - computed: false, optional: false, required: true
  private _returnType?: string; 
  public get returnType() {
    return this.getStringAttribute('return_type');
  }
  public set returnType(value: string) {
    this._returnType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get returnTypeInput() {
    return this._returnType;
  }

  // runtime_version - computed: false, optional: true, required: false
  private _runtimeVersion?: string; 
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }
  public set runtimeVersion(value: string) {
    this._runtimeVersion = value;
  }
  public resetRuntimeVersion() {
    this._runtimeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeVersionInput() {
    return this._runtimeVersion;
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // statement - computed: false, optional: false, required: true
  private _statement?: string; 
  public get statement() {
    return this.getStringAttribute('statement');
  }
  public set statement(value: string) {
    this._statement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statementInput() {
    return this._statement;
  }

  // target_path - computed: false, optional: true, required: false
  private _targetPath?: string; 
  public get targetPath() {
    return this.getStringAttribute('target_path');
  }
  public set targetPath(value: string) {
    this._targetPath = value;
  }
  public resetTargetPath() {
    this._targetPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPathInput() {
    return this._targetPath;
  }

  // arguments - computed: false, optional: true, required: false
  private _arguments = new FunctionArgumentsList(this, "arguments", false);
  public get arguments() {
    return this._arguments;
  }
  public putArguments(value: FunctionArguments[] | cdktf.IResolvable) {
    this._arguments.internalValue = value;
  }
  public resetArguments() {
    this._arguments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      database: cdktf.stringToTerraform(this._database),
      handler: cdktf.stringToTerraform(this._handler),
      id: cdktf.stringToTerraform(this._id),
      imports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._imports),
      language: cdktf.stringToTerraform(this._language),
      name: cdktf.stringToTerraform(this._name),
      null_input_behavior: cdktf.stringToTerraform(this._nullInputBehavior),
      packages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._packages),
      return_behavior: cdktf.stringToTerraform(this._returnBehavior),
      return_type: cdktf.stringToTerraform(this._returnType),
      runtime_version: cdktf.stringToTerraform(this._runtimeVersion),
      schema: cdktf.stringToTerraform(this._schema),
      statement: cdktf.stringToTerraform(this._statement),
      target_path: cdktf.stringToTerraform(this._targetPath),
      arguments: cdktf.listMapper(functionArgumentsToTerraform, true)(this._arguments.internalValue),
    };
  }
}
