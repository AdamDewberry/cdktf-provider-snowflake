// https://www.terraform.io/docs/providers/snowflake
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnowflakeProviderConfig {
  /**
  * The name of the Snowflake account. Can also come from the `SNOWFLAKE_ACCOUNT` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#account SnowflakeProvider#account}
  */
  readonly account: string;
  /**
  * Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_USE_BROWSER_AUTH` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#browser_auth SnowflakeProvider#browser_auth}
  */
  readonly browserAuth?: boolean | cdktf.IResolvable;
  /**
  * Supports passing in a custom host value to the snowflake go driver for use with privatelink.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#host SnowflakeProvider#host}
  */
  readonly host?: string;
  /**
  * Token for use with OAuth. Generating the token is left to other tools. Cannot be used with `browser_auth`, `private_key_path`, `oauth_refresh_token` or `password`. Can be sourced from `SNOWFLAKE_OAUTH_ACCESS_TOKEN` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#oauth_access_token SnowflakeProvider#oauth_access_token}
  */
  readonly oauthAccessToken?: string;
  /**
  * Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_CLIENT_ID` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#oauth_client_id SnowflakeProvider#oauth_client_id}
  */
  readonly oauthClientId?: string;
  /**
  * Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_CLIENT_SECRET` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#oauth_client_secret SnowflakeProvider#oauth_client_secret}
  */
  readonly oauthClientSecret?: string;
  /**
  * Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_ENDPOINT` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#oauth_endpoint SnowflakeProvider#oauth_endpoint}
  */
  readonly oauthEndpoint?: string;
  /**
  * Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_REDIRECT_URL` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#oauth_redirect_url SnowflakeProvider#oauth_redirect_url}
  */
  readonly oauthRedirectUrl?: string;
  /**
  * Token for use with OAuth. Setup and generation of the token is left to other tools. Should be used in conjunction with `oauth_client_id`, `oauth_client_secret`, `oauth_endpoint`, `oauth_redirect_url`. Cannot be used with `browser_auth`, `private_key_path`, `oauth_access_token` or `password`. Can be sourced from `SNOWFLAKE_OAUTH_REFRESH_TOKEN` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#oauth_refresh_token SnowflakeProvider#oauth_refresh_token}
  */
  readonly oauthRefreshToken?: string;
  /**
  * Password for username+password auth. Cannot be used with `browser_auth` or `private_key_path`. Can be source from `SNOWFLAKE_PASSWORD` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#password SnowflakeProvider#password}
  */
  readonly password?: string;
  /**
  * Private Key for username+private-key auth. Cannot be used with `browser_auth` or `password`. Can be source from `SNOWFLAKE_PRIVATE_KEY` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#private_key SnowflakeProvider#private_key}
  */
  readonly privateKey?: string;
  /**
  * Supports the encryption ciphers aes-128-cbc, aes-128-gcm, aes-192-cbc, aes-192-gcm, aes-256-cbc, aes-256-gcm, and des-ede3-cbc
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#private_key_passphrase SnowflakeProvider#private_key_passphrase}
  */
  readonly privateKeyPassphrase?: string;
  /**
  * Path to a private key for using keypair authentication. Cannot be used with `browser_auth`, `oauth_access_token` or `password`. Can be source from `SNOWFLAKE_PRIVATE_KEY_PATH` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#private_key_path SnowflakeProvider#private_key_path}
  */
  readonly privateKeyPath?: string;
  /**
  * [Snowflake region](https://docs.snowflake.com/en/user-guide/intro-regions.html) to use. Can be source from the `SNOWFLAKE_REGION` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#region SnowflakeProvider#region}
  */
  readonly region?: string;
  /**
  * Snowflake role to use for operations. If left unset, default role for user will be used. Can come from the `SNOWFLAKE_ROLE` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#role SnowflakeProvider#role}
  */
  readonly role?: string;
  /**
  * Username for username+password authentication. Can come from the `SNOWFLAKE_USER` environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#username SnowflakeProvider#username}
  */
  readonly username: string;
  /**
  * Sets the default warehouse. Optional. Can be sourced from SNOWFLAKE_WAREHOUSE environment variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#warehouse SnowflakeProvider#warehouse}
  */
  readonly warehouse?: string;
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#alias SnowflakeProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake snowflake}
*/
export class SnowflakeProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake snowflake} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnowflakeProviderConfig
  */
  public constructor(scope: Construct, id: string, config: SnowflakeProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.43.0',
        providerVersionConstraint: ' ~> 0.40'
      },
      terraformProviderSource: 'Snowflake-Labs/snowflake'
    });
    this._account = config.account;
    this._browserAuth = config.browserAuth;
    this._host = config.host;
    this._oauthAccessToken = config.oauthAccessToken;
    this._oauthClientId = config.oauthClientId;
    this._oauthClientSecret = config.oauthClientSecret;
    this._oauthEndpoint = config.oauthEndpoint;
    this._oauthRedirectUrl = config.oauthRedirectUrl;
    this._oauthRefreshToken = config.oauthRefreshToken;
    this._password = config.password;
    this._privateKey = config.privateKey;
    this._privateKeyPassphrase = config.privateKeyPassphrase;
    this._privateKeyPath = config.privateKeyPath;
    this._region = config.region;
    this._role = config.role;
    this._username = config.username;
    this._warehouse = config.warehouse;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: false, optional: false, required: true
  private _account?: string; 
  public get account() {
    return this._account;
  }
  public set account(value: string | undefined) {
    this._account = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // browser_auth - computed: false, optional: true, required: false
  private _browserAuth?: boolean | cdktf.IResolvable; 
  public get browserAuth() {
    return this._browserAuth;
  }
  public set browserAuth(value: boolean | cdktf.IResolvable | undefined) {
    this._browserAuth = value;
  }
  public resetBrowserAuth() {
    this._browserAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserAuthInput() {
    return this._browserAuth;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // oauth_access_token - computed: false, optional: true, required: false
  private _oauthAccessToken?: string; 
  public get oauthAccessToken() {
    return this._oauthAccessToken;
  }
  public set oauthAccessToken(value: string | undefined) {
    this._oauthAccessToken = value;
  }
  public resetOauthAccessToken() {
    this._oauthAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthAccessTokenInput() {
    return this._oauthAccessToken;
  }

  // oauth_client_id - computed: false, optional: true, required: false
  private _oauthClientId?: string; 
  public get oauthClientId() {
    return this._oauthClientId;
  }
  public set oauthClientId(value: string | undefined) {
    this._oauthClientId = value;
  }
  public resetOauthClientId() {
    this._oauthClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientIdInput() {
    return this._oauthClientId;
  }

  // oauth_client_secret - computed: false, optional: true, required: false
  private _oauthClientSecret?: string; 
  public get oauthClientSecret() {
    return this._oauthClientSecret;
  }
  public set oauthClientSecret(value: string | undefined) {
    this._oauthClientSecret = value;
  }
  public resetOauthClientSecret() {
    this._oauthClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientSecretInput() {
    return this._oauthClientSecret;
  }

  // oauth_endpoint - computed: false, optional: true, required: false
  private _oauthEndpoint?: string; 
  public get oauthEndpoint() {
    return this._oauthEndpoint;
  }
  public set oauthEndpoint(value: string | undefined) {
    this._oauthEndpoint = value;
  }
  public resetOauthEndpoint() {
    this._oauthEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthEndpointInput() {
    return this._oauthEndpoint;
  }

  // oauth_redirect_url - computed: false, optional: true, required: false
  private _oauthRedirectUrl?: string; 
  public get oauthRedirectUrl() {
    return this._oauthRedirectUrl;
  }
  public set oauthRedirectUrl(value: string | undefined) {
    this._oauthRedirectUrl = value;
  }
  public resetOauthRedirectUrl() {
    this._oauthRedirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthRedirectUrlInput() {
    return this._oauthRedirectUrl;
  }

  // oauth_refresh_token - computed: false, optional: true, required: false
  private _oauthRefreshToken?: string; 
  public get oauthRefreshToken() {
    return this._oauthRefreshToken;
  }
  public set oauthRefreshToken(value: string | undefined) {
    this._oauthRefreshToken = value;
  }
  public resetOauthRefreshToken() {
    this._oauthRefreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthRefreshTokenInput() {
    return this._oauthRefreshToken;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this._privateKey;
  }
  public set privateKey(value: string | undefined) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_passphrase - computed: false, optional: true, required: false
  private _privateKeyPassphrase?: string; 
  public get privateKeyPassphrase() {
    return this._privateKeyPassphrase;
  }
  public set privateKeyPassphrase(value: string | undefined) {
    this._privateKeyPassphrase = value;
  }
  public resetPrivateKeyPassphrase() {
    this._privateKeyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPassphraseInput() {
    return this._privateKeyPassphrase;
  }

  // private_key_path - computed: false, optional: true, required: false
  private _privateKeyPath?: string; 
  public get privateKeyPath() {
    return this._privateKeyPath;
  }
  public set privateKeyPath(value: string | undefined) {
    this._privateKeyPath = value;
  }
  public resetPrivateKeyPath() {
    this._privateKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPathInput() {
    return this._privateKeyPath;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this._role;
  }
  public set role(value: string | undefined) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // warehouse - computed: false, optional: true, required: false
  private _warehouse?: string; 
  public get warehouse() {
    return this._warehouse;
  }
  public set warehouse(value: string | undefined) {
    this._warehouse = value;
  }
  public resetWarehouse() {
    this._warehouse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseInput() {
    return this._warehouse;
  }

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
      account: cdktf.stringToTerraform(this._account),
      browser_auth: cdktf.booleanToTerraform(this._browserAuth),
      host: cdktf.stringToTerraform(this._host),
      oauth_access_token: cdktf.stringToTerraform(this._oauthAccessToken),
      oauth_client_id: cdktf.stringToTerraform(this._oauthClientId),
      oauth_client_secret: cdktf.stringToTerraform(this._oauthClientSecret),
      oauth_endpoint: cdktf.stringToTerraform(this._oauthEndpoint),
      oauth_redirect_url: cdktf.stringToTerraform(this._oauthRedirectUrl),
      oauth_refresh_token: cdktf.stringToTerraform(this._oauthRefreshToken),
      password: cdktf.stringToTerraform(this._password),
      private_key: cdktf.stringToTerraform(this._privateKey),
      private_key_passphrase: cdktf.stringToTerraform(this._privateKeyPassphrase),
      private_key_path: cdktf.stringToTerraform(this._privateKeyPath),
      region: cdktf.stringToTerraform(this._region),
      role: cdktf.stringToTerraform(this._role),
      username: cdktf.stringToTerraform(this._username),
      warehouse: cdktf.stringToTerraform(this._warehouse),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}
