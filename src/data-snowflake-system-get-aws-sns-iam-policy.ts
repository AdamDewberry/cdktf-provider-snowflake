// https://www.terraform.io/docs/providers/snowflake/d/system_get_aws_sns_iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSnowflakeSystemGetAwsSnsIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Amazon Resource Name (ARN) of the SNS topic for your S3 bucket
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/system_get_aws_sns_iam_policy#aws_sns_topic_arn DataSnowflakeSystemGetAwsSnsIamPolicy#aws_sns_topic_arn}
  */
  readonly awsSnsTopicArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/d/system_get_aws_sns_iam_policy#id DataSnowflakeSystemGetAwsSnsIamPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/d/system_get_aws_sns_iam_policy snowflake_system_get_aws_sns_iam_policy}
*/
export class DataSnowflakeSystemGetAwsSnsIamPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_system_get_aws_sns_iam_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/d/system_get_aws_sns_iam_policy snowflake_system_get_aws_sns_iam_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSnowflakeSystemGetAwsSnsIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataSnowflakeSystemGetAwsSnsIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_system_get_aws_sns_iam_policy',
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
    this._awsSnsTopicArn = config.awsSnsTopicArn;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_sns_topic_arn - computed: false, optional: false, required: true
  private _awsSnsTopicArn?: string; 
  public get awsSnsTopicArn() {
    return this.getStringAttribute('aws_sns_topic_arn');
  }
  public set awsSnsTopicArn(value: string) {
    this._awsSnsTopicArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSnsTopicArnInput() {
    return this._awsSnsTopicArn;
  }

  // aws_sns_topic_policy_json - computed: true, optional: false, required: false
  public get awsSnsTopicPolicyJson() {
    return this.getStringAttribute('aws_sns_topic_policy_json');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_sns_topic_arn: cdktf.stringToTerraform(this._awsSnsTopicArn),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
