/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`. */
export interface Object {
  type: string;
  [key: string]: any;
}

/**
 * Application Property
 * An application property. It is a caller defined JSON object that Bitbucket will store and return.
 * The `_attributes` field at its top level can be used to control who is allowed to read and update the property.
 * The keys of the JSON object must match an allowed pattern. For details,
 * see [Application properties](/cloud/bitbucket/application-properties/).
 */
export interface ApplicationProperty {
  _attributes?: ("public" | "read_only")[];
  [key: string]: any;
}

/** A Bitbucket Deployment Environment. */
export type DeploymentEnvironment = Object & {
  /** The UUID identifying the environment. */
  uuid?: string;
  /** The name of the environment. */
  name?: string;
  [key: string]: any;
};

/**
 * Paginated Deployment Environments
 * A paged list of environments
 */
export interface PaginatedEnvironments {
  /** Page number of the current results. This is an optional element that is not provided in all responses. */
  page?: number;
  /**
   * The values of the current page.
   * @minItems 0
   */
  values?: DeploymentEnvironment[];
  /** Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute. */
  size?: number;
  /** Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values. */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
}

/** A Bitbucket Deployment Release. */
export type DeploymentRelease = Object & {
  /** The UUID identifying the release. */
  uuid?: string;
  /** The name of the release. */
  name?: string;
  /**
   * Link to the pipeline that produced the release.
   * @format uri
   */
  url?: string;
  /** A repository commit object. */
  commit?: Commit;
  /**
   * The timestamp when the release was created.
   * @format date-time
   */
  created_on?: string;
  [key: string]: any;
};

/** A Bitbucket Deployment. */
export type Deployment = Object & {
  /** The UUID identifying the deployment. */
  uuid?: string;
  /** The representation of the progress state of a deployment. */
  state?: DeploymentState;
  /** A Bitbucket Deployment Environment. */
  environment?: DeploymentEnvironment;
  /** A Bitbucket Deployment Release. */
  release?: DeploymentRelease;
  [key: string]: any;
};

/** The representation of the progress state of a deployment. */
export type DeploymentState = Object & Record<string, any>;

/** A Bitbucket Deployment UNDEPLOYED deployment state. */
export type DeploymentStateUndeployed = DeploymentState & {
  /** The name of deployment state (UNDEPLOYED). */
  name?: "UNDEPLOYED";
  /**
   * Link to trigger the deployment.
   * @format uri
   */
  trigger_url?: string;
  [key: string]: any;
};

/** A Bitbucket Deployment IN_PROGRESS deployment state. */
export type DeploymentStateInProgress = DeploymentState & {
  /** The name of deployment state (IN_PROGRESS). */
  name?: "IN_PROGRESS";
  /**
   * Link to the deployment result.
   * @format uri
   */
  url?: string;
  /** An account object. */
  deployer?: Account;
  /**
   * The timestamp when the deployment was started.
   * @format date-time
   */
  start_date?: string;
  [key: string]: any;
};

/** A Bitbucket Deployment COMPLETED deployment state. */
export type DeploymentStateCompleted = DeploymentState & {
  /** The name of deployment state (COMPLETED). */
  name?: "COMPLETED";
  /**
   * Link to the deployment result.
   * @format uri
   */
  url?: string;
  /** An account object. */
  deployer?: Account;
  /** The status of a completed deployment. */
  status?: DeploymentStateCompletedStatus;
  /**
   * The timestamp when the deployment was started.
   * @format date-time
   */
  start_date?: string;
  /**
   * The timestamp when the deployment completed.
   * @format date-time
   */
  completion_date?: string;
  [key: string]: any;
};

/** The status of a completed deployment. */
export type DeploymentStateCompletedStatus = Object & Record<string, any>;

/** A SUCCESSFUL completed deployment status. */
export type DeploymentStateCompletedStatusSuccessful =
  DeploymentStateCompletedStatus & {
    /** The name of the completed deployment status (SUCCESSFUL). */
    name?: "SUCCESSFUL";
    [key: string]: any;
  };

/** A FAILED completed deployment status. */
export type DeploymentStateCompletedStatusFailed =
  DeploymentStateCompletedStatus & {
    /** The name of the completed deployment status (FAILED). */
    name?: "FAILED";
    [key: string]: any;
  };

/** A STOPPED completed deployment status. */
export type DeploymentStateCompletedStatusStopped =
  DeploymentStateCompletedStatus & {
    /** The name of the completed deployment status (STOPPED). */
    name?: "STOPPED";
    [key: string]: any;
  };

/**
 * Paginated Deployments
 * A paged list of deployments
 */
export interface PaginatedDeployments {
  /** Page number of the current results. This is an optional element that is not provided in all responses. */
  page?: number;
  /**
   * The values of the current page.
   * @minItems 0
   */
  values?: Deployment[];
  /** Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute. */
  size?: number;
  /** Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values. */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
}

/** A Pipelines deployment variable. */
export type DeploymentVariable = Object & {
  /** The UUID identifying the variable. */
  uuid?: string;
  /** The unique name of the variable. */
  key?: string;
  /** The value of the variable. If the variable is secured, this will be empty. */
  value?: string;
  /** If true, this variable will be treated as secured. The value will never be exposed in the logs or the REST API. */
  secured?: boolean;
  [key: string]: any;
};

/**
 * Paginated Deployment Variables
 * A paged list of deployment variables.
 */
export interface PaginatedDeploymentVariable {
  /** Page number of the current results. This is an optional element that is not provided in all responses. */
  page?: number;
  /**
   * The values of the current page.
   * @minItems 0
   */
  values?: DeploymentVariable[];
  /** Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute. */
  size?: number;
  /** Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values. */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
}

/** A report for a commit. */
export type Report = Object & {
  /** The UUID that can be used to identify the report. */
  uuid?: string;
  /** The title of the report. */
  title?: string;
  /** A string to describe the purpose of the report. */
  details?: string;
  /** ID of the report provided by the report creator. It can be used to identify the report as an alternative to it's generated uuid. It is not used by Bitbucket, but only by the report creator for updating or deleting this specific report. Needs to be unique. */
  external_id?: string;
  /** A string to describe the tool or company who created the report. */
  reporter?: string;
  /**
   * A URL linking to the results of the report in an external tool.
   * @format uri
   */
  link?: string;
  /** If enabled, a remote link is created in Jira for the work item associated with the commit the report belongs to. */
  remote_link_enabled?: boolean;
  /**
   * A URL to the report logo. If none is provided, the default insights logo will be used.
   * @format uri
   */
  logo_url?: string;
  /** The type of the report. */
  report_type?: "SECURITY" | "COVERAGE" | "TEST" | "BUG";
  /** The state of the report. May be set to PENDING and later updated. */
  result?: "PASSED" | "FAILED" | "PENDING";
  /** An array of data fields to display information on the report. Maximum 10. */
  data?: ReportData[];
  /**
   * The timestamp when the report was created.
   * @format date-time
   */
  created_on?: string;
  /**
   * The timestamp when the report was updated.
   * @format date-time
   */
  updated_on?: string;
  [key: string]: any;
};

/**
 * Report Data
 * A key-value element that will be displayed along with the report.
 */
export interface ReportData {
  /** The type of data contained in the value field. If not provided, then the value will be detected as a boolean, number or string. */
  type?:
    | "BOOLEAN"
    | "DATE"
    | "DURATION"
    | "LINK"
    | "NUMBER"
    | "PERCENTAGE"
    | "TEXT";
  /** A string describing what this data field represents. */
  title?: string;
  /** The value of the data element. */
  value?: object;
}

/** A report for a commit. */
export type ReportAnnotation = Object & {
  /** ID of the annotation provided by the annotation creator. It can be used to identify the annotation as an alternative to it's generated uuid. It is not used by Bitbucket, but only by the annotation creator for updating or deleting this specific annotation. Needs to be unique. */
  external_id?: string;
  /** The UUID that can be used to identify the annotation. */
  uuid?: string;
  /** The type of the report. */
  annotation_type?: "VULNERABILITY" | "CODE_SMELL" | "BUG";
  /** The path of the file on which this annotation should be placed. This is the path of the file relative to the git repository. If no path is provided, then it will appear in the overview modal on all pull requests where the tip of the branch is the given commit, regardless of which files were modified. */
  path?: string;
  /**
   * The line number that the annotation should belong to. If no line number is provided, then it will default to 0 and in a pull request it will appear at the top of the file specified by the path field.
   * @min 1
   */
  line?: number;
  /** The message to display to users. */
  summary?: string;
  /** The details to show to users when clicking on the annotation. */
  details?: string;
  /** The state of the report. May be set to PENDING and later updated. */
  result?: "PASSED" | "FAILED" | "SKIPPED" | "IGNORED";
  /** The severity of the annotation. */
  severity?: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
  /**
   * A URL linking to the annotation in an external tool.
   * @format uri
   */
  link?: string;
  /**
   * The timestamp when the report was created.
   * @format date-time
   */
  created_on?: string;
  /**
   * The timestamp when the report was updated.
   * @format date-time
   */
  updated_on?: string;
  [key: string]: any;
};

/**
 * Paginated Reports
 * A paginated list of reports.
 */
export interface PaginatedReports {
  /** Page number of the current results. This is an optional element that is not provided in all responses. */
  page?: number;
  /**
   * The values of the current page.
   * @minItems 0
   */
  values?: Report[];
  /** Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute. */
  size?: number;
  /** Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values. */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
}

/**
 * Paginated Annotations
 * A paginated list of annotations.
 */
export interface PaginatedAnnotations {
  /** Page number of the current results. This is an optional element that is not provided in all responses. */
  page?: number;
  /**
   * The values of the current page.
   * @minItems 0
   */
  values?: ReportAnnotation[];
  /** Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute. */
  size?: number;
  /** Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values. */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
}

/** The Pipelines configuration for a repository. */
export type PipelinesConfig = Object & {
  /** Whether Pipelines is enabled for the repository. */
  enabled?: boolean;
  /** A Bitbucket repository. */
  repository?: Repository;
  [key: string]: any;
};

/** A Bitbucket Pipeline. This represents an actual pipeline result. */
export type Pipeline = Object & {
  /** The UUID identifying the pipeline. */
  uuid?: string;
  /** The build number of the pipeline. */
  build_number?: number;
  /** An account object. */
  creator?: Account;
  /** A Bitbucket repository. */
  repository?: Repository;
  /** A representation of the target that a pipeline executes on. */
  target?: PipelineTarget;
  /** A representation of the trigger used for a pipeline. */
  trigger?: PipelineTrigger;
  /** The representation of the progress state of a pipeline. */
  state?: PipelineState;
  /**
   * The variables for the pipeline.
   * @minItems 0
   */
  variables?: PipelineVariable[];
  /**
   * The timestamp when the pipeline was created.
   * @format date-time
   */
  created_on?: string;
  /**
   * The timestamp when the Pipeline was completed. This is not set if the pipeline is still in progress.
   * @format date-time
   */
  completed_on?: string;
  /** The number of build seconds used by this pipeline. */
  build_seconds_used?: number;
  /**
   * An ordered list of sources of the pipeline configuration
   * @minItems 0
   */
  configuration_sources?: PipelineConfigurationSource[];
  /** Links section for a Pipeline. */
  links?: PipelinesPipelineLinks;
  [key: string]: any;
};

/** A links section href */
export type PipelinesLinksSectionHref = Object & {
  /**
   * A link
   * @format uri
   */
  href?: string;
  [key: string]: any;
};

/** Links section for a Pipeline. */
export type PipelinesPipelineLinks = Object & {
  /** A links section href */
  self?: PipelinesLinksSectionHref;
  /** A links section href */
  steps?: PipelinesLinksSectionHref;
  [key: string]: any;
};

/** A representation of metadata for a pipeline cache for given repository. */
export type PipelineCache = Object & {
  /** The UUID identifying the pipeline cache. */
  uuid?: string;
  /** The UUID of the pipeline that created the cache. */
  pipeline_uuid?: string;
  /** The uuid of the step that created the cache. */
  step_uuid?: string;
  /** The name of the cache. */
  name?: string;
  /** The key hash of the cache version. */
  key_hash?: string;
  /** The path where the cache contents were retrieved from. */
  path?: string;
  /** The size of the file containing the archive of the cache. */
  file_size_bytes?: number;
  /**
   * The timestamp when the cache was created.
   * @format date-time
   */
  created_on?: string;
  [key: string]: any;
};

/**
 * Paginated Pipeline Cache
 * A paged list of pipeline caches
 */
export interface PaginatedPipelineCaches {
  /** Page number of the current results. This is an optional element that is not provided in all responses. */
  page?: number;
  /**
   * The values of the current page.
   * @minItems 0
   */
  values?: PipelineCache[];
  /** Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute. */
  size?: number;
  /** Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values. */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
}

/**
 * Pipeline Cache Content URI
 * A representation of the location of pipeline cache content.
 */
export interface PipelineCacheContentUri {
  /**
   * The uri for pipeline cache content.
   * @format uri
   */
  uri?: string;
}

/** A representation of the target that a pipeline executes on. */
export type PipelineTarget = Object & Record<string, any>;

/** A Bitbucket Pipelines reference target. */
export type PipelineRefTarget = PipelineTarget & {
  /** The type of reference (branch/tag). */
  ref_type?: "branch" | "tag" | "named_branch" | "bookmark";
  /** The name of the reference. */
  ref_name?: string;
  /** A repository commit object. */
  commit?: Commit;
  /** A representation of the selector that was used to identify the pipeline in the YML file. */
  selector?: PipelineSelector;
  [key: string]: any;
};

/** A Bitbucket Pipelines commit target. */
export type PipelineCommitTarget = PipelineTarget & {
  /** A repository commit object. */
  commit?: Commit;
  /** A representation of the selector that was used to identify the pipeline in the YML file. */
  selector?: PipelineSelector;
  [key: string]: any;
};

/** A representation of the selector that was used to identify the pipeline in the YML file. */
export type PipelineSelector = Object & {
  /** The type of selector. */
  type?: "branches" | "tags" | "bookmarks" | "default" | "custom";
  /** The name of the matching pipeline definition. */
  pattern?: string;
  [key: string]: any;
};

/** A representation of the trigger used for a pipeline. */
export type PipelineTrigger = Object & Record<string, any>;

/** A Bitbucket Pipelines PUSH trigger. */
export type PipelineTriggerPush = PipelineTrigger & Record<string, any>;

/** A Bitbucket Pipelines MANUAL trigger. */
export type PipelineTriggerManual = PipelineTrigger & Record<string, any>;

/** The representation of the progress state of a pipeline. */
export type PipelineState = Object & Record<string, any>;

/** A Bitbucket Pipelines PENDING pipeline state. */
export type PipelineStatePending = PipelineState & {
  /** The name of pipeline state (PENDING). */
  name?: "PENDING";
  [key: string]: any;
};

/** A Bitbucket Pipelines IN_PROGRESS pipeline state. */
export type PipelineStateInProgress = PipelineState & {
  /** The name of pipeline state (IN_PROGRESS). */
  name?: "IN_PROGRESS";
  /** A result of an in progress pipeline state. */
  stage?: PipelineStateInProgressStage;
  [key: string]: any;
};

/** A result of an in progress pipeline state. */
export type PipelineStateInProgressStage = Object & Record<string, any>;

/** A Bitbucket Pipelines RUNNING stage of a pipeline that is in progress. */
export type PipelineStateInProgressRunning = PipelineStateInProgressStage & {
  /** The name of the stage (RUNNING) */
  name?: "RUNNING";
  [key: string]: any;
};

/** A Bitbucket Pipelines PAUSED stage of a pipeline that is in progress. */
export type PipelineStateInProgressPaused = PipelineStateInProgressStage & {
  /** The name of the stage (PAUSED) */
  name?: "PAUSED";
  [key: string]: any;
};

/** A Bitbucket Pipelines COMPLETED pipeline state. */
export type PipelineStateCompleted = PipelineState & {
  /** The name of pipeline state (COMPLETED). */
  name?: "COMPLETED";
  /** A result of a completed pipeline state. */
  result?: PipelineStateCompletedResult;
  [key: string]: any;
};

/** A result of a completed pipeline state. */
export type PipelineStateCompletedResult = Object & Record<string, any>;

/** A Bitbucket Pipelines ERROR pipeline result. */
export type PipelineStateCompletedError = PipelineStateCompletedResult & {
  /** The name of the result (ERROR) */
  name?: "ERROR";
  /** An error causing a pipeline failure. */
  error?: PipelineError;
  [key: string]: any;
};

/** A Bitbucket Pipelines FAILED pipeline result. */
export type PipelineStateCompletedFailed = PipelineStateCompletedResult & {
  /** The name of the failed result (FAILED). */
  name?: "FAILED";
  [key: string]: any;
};

/** A Bitbucket Pipelines STOPPED pipeline result. */
export type PipelineStateCompletedStopped = PipelineStateCompletedResult & {
  /** The name of the stopped result (STOPPED). */
  name?: "STOPPED";
  [key: string]: any;
};

/** A Bitbucket Pipelines EXPIRED pipeline result. */
export type PipelineStateCompletedExpired = PipelineStateCompletedResult & {
  /** The name of the stopped result (EXPIRED). */
  name?: "EXPIRED";
  [key: string]: any;
};

/** A Bitbucket Pipelines SUCCESSFUL pipeline result. */
export type PipelineStateCompletedSuccessful = PipelineStateCompletedResult & {
  /** The name of the successful result (SUCCESSFUL). */
  name?: "SUCCESSFUL";
  [key: string]: any;
};

/** An error causing a pipeline failure. */
export type PipelineError = Object & {
  /** The error key. */
  key?: string;
  /** The error message. */
  message?: string;
  [key: string]: any;
};

/** A Pipelines known host public key. */
export type PipelineSshPublicKey = Object & {
  /** The type of the public key. */
  key_type?: string;
  /** The base64 encoded public key. */
  key?: string;
  /** The MD5 fingerprint of the public key. */
  md5_fingerprint?: string;
  /** The SHA-256 fingerprint of the public key. */
  sha256_fingerprint?: string;
  [key: string]: any;
};

/** A Pipelines known host. */
export type PipelineKnownHost = Object & {
  /** The UUID identifying the known host. */
  uuid?: string;
  /** The hostname of the known host. */
  hostname?: string;
  /** A Pipelines known host public key. */
  public_key?: PipelineSshPublicKey;
  [key: string]: any;
};

/** A Pipelines SSH key pair. */
export type PipelineSshKeyPair = Object & {
  /** The SSH private key. This value will be empty when retrieving the SSH key pair. */
  private_key?: string;
  /** The SSH public key. */
  public_key?: string;
  [key: string]: any;
};

/** A Pipelines schedule. */
export type PipelineSchedule = Object & {
  /** The UUID identifying the schedule. */
  uuid?: string;
  /** Whether the schedule is enabled. */
  enabled?: boolean;
  /** A Bitbucket Pipelines reference target. */
  target?: PipelineRefTarget;
  /** The cron expression with second precision (7 fields) that the schedule applies. For example, for expression: 0 0 12 * * ? *, will execute at 12pm UTC every day. */
  cron_pattern?: string;
  /**
   * The timestamp when the schedule was created.
   * @format date-time
   */
  created_on?: string;
  /**
   * The timestamp when the schedule was updated.
   * @format date-time
   */
  updated_on?: string;
  [key: string]: any;
};

export type PipelineSchedulePostRequestBody = Object & {
  /** The target on which the schedule will be executed. */
  target: {
    /** A representation of the selector that was used to identify the pipeline in the YML file. */
    selector: PipelineSelector;
    /** The name of the reference. */
    ref_name: string;
    /** The type of reference (branch only). */
    ref_type: "branch";
  };
  /** Whether the schedule is enabled. */
  enabled?: boolean;
  /** The cron expression with second precision (7 fields) that the schedule applies. For example, for expression: 0 0 12 * * ? *, will execute at 12pm UTC every day. */
  cron_pattern: string;
  [key: string]: any;
};

export type PipelineSchedulePutRequestBody = Object & {
  /** Whether the schedule is enabled. */
  enabled?: boolean;
  [key: string]: any;
};

/**
 * Paginated Pipeline Schedule
 * A paged list of schedules
 */
export interface PaginatedPipelineSchedules {
  /** Page number of the current results. This is an optional element that is not provided in all responses. */
  page?: number;
  /**
   * The values of the current page.
   * @minItems 0
   */
  values?: PipelineSchedule[];
  /** Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute. */
  size?: number;
  /** Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values. */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
}

/** A Pipelines schedule execution. */
export type PipelineScheduleExecution = Object & Record<string, any>;

/** A Pipelines executed schedule execution. */
export type PipelineScheduleExecutionExecuted = PipelineScheduleExecution & {
  /** A Bitbucket Pipeline. This represents an actual pipeline result. */
  pipeline?: Pipeline;
  [key: string]: any;
};

/** A Pipelines schedule execution that failed to be executed. */
export type PipelineScheduleExecutionErrored = PipelineScheduleExecution & {
  /** An error causing a pipeline failure. */
  error?: PipelineError;
  [key: string]: any;
};

/**
 * Paginated Pipeline Schedule Executions
 * A paged list of the executions of a schedule.
 */
export interface PaginatedPipelineScheduleExecutions {
  /** Page number of the current results. This is an optional element that is not provided in all responses. */
  page?: number;
  /**
   * The values of the current page.
   * @minItems 0
   */
  values?: PipelineScheduleExecution[];
  /** Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute. */
  size?: number;
  /** Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values. */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
}

/** A Pipelines build number. */
export type PipelineBuildNumber = Object & {
  /** The next number that will be used as build number. */
  next?: number;
  [key: string]: any;
};

/** A Pipelines variable. */
export type PipelineVariable = Object & {
  /** The UUID identifying the variable. */
  uuid?: string;
  /** The unique name of the variable. */
  key?: string;
  /** The value of the variable. If the variable is secured, this will be empty. */
  value?: string;
  /** If true, this variable will be treated as secured. The value will never be exposed in the logs or the REST API. */
  secured?: boolean;
  [key: string]: any;
};

/** A step of a Bitbucket pipeline. This represents the actual result of the step execution. */
export type PipelineStep = Object & {
  /** The UUID identifying the step. */
  uuid?: string;
  /**
   * The timestamp when the step execution was started. This is not set when the step hasn't executed yet.
   * @format date-time
   */
  started_on?: string;
  /**
   * The timestamp when the step execution was completed. This is not set if the step is still in progress.
   * @format date-time
   */
  completed_on?: string;
  /** The representation of the progress state of a pipeline step. */
  state?: PipelineStepState;
  /** The definition of a Docker image that can be used for a Bitbucket Pipelines step execution context. */
  image?: PipelineImage;
  /** The list of commands that are executed as part of the setup phase of the build. These commands are executed outside the build container. */
  setup_commands?: PipelineCommand[];
  /** The list of build commands. These commands are executed in the build container. */
  script_commands?: PipelineCommand[];
  [key: string]: any;
};

/** The representation of the progress state of a pipeline step. */
export type PipelineStepState = Object & Record<string, any>;

/** A Bitbucket Pipelines PENDING pipeline step state. */
export type PipelineStepStatePending = PipelineStepState & {
  /** The name of pipeline step state (PENDING). */
  name?: "PENDING";
  [key: string]: any;
};

/** A Bitbucket Pipelines READY pipeline step state. */
export type PipelineStepStateReady = PipelineStepState & {
  /** The name of pipeline step state (READY). */
  name?: "READY";
  [key: string]: any;
};

/** A Bitbucket Pipelines IN_PROGRESS pipeline step state. */
export type PipelineStepStateInProgress = PipelineStepState & {
  /** The name of pipeline step state (IN_PROGRESS). */
  name?: "IN_PROGRESS";
  [key: string]: any;
};

/** A Bitbucket Pipelines COMPLETED pipeline step state. */
export type PipelineStepStateCompleted = PipelineStepState & {
  /** The name of pipeline step state (COMPLETED). */
  name?: "COMPLETED";
  /** A result of a completed pipeline step state. */
  result?: PipelineStepStateCompletedResult;
  [key: string]: any;
};

/** A result of a completed pipeline step state. */
export type PipelineStepStateCompletedResult = Object & Record<string, any>;

/** A Bitbucket Pipelines ERROR pipeline step result. */
export type PipelineStepStateCompletedError =
  PipelineStepStateCompletedResult & {
    /** The name of the result (ERROR) */
    name?: "ERROR";
    /** An error causing a step failure. */
    error?: PipelineStepError;
    [key: string]: any;
  };

/** A Bitbucket Pipelines FAILED pipeline step result. */
export type PipelineStepStateCompletedFailed =
  PipelineStepStateCompletedResult & {
    /** The name of the result (FAILED) */
    name?: "FAILED";
    [key: string]: any;
  };

/** A Bitbucket Pipelines STOPPED pipeline step result. */
export type PipelineStepStateCompletedStopped =
  PipelineStepStateCompletedResult & {
    /** The name of the result (STOPPED) */
    name?: "STOPPED";
    [key: string]: any;
  };

/** A Bitbucket Pipelines NOT_RUN pipeline step result. */
export type PipelineStepStateCompletedNotRun =
  PipelineStepStateCompletedResult & {
    /** The name of the result (NOT_RUN) */
    name?: "NOT_RUN";
    [key: string]: any;
  };

/** A Bitbucket Pipelines EXPIRED pipeline step result. */
export type PipelineStepStateCompletedExpired =
  PipelineStepStateCompletedResult & {
    /** The name of the result (EXPIRED) */
    name?: "EXPIRED";
    [key: string]: any;
  };

/** A Bitbucket Pipelines SUCCESSFUL pipeline step result. */
export type PipelineStepStateCompletedSuccessful =
  PipelineStepStateCompletedResult & {
    /** The name of the result (SUCCESSFUL) */
    name?: "SUCCESSFUL";
    [key: string]: any;
  };

/** An error causing a step failure. */
export type PipelineStepError = Object & {
  /** The error key. */
  key?: string;
  /** The error message. */
  message?: string;
  [key: string]: any;
};

/**
 * Pipeline Image
 * The definition of a Docker image that can be used for a Bitbucket Pipelines step execution context.
 */
export interface PipelineImage {
  /** The name of the image. If the image is hosted on DockerHub the short name can be used, otherwise the fully qualified name is required here. */
  name?: string;
  /** The username needed to authenticate with the Docker registry. Only required when using a private Docker image. */
  username?: string;
  /** The password needed to authenticate with the Docker registry. Only required when using a private Docker image. */
  password?: string;
  /** The email needed to authenticate with the Docker registry. Only required when using a private Docker image. */
  email?: string;
}

/**
 * Pipeline Command
 * An executable pipeline command.
 */
export interface PipelineCommand {
  /** The name of the command. */
  name?: string;
  /** The executable command. */
  command?: string;
}

/**
 * Paginated Pipelines
 * A paged list of pipelines
 */
export interface PaginatedPipelines {
  /** Page number of the current results. This is an optional element that is not provided in all responses. */
  page?: number;
  /**
   * The values of the current page.
   * @minItems 0
   */
  values?: Pipeline[];
  /** Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute. */
  size?: number;
  /** Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values. */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
}

/**
 * Paginated Pipeline Known Hosts
 * A paged list of known hosts.
 */
export interface PaginatedPipelineKnownHosts {
  /** Page number of the current results. This is an optional element that is not provided in all responses. */
  page?: number;
  /**
   * The values of the current page.
   * @minItems 0
   */
  values?: PipelineKnownHost[];
  /** Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute. */
  size?: number;
  /** Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values. */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
}

/**
 * Paginated Pipeline Variables
 * A paged list of variables.
 */
export interface PaginatedPipelineVariables {
  /** Page number of the current results. This is an optional element that is not provided in all responses. */
  page?: number;
  /**
   * The values of the current page.
   * @minItems 0
   */
  values?: PipelineVariable[];
  /** Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute. */
  size?: number;
  /** Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values. */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
}

/**
 * Paginated Pipeline Steps
 * A paged list of pipeline steps.
 */
export interface PaginatedPipelineSteps {
  /** Page number of the current results. This is an optional element that is not provided in all responses. */
  page?: number;
  /**
   * The values of the current page.
   * @minItems 0
   */
  values?: PipelineStep[];
  /** Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute. */
  size?: number;
  /** Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values. */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
}

/** Information about the source of the pipeline configuration */
export interface PipelineConfigurationSource {
  /** Identifier of the configuration source */
  source: string;
  /**
   * Link to the configuration source view or its immediate content
   * @format uri
   */
  uri: string;
}

/** A Bitbucket Pipelines runner for self-hosted builds. */
export type PipelineRunner = Object & {
  /** The UUID identifying the runner. */
  uuid?: string;
  /** The name of the runner. */
  name?: string;
  /** Labels assigned to the runner for identification and routing. */
  labels?: string[];
  /** The state information of a runner. */
  state?: PipelineRunnerState;
  /**
   * The timestamp when the runner was created.
   * @format date-time
   */
  created_on?: string;
  /**
   * The timestamp when the runner was last updated.
   * @format date-time
   */
  updated_on?: string;
  /** OAuth client configuration for runner authentication. */
  oauth_client?: PipelineRunnerOauthClient;
  [key: string]: any;
};

/** The state information of a runner. */
export type PipelineRunnerState = Object & {
  /** The current status of the runner. */
  status?:
    | "UNREGISTERED"
    | "ONLINE"
    | "OFFLINE"
    | "DISABLED"
    | "ENABLED"
    | "UNHEALTHY";
  /** Version information for a runner. */
  version?: PipelineRunnerVersion;
  /**
   * The timestamp when the runner state was last updated.
   * @format date-time
   */
  updated_on?: string;
  /** Whether the runner is cordoned (prevented from accepting new steps). */
  cordoned?: boolean;
  [key: string]: any;
};

/** Version information for a runner. */
export type PipelineRunnerVersion = Object & {
  /** The currently installed version of the runner. */
  version?: string;
  /** The current recommended version of the runner. */
  current?: string;
  [key: string]: any;
};

/** OAuth client configuration for runner authentication. */
export type PipelineRunnerOauthClient = Object & {
  /** The OAuth client ID. */
  id?: string;
  /** The OAuth client secret. This is an optional element that is only provided once. */
  secret?: string;
  /**
   * The OAuth token endpoint URL.
   * @format uri
   */
  token_endpoint?: string;
  /** The intended audience for the OAuth token. */
  audience?: string;
  [key: string]: any;
};

/**
 * Paginated Runners
 * A paged list of runners.
 */
export interface PaginatedPipelineRunners {
  /** Page number of the current results. This is an optional element that is not provided in all responses. */
  page?: number;
  /**
   * The values of the current page.
   * @minItems 0
   */
  values?: PipelineRunner[];
  /** Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute. */
  size?: number;
  /** Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values. */
  pagelen?: number;
  /** Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs. */
  next?: string;
  /** Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs. */
  previous?: string;
}

export interface SearchCodeSearchResult {
  type?: string;
  /** @format int64 */
  content_match_count?: number;
  content_matches?: SearchContentMatch[];
  path_matches?: SearchSegment[];
  /** A file object, representing a file at a commit in a repository */
  file?: CommitFile;
}

export interface SearchContentMatch {
  lines?: SearchLine[];
}

export interface SearchLine {
  /** @format int32 */
  line?: number;
  segments?: SearchSegment[];
}

export interface SearchResultPage {
  /** @format int64 */
  size?: number;
  /** @format int32 */
  page?: number;
  /** @format int32 */
  pagelen?: number;
  query_substituted?: boolean;
  /** @format uri */
  next?: string;
  /** @format uri */
  previous?: string;
  values?: SearchCodeSearchResult[];
}

export interface SearchSegment {
  text?: string;
  match?: boolean;
}

/**
 * Paginated Pull Requests
 * A paginated list of pullrequests.
 */
export interface PaginatedPullrequests {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: Pullrequest[];
}

/**
 * Issue Job Status
 * The status of an import or export job
 */
export interface IssueJobStatus {
  type?: string;
  /** The status of the import/export job */
  status?: "ACCEPTED" | "STARTED" | "RUNNING" | "FAILURE";
  /** The phase of the import/export job */
  phase?: string;
  /** The total number of issues being imported/exported */
  total?: number;
  /** The total number of issues already imported/exported */
  count?: number;
  /**
   * The percentage of issues already imported/exported
   * @min 0
   * @max 100
   */
  pct?: number;
}

export interface BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema {
  permission: "read" | "write" | "create-repo" | "admin";
}

export interface BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema {
  permission: "read" | "write" | "admin";
}

/**
 * Pull Request Task Create
 * A pullrequest task create
 */
export interface PullrequestTaskCreate {
  /**
   * Task Raw Content
   * task raw content
   */
  content: {
    /** The task contents */
    raw: string;
  };
  /** The base type for all comments. This type should be considered abstract. Each of the "commentable" resources defines its own subtypes (e.g. `issue_comment`). */
  comment?: Comment;
  pending?: boolean;
}

/**
 * Pull Request Task Update
 * A pullrequest task update
 */
export interface PullrequestTaskUpdate {
  /**
   * Task Raw Content
   * task raw content
   */
  content?: {
    /** The task contents */
    raw: string;
  };
  state?: "RESOLVED" | "UNRESOLVED";
}

/**
 * Task
 * A task object.
 */
export interface Task {
  /** @format int64 */
  id?: number;
  /** @format date-time */
  created_on: string;
  /** @format date-time */
  updated_on: string;
  state: "RESOLVED" | "UNRESOLVED";
  content: {
    /** The text as it was typed by a user. */
    raw?: string;
    /** The type of markup language the raw content is to be interpreted in. */
    markup?: "markdown" | "creole" | "plaintext";
    /** The user's content rendered as HTML. */
    html?: string;
  };
  /** An account object. */
  creator: Account;
  pending?: boolean;
  /**
   * The ISO8601 timestamp for when the task was resolved.
   * @format date-time
   */
  resolved_on?: string;
  /** An account object. */
  resolved_by?: Account;
}

/**
 * Subject Types
 * The mapping of resource/subject types pointing to their individual event types.
 */
export interface SubjectTypes {
  repository?: {
    /**
     * Link
     * A link to a resource related to this object.
     */
    events?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
  };
  workspace?: {
    /**
     * Link
     * A link to a resource related to this object.
     */
    events?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
  };
}

/**
 * Error
 * Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`.
 */
export interface Error {
  type: string;
  error?: {
    message: string;
    detail?: string;
    /** Optional structured data that is endpoint-specific. */
    data?: Record<string, any>;
  };
  [key: string]: any;
}

/**
 * Account Links
 * Links related to an Account.
 */
export interface AccountLinks {
  /** A link to a resource related to this object. */
  avatar?: Link;
  [key: string]: any;
}

/**
 * Link
 * A link to a resource related to this object.
 */
export interface Link {
  /** @format uri */
  href?: string;
  name?: string;
}

/** An account object. */
export type Account = Object & {
  /** Links related to an Account. */
  links?: AccountLinks;
  /** @format date-time */
  created_on?: string;
  display_name?: string;
  uuid?: string;
  [key: string]: any;
};

/**
 * Paginated Accounts
 * A paginated list of accounts.
 */
export interface PaginatedAccounts {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: Account[];
}

/**
 * Paginated Repositories
 * A paginated list of repositories.
 */
export interface PaginatedRepositories {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: Repository[];
}

/**
 * Repository Inheritance State
 * A json object representing the repository's inheritance state values
 */
export interface RepositoryInheritanceState {
  type: string;
  override_settings?: object;
  [key: string]: any;
}

/** A Bitbucket repository. */
export type Repository = Object & {
  links?: {
    /**
     * Link
     * A link to a resource related to this object.
     */
    self?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    html?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    avatar?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    pullrequests?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    commits?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    forks?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    watchers?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    downloads?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    clone?: {
      /** @format uri */
      href?: string;
      name?: string;
    }[];
    /**
     * Link
     * A link to a resource related to this object.
     */
    hooks?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
  };
  /** The repository's immutable id. This can be used as a substitute for the slug segment in URLs. Doing this guarantees your URLs will survive renaming of the repository by its owner, or even transfer of the repository to a different user. */
  uuid?: string;
  /** The concatenation of the repository owner's username and the slugified name, e.g. "evzijst/interruptingcow". This is the same string used in Bitbucket URLs. */
  full_name?: string;
  is_private?: boolean;
  /** A Bitbucket repository. */
  parent?: Repository;
  scm?: "git";
  /** An account object. */
  owner?: Account;
  name?: string;
  description?: string;
  /** @format date-time */
  created_on?: string;
  /** @format date-time */
  updated_on?: string;
  size?: number;
  language?: string;
  /**
   *
   * The issue tracker for this repository is enabled. Issue Tracker
   * features are not supported for repositories in workspaces
   * administered through admin.atlassian.com.
   */
  has_issues?: boolean;
  /**
   *
   * The wiki for this repository is enabled. Wiki
   * features are not supported for repositories in workspaces
   * administered through admin.atlassian.com.
   */
  has_wiki?: boolean;
  /**
   *
   * Controls the rules for forking this repository.
   *
   * * **allow_forks**: unrestricted forking
   * * **no_public_forks**: restrict forking to private forks (forks cannot
   *   be made public later)
   * * **no_forks**: deny all forking
   */
  fork_policy?: "allow_forks" | "no_public_forks" | "no_forks";
  /**
   * A Bitbucket project.
   *             Projects are used by teams to organize repositories.
   */
  project?: Project;
  /** A branch object, representing a branch in a repository. */
  mainbranch?: Branch;
  [key: string]: any;
};

/** A project's branching model */
export type ProjectBranchingModel = Object & {
  /**
   * The active branch types.
   * @maxItems 4
   * @minItems 0
   * @uniqueItems true
   */
  branch_types?: {
    /** The kind of branch. */
    kind: "feature" | "bugfix" | "release" | "hotfix";
    /** The prefix for this branch type. A branch with this prefix will be classified as per `kind`. The prefix must be a valid prefix for a branch and must always exist. It cannot be blank, empty or `null`. */
    prefix: string;
  }[];
  development?: {
    /** Name of the target branch. If inherited by a repository, it will default to the main branch if the specified branch does not exist. */
    name: string;
    /** Indicates if the setting points at an explicit branch (`false`) or tracks the main branch (`true`). */
    use_mainbranch: boolean;
  };
  production?: {
    /** Name of the target branch. If inherited by a repository, it will default to the main branch if the specified branch does not exist. */
    name: string;
    /** Indicates if the setting points at an explicit branch (`false`) or tracks the main branch (`true`). */
    use_mainbranch: boolean;
  };
  [key: string]: any;
};

/** A repository's branching model */
export type BranchingModel = Object & {
  /**
   * The active branch types.
   * @maxItems 4
   * @minItems 0
   * @uniqueItems true
   */
  branch_types?: {
    /** The kind of branch. */
    kind: "feature" | "bugfix" | "release" | "hotfix";
    /** The prefix for this branch type. A branch with this prefix will be classified as per `kind`. The prefix must be a valid prefix for a branch and must always exist. It cannot be blank, empty or `null`. */
    prefix: string;
  }[];
  development?: {
    /** A branch object, representing a branch in a repository. */
    branch?: Branch;
    /** Name of the target branch. Will be listed here even when the target branch does not exist. Will be `null` if targeting the main branch and the repository is empty. */
    name: string;
    /** Indicates if the setting points at an explicit branch (`false`) or tracks the main branch (`true`). */
    use_mainbranch: boolean;
  };
  production?: {
    /** A branch object, representing a branch in a repository. */
    branch?: Branch;
    /** Name of the target branch. Will be listed here even when the target branch does not exist. Will be `null` if targeting the main branch and the repository is empty. */
    name: string;
    /** Indicates if the setting points at an explicit branch (`false`) or tracks the main branch (`true`). */
    use_mainbranch: boolean;
  };
  [key: string]: any;
};

/** A repository's branching model settings */
export type BranchingModelSettings = Object & {
  links?: {
    /**
     * Link
     * A link to a resource related to this object.
     */
    self?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
  };
  /**
   * @maxItems 4
   * @minItems 0
   * @uniqueItems true
   */
  branch_types?: {
    /** Whether the branch type is enabled or not. A disabled branch type may contain an invalid `prefix`. */
    enabled?: boolean;
    /** The kind of the branch type. */
    kind: "feature" | "bugfix" | "release" | "hotfix";
    /** The prefix for this branch type. A branch with this prefix will be classified as per `kind`. The `prefix` of an enabled branch type must be a valid branch prefix.Additionally, it cannot be blank, empty or `null`. The `prefix` for a disabled branch type can be empty or invalid. */
    prefix?: string;
  }[];
  development?: {
    /** Indicates if the configured branch is valid, that is, if the configured branch actually exists currently. Is always `true` when `use_mainbranch` is `true` (even if the main branch does not exist). This field is read-only. This field is ignored when updating/creating settings. */
    is_valid?: boolean;
    /** The configured branch. It must be `null` when `use_mainbranch` is `true`. Otherwise it must be a non-empty value. It is possible for the configured branch to not exist (e.g. it was deleted after the settings are set). In this case `is_valid` will be `false`. The branch must exist when updating/setting the `name` or an error will occur. */
    name?: string;
    /** Indicates if the setting points at an explicit branch (`false`) or tracks the main branch (`true`). When `true` the `name` must be `null` or not provided. When `false` the `name` must contain a non-empty branch name. */
    use_mainbranch?: boolean;
  };
  production?: {
    /** Indicates if the configured branch is valid, that is, if the configured branch actually exists currently. Is always `true` when `use_mainbranch` is `true` (even if the main branch does not exist). This field is read-only. This field is ignored when updating/creating settings. */
    is_valid?: boolean;
    /** The configured branch. It must be `null` when `use_mainbranch` is `true`. Otherwise it must be a non-empty value. It is possible for the configured branch to not exist (e.g. it was deleted after the settings are set). In this case `is_valid` will be `false`. The branch must exist when updating/setting the `name` or an error will occur. */
    name?: string;
    /** Indicates if the setting points at an explicit branch (`false`) or tracks the main branch (`true`). When `true` the `name` must be `null` or not provided. When `false` the `name` must contain a non-empty branch name. */
    use_mainbranch?: boolean;
    /** Indicates if branch is enabled or not. */
    enabled?: boolean;
  };
  [key: string]: any;
};

/** A repository's effective branching model */
export type EffectiveRepoBranchingModel = Object & {
  /**
   * The active branch types.
   * @maxItems 4
   * @minItems 0
   * @uniqueItems true
   */
  branch_types?: {
    /** The kind of branch. */
    kind: "feature" | "bugfix" | "release" | "hotfix";
    /** The prefix for this branch type. A branch with this prefix will be classified as per `kind`. The prefix must be a valid prefix for a branch and must always exist. It cannot be blank, empty or `null`. */
    prefix: string;
  }[];
  development?: {
    /** A branch object, representing a branch in a repository. */
    branch?: Branch;
    /** Name of the target branch. Will be listed here even when the target branch does not exist. Will be `null` if targeting the main branch and the repository is empty. */
    name: string;
    /** Indicates if the setting points at an explicit branch (`false`) or tracks the main branch (`true`). */
    use_mainbranch: boolean;
  };
  production?: {
    /** A branch object, representing a branch in a repository. */
    branch?: Branch;
    /** Name of the target branch. Will be listed here even when the target branch does not exist. Will be `null` if targeting the main branch and the repository is empty. */
    name: string;
    /** Indicates if the setting points at an explicit branch (`false`) or tracks the main branch (`true`). */
    use_mainbranch: boolean;
  };
  [key: string]: any;
};

/**
 * Paginated Branch Restrictions
 * A paginated list of branch restriction rules.
 */
export interface PaginatedBranchrestrictions {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: Branchrestriction[];
}

/** The base type for all comments. This type should be considered abstract. Each of the "commentable" resources defines its own subtypes (e.g. `issue_comment`). */
export type Comment = Object & {
  /** @format int64 */
  id?: number;
  /** @format date-time */
  created_on?: string;
  /** @format date-time */
  updated_on?: string;
  content?: {
    /** The text as it was typed by a user. */
    raw?: string;
    /** The type of markup language the raw content is to be interpreted in. */
    markup?: "markdown" | "creole" | "plaintext";
    /** The user's content rendered as HTML. */
    html?: string;
  };
  /** An account object. */
  user?: Account;
  deleted?: boolean;
  /** The base type for all comments. This type should be considered abstract. Each of the "commentable" resources defines its own subtypes (e.g. `issue_comment`). */
  parent?: Comment;
  inline?: {
    /**
     * The comment's anchor line in the old version of the file. If the comment is a multi-line comment, this is the ending line number in the old version of the file.
     * @min 1
     */
    from?: number;
    /**
     * The comment's anchor line in the new version of the file. If the comment is a multi-line comment, this is the ending line number in the new version of the file.
     * @min 1
     */
    to?: number;
    /**
     * The starting line number in the old version of the file, if the comment is a multi-line comment. This is null otherwise.
     * @min 1
     */
    start_from?: number;
    /**
     * The starting line number in the new version of the file, if the comment is a multi-line comment. This is null otherwise.
     * @min 1
     */
    start_to?: number;
    /** The path of the file this comment is anchored to. */
    path: string;
  };
  links?: {
    /**
     * Link
     * A link to a resource related to this object.
     */
    self?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    html?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    code?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
  };
  [key: string]: any;
};

/** A commit status object. */
export type Commitstatus = Object & {
  links?: {
    /**
     * Link
     * A link to a resource related to this object.
     */
    self?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    commit?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
  };
  /**
   * An identifier for the status that's unique to
   *         its type (current "build" is the only supported type) and the vendor,
   *         e.g. BB-DEPLOY
   */
  key: string;
  /**
   *
   * The name of the ref that pointed to this commit at the time the status
   * object was created. Note that this the ref may since have moved off of
   * the commit. This optional field can be useful for build systems whose
   * build triggers and configuration are branch-dependent (e.g. a Pipeline
   * build).
   * It is legitimate for this field to not be set, or even apply (e.g. a
   * static linting job).
   */
  refname?: string;
  /** A URL linking back to the vendor or build system, for providing more information about whatever process produced this status. Accepts context variables `repository` and `commit` that Bitbucket will evaluate at runtime whenever at runtime. For example, one could use https://foo.com/builds/{repository.full_name} which Bitbucket will turn into https://foo.com/builds/foo/bar at render time. */
  url?: string;
  /** Provides some indication of the status of this commit */
  state: "FAILED" | "INPROGRESS" | "STOPPED" | "SUCCESSFUL";
  /** An identifier for the build itself, e.g. BB-DEPLOY-1 */
  name?: string;
  /** A description of the build (e.g. "Unit tests in Bamboo") */
  description?: string;
  /** @format date-time */
  created_on?: string;
  /** @format date-time */
  updated_on?: string;
  [key: string]: any;
};

/**
 * Paginated Commit Statuses
 * A paginated list of commit status objects.
 */
export interface PaginatedCommitstatuses {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: Commitstatus[];
}

/**
 * Export Options
 * Options for issue export.
 */
export interface ExportOptions {
  type: string;
  project_key?: string;
  project_name?: string;
  send_email?: boolean;
  include_attachments?: boolean;
  [key: string]: any;
}

/**
 * Issue Change
 * An issue change.
 */
export interface IssueChange {
  type: string;
  links?: {
    /**
     * Link
     * A link to a resource related to this object.
     */
    self?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    issue?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
  };
  name?: string;
  /** @format date-time */
  created_on?: string;
  /** An account object. */
  user?: Account;
  /** An issue. */
  issue?: Issue;
  changes?: {
    assignee?: {
      old?: string;
      new?: string;
    };
    state?: {
      old?: string;
      new?: string;
    };
    title?: {
      old?: string;
      new?: string;
    };
    kind?: {
      old?: string;
      new?: string;
    };
    milestone?: {
      old?: string;
      new?: string;
    };
    component?: {
      old?: string;
      new?: string;
    };
    priority?: {
      old?: string;
      new?: string;
    };
    version?: {
      old?: string;
      new?: string;
    };
    content?: {
      old?: string;
      new?: string;
    };
  };
  message?: {
    /** The text as it was typed by a user. */
    raw?: string;
    /** The type of markup language the raw content is to be interpreted in. */
    markup?: "markdown" | "creole" | "plaintext";
    /** The user's content rendered as HTML. */
    html?: string;
  };
  [key: string]: any;
}

/** An issue. */
export type Issue = Object & {
  links?: {
    /**
     * Link
     * A link to a resource related to this object.
     */
    self?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    html?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    comments?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    attachments?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    watch?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    vote?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
  };
  id?: number;
  /** A Bitbucket repository. */
  repository?: Repository;
  title?: string;
  /** An account object. */
  reporter?: Account;
  /** An account object. */
  assignee?: Account;
  /** @format date-time */
  created_on?: string;
  /** @format date-time */
  updated_on?: string;
  /** @format date-time */
  edited_on?: string;
  state?:
    | "submitted"
    | "new"
    | "open"
    | "resolved"
    | "on hold"
    | "invalid"
    | "duplicate"
    | "wontfix"
    | "closed";
  kind?: "bug" | "enhancement" | "proposal" | "task";
  priority?: "trivial" | "minor" | "major" | "critical" | "blocker";
  /** A milestone as defined in a repository's issue tracker. */
  milestone?: Milestone;
  /** A version as defined in a repository's issue tracker. */
  version?: Version;
  /** A component as defined in a repository's issue tracker. */
  component?: Component;
  votes?: number;
  content?: {
    /** The text as it was typed by a user. */
    raw?: string;
    /** The type of markup language the raw content is to be interpreted in. */
    markup?: "markdown" | "creole" | "plaintext";
    /** The user's content rendered as HTML. */
    html?: string;
  };
  [key: string]: any;
};

/**
 * Paginated Components
 * A paginated list of issue tracker components.
 */
export interface PaginatedComponents {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: Component[];
}

/** An issue file attachment's meta data. Note this does not contain the file's actual contents. */
export type IssueAttachment = Object & {
  links?: {
    /**
     * Link
     * A link to a resource related to this object.
     */
    self?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
  };
  name?: string;
  [key: string]: any;
};

/**
 * Paginated Issue Attachment
 * A paginated list of issue attachments.
 */
export interface PaginatedIssueAttachments {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /** @minItems 0 */
  values?: IssueAttachment[];
}

/**
 * Paginated Log Entries
 * A paginated list of issue changes.
 */
export interface PaginatedLogEntries {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /** @minItems 0 */
  values?: IssueChange[];
}

/**
 * Paginated Issue Comments
 * A paginated list of issue comments.
 */
export interface PaginatedIssueComments {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: IssueComment[];
}

/**
 * Paginated Issues
 * A paginated list of issues.
 */
export interface PaginatedIssues {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: Issue[];
}

/**
 * Paginated Milestones
 * A paginated list of issue tracker milestones.
 */
export interface PaginatedMilestones {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: Milestone[];
}

/**
 * Paginated Versions
 * A paginated list of issue tracker versions.
 */
export interface PaginatedVersions {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: Version[];
}

/** A group object */
export type Group = Object & {
  links?: {
    /**
     * Link
     * A link to a resource related to this object.
     */
    self?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    html?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
  };
  /** An account object. */
  owner?: Account;
  /**
   * A Bitbucket workspace.
   *             Workspaces are used to organize repositories.
   */
  workspace?: Workspace;
  name?: string;
  /**
   * The "sluggified" version of the group's name. This contains only ASCII
   * characters and can therefore be slightly different than the name
   */
  slug?: string;
  /**
   * The concatenation of the workspace's slug and the group's slug,
   * separated with a colon (e.g. `acme:developers`)
   */
  full_slug?: string;
  [key: string]: any;
};

/**
 * Project Group Permission
 * A group's permission for a given project.
 */
export interface ProjectGroupPermission {
  type: string;
  links?: {
    /**
     * Link
     * A link to a resource related to this object.
     */
    self?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
  };
  permission?: "read" | "write" | "create-repo" | "admin" | "none";
  /** A group object */
  group?: Group;
  /**
   * A Bitbucket project.
   *             Projects are used by teams to organize repositories.
   */
  project?: Project;
  [key: string]: any;
}

/**
 * Repository Group Permission
 * A group's permission for a given repository.
 */
export interface RepositoryGroupPermission {
  type: string;
  links?: {
    /**
     * Link
     * A link to a resource related to this object.
     */
    self?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
  };
  permission?: "read" | "write" | "admin" | "none";
  /** A group object */
  group?: Group;
  /** A Bitbucket repository. */
  repository?: Repository;
  [key: string]: any;
}

/**
 * Paginated Project Group Permissions
 * A paginated list of project group permissions.
 */
export interface PaginatedProjectGroupPermissions {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: ProjectGroupPermission[];
}

/**
 * Paginated Project User Permissions
 * A paginated list of project user permissions.
 */
export interface PaginatedProjectUserPermissions {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: ProjectUserPermission[];
}

/**
 * Paginated Repository Group Permissions
 * A paginated list of repository group permissions.
 */
export interface PaginatedRepositoryGroupPermissions {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: RepositoryGroupPermission[];
}

/**
 * Paginated Repository Permissions
 * A paginated list of repository permissions.
 */
export interface PaginatedRepositoryPermissions {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: RepositoryPermission[];
}

/**
 * Paginated Repository User Permissions
 * A paginated list of repository user permissions.
 */
export interface PaginatedRepositoryUserPermissions {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: RepositoryUserPermission[];
}

/**
 * Repository Permission
 * A user's permission for a given repository.
 */
export interface RepositoryPermission {
  type: string;
  permission?: "read" | "write" | "admin" | "none";
  /** A user object. */
  user?: User;
  /** A Bitbucket repository. */
  repository?: Repository;
  [key: string]: any;
}

/**
 * Project User Permission
 * A user's direct permission for a given project.
 */
export interface ProjectUserPermission {
  type: string;
  links?: {
    /**
     * Link
     * A link to a resource related to this object.
     */
    self?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
  };
  permission?: "read" | "write" | "create-repo" | "admin" | "none";
  /** A user object. */
  user?: User;
  /**
   * A Bitbucket project.
   *             Projects are used by teams to organize repositories.
   */
  project?: Project;
  [key: string]: any;
}

/**
 * Paginated Projects
 * A paginated list of projects
 */
export interface PaginatedProjects {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: Project[];
}

/** A team object. */
export type Team = Account & {
  /** Links related to a Team. */
  links?: TeamLinks;
  [key: string]: any;
};

/** Links related to a Team. */
export type TeamLinks = AccountLinks & {
  /** A link to a resource related to this object. */
  self?: Link;
  /** A link to a resource related to this object. */
  html?: Link;
  /** A link to a resource related to this object. */
  members?: Link;
  /** A link to a resource related to this object. */
  projects?: Link;
  /** A link to a resource related to this object. */
  repositories?: Link;
  [key: string]: any;
};

/**
 * A Bitbucket project.
 *             Projects are used by teams to organize repositories.
 */
export type Project = Object & {
  links?: {
    /**
     * Link
     * A link to a resource related to this object.
     */
    html?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    avatar?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
  };
  /** The project's immutable id. */
  uuid?: string;
  /** The project's key. */
  key?: string;
  /** A team object. */
  owner?: Team;
  /** The name of the project. */
  name?: string;
  description?: string;
  /**
   *
   * Indicates whether the project is publicly accessible, or whether it is
   * private to the team and consequently only visible to team members.
   * Note that private projects cannot contain public repositories.
   */
  is_private?: boolean;
  /** @format date-time */
  created_on?: string;
  /** @format date-time */
  updated_on?: string;
  /**
   *
   * Indicates whether the project contains publicly visible repositories.
   * Note that private projects cannot contain public repositories.
   */
  has_publicly_visible_repos?: boolean;
  [key: string]: any;
};

/**
 * Comment Resolution
 * The resolution object for a Comment.
 */
export interface CommentResolution {
  type: string;
  /** An account object. */
  user?: Account;
  /**
   * The ISO8601 timestamp the resolution was created.
   * @format date-time
   */
  created_on?: string;
  [key: string]: any;
}

/**
 * Default Reviewer and Type
 * Object containing a user that is a default reviewer and the type of reviewer
 */
export interface DefaultReviewerAndType {
  type: string;
  reviewer_type?: string;
  /** A user object. */
  user?: User;
  [key: string]: any;
}

/**
 * Paginated Default Reviewer and Type
 * A paginated list of default reviewers with reviewer type.
 */
export interface PaginatedDefaultReviewerAndType {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: DefaultReviewerAndType[];
}

/**
 * Paginated Pull Request Comments
 * A paginated list of pullrequest comments.
 */
export interface PaginatedPullrequestComments {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: PullrequestComment[];
}

/**
 * Paginated Tasks
 * A paginated list of tasks.
 */
export interface PaginatedTasks {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: PullrequestCommentTask[];
}

/** Object describing a user's role on resources like commits or pull requests. */
export type Participant = Object & {
  /** An account object. */
  user?: Account;
  role?: "PARTICIPANT" | "REVIEWER";
  approved?: boolean;
  state?: "approved" | "changes_requested";
  /**
   * The ISO8601 timestamp of the participant's action. For approvers, this is the time of their approval. For commenters and pull request reviewers who are not approvers, this is the time they last commented, or null if they have not commented.
   * @format date-time
   */
  participated_on?: string;
  [key: string]: any;
};

/**
 * Pull Request Merge Parameters
 * The metadata that describes a pull request merge.
 */
export interface PullrequestMergeParameters {
  type: string;
  /** The commit message that will be used on the resulting commit. Note that the size of the message is limited to 128 KiB. */
  message?: string;
  /** Whether the source branch should be deleted. If this is not provided, we fallback to the value used when the pull request was created, which defaults to False */
  close_source_branch?: boolean;
  /**
   * The merge strategy that will be used to merge the pull request.
   * @default "merge_commit"
   */
  merge_strategy?:
    | "merge_commit"
    | "squash"
    | "fast_forward"
    | "squash_fast_forward"
    | "rebase_fast_forward"
    | "rebase_merge";
  [key: string]: any;
}

/** Pull Request Endpoint */
export interface PullrequestEndpoint {
  /** A Bitbucket repository. */
  repository?: Repository;
  /** Pull Request Branch */
  branch?: {
    name?: string;
    /** Available merge strategies, when this endpoint is the destination of the pull request. */
    merge_strategies?: (
      | "merge_commit"
      | "squash"
      | "fast_forward"
      | "squash_fast_forward"
      | "rebase_fast_forward"
      | "rebase_merge"
    )[];
    /** The default merge strategy, when this endpoint is the destination of the pull request. */
    default_merge_strategy?: string;
  };
  /** Pull Request Commit */
  commit?: {
    /** @pattern [0-9a-f]{7,}? */
    hash?: string;
  };
}

/** A pull request object. */
export type Pullrequest = Object & {
  links?: {
    /**
     * Link
     * A link to a resource related to this object.
     */
    self?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    html?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    commits?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    approve?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    diff?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    diffstat?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    comments?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    activity?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    merge?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    decline?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
  };
  /** The pull request's unique ID. Note that pull request IDs are only unique within their associated repository. */
  id?: number;
  /** Title of the pull request. */
  title?: string;
  /**
   * Rendered Pull Request Markup
   * User provided pull request text, interpreted in a markup language and rendered in HTML
   */
  rendered?: {
    title?: {
      /** The text as it was typed by a user. */
      raw?: string;
      /** The type of markup language the raw content is to be interpreted in. */
      markup?: "markdown" | "creole" | "plaintext";
      /** The user's content rendered as HTML. */
      html?: string;
    };
    description?: {
      /** The text as it was typed by a user. */
      raw?: string;
      /** The type of markup language the raw content is to be interpreted in. */
      markup?: "markdown" | "creole" | "plaintext";
      /** The user's content rendered as HTML. */
      html?: string;
    };
    reason?: {
      /** The text as it was typed by a user. */
      raw?: string;
      /** The type of markup language the raw content is to be interpreted in. */
      markup?: "markdown" | "creole" | "plaintext";
      /** The user's content rendered as HTML. */
      html?: string;
    };
  };
  summary?: {
    /** The text as it was typed by a user. */
    raw?: string;
    /** The type of markup language the raw content is to be interpreted in. */
    markup?: "markdown" | "creole" | "plaintext";
    /** The user's content rendered as HTML. */
    html?: string;
  };
  /** The pull request's current status. */
  state?: "OPEN" | "MERGED" | "DECLINED" | "SUPERSEDED";
  /** An account object. */
  author?: Account;
  source?: PullrequestEndpoint;
  destination?: PullrequestEndpoint;
  /** Pull Request Commit */
  merge_commit?: {
    /** @pattern [0-9a-f]{7,}? */
    hash?: string;
  };
  /**
   * The number of comments for a specific pull request.
   * @min 0
   */
  comment_count?: number;
  /**
   * The number of open tasks for a specific pull request.
   * @min 0
   */
  task_count?: number;
  /** A boolean flag indicating if merging the pull request closes the source branch. */
  close_source_branch?: boolean;
  /** An account object. */
  closed_by?: Account;
  /** Explains why a pull request was declined. This field is only applicable to pull requests in rejected state. */
  reason?: string;
  /**
   * The ISO8601 timestamp the request was created.
   * @format date-time
   */
  created_on?: string;
  /**
   * The ISO8601 timestamp the request was last updated.
   * @format date-time
   */
  updated_on?: string;
  /** The list of users that were added as reviewers on this pull request when it was created. For performance reasons, the API only includes this list on a pull request's `self` URL. */
  reviewers?: Account[];
  /**
   *         The list of users that are collaborating on this pull request.
   *         Collaborators are user that:
   *
   *         * are added to the pull request as a reviewer (part of the reviewers
   *           list)
   *         * are not explicit reviewers, but have commented on the pull request
   *         * are not explicit reviewers, but have approved the pull request
   *
   *         Each user is wrapped in an object that indicates the user's role and
   *         whether they have approved the pull request. For performance reasons,
   *         the API only returns this list when an API requests a pull request by
   *         id.
   *
   */
  participants?: Participant[];
  /** A boolean flag indicating whether the pull request is a draft. */
  draft?: boolean;
  /** A boolean flag indicating whether the pull request is queued */
  queued?: boolean;
  [key: string]: any;
};

/** A pull request task. */
export type PullrequestTask = Task & {
  links?: {
    /**
     * Link
     * A link to a resource related to this object.
     */
    self?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    html?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
  };
};

/**
 * File Conflict
 * A file conflict object.
 */
export interface FileConflict {
  type: string;
  path?: string;
  scenario?:
    | "delete_modify"
    | "modify_delete"
    | "content"
    | "binary"
    | "flags"
    | "mode"
    | "type"
    | "symlink"
    | "directory_file"
    | "file_directory"
    | "add_rename"
    | "rename_add"
    | "delete_rename"
    | "rename_delete"
    | "rename"
    | "subrepo"
    | "unknown";
  message?: string;
  [key: string]: any;
}

/**
 * Paginated File Conflicts
 * A paginated list of file conflicts.
 */
export interface PaginatedFileConflicts {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: FileConflict[];
}

/** The author of a change in a repository */
export type Author = Object & {
  /** The raw author value from the repository. This may be the only value available if the author does not match a user in Bitbucket. */
  raw?: string;
  /** An account object. */
  user?: Account;
  [key: string]: any;
};

/** The common base type for both repository and snippet commits. */
export type BaseCommit = Object & {
  /** @pattern [0-9a-f]{7,}? */
  hash?: string;
  /** @format date-time */
  date?: string;
  /** The author of a change in a repository */
  author?: Author;
  /** The committer of a change in a repository */
  committer?: Committer;
  message?: string;
  summary?: {
    /** The text as it was typed by a user. */
    raw?: string;
    /** The type of markup language the raw content is to be interpreted in. */
    markup?: "markdown" | "creole" | "plaintext";
    /** The user's content rendered as HTML. */
    html?: string;
  };
  /** @minItems 0 */
  parents?: BaseCommit[];
  [key: string]: any;
};

/** The committer of a change in a repository */
export type Committer = Object & {
  /** The raw committer value from the repository. This may be the only value available if the committer does not match a user in Bitbucket. */
  raw?: string;
  /** An account object. */
  user?: Account;
  [key: string]: any;
};

/**
 * Page
 * A paginated list of commits.
 */
export interface PaginatedChangeset {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: BaseCommit[];
}

/**
 * Paginated Commit Comments
 * A paginated list of commit comments.
 */
export interface PaginatedCommitComments {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: CommitComment[];
}

/**
 * Commit File
 * A file object, representing a file at a commit in a repository
 */
export interface CommitFile {
  type: string;
  /** The path in the repository */
  path?: string;
  /** A repository commit object. */
  commit?: Commit;
  attributes?: "link" | "executable" | "subrepository" | "binary" | "lfs";
  /** The escaped version of the path as it appears in a diff. If the path does not require escaping this will be the same as path. */
  escaped_path?: string;
  [key: string]: any;
}

/**
 * Diff Stat
 * A diffstat object that includes a summary of changes made to a file between two commits.
 */
export interface Diffstat {
  type: string;
  status?: "added" | "removed" | "modified" | "renamed";
  lines_added?: number;
  lines_removed?: number;
  /** A file object, representing a file at a commit in a repository */
  old?: CommitFile;
  /** A file object, representing a file at a commit in a repository */
  new?: CommitFile;
  [key: string]: any;
}

/**
 * Paginated Diff Stat
 * A paginated list of diffstats.
 */
export interface PaginatedDiffstats {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 500 with 5000 being the maximum allowed value.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: Diffstat[];
}

/**
 * Paginated Files
 * A paginated list of commit_file objects.
 */
export interface PaginatedFiles {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: CommitFile[];
}

/**
 * Paginated Refs
 * A paginated list of refs.
 */
export interface PaginatedRefs {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: Ref[];
}

/**
 * Tree Entry
 * Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`.
 */
export interface Treeentry {
  type: string;
  /** The path in the repository */
  path?: string;
  /** A repository commit object. */
  commit?: Commit;
  [key: string]: any;
}

/**
 * Paginated Tree Entry
 * A paginated list of commit_file and/or commit_directory objects.
 */
export interface PaginatedTreeentries {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: Treeentry[];
}

/**
 * Ref
 * A ref object, representing a branch or tag in a repository.
 */
export interface Ref {
  type: string;
  links?: {
    /**
     * Link
     * A link to a resource related to this object.
     */
    self?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    commits?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    html?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
  };
  /** The name of the ref. */
  name?: string;
  /** A repository commit object. */
  target?: Commit;
  [key: string]: any;
}

/**
 * Paginated Snippet Commits
 * A paginated list of snippet commits.
 */
export interface PaginatedSnippetCommit {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /** @minItems 0 */
  values?: SnippetCommit[];
}

/**
 * Paginated Snippet Comments
 * A paginated list of snippet comments.
 */
export interface PaginatedSnippetComments {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: SnippetComment[];
}

/**
 * Paginated Snippets
 * A paginated list of snippets.
 */
export interface PaginatedSnippets {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: Snippet[];
}

/** A comment on a snippet. */
export type SnippetComment = Object & {
  links?: {
    /**
     * Link
     * A link to a resource related to this object.
     */
    self?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    html?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
  };
  /** A snippet object. */
  snippet?: Snippet;
  [key: string]: any;
};

/** A snippet object. */
export type Snippet = Object & {
  /** @min 0 */
  id?: number;
  title?: string;
  /** The DVCS used to store the snippet. */
  scm?: "git";
  /** @format date-time */
  created_on?: string;
  /** @format date-time */
  updated_on?: string;
  /** An account object. */
  owner?: Account;
  /** An account object. */
  creator?: Account;
  is_private?: boolean;
  [key: string]: any;
};

/** Represents deploy key for a repository. */
export type DeployKey = Object & {
  /** The deploy key value. */
  key?: string;
  /** A Bitbucket repository. */
  repository?: Repository;
  /** The comment parsed from the deploy key (if present) */
  comment?: string;
  /** The user-defined label for the deploy key */
  label?: string;
  /** @format date-time */
  added_on?: string;
  /** @format date-time */
  last_used?: string;
  links?: {
    /**
     * Link
     * A link to a resource related to this object.
     */
    self?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
  };
  /** An account object. */
  owner?: Account;
  [key: string]: any;
};

/** Represents a GPG public key for a user. */
export type GPGAccountKey = Object & {
  /** An account object. */
  owner?: Account;
  /** The GPG key value in X format. */
  key?: string;
  /** The unique identifier for the GPG key */
  key_id?: string;
  /** The GPG key fingerprint. */
  fingerprint?: string;
  /** The fingerprint of the parent key. This value is null unless the current key is a subkey. */
  parent_fingerprint?: string;
  /** The user-defined label for the GPG key */
  name?: string;
  /** @format date-time */
  expires_on?: string;
  /** @format date-time */
  created_on?: string;
  /** @format date-time */
  added_on?: string;
  /** @format date-time */
  last_used?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  subkeys?: GPGAccountKey[];
  links?: {
    /**
     * Link
     * A link to a resource related to this object.
     */
    self?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
  };
  [key: string]: any;
};

/**
 * Paginated Deploy Keys
 * A paginated list of deploy keys.
 */
export interface PaginatedDeployKeys {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: DeployKey[];
}

/**
 * Paginated GPG User Keys
 * A paginated list of GPG keys.
 */
export interface PaginatedGpgUserKeys {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: GPGAccountKey[];
}

/**
 * Paginated Project Deploy Keys
 * A paginated list of project deploy keys.
 */
export interface PaginatedProjectDeployKeys {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: ProjectDeployKey[];
}

/**
 * Paginated SSH User Keys
 * A paginated list of SSH keys.
 */
export interface PaginatedSshUserKeys {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: SshAccountKey[];
}

/** Represents deploy key for a project. */
export type ProjectDeployKey = Object & {
  /** The deploy key value. */
  key?: string;
  /**
   * A Bitbucket project.
   *             Projects are used by teams to organize repositories.
   */
  project?: Project;
  /** The comment parsed from the deploy key (if present) */
  comment?: string;
  /** The user-defined label for the deploy key */
  label?: string;
  /** @format date-time */
  added_on?: string;
  /** @format date-time */
  last_used?: string;
  links?: {
    /**
     * Link
     * A link to a resource related to this object.
     */
    self?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
  };
  /** An account object. */
  created_by?: Account;
  [key: string]: any;
};

/** Base type for representing SSH public keys. */
export type SshKey = Object & {
  /** The SSH key's immutable ID. */
  uuid?: string;
  /** The SSH public key value in OpenSSH format. */
  key?: string;
  /** The comment parsed from the SSH key (if present) */
  comment?: string;
  /** The user-defined label for the SSH key */
  label?: string;
  /** @format date-time */
  created_on?: string;
  /** @format date-time */
  last_used?: string;
  links?: {
    /**
     * Link
     * A link to a resource related to this object.
     */
    self?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
  };
  [key: string]: any;
};

/**
 * Hook Event
 * An event, associated with a resource or subject type.
 */
export interface HookEvent {
  /** The event identifier. */
  event?:
    | "issue:comment_created"
    | "issue:created"
    | "issue:updated"
    | "pipeline:span_created"
    | "project:updated"
    | "pullrequest:approved"
    | "pullrequest:changes_request_created"
    | "pullrequest:changes_request_removed"
    | "pullrequest:comment_created"
    | "pullrequest:comment_deleted"
    | "pullrequest:comment_reopened"
    | "pullrequest:comment_resolved"
    | "pullrequest:comment_updated"
    | "pullrequest:created"
    | "pullrequest:fulfilled"
    | "pullrequest:push"
    | "pullrequest:rejected"
    | "pullrequest:unapproved"
    | "pullrequest:updated"
    | "repo:commit_comment_created"
    | "repo:commit_status_created"
    | "repo:commit_status_updated"
    | "repo:created"
    | "repo:deleted"
    | "repo:fork"
    | "repo:imported"
    | "repo:push"
    | "repo:transfer"
    | "repo:updated";
  /** The category this event belongs to. */
  category?: string;
  /** Summary of the webhook event type. */
  label?: string;
  /** More detailed description of the webhook event type. */
  description?: string;
}

/**
 * Paginated Hook Events
 * A paginated list of webhook types available to subscribe on.
 */
export interface PaginatedHookEvents {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: HookEvent[];
}

/** A Webhook subscription. */
export type WebhookSubscription = Object & {
  /** The webhook's id */
  uuid?: string;
  /**
   * The URL events get delivered to.
   * @format uri
   */
  url?: string;
  /** A user-defined description of the webhook. */
  description?: string;
  /** The type of entity. Set to either `repository` or `workspace` based on where the subscription is defined. */
  subject_type?: "repository" | "workspace";
  /** Base type for most resource objects. It defines the common `type` element that identifies an object's type. It also identifies the element as Swagger's `discriminator`. */
  subject?: Object;
  active?: boolean;
  /** @format date-time */
  created_at?: string;
  /**
   * The events this webhook is subscribed to.
   * @minItems 1
   * @uniqueItems true
   */
  events?: (
    | "issue:comment_created"
    | "issue:created"
    | "issue:updated"
    | "pipeline:span_created"
    | "project:updated"
    | "pullrequest:approved"
    | "pullrequest:changes_request_created"
    | "pullrequest:changes_request_removed"
    | "pullrequest:comment_created"
    | "pullrequest:comment_deleted"
    | "pullrequest:comment_reopened"
    | "pullrequest:comment_resolved"
    | "pullrequest:comment_updated"
    | "pullrequest:created"
    | "pullrequest:fulfilled"
    | "pullrequest:push"
    | "pullrequest:rejected"
    | "pullrequest:unapproved"
    | "pullrequest:updated"
    | "repo:commit_comment_created"
    | "repo:commit_status_created"
    | "repo:commit_status_updated"
    | "repo:created"
    | "repo:deleted"
    | "repo:fork"
    | "repo:imported"
    | "repo:push"
    | "repo:transfer"
    | "repo:updated"
  )[];
  /** Indicates whether or not the hook has an associated secret. It is not possible to see the hook's secret. This field is ignored during updates. */
  secret_set?: boolean;
  /**
   * The secret to associate with the hook. The secret is never returned via the API. As such, this field is only used during updates. The secret can be set to `null` or "" to remove the secret (or create a hook with no secret). Leaving out the secret field during updates will leave the secret unchanged. Leaving out the secret during creation will create a hook with no secret.
   * @minLength 0
   * @maxLength 128
   */
  secret?: string;
  [key: string]: any;
};

/**
 * Paginated Webhook Subscriptions
 * A paginated list of webhook subscriptions
 */
export interface PaginatedWebhookSubscriptions {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: WebhookSubscription[];
}

/** A Bitbucket workspace permission for a user. */
export type WorkspaceAccess = Object & {
  /** The permission level the user has for the workspace. True if the user is an administrator, otherwise False. */
  administrator?: boolean;
  /**
   * A Bitbucket workspace.
   *             Workspaces are used to organize repositories.
   */
  workspace?: WorkspaceBase;
  [key: string]: any;
};

/**
 * A Bitbucket workspace.
 *             Workspaces are used to organize repositories.
 */
export type WorkspaceBase = Object & {
  links?: {
    /**
     * Link
     * A link to a resource related to this object.
     */
    avatar?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    self?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
  };
  /** The workspace's immutable id. */
  uuid?: string;
  /** The short label that identifies this workspace. */
  slug?: string;
  [key: string]: any;
};

/**
 * Paginated Workspace Permissions
 * A paginated list of workspace permissions.
 */
export interface PaginatedWorkspaceAccess {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: WorkspaceAccess[];
}

/**
 * Paginated Workspace Memberships
 * A paginated list of workspace memberships.
 */
export interface PaginatedWorkspaceMemberships {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: WorkspaceMembership[];
}

/**
 * Paginated Workspaces
 * A paginated list of workspaces.
 */
export interface PaginatedWorkspaces {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: Workspace[];
}

/**
 * A Bitbucket workspace membership.
 *             Links a user to a workspace.
 */
export type WorkspaceMembership = Object & {
  links?: {
    /**
     * Link
     * A link to a resource related to this object.
     */
    self?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
  };
  /** An account object. */
  user?: Account;
  /**
   * A Bitbucket workspace.
   *             Workspaces are used to organize repositories.
   */
  workspace?: Workspace;
  [key: string]: any;
};

/**
 * A Bitbucket workspace.
 *             Workspaces are used to organize repositories.
 */
export type Workspace = Object & {
  links?: {
    /**
     * Link
     * A link to a resource related to this object.
     */
    avatar?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    html?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    members?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    owners?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    projects?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    repositories?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    snippets?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    self?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
  };
  /** The workspace's immutable id. */
  uuid?: string;
  /** The name of the workspace. */
  name?: string;
  /** The short label that identifies this workspace. */
  slug?: string;
  /**
   * Indicates whether the workspace is publicly accessible, or whether it is
   * private to the members and consequently only visible to members.
   */
  is_private?: boolean;
  /** Indicates whether the workspace enforces private content, or whether it allows public content. */
  is_privacy_enforced?: boolean;
  /**
   * Controls the rules for forking repositories within this workspace.
   *
   * * **allow_forks**: unrestricted forking
   * * **internal_only**: prevents forking of private repositories outside the workspace or to public repositories
   */
  forking_mode?: "allow_forks" | "internal_only";
  /** @format date-time */
  created_on?: string;
  /** @format date-time */
  updated_on?: string;
  [key: string]: any;
};

/** An app user object. */
export type AppUser = Account & {
  /** The user's Atlassian account ID. */
  account_id?: string;
  /** The status of the account. Currently the only possible value is "active", but more values may be added in the future. */
  account_status?: string;
  /** The kind of App User. */
  kind?: string;
  [key: string]: any;
};

/** Links related to a User. */
export type UserLinks = AccountLinks & {
  /** A link to a resource related to this object. */
  self?: Link;
  /** A link to a resource related to this object. */
  html?: Link;
  /** A link to a resource related to this object. */
  repositories?: Link;
  [key: string]: any;
};

/** A user object. */
export type User = Account & {
  /** Links related to a User. */
  links?: UserLinks;
  /** The user's Atlassian account ID. */
  account_id?: string;
  /** The status of the account. Currently the only possible value is "active", but more values may be added in the future. */
  account_status?: string;
  has_2fa_enabled?: boolean;
  /** Account name defined by the owner. Should be used instead of the "username" field. Note that "nickname" cannot be used in place of "username" in URLs and queries, as "nickname" is not guaranteed to be unique. */
  nickname?: string;
  is_staff?: boolean;
  [key: string]: any;
};

/** A branch restriction rule. */
export type Branchrestriction = Object & {
  links?: {
    /**
     * Link
     * A link to a resource related to this object.
     */
    self?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
  };
  /** The branch restriction status' id. */
  id?: number;
  /** The type of restriction that is being applied. */
  kind:
    | "push"
    | "delete"
    | "force"
    | "restrict_merges"
    | "require_tasks_to_be_completed"
    | "require_approvals_to_merge"
    | "require_review_group_approvals_to_merge"
    | "require_default_reviewer_approvals_to_merge"
    | "require_no_changes_requested"
    | "require_passing_builds_to_merge"
    | "require_commits_behind"
    | "reset_pullrequest_approvals_on_change"
    | "smart_reset_pullrequest_approvals"
    | "reset_pullrequest_changes_requested_on_change"
    | "require_all_dependencies_merged"
    | "enforce_merge_checks"
    | "allow_auto_merge_when_builds_pass"
    | "require_all_comments_resolved";
  /** Indicates how the restriction is matched against a branch. The default is `glob`. */
  branch_match_kind: "branching_model" | "glob";
  /** Apply the restriction to branches of this type. Active when `branch_match_kind` is `branching_model`. The branch type will be calculated using the branching model configured for the repository. */
  branch_type?:
    | "feature"
    | "bugfix"
    | "release"
    | "hotfix"
    | "development"
    | "production";
  /** Apply the restriction to branches that match this pattern. Active when `branch_match_kind` is `glob`. Will be empty when `branch_match_kind` is `branching_model`. */
  pattern: string;
  /**
   * Value with kind-specific semantics:
   *
   * * `require_approvals_to_merge` uses it to require a minimum number of approvals on a PR.
   *
   * * `require_default_reviewer_approvals_to_merge` uses it to require a minimum number of approvals from default reviewers on a PR.
   *
   * * `require_passing_builds_to_merge` uses it to require a minimum number of passing builds.
   *
   * * `require_commits_behind` uses it to require the current branch is up to a maximum number of commits behind it destination.
   */
  value?: number;
  /** @minItems 0 */
  users?: Account[];
  /** @minItems 0 */
  groups?: Group[];
  [key: string]: any;
};

/** A component as defined in a repository's issue tracker. */
export type Component = Object & {
  links?: {
    /**
     * Link
     * A link to a resource related to this object.
     */
    self?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
  };
  name?: string;
  id?: number;
  [key: string]: any;
};

/** A issue comment. */
export type IssueComment = Comment & {
  /** An issue. */
  issue?: Issue;
  [key: string]: any;
};

/** A milestone as defined in a repository's issue tracker. */
export type Milestone = Object & {
  links?: {
    /**
     * Link
     * A link to a resource related to this object.
     */
    self?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
  };
  name?: string;
  id?: number;
  [key: string]: any;
};

/** A version as defined in a repository's issue tracker. */
export type Version = Object & {
  links?: {
    /**
     * Link
     * A link to a resource related to this object.
     */
    self?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
  };
  name?: string;
  id?: number;
  [key: string]: any;
};

/**
 * Repository User Permission
 * A user's direct permission for a given repository.
 */
export interface RepositoryUserPermission {
  type: string;
  permission?: "read" | "write" | "admin" | "none";
  /** A user object. */
  user?: User;
  /** A Bitbucket repository. */
  repository?: Repository;
  links?: {
    /**
     * Link
     * A link to a resource related to this object.
     */
    self?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
  };
  [key: string]: any;
}

/** A pullrequest comment. */
export type PullrequestComment = Comment & {
  /** A pull request object. */
  pullrequest?: Pullrequest;
  /** The resolution object for a Comment. */
  resolution?: CommentResolution;
  pending?: boolean;
  [key: string]: any;
};

/** A pullrequest comment task */
export type PullrequestCommentTask = PullrequestTask & {
  /** The base type for all comments. This type should be considered abstract. Each of the "commentable" resources defines its own subtypes (e.g. `issue_comment`). */
  comment?: Comment;
};

/** A branch object, representing a branch in a repository. */
export type Branch = Ref & {
  /** Available merge strategies for pull requests targeting this branch. */
  merge_strategies?: (
    | "merge_commit"
    | "squash"
    | "fast_forward"
    | "squash_fast_forward"
    | "rebase_fast_forward"
    | "rebase_merge"
  )[];
  /** The default merge strategy for pull requests targeting this branch. */
  default_merge_strategy?: string;
  [key: string]: any;
};

/** A commit comment. */
export type CommitComment = Comment & {
  /** A repository commit object. */
  commit?: Commit;
  [key: string]: any;
};

/**
 * Paginated Branches
 * A paginated list of branches.
 */
export interface PaginatedBranches {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: Branch[];
}

/**
 * Paginated Tags
 * A paginated list of tags.
 */
export interface PaginatedTags {
  /**
   * Total number of objects in the response. This is an optional element that is not provided in all responses, as it can be expensive to compute.
   * @min 0
   */
  size?: number;
  /**
   * Page number of the current results. This is an optional element that is not provided in all responses.
   * @min 1
   */
  page?: number;
  /**
   * Current number of objects on the existing page. The default value is 10 with 100 being the maximum allowed value. Individual APIs may enforce different values.
   * @min 1
   */
  pagelen?: number;
  /**
   * Link to the next page if it exists. The last page of a collection does not have this value. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  next?: string;
  /**
   * Link to previous page if it exists. A collections first page does not have this value. This is an optional element that is not provided in all responses. Some result sets strictly support forward navigation and never provide previous links. Clients must anticipate that backwards navigation is not always available. Use this link to navigate the result set and refrain from constructing your own URLs.
   * @format uri
   */
  previous?: string;
  /**
   * @minItems 0
   * @uniqueItems true
   */
  values?: Tag[];
}

/** A repository commit object. */
export type Commit = BaseCommit & {
  /** A Bitbucket repository. */
  repository?: Repository;
  /** @minItems 0 */
  participants?: Participant[];
  [key: string]: any;
};

/** A tag object, representing a tag in a repository. */
export type Tag = Ref & {
  /** The message associated with the tag, if available. */
  message?: string;
  /**
   * The date that the tag was created, if available
   * @format date-time
   */
  date?: string;
  /** The author of a change in a repository */
  tagger?: Author;
  [key: string]: any;
};

export type SnippetCommit = BaseCommit & {
  links?: {
    /**
     * Link
     * A link to a resource related to this object.
     */
    self?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    html?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
    /**
     * Link
     * A link to a resource related to this object.
     */
    diff?: {
      /** @format uri */
      href?: string;
      name?: string;
    };
  };
  /** A snippet object. */
  snippet?: Snippet;
  [key: string]: any;
};

/** Represents an SSH public key for a user. */
export type SshAccountKey = SshKey & {
  /** An account object. */
  owner?: Account;
  /** @format date-time */
  expires_on?: string;
  /** The SSH key fingerprint in SHA-256 format. */
  fingerprint?: string;
  [key: string]: any;
};

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "https://api.bitbucket.org/2.0",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem),
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== "string"
    ) {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Bitbucket API
 * @version 2.0
 * @termsOfService https://www.atlassian.com/legal/customer-agreement
 * @baseUrl https://api.bitbucket.org/2.0
 * @contact Bitbucket Support <support@bitbucket.org> (https://support.atlassian.com/bitbucket-cloud/)
 *
 * Code against the Bitbucket API to automate simple tasks, embed Bitbucket data into your own site, build mobile or desktop apps, or even add custom UI add-ons into Bitbucket itself using the Connect framework.
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  addon = {
    /**
     * @description Deletes the application for the user. This endpoint is intended to be used by Bitbucket Connect apps and only supports JWT authentication -- that is how Bitbucket identifies the particular installation of the app. Developers with applications registered in the "Develop Apps" section of Bitbucket Marketplace need not use this endpoint as updates for those applications can be sent out via the UI of that section. ``` $ curl -X DELETE https://api.bitbucket.org/2.0/addon \ -H "Authorization: JWT <JWT Token>" ```
     *
     * @tags Addon
     * @name AddonDelete
     * @summary Delete an app
     * @request DELETE:/addon
     * @secure
     */
    addonDelete: (params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/addon`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Updates the application installation for the user. This endpoint is intended to be used by Bitbucket Connect apps and only supports JWT authentication -- that is how Bitbucket identifies the particular installation of the app. Developers with applications registered in the "Develop Apps" section of Bitbucket need not use this endpoint as updates for those applications can be sent out via the UI of that section. Passing an empty body will update the installation using the existing descriptor URL. ``` $ curl -X PUT https://api.bitbucket.org/2.0/addon \ -H "Authorization: JWT <JWT Token>" \ --header "Content-Type: application/json" \ --data '{}' ``` The new `descriptor` for the installation can be also provided in the body directly. ``` $ curl -X PUT https://api.bitbucket.org/2.0/addon \ -H "Authorization: JWT <JWT Token>" \ --header "Content-Type: application/json" \ --data '{"descriptor": $NEW_DESCRIPTOR}' ``` In both these modes the URL of the descriptor cannot be changed. To change the descriptor location and upgrade an installation the request must be made exclusively with a `descriptor_url`. ``` $ curl -X PUT https://api.bitbucket.org/2.0/addon \ -H "Authorization: JWT <JWT Token>" \ --header "Content-Type: application/json" \ --data '{"descriptor_url": $NEW_URL}' ``` The `descriptor_url` must exactly match the marketplace registration that Atlassian has for the application. Contact your Atlassian developer advocate to update this registration. Once the registration has been updated you may call this resource for each installation. Note that the scopes of the application cannot be increased in the new descriptor nor reduced to none.
     *
     * @tags Addon
     * @name AddonUpdate
     * @summary Update an installed app
     * @request PUT:/addon
     * @secure
     */
    addonUpdate: (params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/addon`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description Get the client key of the Connect addon associated with a Forge app install via forgeAppId linkage. This endpoint is part of the Connect -> Forge migration tooling. It is intended to be used by a Forge app using `asApp().requestBitbucket()` only. Prerequisite: app developer needs to register the linkage between their Connect and Forge app by setting `forgeAppId` in the Connect addon descriptor to `app.id` from Forge app manifest, then update the installations. If the request came from an installation of a registered Forge app, the client key of the linked Connect addon installed in the same workspace will be returned. ``` api.asApp().requestBitbucket(route`/2.0/addon/{addon-key}/client-key`) ```
     *
     * @tags Addon
     * @name ClientKeyList
     * @summary Get the client key of a Connect addon
     * @request GET:/addon/{addon_key}/client-key
     * @secure
     */
    clientKeyList: (addonKey: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/addon/${addonKey}/client-key`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  hookEvents = {
    /**
     * @description Returns the webhook resource or subject types on which webhooks can be registered. Each resource/subject type contains an `events` link that returns the paginated list of specific events each individual subject type can emit. This endpoint is publicly accessible and does not require authentication or scopes.
     *
     * @tags Webhooks
     * @name HookEventsList
     * @summary Get a webhook resource
     * @request GET:/hook_events
     * @secure
     */
    hookEventsList: (params: RequestParams = {}) =>
      this.request<SubjectTypes, any>({
        path: `/hook_events`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a paginated list of all valid webhook events for the specified entity. **The team and user webhooks are deprecated, and you should use workspace instead. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).** This is public data that does not require any scopes or authentication. NOTE: The example response is a truncated response object for the `workspace` `subject_type`. We return the same structure for the other `subject_type` objects.
     *
     * @tags Webhooks
     * @name HookEventsDetail
     * @summary List subscribable webhook types
     * @request GET:/hook_events/{subject_type}
     * @secure
     */
    hookEventsDetail: (
      subjectType: "repository" | "workspace",
      params: RequestParams = {},
    ) =>
      this.request<PaginatedHookEvents, Error>({
        path: `/hook_events/${subjectType}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  repositories = {
    /**
     * @description **This endpoint is deprecated. Please use the [workspace scoped alternative](/cloud/bitbucket/rest/api-group-repositories/#api-repositories-workspace-get).** Returns a paginated list of all public repositories. This endpoint also supports filtering and sorting of the results. See [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) for more details.
     *
     * @tags Repositories
     * @name RepositoriesList
     * @summary List public repositories
     * @request GET:/repositories
     * @deprecated
     * @secure
     */
    repositoriesList: (
      query?: {
        /**
         * Filter the results to include only repositories created on or
         * after this [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601)
         *  timestamp. Example: `YYYY-MM-DDTHH:mm:ss.sssZ`
         */
        after?: string;
        /**
         * Filters the result based on the authenticated user's role on each repository.
         *
         * * **member**: returns repositories to which the user has explicit read access
         * * **contributor**: returns repositories to which the user has explicit write access
         * * **admin**: returns repositories to which the user has explicit administrator access
         * * **owner**: returns all repositories owned by the current user
         */
        role?: "admin" | "contributor" | "member" | "owner";
        /**
         * Query string to narrow down the response as per [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
         * `role` parameter must also be specified.
         */
        q?: string;
        /** Field by which the results should be sorted as per [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering). */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedRepositories, any>({
        path: `/repositories`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a paginated list of all repositories owned by the specified workspace. The result can be narrowed down based on the authenticated user's role. E.g. with `?role=contributor`, only those repositories that the authenticated user has write access to are returned (this includes any repo the user is an admin on, as that implies write access). This endpoint also supports filtering and sorting of the results. See [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) for more details.
     *
     * @tags Repositories
     * @name RepositoriesDetail
     * @summary List repositories in a workspace
     * @request GET:/repositories/{workspace}
     * @secure
     */
    repositoriesDetail: (
      workspace: string,
      query?: {
        /**
         *
         * Filters the result based on the authenticated user's role on each repository.
         *
         * * **member**: returns repositories to which the user has explicit read access
         * * **contributor**: returns repositories to which the user has explicit write access
         * * **admin**: returns repositories to which the user has explicit administrator access
         * * **owner**: returns all repositories owned by the current user
         */
        role?: "admin" | "contributor" | "member" | "owner";
        /**
         *
         * Query string to narrow down the response as per [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
         */
        q?: string;
        /**
         *
         * Field by which the results should be sorted as per [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
         *
         */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedRepositories, Error>({
        path: `/repositories/${workspace}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes the repository. This is an irreversible operation. This does not affect its forks.
     *
     * @tags Repositories
     * @name RepositoriesDelete
     * @summary Delete a repository
     * @request DELETE:/repositories/{workspace}/{repo_slug}
     * @secure
     */
    repositoriesDelete: (
      repoSlug: string,
      workspace: string,
      query?: {
        /**
         * If a repository has been moved to a new location, use this parameter to
         * show users a friendly message in the Bitbucket UI that the repository
         * has moved to a new location. However, a GET to this endpoint will still
         * return a 404.
         */
        redirect_to?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Returns the object describing this repository.
     *
     * @tags Repositories
     * @name RepositoriesDetail2
     * @summary Get a repository
     * @request GET:/repositories/{workspace}/{repo_slug}
     * @originalName repositoriesDetail
     * @duplicate
     * @secure
     */
    repositoriesDetail2: (
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<Repository, Error>({
        path: `/repositories/${workspace}/${repoSlug}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new repository. Note: In order to set the project for the newly created repository, pass in either the project key or the project UUID as part of the request body as shown in the examples below: ``` $ curl -X POST -H "Content-Type: application/json" -d '{ "scm": "git", "project": { "key": "MARS" } }' https://api.bitbucket.org/2.0/repositories/teamsinspace/hablanding ``` or ``` $ curl -X POST -H "Content-Type: application/json" -d '{ "scm": "git", "project": { "key": "{ba516952-992a-4c2d-acbd-17d502922f96}" } }' https://api.bitbucket.org/2.0/repositories/teamsinspace/hablanding ``` The project must be assigned for all repositories. If the project is not provided, the repository is automatically assigned to the oldest project in the workspace. Note: In the examples above, the workspace ID `teamsinspace`, and/or the repository name `hablanding` can be replaced by UUIDs.
     *
     * @tags Repositories
     * @name RepositoriesCreate
     * @summary Create a repository
     * @request POST:/repositories/{workspace}/{repo_slug}
     * @secure
     */
    repositoriesCreate: (
      repoSlug: string,
      workspace: string,
      data: Repository,
      params: RequestParams = {},
    ) =>
      this.request<Repository, Error>({
        path: `/repositories/${workspace}/${repoSlug}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Since this endpoint can be used to both update and to create a repository, the request body depends on the intent. #### Creation See the POST documentation for the repository endpoint for an example of the request body. #### Update Note: Changing the `name` of the repository will cause the location to be changed. This is because the URL of the repo is derived from the name (a process called slugification). In such a scenario, it is possible for the request to fail if the newly created slug conflicts with an existing repository's slug. But if there is no conflict, the new location will be returned in the `Location` header of the response.
     *
     * @tags Repositories
     * @name RepositoriesUpdate
     * @summary Update a repository
     * @request PUT:/repositories/{workspace}/{repo_slug}
     * @secure
     */
    repositoriesUpdate: (
      repoSlug: string,
      workspace: string,
      data: Repository,
      params: RequestParams = {},
    ) =>
      this.request<Repository, Error>({
        path: `/repositories/${workspace}/${repoSlug}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a paginated list of all branch restrictions on the repository.
     *
     * @tags Branch restrictions
     * @name BranchRestrictionsList
     * @summary List branch restrictions
     * @request GET:/repositories/{workspace}/{repo_slug}/branch-restrictions
     * @secure
     */
    branchRestrictionsList: (
      repoSlug: string,
      workspace: string,
      query?: {
        /** Branch restrictions of this type */
        kind?: string;
        /** Branch restrictions applied to branches of this pattern */
        pattern?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedBranchrestrictions, Error>({
        path: `/repositories/${workspace}/${repoSlug}/branch-restrictions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new branch restriction rule for a repository. `kind` describes what will be restricted. Allowed values include: `push`, `force`, `delete`, `restrict_merges`, `require_tasks_to_be_completed`, `require_approvals_to_merge`, `require_default_reviewer_approvals_to_merge`, `require_no_changes_requested`, `require_passing_builds_to_merge`, `require_commits_behind`, `reset_pullrequest_approvals_on_change`, `smart_reset_pullrequest_approvals`, `reset_pullrequest_changes_requested_on_change`, `require_all_dependencies_merged`, `enforce_merge_checks`, and `allow_auto_merge_when_builds_pass`. Different kinds of branch restrictions have different requirements: * `push` and `restrict_merges` require `users` and `groups` to be specified. Empty lists are allowed, in which case permission is denied for everybody. The restriction applies to all branches that match. There are two ways to match a branch. It is configured in `branch_match_kind`: 1. `glob`: Matches a branch against the `pattern`. A `'*'` in `pattern` will expand to match zero or more characters, and every other character matches itself. For example, `'foo*'` will match `'foo'` and `'foobar'`, but not `'barfoo'`. `'*'` will match all branches. 2. `branching_model`: Matches a branch against the repository's branching model. The `branch_type` controls the type of branch to match. Allowed values include: `production`, `development`, `bugfix`, `release`, `feature` and `hotfix`. The combination of `kind` and match must be unique. This means that two `glob` restrictions in a repository cannot have the same `kind` and `pattern`. Additionally, two `branching_model` restrictions in a repository cannot have the same `kind` and `branch_type`. `users` and `groups` are lists of users and groups that are except from the restriction. They can only be configured in `push` and `restrict_merges` restrictions. The `push` restriction stops a user pushing to matching branches unless that user is in `users` or is a member of a group in `groups`. The `restrict_merges` stops a user merging pull requests to matching branches unless that user is in `users` or is a member of a group in `groups`. Adding new users or groups to an existing restriction should be done via `PUT`. Note that branch restrictions with overlapping matchers is allowed, but the resulting behavior may be surprising.
     *
     * @tags Branch restrictions
     * @name BranchRestrictionsCreate
     * @summary Create a branch restriction rule
     * @request POST:/repositories/{workspace}/{repo_slug}/branch-restrictions
     * @secure
     */
    branchRestrictionsCreate: (
      repoSlug: string,
      workspace: string,
      data: Branchrestriction,
      params: RequestParams = {},
    ) =>
      this.request<Branchrestriction, Error>({
        path: `/repositories/${workspace}/${repoSlug}/branch-restrictions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes an existing branch restriction rule.
     *
     * @tags Branch restrictions
     * @name BranchRestrictionsDelete
     * @summary Delete a branch restriction rule
     * @request DELETE:/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}
     * @secure
     */
    branchRestrictionsDelete: (
      id: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/branch-restrictions/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns a specific branch restriction rule.
     *
     * @tags Branch restrictions
     * @name BranchRestrictionsDetail
     * @summary Get a branch restriction rule
     * @request GET:/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}
     * @secure
     */
    branchRestrictionsDetail: (
      id: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<Branchrestriction, Error>({
        path: `/repositories/${workspace}/${repoSlug}/branch-restrictions/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates an existing branch restriction rule. Fields not present in the request body are ignored. See [`POST`](/cloud/bitbucket/rest/api-group-branch-restrictions/#api-repositories-workspace-repo-slug-branch-restrictions-post) for details.
     *
     * @tags Branch restrictions
     * @name BranchRestrictionsUpdate
     * @summary Update a branch restriction rule
     * @request PUT:/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}
     * @secure
     */
    branchRestrictionsUpdate: (
      id: string,
      repoSlug: string,
      workspace: string,
      data: Branchrestriction,
      params: RequestParams = {},
    ) =>
      this.request<Branchrestriction, Error>({
        path: `/repositories/${workspace}/${repoSlug}/branch-restrictions/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Return the branching model as applied to the repository. This view is read-only. The branching model settings can be changed using the [settings](#api-repositories-workspace-repo-slug-branching-model-settings-get) API. The returned object: 1. Always has a `development` property. `development.branch` contains the actual repository branch object that is considered to be the `development` branch. `development.branch` will not be present if it does not exist. 2. Might have a `production` property. `production` will not be present when `production` is disabled. `production.branch` contains the actual branch object that is considered to be the `production` branch. `production.branch` will not be present if it does not exist. 3. Always has a `branch_types` array which contains all enabled branch types.
     *
     * @tags Branching model
     * @name BranchingModelList
     * @summary Get the branching model for a repository
     * @request GET:/repositories/{workspace}/{repo_slug}/branching-model
     * @secure
     */
    branchingModelList: (
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<BranchingModel, Error>({
        path: `/repositories/${workspace}/${repoSlug}/branching-model`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Return the branching model configuration for a repository. The returned object: 1. Always has a `development` property for the development branch. 2. Always a `production` property for the production branch. The production branch can be disabled. 3. The `branch_types` contains all the branch types. 4. `default_branch_deletion` indicates whether branches will be deleted by default on merge. This is the raw configuration for the branching model. A client wishing to see the branching model with its actual current branches may find the [active model API](/cloud/bitbucket/rest/api-group-branching-model/#api-repositories-workspace-repo-slug-branching-model-get) more useful.
     *
     * @tags Branching model
     * @name BranchingModelSettingsList
     * @summary Get the branching model config for a repository
     * @request GET:/repositories/{workspace}/{repo_slug}/branching-model/settings
     * @secure
     */
    branchingModelSettingsList: (
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<BranchingModelSettings, Error>({
        path: `/repositories/${workspace}/${repoSlug}/branching-model/settings`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update the branching model configuration for a repository. The `development` branch can be configured to a specific branch or to track the main branch. When set to a specific branch it must currently exist. Only the passed properties will be updated. The properties not passed will be left unchanged. A request without a `development` property will leave the development branch unchanged. It is possible for the `development` branch to be invalid. This happens when it points at a specific branch that has been deleted. This is indicated in the `is_valid` field for the branch. It is not possible to update the settings for `development` if that would leave the branch in an invalid state. Such a request will be rejected. The `production` branch can be a specific branch, the main branch or disabled. When set to a specific branch it must currently exist. The `enabled` property can be used to enable (`true`) or disable (`false`) it. Only the passed properties will be updated. The properties not passed will be left unchanged. A request without a `production` property will leave the production branch unchanged. It is possible for the `production` branch to be invalid. This happens when it points at a specific branch that has been deleted. This is indicated in the `is_valid` field for the branch. A request that would leave `production` enabled and invalid will be rejected. It is possible to update `production` and make it invalid if it would also be left disabled. The `branch_types` property contains the branch types to be updated. Only the branch types passed will be updated. All updates will be rejected if it would leave the branching model in an invalid state. For branch types this means that: 1. The prefixes for all enabled branch types are valid. For example, it is not possible to use '*' inside a Git prefix. 2. A prefix of an enabled branch type must not be a prefix of another enabled branch type. This is to ensure that a branch can be easily classified by its prefix unambiguously. It is possible to store an invalid prefix if that branch type would be left disabled. Only the passed properties will be updated. The properties not passed will be left unchanged. Each branch type must have a `kind` property to identify it. The `default_branch_deletion` property is a string. The value of `true` indicates to delete branches by default. The value of `false` indicates that branches will not be deleted by default. A request without a `default_branch_deletion` property will leave it unchanged. Other values would be ignored. There is currently a side effect when using this API endpoint. If the repository is inheriting branching model settings from its project, updating the branching model for this repository will disable the project setting inheritance. We have deprecated this side effect and will remove it on 1 August 2022.
     *
     * @tags Branching model
     * @name BranchingModelSettingsUpdate
     * @summary Update the branching model config for a repository
     * @request PUT:/repositories/{workspace}/{repo_slug}/branching-model/settings
     * @secure
     */
    branchingModelSettingsUpdate: (
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<BranchingModelSettings, Error>({
        path: `/repositories/${workspace}/${repoSlug}/branching-model/settings`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the specified commit.
     *
     * @tags Commits
     * @name CommitDetail
     * @summary Get a commit
     * @request GET:/repositories/{workspace}/{repo_slug}/commit/{commit}
     * @secure
     */
    commitDetail: (
      commit: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<Commit, Error>({
        path: `/repositories/${workspace}/${repoSlug}/commit/${commit}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Redact the authenticated user's approval of the specified commit. This operation is only available to users that have explicit access to the repository. In contrast, just the fact that a repository is publicly accessible to users does not give them the ability to approve commits.
     *
     * @tags Commits
     * @name CommitApproveDelete
     * @summary Unapprove a commit
     * @request DELETE:/repositories/{workspace}/{repo_slug}/commit/{commit}/approve
     * @secure
     */
    commitApproveDelete: (
      commit: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/commit/${commit}/approve`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Approve the specified commit as the authenticated user. This operation is only available to users that have explicit access to the repository. In contrast, just the fact that a repository is publicly accessible to users does not give them the ability to approve commits.
     *
     * @tags Commits
     * @name CommitApproveCreate
     * @summary Approve a commit
     * @request POST:/repositories/{workspace}/{repo_slug}/commit/{commit}/approve
     * @secure
     */
    commitApproveCreate: (
      commit: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<Participant, Error>({
        path: `/repositories/${workspace}/${repoSlug}/commit/${commit}/approve`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the commit's comments. This includes both global and inline comments. The default sorting is oldest to newest and can be overridden with the `sort` query parameter.
     *
     * @tags Commits
     * @name CommitCommentsList
     * @summary List a commit's comments
     * @request GET:/repositories/{workspace}/{repo_slug}/commit/{commit}/comments
     * @secure
     */
    commitCommentsList: (
      commit: string,
      repoSlug: string,
      workspace: string,
      query?: {
        /**
         * Query string to narrow down the response as per
         * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
         */
        q?: string;
        /**
         * Field by which the results should be sorted as per
         * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
         */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedCommitComments, any>({
        path: `/repositories/${workspace}/${repoSlug}/commit/${commit}/comments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates new comment on the specified commit. To post a reply to an existing comment, include the `parent.id` field: ``` $ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/commit/db9ba1e031d07a02603eae0e559a7adc010257fc/comments/ \ -X POST -u evzijst \ -H 'Content-Type: application/json' \ -d '{"content": {"raw": "One more thing!"}, "parent": {"id": 5728901}}' ```
     *
     * @tags Commits
     * @name CommitCommentsCreate
     * @summary Create comment for a commit
     * @request POST:/repositories/{workspace}/{repo_slug}/commit/{commit}/comments
     * @secure
     */
    commitCommentsCreate: (
      commit: string,
      repoSlug: string,
      workspace: string,
      data: CommitComment,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/repositories/${workspace}/${repoSlug}/commit/${commit}/comments`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Deletes the specified commit comment. Note that deleting comments that have visible replies that point to them will not really delete the resource. This is to retain the integrity of the original comment tree. Instead, the `deleted` element is set to `true` and the content is blanked out. The comment will continue to be returned by the collections and self endpoints.
     *
     * @tags Commits
     * @name CommitCommentsDelete
     * @summary Delete a commit comment
     * @request DELETE:/repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}
     * @secure
     */
    commitCommentsDelete: (
      commentId: number,
      commit: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/repositories/${workspace}/${repoSlug}/commit/${commit}/comments/${commentId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns the specified commit comment.
     *
     * @tags Commits
     * @name CommitCommentsDetail
     * @summary Get a commit comment
     * @request GET:/repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}
     * @secure
     */
    commitCommentsDetail: (
      commentId: number,
      commit: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<CommitComment, any>({
        path: `/repositories/${workspace}/${repoSlug}/commit/${commit}/comments/${commentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to update the contents of a comment. Only the content of the comment can be updated. ``` $ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/commit/7f71b5/comments/5728901 \ -X PUT -u evzijst \ -H 'Content-Type: application/json' \ -d '{"content": {"raw": "One more thing!"}' ```
     *
     * @tags Commits
     * @name CommitCommentsUpdate
     * @summary Update a commit comment
     * @request PUT:/repositories/{workspace}/{repo_slug}/commit/{commit}/comments/{comment_id}
     * @secure
     */
    commitCommentsUpdate: (
      commentId: number,
      commit: string,
      repoSlug: string,
      workspace: string,
      data: CommitComment,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/repositories/${workspace}/${repoSlug}/commit/${commit}/comments/${commentId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Update an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.
     *
     * @tags properties
     * @name UpdateCommitHostedPropertyValue
     * @summary Update a commit application property
     * @request PUT:/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}
     * @secure
     */
    updateCommitHostedPropertyValue: (
      workspace: string,
      repoSlug: string,
      commit: string,
      appKey: string,
      propertyName: string,
      data: ApplicationProperty,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/repositories/${workspace}/${repoSlug}/commit/${commit}/properties/${appKey}/${propertyName}`,
        method: "PUT",
        body: data,
        secure: true,
        ...params,
      }),

    /**
     * @description Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.
     *
     * @tags properties
     * @name DeleteCommitHostedPropertyValue
     * @summary Delete a commit application property
     * @request DELETE:/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}
     * @secure
     */
    deleteCommitHostedPropertyValue: (
      workspace: string,
      repoSlug: string,
      commit: string,
      appKey: string,
      propertyName: string,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/repositories/${workspace}/${repoSlug}/commit/${commit}/properties/${appKey}/${propertyName}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.
     *
     * @tags properties
     * @name GetCommitHostedPropertyValue
     * @summary Get a commit application property
     * @request GET:/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}
     * @secure
     */
    getCommitHostedPropertyValue: (
      workspace: string,
      repoSlug: string,
      commit: string,
      appKey: string,
      propertyName: string,
      params: RequestParams = {},
    ) =>
      this.request<ApplicationProperty, any>({
        path: `/repositories/${workspace}/${repoSlug}/commit/${commit}/properties/${appKey}/${propertyName}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a paginated list of all pull requests as part of which this commit was reviewed. Pull Request Commit Links app must be installed first before using this API; installation automatically occurs when 'Go to pull request' is clicked from the web interface for a commit's details.
     *
     * @tags Pullrequests
     * @name GetPullrequestsForCommit
     * @summary List pull requests that contain a commit
     * @request GET:/repositories/{workspace}/{repo_slug}/commit/{commit}/pullrequests
     * @secure
     */
    getPullrequestsForCommit: (
      workspace: string,
      repoSlug: string,
      commit: string,
      query?: {
        /**
         * Which page to retrieve
         * @format int32
         * @default 1
         */
        page?: number;
        /**
         * How many pull requests to retrieve per page
         * @format int32
         * @default 30
         */
        pagelen?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedPullrequests, Error>({
        path: `/repositories/${workspace}/${repoSlug}/commit/${commit}/pullrequests`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a paginated list of Reports linked to this commit.
     *
     * @tags Reports, Commits
     * @name GetReportsForCommit
     * @summary List reports
     * @request GET:/repositories/{workspace}/{repo_slug}/commit/{commit}/reports
     * @secure
     */
    getReportsForCommit: (
      workspace: string,
      repoSlug: string,
      commit: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedReports, any>({
        path: `/repositories/${workspace}/${repoSlug}/commit/${commit}/reports`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates or updates a report for the specified commit. To upload a report, make sure to generate an ID that is unique across all reports for that commit. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-001. ### Sample cURL request: ``` curl --request PUT 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mysystem-001' \ --header 'Content-Type: application/json' \ --data-raw '{ "title": "Security scan report", "details": "This pull request introduces 10 new dependency vulnerabilities.", "report_type": "SECURITY", "reporter": "mySystem", "link": "http://www.mysystem.com/reports/001", "result": "FAILED", "data": [ { "title": "Duration (seconds)", "type": "DURATION", "value": 14 }, { "title": "Safe to merge?", "type": "BOOLEAN", "value": false } ] }' ``` ### Possible field values: report_type: SECURITY, COVERAGE, TEST, BUG result: PASSED, FAILED, PENDING data.type: BOOLEAN, DATE, DURATION, LINK, NUMBER, PERCENTAGE, TEXT #### Data field formats | Type  Field   | Value Field Type  | Value Field Display | |:--------------|:------------------|:--------------------| | None/ Omitted | Number, String or Boolean (not an array or object) | Plain text | | BOOLEAN	| Boolean | The value will be read as a JSON boolean and displayed as 'Yes' or 'No'. | | DATE  | Number | The value will be read as a JSON number in the form of a Unix timestamp (milliseconds) and will be displayed as a relative date if the date is less than one week ago, otherwise  it will be displayed as an absolute date. | | DURATION | Number | The value will be read as a JSON number in milliseconds and will be displayed in a human readable duration format. | | LINK | Object: `{"text": "Link text here", "href": "https://link.to.annotation/in/external/tool"}` | The value will be read as a JSON object containing the fields "text" and "href" and will be displayed as a clickable link on the report. | | NUMBER | Number | The value will be read as a JSON number and large numbers will be  displayed in a human readable format (e.g. 14.3k). | | PERCENTAGE | Number (between 0 and 100) | The value will be read as a JSON number between 0 and 100 and will be displayed with a percentage sign. | | TEXT | String | The value will be read as a JSON string and will be displayed as-is | Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information.
     *
     * @tags Reports, Commits
     * @name CreateOrUpdateReport
     * @summary Create or update a report
     * @request PUT:/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}
     * @secure
     */
    createOrUpdateReport: (
      workspace: string,
      repoSlug: string,
      commit: string,
      reportId: string,
      data: Report,
      params: RequestParams = {},
    ) =>
      this.request<Report, Error>({
        path: `/repositories/${workspace}/${repoSlug}/commit/${commit}/reports/${reportId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a single Report matching the provided ID.
     *
     * @tags Reports, Commits
     * @name GetReport
     * @summary Get a report
     * @request GET:/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}
     * @secure
     */
    getReport: (
      workspace: string,
      repoSlug: string,
      commit: string,
      reportId: string,
      params: RequestParams = {},
    ) =>
      this.request<Report, Error>({
        path: `/repositories/${workspace}/${repoSlug}/commit/${commit}/reports/${reportId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a single Report matching the provided ID.
     *
     * @tags Reports, Commits
     * @name DeleteReport
     * @summary Delete a report
     * @request DELETE:/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}
     * @secure
     */
    deleteReport: (
      workspace: string,
      repoSlug: string,
      commit: string,
      reportId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/repositories/${workspace}/${repoSlug}/commit/${commit}/reports/${reportId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns a paginated list of Annotations for a specified report.
     *
     * @tags Reports, Commits
     * @name GetAnnotationsForReport
     * @summary List annotations
     * @request GET:/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations
     * @secure
     */
    getAnnotationsForReport: (
      workspace: string,
      repoSlug: string,
      commit: string,
      reportId: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedAnnotations, any>({
        path: `/repositories/${workspace}/${repoSlug}/commit/${commit}/reports/${reportId}/annotations`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Bulk upload of annotations. Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations. Add the annotations you want to upload as objects in a JSON array and make sure each annotation has the external_id field set to a unique value. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001. The external id can later be used to identify the report as an alternative to the generated [UUID](https://developer.atlassian.com/bitbucket/api/2/reference/meta/uri-uuid#uuid). You can upload up to 100 annotations per POST request. ### Sample cURL request: ``` curl --location 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mysystem-001/annotations' \ --header 'Content-Type: application/json' \ --data-raw '[ { "external_id": "mysystem-annotation001", "title": "Security scan report", "annotation_type": "VULNERABILITY", "summary": "This line represents a security threat.", "severity": "HIGH", "path": "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java", "line": 42 }, { "external_id": "mySystem-annotation002", "title": "Bug report", "annotation_type": "BUG", "result": "FAILED", "summary": "This line might introduce a bug.", "severity": "MEDIUM", "path": "my-service/src/main/java/com/myCompany/mysystem/logic/Helper.java", "line": 13 } ]' ``` ### Possible field values: annotation_type: VULNERABILITY, CODE_SMELL, BUG result: PASSED, FAILED, IGNORED, SKIPPED severity: HIGH, MEDIUM, LOW, CRITICAL Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information.
     *
     * @tags Reports, Commits
     * @name BulkCreateOrUpdateAnnotations
     * @summary Bulk create or update annotations
     * @request POST:/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations
     * @secure
     */
    bulkCreateOrUpdateAnnotations: (
      workspace: string,
      repoSlug: string,
      commit: string,
      reportId: string,
      data: ReportAnnotation[],
      params: RequestParams = {},
    ) =>
      this.request<ReportAnnotation[], any>({
        path: `/repositories/${workspace}/${repoSlug}/commit/${commit}/reports/${reportId}/annotations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a single Annotation matching the provided ID.
     *
     * @tags Reports, Commits
     * @name GetAnnotation
     * @summary Get an annotation
     * @request GET:/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}
     * @secure
     */
    getAnnotation: (
      workspace: string,
      repoSlug: string,
      commit: string,
      reportId: string,
      annotationId: string,
      params: RequestParams = {},
    ) =>
      this.request<ReportAnnotation, Error>({
        path: `/repositories/${workspace}/${repoSlug}/commit/${commit}/reports/${reportId}/annotations/${annotationId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates or updates an individual annotation for the specified report. Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations. Just as reports, annotation needs to be uploaded with a unique ID that can later be used to identify the report as an alternative to the generated [UUID](https://developer.atlassian.com/bitbucket/api/2/reference/meta/uri-uuid#uuid). If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001. ### Sample cURL request: ``` curl --request PUT 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mySystem-001/annotations/mysystem-annotation001' \ --header 'Content-Type: application/json' \ --data-raw '{ "title": "Security scan report", "annotation_type": "VULNERABILITY", "summary": "This line represents a security thread.", "severity": "HIGH", "path": "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java", "line": 42 }' ``` ### Possible field values: annotation_type: VULNERABILITY, CODE_SMELL, BUG result: PASSED, FAILED, IGNORED, SKIPPED severity: HIGH, MEDIUM, LOW, CRITICAL Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information.
     *
     * @tags Reports, Commits
     * @name CreateOrUpdateAnnotation
     * @summary Create or update an annotation
     * @request PUT:/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}
     * @secure
     */
    createOrUpdateAnnotation: (
      workspace: string,
      repoSlug: string,
      commit: string,
      reportId: string,
      annotationId: string,
      data: ReportAnnotation,
      params: RequestParams = {},
    ) =>
      this.request<ReportAnnotation, Error>({
        path: `/repositories/${workspace}/${repoSlug}/commit/${commit}/reports/${reportId}/annotations/${annotationId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a single Annotation matching the provided ID.
     *
     * @tags Reports, Commits
     * @name DeleteAnnotation
     * @summary Delete an annotation
     * @request DELETE:/repositories/{workspace}/{repo_slug}/commit/{commit}/reports/{reportId}/annotations/{annotationId}
     * @secure
     */
    deleteAnnotation: (
      workspace: string,
      repoSlug: string,
      commit: string,
      reportId: string,
      annotationId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/repositories/${workspace}/${repoSlug}/commit/${commit}/reports/${reportId}/annotations/${annotationId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns all statuses (e.g. build results) for a specific commit.
     *
     * @tags Commit statuses
     * @name CommitStatusesList
     * @summary List commit statuses for a commit
     * @request GET:/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses
     * @secure
     */
    commitStatusesList: (
      commit: string,
      repoSlug: string,
      workspace: string,
      query?: {
        /**
         * If specified, only return commit status objects that were either
         * created without a refname, or were created with the specified refname
         */
        refname?: string;
        /**
         * Query string to narrow down the response as per
         * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
         */
        q?: string;
        /**
         * Field by which the results should be sorted as per
         * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
         * Defaults to `created_on`.
         */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedCommitstatuses, void | Error>({
        path: `/repositories/${workspace}/${repoSlug}/commit/${commit}/statuses`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new build status against the specified commit. If the specified key already exists, the existing status object will be overwritten. Example: ``` curl https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo/commit/e10dae226959c2194f2b07b077c07762d93821cf/statuses/build/           -X POST -u jdoe -H 'Content-Type: application/json'           -d '{ "key": "MY-BUILD", "state": "SUCCESSFUL", "description": "42 tests passed", "url": "https://www.example.org/my-build-result" }' ``` When creating a new commit status, you can use a URI template for the URL. Templates are URLs that contain variable names that Bitbucket will evaluate at runtime whenever the URL is displayed anywhere similar to parameter substitution in [Bitbucket Connect](https://developer.atlassian.com/bitbucket/concepts/context-parameters.html). For example, one could use `https://foo.com/builds/{repository.full_name}` which Bitbucket will turn into `https://foo.com/builds/foo/bar` at render time. The context variables available are `repository` and `commit`. To associate a commit status to a pull request, the refname field must be set to the source branch of the pull request. Example: ``` curl https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo/commit/e10dae226959c2194f2b07b077c07762d93821cf/statuses/build/           -X POST -u jdoe -H 'Content-Type: application/json'           -d '{ "key": "MY-BUILD", "state": "SUCCESSFUL", "description": "42 tests passed", "url": "https://www.example.org/my-build-result", "refname": "my-pr-branch" }' ```
     *
     * @tags Commit statuses
     * @name CommitStatusesBuildCreate
     * @summary Create a build status for a commit
     * @request POST:/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build
     * @secure
     */
    commitStatusesBuildCreate: (
      commit: string,
      repoSlug: string,
      workspace: string,
      data: Commitstatus,
      params: RequestParams = {},
    ) =>
      this.request<Commitstatus, void | Error>({
        path: `/repositories/${workspace}/${repoSlug}/commit/${commit}/statuses/build`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the specified build status for a commit.
     *
     * @tags Commit statuses
     * @name CommitStatusesBuildDetail
     * @summary Get a build status for a commit
     * @request GET:/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}
     * @secure
     */
    commitStatusesBuildDetail: (
      commit: string,
      key: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<Commitstatus, void | Error>({
        path: `/repositories/${workspace}/${repoSlug}/commit/${commit}/statuses/build/${key}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to update the current status of a build status object on the specific commit. This operation can also be used to change other properties of the build status: * `state` * `name` * `description` * `url` * `refname` The `key` cannot be changed.
     *
     * @tags Commit statuses
     * @name CommitStatusesBuildUpdate
     * @summary Update a build status for a commit
     * @request PUT:/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}
     * @secure
     */
    commitStatusesBuildUpdate: (
      commit: string,
      key: string,
      repoSlug: string,
      workspace: string,
      data: Commitstatus,
      params: RequestParams = {},
    ) =>
      this.request<Commitstatus, void | Error>({
        path: `/repositories/${workspace}/${repoSlug}/commit/${commit}/statuses/build/${key}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description These are the repository's commits. They are paginated and returned in reverse chronological order, similar to the output of `git log`. Like these tools, the DAG can be filtered. #### GET /repositories/{workspace}/{repo_slug}/commits/ Returns all commits in the repo in topological order (newest commit first). All branches and tags are included (similar to `git log --all`). #### GET /repositories/{workspace}/{repo_slug}/commits/?exclude=master Returns all commits in the repo that are not on master (similar to `git log --all ^master`). #### GET /repositories/{workspace}/{repo_slug}/commits/?include=foo&include=bar&exclude=fu&exclude=fubar Returns all commits that are on refs `foo` or `bar`, but not on `fu` or `fubar` (similar to `git log foo bar ^fu ^fubar`). An optional `path` parameter can be specified that will limit the results to commits that affect that path. `path` can either be a file or a directory. If a directory is specified, commits are returned that have modified any file in the directory tree rooted by `path`. It is important to note that if the `path` parameter is specified, the commits returned by this endpoint may no longer be a DAG, parent commits that do not modify the path will be omitted from the response. #### GET /repositories/{workspace}/{repo_slug}/commits/?path=README.md&include=foo&include=bar&exclude=master Returns all commits that are on refs `foo` or `bar`, but not on `master` that changed the file README.md. #### GET /repositories/{workspace}/{repo_slug}/commits/?path=src/&include=foo&include=bar&exclude=master Returns all commits that are on refs `foo` or `bar`, but not on `master` that changed to a file in any file in the directory src or its children. Because the response could include a very large number of commits, it is paginated. Follow the 'next' link in the response to navigate to the next page of commits. As with other paginated resources, do not construct your own links. When the include and exclude parameters are more than can fit in a query string, clients can use a `x-www-form-urlencoded` POST instead.
     *
     * @tags Commits
     * @name CommitsList
     * @summary List commits
     * @request GET:/repositories/{workspace}/{repo_slug}/commits
     * @secure
     */
    commitsList: (
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedChangeset, Error>({
        path: `/repositories/${workspace}/${repoSlug}/commits`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Identical to `GET /repositories/{workspace}/{repo_slug}/commits`, except that POST allows clients to place the include and exclude parameters in the request body to avoid URL length issues. **Note that this resource does NOT support new commit creation.**
     *
     * @tags Commits
     * @name CommitsCreate
     * @summary List commits with include/exclude
     * @request POST:/repositories/{workspace}/{repo_slug}/commits
     * @secure
     */
    commitsCreate: (
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedChangeset, Error>({
        path: `/repositories/${workspace}/${repoSlug}/commits`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description These are the repository's commits. They are paginated and returned in reverse chronological order, similar to the output of `git log`. Like these tools, the DAG can be filtered. #### GET /repositories/{workspace}/{repo_slug}/commits/master Returns all commits on ref `master` (similar to `git log master`). #### GET /repositories/{workspace}/{repo_slug}/commits/dev?include=foo&exclude=master Returns all commits on ref `dev` or `foo`, except those that are reachable on `master` (similar to `git log dev foo ^master`). An optional `path` parameter can be specified that will limit the results to commits that affect that path. `path` can either be a file or a directory. If a directory is specified, commits are returned that have modified any file in the directory tree rooted by `path`. It is important to note that if the `path` parameter is specified, the commits returned by this endpoint may no longer be a DAG, parent commits that do not modify the path will be omitted from the response. #### GET /repositories/{workspace}/{repo_slug}/commits/dev?path=README.md&include=foo&include=bar&exclude=master Returns all commits that are on refs `dev` or `foo` or `bar`, but not on `master` that changed the file README.md. #### GET /repositories/{workspace}/{repo_slug}/commits/dev?path=src/&include=foo&exclude=master Returns all commits that are on refs `dev` or `foo`, but not on `master` that changed to a file in any file in the directory src or its children. Because the response could include a very large number of commits, it is paginated. Follow the 'next' link in the response to navigate to the next page of commits. As with other paginated resources, do not construct your own links. When the include and exclude parameters are more than can fit in a query string, clients can use a `x-www-form-urlencoded` POST instead.
     *
     * @tags Commits
     * @name CommitsDetail
     * @summary List commits for revision
     * @request GET:/repositories/{workspace}/{repo_slug}/commits/{revision}
     * @secure
     */
    commitsDetail: (
      repoSlug: string,
      revision: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedChangeset, Error>({
        path: `/repositories/${workspace}/${repoSlug}/commits/${revision}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Identical to `GET /repositories/{workspace}/{repo_slug}/commits/{revision}`, except that POST allows clients to place the include and exclude parameters in the request body to avoid URL length issues. **Note that this resource does NOT support new commit creation.**
     *
     * @tags Commits
     * @name CommitsCreate2
     * @summary List commits for revision using include/exclude
     * @request POST:/repositories/{workspace}/{repo_slug}/commits/{revision}
     * @originalName commitsCreate
     * @duplicate
     * @secure
     */
    commitsCreate2: (
      repoSlug: string,
      revision: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedChangeset, Error>({
        path: `/repositories/${workspace}/${repoSlug}/commits/${revision}`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the components that have been defined in the issue tracker. This resource is only available on repositories that have the issue tracker enabled.
     *
     * @tags Issue tracker
     * @name ComponentsList
     * @summary List components
     * @request GET:/repositories/{workspace}/{repo_slug}/components
     * @deprecated
     * @secure
     */
    componentsList: (
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedComponents, Error>({
        path: `/repositories/${workspace}/${repoSlug}/components`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the specified issue tracker component object.
     *
     * @tags Issue tracker
     * @name ComponentsDetail
     * @summary Get a component for issues
     * @request GET:/repositories/{workspace}/{repo_slug}/components/{component_id}
     * @deprecated
     * @secure
     */
    componentsDetail: (
      componentId: number,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<Component, Error>({
        path: `/repositories/${workspace}/${repoSlug}/components/${componentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the repository's default reviewers. These are the users that are automatically added as reviewers on every new pull request that is created. To obtain the repository's default reviewers as well as the default reviewers inherited from the project, use the [effective-default-reveiwers](#api-repositories-workspace-repo-slug-effective-default-reviewers-get) endpoint.
     *
     * @tags Pullrequests
     * @name DefaultReviewersList
     * @summary List default reviewers
     * @request GET:/repositories/{workspace}/{repo_slug}/default-reviewers
     * @secure
     */
    defaultReviewersList: (
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedAccounts, Error>({
        path: `/repositories/${workspace}/${repoSlug}/default-reviewers`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Removes a default reviewer from the repository.
     *
     * @tags Pullrequests
     * @name DefaultReviewersDelete
     * @summary Remove a user from the default reviewers
     * @request DELETE:/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}
     * @secure
     */
    defaultReviewersDelete: (
      repoSlug: string,
      targetUsername: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/default-reviewers/${targetUsername}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns the specified reviewer. This can be used to test whether a user is among the repository's default reviewers list. A 404 indicates that that specified user is not a default reviewer.
     *
     * @tags Pullrequests
     * @name DefaultReviewersDetail
     * @summary Get a default reviewer
     * @request GET:/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}
     * @secure
     */
    defaultReviewersDetail: (
      repoSlug: string,
      targetUsername: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<Account, Error>({
        path: `/repositories/${workspace}/${repoSlug}/default-reviewers/${targetUsername}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Adds the specified user to the repository's list of default reviewers. This method is idempotent. Adding a user a second time has no effect.
     *
     * @tags Pullrequests
     * @name DefaultReviewersUpdate
     * @summary Add a user to the default reviewers
     * @request PUT:/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}
     * @secure
     */
    defaultReviewersUpdate: (
      repoSlug: string,
      targetUsername: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<Account, Error>({
        path: `/repositories/${workspace}/${repoSlug}/default-reviewers/${targetUsername}`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all deploy-keys belonging to a repository.
     *
     * @tags Deployments
     * @name DeployKeysList
     * @summary List repository deploy keys
     * @request GET:/repositories/{workspace}/{repo_slug}/deploy-keys
     * @secure
     */
    deployKeysList: (
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedDeployKeys, void | Error>({
        path: `/repositories/${workspace}/${repoSlug}/deploy-keys`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new deploy key in a repository. Note: If authenticating a deploy key with an OAuth consumer, any changes to the OAuth consumer will subsequently invalidate the deploy key. Example: ``` $ curl -X POST \ -H "Authorization <auth header>" \ -H "Content-type: application/json" \ https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys -d \ '{ "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 mleu@C02W454JHTD8", "label": "mydeploykey" }' ```
     *
     * @tags Deployments
     * @name DeployKeysCreate
     * @summary Add a repository deploy key
     * @request POST:/repositories/{workspace}/{repo_slug}/deploy-keys
     * @secure
     */
    deployKeysCreate: (
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<DeployKey, void | Error>({
        path: `/repositories/${workspace}/${repoSlug}/deploy-keys`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This deletes a deploy key from a repository.
     *
     * @tags Deployments
     * @name DeployKeysDelete
     * @summary Delete a repository deploy key
     * @request DELETE:/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}
     * @secure
     */
    deployKeysDelete: (
      keyId: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, void | Error>({
        path: `/repositories/${workspace}/${repoSlug}/deploy-keys/${keyId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns the deploy key belonging to a specific key.
     *
     * @tags Deployments
     * @name DeployKeysDetail
     * @summary Get a repository deploy key
     * @request GET:/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}
     * @secure
     */
    deployKeysDetail: (
      keyId: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<DeployKey, void | Error>({
        path: `/repositories/${workspace}/${repoSlug}/deploy-keys/${keyId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update an existing deploy key in a repository. The same key needs to be passed in but the comment and label can change. Example: ``` $ curl -X PUT \ -H "Authorization <auth header>" \ -H "Content-type: application/json" \ https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234 -d \ '{ "label": "newlabel", "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 newcomment", }' ```
     *
     * @tags Deployments
     * @name DeployKeysUpdate
     * @summary Update a repository deploy key
     * @request PUT:/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}
     * @secure
     */
    deployKeysUpdate: (
      keyId: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<DeployKey, Error | void>({
        path: `/repositories/${workspace}/${repoSlug}/deploy-keys/${keyId}`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Find deployments
     *
     * @tags Deployments
     * @name GetDeploymentsForRepository
     * @summary List deployments
     * @request GET:/repositories/{workspace}/{repo_slug}/deployments
     * @secure
     */
    getDeploymentsForRepository: (
      workspace: string,
      repoSlug: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedDeployments, any>({
        path: `/repositories/${workspace}/${repoSlug}/deployments`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve a deployment
     *
     * @tags Deployments
     * @name GetDeploymentForRepository
     * @summary Get a deployment
     * @request GET:/repositories/{workspace}/{repo_slug}/deployments/{deployment_uuid}
     * @secure
     */
    getDeploymentForRepository: (
      workspace: string,
      repoSlug: string,
      deploymentUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<Deployment, Error>({
        path: `/repositories/${workspace}/${repoSlug}/deployments/${deploymentUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Find deployment environment level variables.
     *
     * @tags Pipelines
     * @name GetDeploymentVariables
     * @summary List variables for an environment
     * @request GET:/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables
     * @secure
     */
    getDeploymentVariables: (
      workspace: string,
      repoSlug: string,
      environmentUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedDeploymentVariable, any>({
        path: `/repositories/${workspace}/${repoSlug}/deployments_config/environments/${environmentUuid}/variables`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a deployment environment level variable.
     *
     * @tags Pipelines
     * @name CreateDeploymentVariable
     * @summary Create a variable for an environment
     * @request POST:/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables
     * @secure
     */
    createDeploymentVariable: (
      workspace: string,
      repoSlug: string,
      environmentUuid: string,
      data: DeploymentVariable,
      params: RequestParams = {},
    ) =>
      this.request<DeploymentVariable, Error>({
        path: `/repositories/${workspace}/${repoSlug}/deployments_config/environments/${environmentUuid}/variables`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Update a deployment environment level variable.
     *
     * @tags Pipelines
     * @name UpdateDeploymentVariable
     * @summary Update a variable for an environment
     * @request PUT:/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}
     * @secure
     */
    updateDeploymentVariable: (
      workspace: string,
      repoSlug: string,
      environmentUuid: string,
      variableUuid: string,
      data: DeploymentVariable,
      params: RequestParams = {},
    ) =>
      this.request<DeploymentVariable, Error>({
        path: `/repositories/${workspace}/${repoSlug}/deployments_config/environments/${environmentUuid}/variables/${variableUuid}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a deployment environment level variable.
     *
     * @tags Pipelines
     * @name DeleteDeploymentVariable
     * @summary Delete a variable for an environment
     * @request DELETE:/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}
     * @secure
     */
    deleteDeploymentVariable: (
      workspace: string,
      repoSlug: string,
      environmentUuid: string,
      variableUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/deployments_config/environments/${environmentUuid}/variables/${variableUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Produces a raw git-style diff. #### Single commit spec If the `spec` argument to this API is a single commit, the diff is produced against the first parent of the specified commit. #### Two commit spec Two commits separated by `..` may be provided as the `spec`, e.g., `3a8b42..9ff173`. When two commits are provided and the `topic` query parameter is true, this API produces a 2-way three dot diff. This is the diff between source commit and the merge base of the source commit and the destination commit. When the `topic` query param is false, a simple git-style diff is produced. The two commits are interpreted as follows: * First commit: the commit containing the changes we wish to preview * Second commit: the commit representing the state to which we want to compare the first commit * **Note**: This is the opposite of the order used in `git diff`. #### Comparison to patches While similar to patches, diffs: * Don't have a commit header (username, commit message, etc) * Support the optional `path=foo/bar.py` query param to filter the diff to just that one file diff #### Response The raw diff is returned as-is, in whatever encoding the files in the repository use. It is not decoded into unicode. As such, the content-type is `text/plain`.
     *
     * @tags Commits
     * @name DiffDetail
     * @summary Compare two commits
     * @request GET:/repositories/{workspace}/{repo_slug}/diff/{spec}
     * @secure
     */
    diffDetail: (
      repoSlug: string,
      spec: string,
      workspace: string,
      query?: {
        /** Generate diffs with <n> lines of context instead of the usual three. */
        context?: number;
        /**
         * Limit the diff to a particular file (this parameter
         * can be repeated for multiple paths).
         */
        path?: string;
        /** Generate diffs that ignore whitespace. */
        ignore_whitespace?: boolean;
        /** Generate diffs that include binary files, true if omitted. */
        binary?: boolean;
        /** Whether to perform rename detection, true if omitted. */
        renames?: boolean;
        /**
         * This parameter is deprecated. The 'topic' parameter should be used
         * instead. The 'merge' and 'topic' parameters cannot be both used at
         * the same time.
         *
         * If true, the source commit is merged into the
         * destination commit, and then a diff from the
         * destination to the merge result is returned. If false,
         * a simple 'two dot' diff between the source and
         * destination is returned. True if omitted.
         */
        merge?: boolean;
        /**
         * If true, returns 2-way 'three-dot' diff.
         * This is a diff between the source commit and the merge base
         * of the source commit and the destination commit.
         * If false, a simple 'two dot' diff between the source and
         * destination is returned.
         *
         * If omitted, defaults to true, ie. a 2 way 'three-dot'
         * diff is returned.
         */
        topic?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/diff/${spec}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Produces a response in JSON format with a record for every path modified, including information on the type of the change and the number of lines added and removed. #### Single commit spec If the `spec` argument to this API is a single commit, the diff is produced against the first parent of the specified commit. #### Two commit spec Two commits separated by `..` may be provided as the `spec`, e.g., `3a8b42..9ff173`. When two commits are provided and the `topic` query parameter is true, this API produces a 2-way three dot diff. This is the diff between source commit and the merge base of the source commit and the destination commit. When the `topic` query param is false, a simple git-style diff is produced. The two commits are interpreted as follows: * First commit: the commit containing the changes we wish to preview * Second commit: the commit representing the state to which we want to compare the first commit * **Note**: This is the opposite of the order used in `git diff`.
     *
     * @tags Commits
     * @name DiffstatDetail
     * @summary Compare two commit diff stats
     * @request GET:/repositories/{workspace}/{repo_slug}/diffstat/{spec}
     * @secure
     */
    diffstatDetail: (
      repoSlug: string,
      spec: string,
      workspace: string,
      query?: {
        /** Generate diffs that ignore whitespace */
        ignore_whitespace?: boolean;
        /**
         * This parameter is deprecated. The 'topic' parameter should be used
         * instead. The 'merge' and 'topic' parameters cannot be both used at
         * the same time.
         *
         * If true, the source commit is merged into the
         * destination commit, and then a diffstat from the
         * destination to the merge result is returned. If false,
         * a simple 'two dot' diffstat between the source and
         * destination is returned. True if omitted.
         */
        merge?: boolean;
        /**
         * Limit the diffstat to a particular file (this parameter
         * can be repeated for multiple paths).
         */
        path?: string;
        /** Whether to perform rename detection, true if omitted. */
        renames?: boolean;
        /**
         * If true, returns 2-way 'three-dot' diff.
         * This is a diff between the source commit and the merge base
         * of the source commit and the destination commit.
         * If false, a simple 'two dot' diff between the source and
         * destination is returned.
         */
        topic?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedDiffstats, Error>({
        path: `/repositories/${workspace}/${repoSlug}/diffstat/${spec}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a list of download links associated with the repository.
     *
     * @tags Downloads
     * @name DownloadsList
     * @summary List download artifacts
     * @request GET:/repositories/{workspace}/{repo_slug}/downloads
     * @secure
     */
    downloadsList: (
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/downloads`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Upload new download artifacts. To upload files, perform a `multipart/form-data` POST containing one or more `files` fields: $ echo Hello World > hello.txt $ curl -s -u evzijst -X POST https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads -F files=@hello.txt When a file is uploaded with the same name as an existing artifact, then the existing file will be replaced.
     *
     * @tags Downloads
     * @name DownloadsCreate
     * @summary Upload a download artifact
     * @request POST:/repositories/{workspace}/{repo_slug}/downloads
     * @secure
     */
    downloadsCreate: (
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/downloads`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description Deletes the specified download artifact from the repository.
     *
     * @tags Downloads
     * @name DownloadsDelete
     * @summary Delete a download artifact
     * @request DELETE:/repositories/{workspace}/{repo_slug}/downloads/{filename}
     * @secure
     */
    downloadsDelete: (
      filename: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/downloads/${filename}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Return a redirect to the contents of a download artifact. This endpoint returns the actual file contents and not the artifact's metadata. $ curl -s -L https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads/hello.txt Hello World
     *
     * @tags Downloads
     * @name DownloadsDetail
     * @summary Get a download artifact link
     * @request GET:/repositories/{workspace}/{repo_slug}/downloads/{filename}
     * @secure
     */
    downloadsDetail: (
      filename: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<any, void | Error>({
        path: `/repositories/${workspace}/${repoSlug}/downloads/${filename}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Branching model
     * @name EffectiveBranchingModelList
     * @summary Get the effective, or currently applied, branching model for a repository
     * @request GET:/repositories/{workspace}/{repo_slug}/effective-branching-model
     * @secure
     */
    effectiveBranchingModelList: (
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<EffectiveRepoBranchingModel, Error>({
        path: `/repositories/${workspace}/${repoSlug}/effective-branching-model`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the repository's effective default reviewers. This includes both default reviewers defined at the repository level as well as those inherited from its project. These are the users that are automatically added as reviewers on every new pull request that is created.
     *
     * @tags Pullrequests
     * @name EffectiveDefaultReviewersList
     * @summary List effective default reviewers
     * @request GET:/repositories/{workspace}/{repo_slug}/effective-default-reviewers
     * @secure
     */
    effectiveDefaultReviewersList: (
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedDefaultReviewerAndType, Error>({
        path: `/repositories/${workspace}/${repoSlug}/effective-default-reviewers`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Find environments
     *
     * @tags Deployments
     * @name GetEnvironmentsForRepository
     * @summary List environments
     * @request GET:/repositories/{workspace}/{repo_slug}/environments
     * @secure
     */
    getEnvironmentsForRepository: (
      workspace: string,
      repoSlug: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedEnvironments, any>({
        path: `/repositories/${workspace}/${repoSlug}/environments`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create an environment.
     *
     * @tags Deployments
     * @name CreateEnvironment
     * @summary Create an environment
     * @request POST:/repositories/{workspace}/{repo_slug}/environments
     * @secure
     */
    createEnvironment: (
      workspace: string,
      repoSlug: string,
      data: DeploymentEnvironment,
      params: RequestParams = {},
    ) =>
      this.request<DeploymentEnvironment, Error>({
        path: `/repositories/${workspace}/${repoSlug}/environments`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve an environment
     *
     * @tags Deployments
     * @name GetEnvironmentForRepository
     * @summary Get an environment
     * @request GET:/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}
     * @secure
     */
    getEnvironmentForRepository: (
      workspace: string,
      repoSlug: string,
      environmentUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<DeploymentEnvironment, Error>({
        path: `/repositories/${workspace}/${repoSlug}/environments/${environmentUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete an environment
     *
     * @tags Deployments
     * @name DeleteEnvironmentForRepository
     * @summary Delete an environment
     * @request DELETE:/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}
     * @secure
     */
    deleteEnvironmentForRepository: (
      workspace: string,
      repoSlug: string,
      environmentUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/environments/${environmentUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Update an environment
     *
     * @tags Deployments
     * @name UpdateEnvironmentForRepository
     * @summary Update an environment
     * @request POST:/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}/changes
     * @secure
     */
    updateEnvironmentForRepository: (
      workspace: string,
      repoSlug: string,
      environmentUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/environments/${environmentUuid}/changes`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description Get file conflicts for a commit spec
     *
     * @tags Commits
     * @name FileConflictsDetail
     * @summary Get file conflicts for a commit spec
     * @request GET:/repositories/{workspace}/{repo_slug}/file-conflicts/{spec}
     * @secure
     */
    fileConflictsDetail: (
      repoSlug: string,
      spec: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedFileConflicts, Error>({
        path: `/repositories/${workspace}/${repoSlug}/file-conflicts/${spec}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a paginated list of commits that modified the specified file. Commits are returned in reverse chronological order. This is roughly equivalent to the following commands: $ git log --follow --date-order <sha> <path> By default, Bitbucket will follow renames and the path name in the returned entries reflects that. This can be turned off using the `?renames=false` query parameter. Results are returned in descending chronological order by default, and like most endpoints you can [filter and sort](/cloud/bitbucket/rest/intro/#filtering) the response to only provide exactly the data you want. The example response returns commits made before 2011-05-18 against a file named `README.rst`. The results are filtered to only return the path and date. This request can be made using: ``` $ curl 'https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/filehistory/master/README.rst'\ '?fields=values.next,values.path,values.commit.date&q=commit.date<=2011-05-18' ``` In the response you can see that the file was renamed to `README.rst` by the commit made on 2011-05-16, and was previously named `README.txt`.
     *
     * @tags Source, Repositories
     * @name FilehistoryDetail
     * @summary List commits that modified a file
     * @request GET:/repositories/{workspace}/{repo_slug}/filehistory/{commit}/{path}
     * @secure
     */
    filehistoryDetail: (
      commit: string,
      path: string,
      repoSlug: string,
      workspace: string,
      query?: {
        /**
         *
         * When `true`, Bitbucket will follow the history of the file across
         * renames (this is the default behavior). This can be turned off by
         * specifying `false`.
         */
        renames?: string;
        /**
         *
         * Query string to narrow down the response as per
         * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
         */
        q?: string;
        /**
         *
         * Name of a response property sort the result by as per
         * [filtering and sorting](/cloud/bitbucket/rest/intro/#sorting-query-results).
         */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedFiles, Error>({
        path: `/repositories/${workspace}/${repoSlug}/filehistory/${commit}/${path}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a paginated list of all the forks of the specified repository.
     *
     * @tags Repositories
     * @name ForksList
     * @summary List repository forks
     * @request GET:/repositories/{workspace}/{repo_slug}/forks
     * @secure
     */
    forksList: (
      repoSlug: string,
      workspace: string,
      query?: {
        /**
         * Filters the result based on the authenticated user's role on each repository.
         *
         * * **member**: returns repositories to which the user has explicit read access
         * * **contributor**: returns repositories to which the user has explicit write access
         * * **admin**: returns repositories to which the user has explicit administrator access
         * * **owner**: returns all repositories owned by the current user
         */
        role?: "admin" | "contributor" | "member" | "owner";
        /** Query string to narrow down the response as per [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering). */
        q?: string;
        /** Field by which the results should be sorted as per [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering). */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedRepositories, any>({
        path: `/repositories/${workspace}/${repoSlug}/forks`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new fork of the specified repository. #### Forking a repository To create a fork, specify the workspace explicitly as part of the request body: ``` $ curl -X POST -u jdoe https://api.bitbucket.org/2.0/repositories/atlassian/bbql/forks \ -H 'Content-Type: application/json' -d '{ "name": "bbql_fork", "workspace": { "slug": "atlassian" } }' ``` To fork a repository into the same workspace, also specify a new `name`. When you specify a value for `name`, it will also affect the `slug`. The `slug` is reflected in the repository URL of the new fork. It is derived from `name` by substituting non-ASCII characters, removes whitespace, and changes characters to lower case. For example, `My repo` would turn into `my_repo`. You need contributor access to create new forks within a workspace. #### Change the properties of a new fork By default the fork inherits most of its properties from the parent. However, since the optional POST body document follows the normal `repository` JSON schema and you can override the new fork's properties. Properties that can be overridden include: * description * fork_policy * language * mainbranch * is_private (note that a private repo's fork_policy might prohibit the creation of public forks, in which `is_private=False` would fail) * has_issues (to initialize or disable the new repo's issue tracker -- note that the actual contents of the parent repository's issue tracker are not copied during forking) * has_wiki (to initialize or disable the new repo's wiki -- note that the actual contents of the parent repository's wiki are not copied during forking) * project (when forking into a private project, the fork's `is_private` must be `true`) Properties that cannot be modified include: * scm * parent * full_name
     *
     * @tags Repositories
     * @name ForksCreate
     * @summary Fork a repository
     * @request POST:/repositories/{workspace}/{repo_slug}/forks
     * @secure
     */
    forksCreate: (
      repoSlug: string,
      workspace: string,
      data: Repository,
      params: RequestParams = {},
    ) =>
      this.request<Repository, any>({
        path: `/repositories/${workspace}/${repoSlug}/forks`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a paginated list of webhooks installed on this repository.
     *
     * @tags Repositories, Webhooks
     * @name HooksList
     * @summary List webhooks for a repository
     * @request GET:/repositories/{workspace}/{repo_slug}/hooks
     * @secure
     */
    hooksList: (
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedWebhookSubscriptions, Error>({
        path: `/repositories/${workspace}/${repoSlug}/hooks`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new webhook on the specified repository. Example: ``` $ curl -X POST -u credentials -H 'Content-Type: application/json' https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo-slug/hooks -d ' { "description": "Webhook Description", "url": "https://example.com/", "active": true, "secret": "this is a really bad secret", "events": [ "repo:push", "issue:created", "issue:updated" ] }' ``` When the `secret` is provided it will be used as the key to generate a HMAC digest value sent in the `X-Hub-Signature` header at delivery time. Passing a `null` or empty `secret` or not passing a `secret` will leave the webhook's secret unset. Bitbucket only generates the `X-Hub-Signature` when the webhook's secret is set. Note that this call requires the webhook scope, as well as any scope that applies to the events that the webhook subscribes to. In the example above that means: `webhook`, `repository` and `issue`. Also note that the `url` must properly resolve and cannot be an internal, non-routed address.
     *
     * @tags Repositories, Webhooks
     * @name HooksCreate
     * @summary Create a webhook for a repository
     * @request POST:/repositories/{workspace}/{repo_slug}/hooks
     * @secure
     */
    hooksCreate: (
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<WebhookSubscription, Error>({
        path: `/repositories/${workspace}/${repoSlug}/hooks`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes the specified webhook subscription from the given repository.
     *
     * @tags Repositories, Webhooks
     * @name HooksDelete
     * @summary Delete a webhook for a repository
     * @request DELETE:/repositories/{workspace}/{repo_slug}/hooks/{uid}
     * @secure
     */
    hooksDelete: (
      repoSlug: string,
      uid: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/hooks/${uid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns the webhook with the specified id installed on the specified repository.
     *
     * @tags Repositories, Webhooks
     * @name HooksDetail
     * @summary Get a webhook for a repository
     * @request GET:/repositories/{workspace}/{repo_slug}/hooks/{uid}
     * @secure
     */
    hooksDetail: (
      repoSlug: string,
      uid: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<WebhookSubscription, Error>({
        path: `/repositories/${workspace}/${repoSlug}/hooks/${uid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates the specified webhook subscription. The following properties can be mutated: * `description` * `url` * `secret` * `active` * `events` The hook's secret is used as a key to generate the HMAC hex digest sent in the `X-Hub-Signature` header at delivery time. This signature is only generated when the hook has a secret. Set the hook's secret by passing the new value in the `secret` field. Passing a `null` value in the `secret` field will remove the secret from the hook. The hook's secret can be left unchanged by not passing the `secret` field in the request.
     *
     * @tags Repositories, Webhooks
     * @name HooksUpdate
     * @summary Update a webhook for a repository
     * @request PUT:/repositories/{workspace}/{repo_slug}/hooks/{uid}
     * @secure
     */
    hooksUpdate: (
      repoSlug: string,
      uid: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<WebhookSubscription, Error>({
        path: `/repositories/${workspace}/${repoSlug}/hooks/${uid}`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the issues in the issue tracker.
     *
     * @tags Issue tracker
     * @name IssuesList
     * @summary List issues
     * @request GET:/repositories/{workspace}/{repo_slug}/issues
     * @deprecated
     * @secure
     */
    issuesList: (
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedIssues, Error>({
        path: `/repositories/${workspace}/${repoSlug}/issues`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new issue. This call requires authentication. Private repositories or private issue trackers require the caller to authenticate with an account that has appropriate authorization. The authenticated user is used for the issue's `reporter` field.
     *
     * @tags Issue tracker
     * @name IssuesCreate
     * @summary Create an issue
     * @request POST:/repositories/{workspace}/{repo_slug}/issues
     * @deprecated
     * @secure
     */
    issuesCreate: (
      repoSlug: string,
      workspace: string,
      data: Issue,
      params: RequestParams = {},
    ) =>
      this.request<Issue, Error>({
        path: `/repositories/${workspace}/${repoSlug}/issues`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description A POST request to this endpoint initiates a new background celery task that archives the repo's issues. When the job has been accepted, it will return a 202 (Accepted) along with a unique url to this job in the 'Location' response header. This url is the endpoint for where the user can obtain their zip files."
     *
     * @tags Issue tracker
     * @name IssuesExportCreate
     * @summary Export issues
     * @request POST:/repositories/{workspace}/{repo_slug}/issues/export
     * @deprecated
     * @secure
     */
    issuesExportCreate: (
      repoSlug: string,
      workspace: string,
      data: ExportOptions,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/issues/export`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description This endpoint is used to poll for the progress of an issue export job and return the zip file after the job is complete. As long as the job is running, this will return a 202 response with in the response body a description of the current status. After the job has been scheduled, but before it starts executing, the endpoint returns a 202 response with status `ACCEPTED`. Once it starts running, it is a 202 response with status `STARTED` and progress filled. After it is finished, it becomes a 200 response with status `SUCCESS` or `FAILURE`.
     *
     * @tags Issue tracker
     * @name IssuesExportIssuesZipList
     * @summary Check issue export status
     * @request GET:/repositories/{workspace}/{repo_slug}/issues/export/{repo_name}-issues-{task_id}.zip
     * @deprecated
     * @secure
     */
    issuesExportIssuesZipList: (
      repoName: string,
      repoSlug: string,
      taskId: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<IssueJobStatus, Error>({
        path: `/repositories/${workspace}/${repoSlug}/issues/export/${repoName}-issues-${taskId}.zip`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description When using GET, this endpoint reports the status of the current import task. After the job has been scheduled, but before it starts executing, the endpoint returns a 202 response with status `ACCEPTED`. Once it starts running, it is a 202 response with status `STARTED` and progress filled. After it is finished, it becomes a 200 response with status `SUCCESS` or `FAILURE`.
     *
     * @tags Issue tracker
     * @name IssuesImportList
     * @summary Check issue import status
     * @request GET:/repositories/{workspace}/{repo_slug}/issues/import
     * @deprecated
     * @secure
     */
    issuesImportList: (
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<IssueJobStatus, Error>({
        path: `/repositories/${workspace}/${repoSlug}/issues/import`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description A POST request to this endpoint will import the zip file given by the archive parameter into the repository. All existing issues will be deleted and replaced by the contents of the imported zip file. Imports are done through a multipart/form-data POST. There is one valid and required form field, with the name "archive," which needs to be a file field: ``` $ curl -u <username> -X POST -F archive=@/path/to/file.zip https://api.bitbucket.org/2.0/repositories/<owner_username>/<repo_slug>/issues/import ```
     *
     * @tags Issue tracker
     * @name IssuesImportCreate
     * @summary Import issues
     * @request POST:/repositories/{workspace}/{repo_slug}/issues/import
     * @deprecated
     * @secure
     */
    issuesImportCreate: (
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<IssueJobStatus, Error>({
        path: `/repositories/${workspace}/${repoSlug}/issues/import`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes the specified issue. This requires write access to the repository.
     *
     * @tags Issue tracker
     * @name IssuesDelete
     * @summary Delete an issue
     * @request DELETE:/repositories/{workspace}/{repo_slug}/issues/{issue_id}
     * @deprecated
     * @secure
     */
    issuesDelete: (
      issueId: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/issues/${issueId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns the specified issue.
     *
     * @tags Issue tracker
     * @name IssuesDetail
     * @summary Get an issue
     * @request GET:/repositories/{workspace}/{repo_slug}/issues/{issue_id}
     * @deprecated
     * @secure
     */
    issuesDetail: (
      issueId: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<Issue, Error>({
        path: `/repositories/${workspace}/${repoSlug}/issues/${issueId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Modifies the issue. ``` $ curl https://api.bitbucket.org/2.0/repostories/evzijst/dogslow/issues/123 \ -u evzijst -s -X PUT -H 'Content-Type: application/json' \ -d '{ "title": "Updated title", "assignee": { "account_id": "5d5355e8c6b9320d9ea5b28d" }, "priority": "minor", "version": { "name": "1.0" }, "component": null }' ``` This example changes the `title`, `assignee`, `priority` and the `version`. It also removes the value of the `component` from the issue by setting the field to `null`. Any field not present keeps its existing value. Each time an issue is edited in the UI or through the API, an immutable change record is created under the `/issues/123/changes` endpoint. It also has a comment associated with the change.
     *
     * @tags Issue tracker
     * @name IssuesUpdate
     * @summary Update an issue
     * @request PUT:/repositories/{workspace}/{repo_slug}/issues/{issue_id}
     * @deprecated
     * @secure
     */
    issuesUpdate: (
      issueId: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<Issue, Error>({
        path: `/repositories/${workspace}/${repoSlug}/issues/${issueId}`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all attachments for this issue. This returns the files' meta data. This does not return the files' actual contents. The files are always ordered by their upload date.
     *
     * @tags Issue tracker
     * @name IssuesAttachmentsList
     * @summary List attachments for an issue
     * @request GET:/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments
     * @deprecated
     * @secure
     */
    issuesAttachmentsList: (
      issueId: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedIssueAttachments, void | Error>({
        path: `/repositories/${workspace}/${repoSlug}/issues/${issueId}/attachments`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Upload new issue attachments. To upload files, perform a `multipart/form-data` POST containing one or more file fields. When a file is uploaded with the same name as an existing attachment, then the existing file will be replaced.
     *
     * @tags Issue tracker
     * @name IssuesAttachmentsCreate
     * @summary Upload an attachment to an issue
     * @request POST:/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments
     * @deprecated
     * @secure
     */
    issuesAttachmentsCreate: (
      issueId: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, void | Error>({
        path: `/repositories/${workspace}/${repoSlug}/issues/${issueId}/attachments`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description Deletes an attachment.
     *
     * @tags Issue tracker
     * @name IssuesAttachmentsDelete
     * @summary Delete an attachment for an issue
     * @request DELETE:/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments/{path}
     * @deprecated
     * @secure
     */
    issuesAttachmentsDelete: (
      issueId: string,
      path: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, void | Error>({
        path: `/repositories/${workspace}/${repoSlug}/issues/${issueId}/attachments/${path}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns the contents of the specified file attachment. Note that this endpoint does not return a JSON response, but instead returns a redirect pointing to the actual file that in turn will return the raw contents. The redirect URL contains a one-time token that has a limited lifetime. As a result, the link should not be persisted, stored, or shared.
     *
     * @tags Issue tracker
     * @name IssuesAttachmentsDetail
     * @summary Get attachment for an issue
     * @request GET:/repositories/{workspace}/{repo_slug}/issues/{issue_id}/attachments/{path}
     * @deprecated
     * @secure
     */
    issuesAttachmentsDetail: (
      issueId: string,
      path: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<any, void | Error>({
        path: `/repositories/${workspace}/${repoSlug}/issues/${issueId}/attachments/${path}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns the list of all changes that have been made to the specified issue. Changes are returned in chronological order with the oldest change first. Each time an issue is edited in the UI or through the API, an immutable change record is created under the `/issues/123/changes` endpoint. It also has a comment associated with the change. Note that this operation is changing significantly, due to privacy changes. See the [announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#changes-to-the-issue-changes-api) for details. Changes support [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) that can be used to search for specific changes. For instance, to see when an issue transitioned to "resolved": ``` $ curl -s https://api.bitbucket.org/2.0/repositories/site/master/issues/1/changes \ -G --data-urlencode='q=changes.state.new = "resolved"' ``` This resource is only available on repositories that have the issue tracker enabled. N.B. The `changes.assignee` and `changes.assignee_account_id` fields are not a `user` object. Instead, they contain the raw `username` and `account_id` of the user. This is to protect the integrity of the audit log even after a user account gets deleted. The `changes.assignee` field is deprecated will disappear in the future. Use `changes.assignee_account_id` instead.
     *
     * @tags Issue tracker
     * @name IssuesChangesList
     * @summary List changes on an issue
     * @request GET:/repositories/{workspace}/{repo_slug}/issues/{issue_id}/changes
     * @deprecated
     * @secure
     */
    issuesChangesList: (
      issueId: string,
      repoSlug: string,
      workspace: string,
      query?: {
        /**
         *
         * Query string to narrow down the response. See
         * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) for details.
         */
        q?: string;
        /**
         *
         * Name of a response property to sort results. See
         * [filtering and sorting](/cloud/bitbucket/rest/intro/#sorting-query-results)
         * for details.
         */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedLogEntries, Error>({
        path: `/repositories/${workspace}/${repoSlug}/issues/${issueId}/changes`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Makes a change to the specified issue. For example, to change an issue's state and assignee, create a new change object that modifies these fields: ``` curl https://api.bitbucket.org/2.0/site/master/issues/1234/changes \ -s -u evzijst -X POST -H "Content-Type: application/json" \ -d '{ "changes": { "assignee_account_id": { "new": "557058:c0b72ad0-1cb5-4018-9cdc-0cde8492c443" }, "state": { "new": 'resolved" } } "message": { "raw": "This is now resolved." } }' ``` The above example also includes a custom comment to go alongside the change. This comment will also be visible on the issue page in the UI. The fields of the `changes` object are strings, not objects. This allows for immutable change log records, even after user accounts, milestones, or other objects recorded in a change entry, get renamed or deleted. The `assignee_account_id` field stores the account id. When POSTing a new change and changing the assignee, the client should therefore use the user's account_id in the `changes.assignee_account_id.new` field. This call requires authentication. Private repositories or private issue trackers require the caller to authenticate with an account that has appropriate authorization.
     *
     * @tags Issue tracker
     * @name IssuesChangesCreate
     * @summary Modify the state of an issue
     * @request POST:/repositories/{workspace}/{repo_slug}/issues/{issue_id}/changes
     * @deprecated
     * @secure
     */
    issuesChangesCreate: (
      issueId: string,
      repoSlug: string,
      workspace: string,
      data: IssueChange,
      params: RequestParams = {},
    ) =>
      this.request<IssueChange, Error>({
        path: `/repositories/${workspace}/${repoSlug}/issues/${issueId}/changes`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the specified issue change object. This resource is only available on repositories that have the issue tracker enabled.
     *
     * @tags Issue tracker
     * @name IssuesChangesDetail
     * @summary Get issue change object
     * @request GET:/repositories/{workspace}/{repo_slug}/issues/{issue_id}/changes/{change_id}
     * @deprecated
     * @secure
     */
    issuesChangesDetail: (
      changeId: string,
      issueId: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<IssueChange, Error>({
        path: `/repositories/${workspace}/${repoSlug}/issues/${issueId}/changes/${changeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a paginated list of all comments that were made on the specified issue. The default sorting is oldest to newest and can be overridden with the `sort` query parameter. This endpoint also supports filtering and sorting of the results. See [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) for more details.
     *
     * @tags Issue tracker
     * @name IssuesCommentsList
     * @summary List comments on an issue
     * @request GET:/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments
     * @deprecated
     * @secure
     */
    issuesCommentsList: (
      issueId: string,
      repoSlug: string,
      workspace: string,
      query?: {
        /**
         *
         * Query string to narrow down the response as per
         * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
         */
        q?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedIssueComments, any>({
        path: `/repositories/${workspace}/${repoSlug}/issues/${issueId}/comments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new issue comment. ``` $ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/issues/42/comments/ \ -X POST -u evzijst \ -H 'Content-Type: application/json' \ -d '{"content": {"raw": "Lorem ipsum."}}' ```
     *
     * @tags Issue tracker
     * @name IssuesCommentsCreate
     * @summary Create a comment on an issue
     * @request POST:/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments
     * @deprecated
     * @secure
     */
    issuesCommentsCreate: (
      issueId: string,
      repoSlug: string,
      workspace: string,
      data: IssueComment,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/issues/${issueId}/comments`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Deletes the specified comment.
     *
     * @tags Issue tracker
     * @name IssuesCommentsDelete
     * @summary Delete a comment on an issue
     * @request DELETE:/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments/{comment_id}
     * @deprecated
     * @secure
     */
    issuesCommentsDelete: (
      commentId: number,
      issueId: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/repositories/${workspace}/${repoSlug}/issues/${issueId}/comments/${commentId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns the specified issue comment object.
     *
     * @tags Issue tracker
     * @name IssuesCommentsDetail
     * @summary Get a comment on an issue
     * @request GET:/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments/{comment_id}
     * @deprecated
     * @secure
     */
    issuesCommentsDetail: (
      commentId: number,
      issueId: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<IssueComment, any>({
        path: `/repositories/${workspace}/${repoSlug}/issues/${issueId}/comments/${commentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates the content of the specified issue comment. Note that only the `content.raw` field can be modified. ``` $ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/issues/42/comments/5728901 \ -X PUT -u evzijst \ -H 'Content-Type: application/json' \ -d '{"content": {"raw": "Lorem ipsum."}' ```
     *
     * @tags Issue tracker
     * @name IssuesCommentsUpdate
     * @summary Update a comment on an issue
     * @request PUT:/repositories/{workspace}/{repo_slug}/issues/{issue_id}/comments/{comment_id}
     * @deprecated
     * @secure
     */
    issuesCommentsUpdate: (
      commentId: number,
      issueId: string,
      repoSlug: string,
      workspace: string,
      data: IssueComment,
      params: RequestParams = {},
    ) =>
      this.request<IssueComment, Error>({
        path: `/repositories/${workspace}/${repoSlug}/issues/${issueId}/comments/${commentId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retract your vote.
     *
     * @tags Issue tracker
     * @name IssuesVoteDelete
     * @summary Remove vote for an issue
     * @request DELETE:/repositories/{workspace}/{repo_slug}/issues/{issue_id}/vote
     * @deprecated
     * @secure
     */
    issuesVoteDelete: (
      issueId: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<any, Error>({
        path: `/repositories/${workspace}/${repoSlug}/issues/${issueId}/vote`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Check whether the authenticated user has voted for this issue. A 204 status code indicates that the user has voted, while a 404 implies they haven't.
     *
     * @tags Issue tracker
     * @name IssuesVoteList
     * @summary Check if current user voted for an issue
     * @request GET:/repositories/{workspace}/{repo_slug}/issues/{issue_id}/vote
     * @deprecated
     * @secure
     */
    issuesVoteList: (
      issueId: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<Error, Error>({
        path: `/repositories/${workspace}/${repoSlug}/issues/${issueId}/vote`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Vote for this issue. To cast your vote, do an empty PUT. The 204 status code indicates that the operation was successful.
     *
     * @tags Issue tracker
     * @name IssuesVoteUpdate
     * @summary Vote for an issue
     * @request PUT:/repositories/{workspace}/{repo_slug}/issues/{issue_id}/vote
     * @deprecated
     * @secure
     */
    issuesVoteUpdate: (
      issueId: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<Error, Error>({
        path: `/repositories/${workspace}/${repoSlug}/issues/${issueId}/vote`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Stop watching this issue.
     *
     * @tags Issue tracker
     * @name IssuesWatchDelete
     * @summary Stop watching an issue
     * @request DELETE:/repositories/{workspace}/{repo_slug}/issues/{issue_id}/watch
     * @deprecated
     * @secure
     */
    issuesWatchDelete: (
      issueId: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<Error, Error>({
        path: `/repositories/${workspace}/${repoSlug}/issues/${issueId}/watch`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Indicated whether or not the authenticated user is watching this issue.
     *
     * @tags Issue tracker
     * @name IssuesWatchList
     * @summary Check if current user is watching a issue
     * @request GET:/repositories/{workspace}/{repo_slug}/issues/{issue_id}/watch
     * @deprecated
     * @secure
     */
    issuesWatchList: (
      issueId: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<Error, Error>({
        path: `/repositories/${workspace}/${repoSlug}/issues/${issueId}/watch`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Start watching this issue. To start watching this issue, do an empty PUT. The 204 status code indicates that the operation was successful.
     *
     * @tags Issue tracker
     * @name IssuesWatchUpdate
     * @summary Watch an issue
     * @request PUT:/repositories/{workspace}/{repo_slug}/issues/{issue_id}/watch
     * @deprecated
     * @secure
     */
    issuesWatchUpdate: (
      issueId: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<Error, Error>({
        path: `/repositories/${workspace}/${repoSlug}/issues/${issueId}/watch`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the best common ancestor between two commits, specified in a revspec of 2 commits (e.g. 3a8b42..9ff173). If more than one best common ancestor exists, only one will be returned. It is unspecified which will be returned.
     *
     * @tags Commits
     * @name MergeBaseDetail
     * @summary Get the common ancestor between two commits
     * @request GET:/repositories/{workspace}/{repo_slug}/merge-base/{revspec}
     * @secure
     */
    mergeBaseDetail: (
      repoSlug: string,
      revspec: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<Commit, Error>({
        path: `/repositories/${workspace}/${repoSlug}/merge-base/${revspec}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the milestones that have been defined in the issue tracker. This resource is only available on repositories that have the issue tracker enabled.
     *
     * @tags Issue tracker
     * @name MilestonesList
     * @summary List milestones
     * @request GET:/repositories/{workspace}/{repo_slug}/milestones
     * @deprecated
     * @secure
     */
    milestonesList: (
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedMilestones, Error>({
        path: `/repositories/${workspace}/${repoSlug}/milestones`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the specified issue tracker milestone object.
     *
     * @tags Issue tracker
     * @name MilestonesDetail
     * @summary Get a milestone
     * @request GET:/repositories/{workspace}/{repo_slug}/milestones/{milestone_id}
     * @deprecated
     * @secure
     */
    milestonesDetail: (
      milestoneId: number,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<Milestone, Error>({
        path: `/repositories/${workspace}/${repoSlug}/milestones/${milestoneId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Repositories
     * @name OverrideSettingsList
     * @summary Retrieve the inheritance state for repository settings
     * @request GET:/repositories/{workspace}/{repo_slug}/override-settings
     * @secure
     */
    overrideSettingsList: (
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<RepositoryInheritanceState, Error>({
        path: `/repositories/${workspace}/${repoSlug}/override-settings`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Repositories
     * @name OverrideSettingsUpdate
     * @summary Set the inheritance state for repository settings
     * @request PUT:/repositories/{workspace}/{repo_slug}/override-settings
     * @secure
     */
    overrideSettingsUpdate: (
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/override-settings`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description Produces a raw patch for a single commit (diffed against its first parent), or a patch-series for a revspec of 2 commits (e.g. `3a8b42..9ff173` where the first commit represents the source and the second commit the destination). In case of the latter (diffing a revspec), a patch series is returned for the commits on the source branch (`3a8b42` and its ancestors in our example). While similar to diffs, patches: * Have a commit header (username, commit message, etc) * Do not support the `path=foo/bar.py` query parameter The raw patch is returned as-is, in whatever encoding the files in the repository use. It is not decoded into unicode. As such, the content-type is `text/plain`.
     *
     * @tags Commits
     * @name PatchDetail
     * @summary Get a patch for two commits
     * @request GET:/repositories/{workspace}/{repo_slug}/patch/{spec}
     * @secure
     */
    patchDetail: (
      repoSlug: string,
      spec: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/patch/${spec}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns a paginated list of explicit group permissions for the given repository. This endpoint does not support BBQL features.
     *
     * @tags Repositories
     * @name PermissionsConfigGroupsList
     * @summary List explicit group permissions for a repository
     * @request GET:/repositories/{workspace}/{repo_slug}/permissions-config/groups
     * @secure
     */
    permissionsConfigGroupsList: (
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedRepositoryGroupPermissions, Error>({
        path: `/repositories/${workspace}/${repoSlug}/permissions-config/groups`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes the repository group permission between the requested repository and group, if one exists. Only users with admin permission for the repository may access this resource. The only authentication method supported for this endpoint is via app passwords.
     *
     * @tags Repositories
     * @name PermissionsConfigGroupsDelete
     * @summary Delete an explicit group permission for a repository
     * @request DELETE:/repositories/{workspace}/{repo_slug}/permissions-config/groups/{group_slug}
     * @secure
     */
    permissionsConfigGroupsDelete: (
      groupSlug: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/permissions-config/groups/${groupSlug}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns the group permission for a given group slug and repository Only users with admin permission for the repository may access this resource. Permissions can be: * `admin` * `write` * `read` * `none`
     *
     * @tags Repositories
     * @name PermissionsConfigGroupsDetail
     * @summary Get an explicit group permission for a repository
     * @request GET:/repositories/{workspace}/{repo_slug}/permissions-config/groups/{group_slug}
     * @secure
     */
    permissionsConfigGroupsDetail: (
      groupSlug: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<RepositoryGroupPermission, Error>({
        path: `/repositories/${workspace}/${repoSlug}/permissions-config/groups/${groupSlug}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates the group permission, or grants a new permission if one does not already exist. Only users with admin permission for the repository may access this resource. The only authentication method supported for this endpoint is via app passwords. Permissions can be: * `admin` * `write` * `read`
     *
     * @tags Repositories
     * @name PermissionsConfigGroupsUpdate
     * @summary Update an explicit group permission for a repository
     * @request PUT:/repositories/{workspace}/{repo_slug}/permissions-config/groups/{group_slug}
     * @secure
     */
    permissionsConfigGroupsUpdate: (
      groupSlug: string,
      repoSlug: string,
      workspace: string,
      data: BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema,
      params: RequestParams = {},
    ) =>
      this.request<RepositoryGroupPermission, Error>({
        path: `/repositories/${workspace}/${repoSlug}/permissions-config/groups/${groupSlug}`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a paginated list of explicit user permissions for the given repository. This endpoint does not support BBQL features.
     *
     * @tags Repositories
     * @name PermissionsConfigUsersList
     * @summary List explicit user permissions for a repository
     * @request GET:/repositories/{workspace}/{repo_slug}/permissions-config/users
     * @secure
     */
    permissionsConfigUsersList: (
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedRepositoryUserPermissions, Error>({
        path: `/repositories/${workspace}/${repoSlug}/permissions-config/users`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes the repository user permission between the requested repository and user, if one exists. Only users with admin permission for the repository may access this resource. The only authentication method for this endpoint is via app passwords.
     *
     * @tags Repositories
     * @name PermissionsConfigUsersDelete
     * @summary Delete an explicit user permission for a repository
     * @request DELETE:/repositories/{workspace}/{repo_slug}/permissions-config/users/{selected_user_id}
     * @secure
     */
    permissionsConfigUsersDelete: (
      repoSlug: string,
      selectedUserId: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/permissions-config/users/${selectedUserId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns the explicit user permission for a given user and repository. Only users with admin permission for the repository may access this resource. Permissions can be: * `admin` * `write` * `read` * `none`
     *
     * @tags Repositories
     * @name PermissionsConfigUsersDetail
     * @summary Get an explicit user permission for a repository
     * @request GET:/repositories/{workspace}/{repo_slug}/permissions-config/users/{selected_user_id}
     * @secure
     */
    permissionsConfigUsersDetail: (
      repoSlug: string,
      selectedUserId: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<RepositoryUserPermission, Error>({
        path: `/repositories/${workspace}/${repoSlug}/permissions-config/users/${selectedUserId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates the explicit user permission for a given user and repository. The selected user must be a member of the workspace, and cannot be the workspace owner. Only users with admin permission for the repository may access this resource. The only authentication method for this endpoint is via app passwords. Permissions can be: * `admin` * `write` * `read`
     *
     * @tags Repositories
     * @name PermissionsConfigUsersUpdate
     * @summary Update an explicit user permission for a repository
     * @request PUT:/repositories/{workspace}/{repo_slug}/permissions-config/users/{selected_user_id}
     * @secure
     */
    permissionsConfigUsersUpdate: (
      repoSlug: string,
      selectedUserId: string,
      workspace: string,
      data: BitbucketAppsPermissionsSerializersRepoPermissionUpdateSchema,
      params: RequestParams = {},
    ) =>
      this.request<RepositoryUserPermission, Error>({
        path: `/repositories/${workspace}/${repoSlug}/permissions-config/users/${selectedUserId}`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Find pipelines in a repository. Note that unlike other endpoints in the Bitbucket API, this endpoint utilizes query parameters to allow filtering and sorting of returned results. See [query parameters](#api-repositories-workspace-repo-slug-pipelines-get-request-Query%20parameters) for specific details.
     *
     * @tags Pipelines
     * @name GetPipelinesForRepository
     * @summary List pipelines
     * @request GET:/repositories/{workspace}/{repo_slug}/pipelines
     * @secure
     */
    getPipelinesForRepository: (
      workspace: string,
      repoSlug: string,
      query?: {
        /**
         * The UUID of the creator of the pipeline to filter by.
         * @format uuid
         */
        "creator.uuid"?: string;
        /** The type of the reference to filter by. */
        "target.ref_type"?: "BRANCH" | "TAG" | "ANNOTATED_TAG";
        /** The reference name to filter by. */
        "target.ref_name"?: string;
        /** The name of the branch to filter by. */
        "target.branch"?: string;
        /** The revision to filter by. */
        "target.commit.hash"?: string;
        /** The pipeline pattern to filter by. */
        "target.selector.pattern"?: string;
        /** The type of pipeline to filter by. */
        "target.selector.type"?:
          | "BRANCH"
          | "TAG"
          | "CUSTOM"
          | "PULLREQUESTS"
          | "DEFAULT";
        /**
         * The creation date to filter by.
         * @format date-time
         */
        created_on?: string;
        /** The trigger type to filter by. */
        trigger_type?: "PUSH" | "MANUAL" | "SCHEDULED" | "PARENT_STEP";
        /** The pipeline status to filter by. */
        status?:
          | "PARSING"
          | "PENDING"
          | "PAUSED"
          | "HALTED"
          | "BUILDING"
          | "ERROR"
          | "PASSED"
          | "FAILED"
          | "STOPPED"
          | "UNKNOWN";
        /** The attribute name to sort on. */
        sort?: "creator.uuid" | "created_on" | "run_creation_date";
        /**
         * The page number of elements to retrieve.
         * @format int32
         * @min 1
         * @default 1
         */
        page?: number;
        /**
         * The maximum number of results to return.
         * @format int32
         * @min 1
         * @max 100
         * @default 10
         */
        pagelen?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedPipelines, any>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint to create and initiate a pipeline. There are a number of different options to initiate a pipeline, where the payload of the request will determine which type of pipeline will be instantiated. ## Trigger a pipeline for a branch One way to trigger pipelines is by specifying the branch for which you want to trigger a pipeline. The specified branch will be used to determine which pipeline definition from the `bitbucket-pipelines.yml` file will be applied to initiate the pipeline. The pipeline will then do a clone of the repository and checkout the latest revision of the specified branch. ### Example ``` $ curl -X POST -is -u '{atlassian_account_email}:{api_token}' \ -H 'Content-Type: application/json' \ https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines/ \ -d ' { "target": { "ref_type": "branch", "type": "pipeline_ref_target", "ref_name": "master" } }' ``` ## Trigger a pipeline for a commit on a branch or tag You can initiate a pipeline for a specific commit and in the context of a specified reference (e.g. a branch, tag or bookmark). The specified reference will be used to determine which pipeline definition from the bitbucket-pipelines.yml file will be applied to initiate the pipeline. The pipeline will clone the repository and then do a checkout the specified reference. The following reference types are supported: * `branch` * `named_branch` * `bookmark` * `tag` ### Example ``` $ curl -X POST -is -u '{atlassian_account_email}:{api_token}' \ -H 'Content-Type: application/json' \ https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines/ \ -d ' { "target": { "commit": { "type": "commit", "hash": "ce5b7431602f7cbba007062eeb55225c6e18e956" }, "ref_type": "branch", "type": "pipeline_ref_target", "ref_name": "master" } }' ``` ## Trigger a specific pipeline definition for a commit You can trigger a specific pipeline that is defined in your `bitbucket-pipelines.yml` file for a specific commit. In addition to the commit revision, you specify the type and pattern of the selector that identifies the pipeline definition. The resulting pipeline will then clone the repository and checkout the specified revision. ### Example ``` $ curl -X POST -is -u '{atlassian_account_email}:{api_token}' \ -H 'Content-Type: application/json' \ https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines/ \ -d ' { "target": { "commit": { "hash":"a3c4e02c9a3755eccdc3764e6ea13facdf30f923", "type":"commit" }, "selector": { "type":"custom", "pattern":"Deploy to production" }, "type":"pipeline_commit_target" } }' ``` ## Trigger a specific pipeline definition for a commit on a branch or tag You can trigger a specific pipeline that is defined in your `bitbucket-pipelines.yml` file for a specific commit in the context of a specified reference. In addition to the commit revision, you specify the type and pattern of the selector that identifies the pipeline definition, as well as the reference information. The resulting pipeline will then clone the repository a checkout the specified reference. ### Example ``` $ curl -X POST -is -u '{atlassian_account_email}:{api_token}' \ -H 'Content-Type: application/json' \ https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines/ \ -d ' { "target": { "commit": { "hash":"a3c4e02c9a3755eccdc3764e6ea13facdf30f923", "type":"commit" }, "selector": { "type": "custom", "pattern": "Deploy to production" }, "type": "pipeline_ref_target", "ref_name": "master", "ref_type": "branch" } }' ``` ## Trigger a custom pipeline with variables In addition to triggering a custom pipeline that is defined in your `bitbucket-pipelines.yml` file as shown in the examples above, you can specify variables that will be available for your build. In the request, provide a list of variables, specifying the following for each variable: key, value, and whether it should be secured or not (this field is optional and defaults to not secured). ### Example ``` $ curl -X POST -is -u '{atlassian_account_email}:{api_token}' \ -H 'Content-Type: application/json' \ https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines/ \ -d ' { "target": { "type": "pipeline_ref_target", "ref_type": "branch", "ref_name": "master", "selector": { "type": "custom", "pattern": "Deploy to production" } }, "variables": [ { "key": "var1key", "value": "var1value", "secured": true }, { "key": "var2key", "value": "var2value" } ] }' ``` ## Trigger a pull request pipeline You can also initiate a pipeline for a specific pull request. ### Example ``` $ curl -X POST -is -u '{atlassian_account_email}:{api_token}' \ -H 'Content-Type: application/json' \ https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines/ \ -d ' { "target": { "type": "pipeline_pullrequest_target", "source": "pull-request-branch", "destination": "master", "destination_commit": { "hash": "9f848b7" }, "commit": { "hash": "1a372fc" }, "pullrequest": { "id": "3" }, "selector": { "type": "pull-requests", "pattern": "**" } } }' ``` # On-demand pipeline By default, pipelines run using the YAML in the repository’s `bitbucket-pipelines.yml` configuration file. With an _on-demand_ pipeline, you include the pipeline’s YAML in the request body. That YAML applies only to that run and overrides the YAML in `bitbucket-pipelines.yml`. Just like with regular pipelines, there is a number of different options to initiate an on-demand pipeline. However, since the payload contains YAML configuration in this case, _query parameters_ are used to supply the necessary metadata to determine which type of pipeline will be instantiated. These query parameters are derived from the JSON equivalent by turning each property into a key-value pair with the JSON path of the property as the new key. ## Trigger on-demand pipeline for a branch You can initiate an on-demand pipeline for a specific branch. This branch will be used to determine which pipeline definition from the supplied YAML configuration will be applied to initiate the pipeline. The pipeline will then do a clone of the repository and check out the latest revision of the specified branch. To trigger an on-demand pipeline for a _branch_ the requesting user must have **write permission** for that branch (which can be limited by [branch restrictions](https://support.atlassian.com/bitbucket-cloud/docs/use-branch-permissions/)). ### Example ``` $ curl -X POST -is -u '{atlassian_account_email}:{api_token}' \ -H 'Content-Type: application/yaml' \ https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines?target.type=pipeline_ref_target&target.ref_type=branch&target.ref_name=master \ -d ' pipelines: default: - step: script: - echo This is an on-demand pipeline' ``` ## Trigger on-demand pipeline for a commit on a branch or tag You can initiate an on-demand pipeline for a specific commit and in the context of a specified reference (branch or tag). The specified reference will be used to determine which pipeline definition from the supplied YAML configuration will be applied to initiate the pipeline. The pipeline will clone the repository and check out the specified reference. To trigger an on-demand pipeline for a _branch_ the requesting user must have **write permission** for that branch (which can be limited by [branch restrictions](https://support.atlassian.com/bitbucket-cloud/docs/use-branch-permissions/)). ### Example ``` $ curl -X POST -is -u '{atlassian_account_email}:{api_token}' \ -H 'Content-Type: application/yaml' \ https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines?target.type=pipeline_ref_target&target.ref_type=branch&target.ref_name=master&target.commit.hash=ce5b7431602f7cbba007062eeb55225c6e18e956 \ -d ' pipelines: default: - step: script: - echo This is an on-demand pipeline' ``` ## Trigger a specific on-demand pipeline definition for a commit You can trigger a specific pipeline that is defined in the supplied YAML configuration for a specific commit. In addition to the commit revision, you specify the type and pattern of the selector that identifies the pipeline definition. The resulting pipeline will then clone the repository and checkout the specified revision. ### Example ``` $ curl -X POST -is -u '{atlassian_account_email}:{api_token}' \ -H 'Content-Type: application/yaml' \ https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines?target.type=pipeline_commit_target&target.commit.hash=a3c4e02c9a3755eccdc3764e6ea13facdf30f923&target.selector.type=custom&target.selector.pattern=security-scan \ -d ' pipelines: custom: security-scan: - step: script: - echo Run on-demand security scan ``` ## Trigger a custom on-demand pipeline with variables In addition to triggering a custom on-demand pipeline that is defined in the supplied YAML configuration as shown in the examples above, you can specify variables that will be available for your build. In the request, provide each variable as an indexed set of query parameters representing its key, value, and whether it should be secured or not (this field is optional and defaults to not secured). ### Example ``` $ curl -X POST -is -u '{atlassian_account_email}:{api_token}' \ -H 'Content-Type: application/yaml' \ https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines?target.type=pipeline_ref_target&target.ref_type=branch&target.ref_name=master&target.selector.type=custom&target.selector.pattern=security-scan&variables[0].key=var1key&variables[0].value=var1value&variables[0].secured=true&variables[1].key=var2key&variables[1].value=var2value \ -d ' pipelines: custom: security-scan: - variables: - name: var1key - name: var2key - step: script: - echo Run on-demand security scan' ``` ## Trigger a pull request pipeline You can also initiate an on-demand pipeline for a specific pull request. ### Example ``` $ curl -X POST -is -u '{atlassian_account_email}:{api_token}' \ -H 'Content-Type: application/yaml' \ https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines?target.type=pipeline_pullrequest_target&target.source=pull-request-branch&target.destination=destination&target.destination_commit.hash=9f848b7&target.commit.hash=1a372fc&target.pullrequest.id=3&target.selector.type=pull-requests&target.selector.pattern=** \ -d ' pipelines: pull-requests: "**": - step: script: - echo This is an on-demand pipeline' ```
     *
     * @tags Pipelines
     * @name CreatePipelineForRepository
     * @summary Run a pipeline
     * @request POST:/repositories/{workspace}/{repo_slug}/pipelines
     * @secure
     */
    createPipelineForRepository: (
      workspace: string,
      repoSlug: string,
      data: Pipeline,
      params: RequestParams = {},
    ) =>
      this.request<Pipeline, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve the repository pipelines caches.
     *
     * @tags Pipelines
     * @name GetRepositoryPipelineCaches
     * @summary List caches
     * @request GET:/repositories/{workspace}/{repo_slug}/pipelines-config/caches
     * @secure
     */
    getRepositoryPipelineCaches: (
      workspace: string,
      repoSlug: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedPipelineCaches, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines-config/caches`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete repository cache versions by name.
     *
     * @tags Pipelines
     * @name DeleteRepositoryPipelineCaches
     * @summary Delete caches
     * @request DELETE:/repositories/{workspace}/{repo_slug}/pipelines-config/caches
     * @secure
     */
    deleteRepositoryPipelineCaches: (
      workspace: string,
      repoSlug: string,
      query: {
        /** The cache name. */
        name: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines-config/caches`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Delete a repository cache.
     *
     * @tags Pipelines
     * @name DeleteRepositoryPipelineCache
     * @summary Delete a cache
     * @request DELETE:/repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}
     * @secure
     */
    deleteRepositoryPipelineCache: (
      workspace: string,
      repoSlug: string,
      cacheUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines-config/caches/${cacheUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Retrieve the URI of the content of the specified cache.
     *
     * @tags Pipelines
     * @name GetRepositoryPipelineCacheContentUri
     * @summary Get cache content URI
     * @request GET:/repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}/content-uri
     * @secure
     */
    getRepositoryPipelineCacheContentUri: (
      workspace: string,
      repoSlug: string,
      cacheUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<PipelineCacheContentUri, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines-config/caches/${cacheUuid}/content-uri`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve repository runners.
     *
     * @tags Pipelines
     * @name GetRepositoryRunners
     * @summary Get repository runners
     * @request GET:/repositories/{workspace}/{repo_slug}/pipelines-config/runners
     * @secure
     */
    getRepositoryRunners: (
      workspace: string,
      repoSlug: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedPipelineRunners, any>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines-config/runners`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create repository runner.
     *
     * @tags Pipelines
     * @name CreateRepositoryRunner
     * @summary Create repository runner
     * @request POST:/repositories/{workspace}/{repo_slug}/pipelines-config/runners
     * @secure
     */
    createRepositoryRunner: (
      workspace: string,
      repoSlug: string,
      params: RequestParams = {},
    ) =>
      this.request<PipelineRunner, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines-config/runners`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve repository runner by uuid.
     *
     * @tags Pipelines
     * @name GetRepositoryRunner
     * @summary Get repository runner
     * @request GET:/repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}
     * @secure
     */
    getRepositoryRunner: (
      workspace: string,
      repoSlug: string,
      runnerUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<PipelineRunner, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines-config/runners/${runnerUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update repository runner.
     *
     * @tags Pipelines
     * @name UpdateRepositoryRunner
     * @summary Update repository runner
     * @request PUT:/repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}
     * @secure
     */
    updateRepositoryRunner: (
      workspace: string,
      repoSlug: string,
      runnerUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<PipelineRunner, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines-config/runners/${runnerUuid}`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete repository runner by uuid.
     *
     * @tags Pipelines
     * @name DeleteRepositoryRunner
     * @summary Delete repository runner
     * @request DELETE:/repositories/{workspace}/{repo_slug}/pipelines-config/runners/{runner_uuid}
     * @secure
     */
    deleteRepositoryRunner: (
      workspace: string,
      repoSlug: string,
      runnerUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines-config/runners/${runnerUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Retrieve a specified pipeline
     *
     * @tags Pipelines
     * @name GetPipelineForRepository
     * @summary Get a pipeline
     * @request GET:/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}
     * @secure
     */
    getPipelineForRepository: (
      workspace: string,
      repoSlug: string,
      pipelineUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<Pipeline, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines/${pipelineUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Find steps for the given pipeline.
     *
     * @tags Pipelines
     * @name GetPipelineStepsForRepository
     * @summary List steps for a pipeline
     * @request GET:/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps
     * @secure
     */
    getPipelineStepsForRepository: (
      workspace: string,
      repoSlug: string,
      pipelineUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedPipelineSteps, any>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines/${pipelineUuid}/steps`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve a given step of a pipeline.
     *
     * @tags Pipelines
     * @name GetPipelineStepForRepository
     * @summary Get a step of a pipeline
     * @request GET:/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}
     * @secure
     */
    getPipelineStepForRepository: (
      workspace: string,
      repoSlug: string,
      pipelineUuid: string,
      stepUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<PipelineStep, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines/${pipelineUuid}/steps/${stepUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve the log file for a given step of a pipeline. This endpoint supports (and encourages!) the use of [HTTP Range requests](https://tools.ietf.org/html/rfc7233) to deal with potentially very large log files.
     *
     * @tags Pipelines
     * @name GetPipelineStepLogForRepository
     * @summary Get log file for a step
     * @request GET:/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/log
     * @secure
     */
    getPipelineStepLogForRepository: (
      workspace: string,
      repoSlug: string,
      pipelineUuid: string,
      stepUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<Blob, Error | void>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines/${pipelineUuid}/steps/${stepUuid}/log`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Retrieve the log file for a build container or service container. This endpoint supports (and encourages!) the use of [HTTP Range requests](https://tools.ietf.org/html/rfc7233) to deal with potentially very large log files.
     *
     * @tags Pipelines
     * @name GetPipelineContainerLog
     * @summary Get the logs for the build container or a service container for a given step of a pipeline.
     * @request GET:/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/logs/{log_uuid}
     * @secure
     */
    getPipelineContainerLog: (
      workspace: string,
      repoSlug: string,
      pipelineUuid: string,
      stepUuid: string,
      logUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<Blob, void | Error>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines/${pipelineUuid}/steps/${stepUuid}/logs/${logUuid}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pipelines
     * @name GetPipelineTestReports
     * @summary Get a summary of test reports for a given step of a pipeline.
     * @request GET:/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports
     * @secure
     */
    getPipelineTestReports: (
      workspace: string,
      repoSlug: string,
      pipelineUuid: string,
      stepUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines/${pipelineUuid}/steps/${stepUuid}/test_reports`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pipelines
     * @name GetPipelineTestReportTestCases
     * @summary Get test cases for a given step of a pipeline.
     * @request GET:/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases
     * @secure
     */
    getPipelineTestReportTestCases: (
      workspace: string,
      repoSlug: string,
      pipelineUuid: string,
      stepUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines/${pipelineUuid}/steps/${stepUuid}/test_reports/test_cases`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pipelines
     * @name GetPipelineTestReportTestCaseReasons
     * @summary Get test case reasons (output) for a given test case in a step of a pipeline.
     * @request GET:/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/test_reports/test_cases/{test_case_uuid}/test_case_reasons
     * @secure
     */
    getPipelineTestReportTestCaseReasons: (
      workspace: string,
      repoSlug: string,
      pipelineUuid: string,
      stepUuid: string,
      testCaseUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines/${pipelineUuid}/steps/${stepUuid}/test_reports/test_cases/${testCaseUuid}/test_case_reasons`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Signal the stop of a pipeline and all of its steps that not have completed yet.
     *
     * @tags Pipelines
     * @name StopPipeline
     * @summary Stop a pipeline
     * @request POST:/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/stopPipeline
     * @secure
     */
    stopPipeline: (
      workspace: string,
      repoSlug: string,
      pipelineUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines/${pipelineUuid}/stopPipeline`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * @description Retrieve the repository pipelines configuration.
     *
     * @tags Pipelines
     * @name GetRepositoryPipelineConfig
     * @summary Get configuration
     * @request GET:/repositories/{workspace}/{repo_slug}/pipelines_config
     * @secure
     */
    getRepositoryPipelineConfig: (
      workspace: string,
      repoSlug: string,
      params: RequestParams = {},
    ) =>
      this.request<PipelinesConfig, any>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines_config`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update the pipelines configuration for a repository.
     *
     * @tags Pipelines
     * @name UpdateRepositoryPipelineConfig
     * @summary Update configuration
     * @request PUT:/repositories/{workspace}/{repo_slug}/pipelines_config
     * @secure
     */
    updateRepositoryPipelineConfig: (
      workspace: string,
      repoSlug: string,
      data: PipelinesConfig,
      params: RequestParams = {},
    ) =>
      this.request<PipelinesConfig, any>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines_config`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Update the next build number that should be assigned to a pipeline. The next build number that will be configured has to be strictly higher than the current latest build number for this repository.
     *
     * @tags Pipelines
     * @name UpdateRepositoryBuildNumber
     * @summary Update the next build number
     * @request PUT:/repositories/{workspace}/{repo_slug}/pipelines_config/build_number
     * @secure
     */
    updateRepositoryBuildNumber: (
      workspace: string,
      repoSlug: string,
      data: PipelineBuildNumber,
      params: RequestParams = {},
    ) =>
      this.request<PipelineBuildNumber, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines_config/build_number`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a schedule for the given repository.
     *
     * @tags Pipelines
     * @name CreateRepositoryPipelineSchedule
     * @summary Create a schedule
     * @request POST:/repositories/{workspace}/{repo_slug}/pipelines_config/schedules
     * @secure
     */
    createRepositoryPipelineSchedule: (
      workspace: string,
      repoSlug: string,
      data: PipelineSchedulePostRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<PipelineSchedule, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines_config/schedules`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve the configured schedules for the given repository.
     *
     * @tags Pipelines
     * @name GetRepositoryPipelineSchedules
     * @summary List schedules
     * @request GET:/repositories/{workspace}/{repo_slug}/pipelines_config/schedules
     * @secure
     */
    getRepositoryPipelineSchedules: (
      workspace: string,
      repoSlug: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedPipelineSchedules, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines_config/schedules`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve a schedule by its UUID.
     *
     * @tags Pipelines
     * @name GetRepositoryPipelineSchedule
     * @summary Get a schedule
     * @request GET:/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}
     * @secure
     */
    getRepositoryPipelineSchedule: (
      workspace: string,
      repoSlug: string,
      scheduleUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<PipelineSchedule, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines_config/schedules/${scheduleUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update a schedule.
     *
     * @tags Pipelines
     * @name UpdateRepositoryPipelineSchedule
     * @summary Update a schedule
     * @request PUT:/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}
     * @secure
     */
    updateRepositoryPipelineSchedule: (
      workspace: string,
      repoSlug: string,
      scheduleUuid: string,
      data: PipelineSchedulePutRequestBody,
      params: RequestParams = {},
    ) =>
      this.request<PipelineSchedule, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines_config/schedules/${scheduleUuid}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a schedule.
     *
     * @tags Pipelines
     * @name DeleteRepositoryPipelineSchedule
     * @summary Delete a schedule
     * @request DELETE:/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}
     * @secure
     */
    deleteRepositoryPipelineSchedule: (
      workspace: string,
      repoSlug: string,
      scheduleUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines_config/schedules/${scheduleUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Retrieve the executions of a given schedule.
     *
     * @tags Pipelines
     * @name GetRepositoryPipelineScheduleExecutions
     * @summary List executions of a schedule
     * @request GET:/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}/executions
     * @secure
     */
    getRepositoryPipelineScheduleExecutions: (
      workspace: string,
      repoSlug: string,
      scheduleUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedPipelineScheduleExecutions, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines_config/schedules/${scheduleUuid}/executions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve the repository SSH key pair excluding the SSH private key. The private key is a write only field and will never be exposed in the logs or the REST API.
     *
     * @tags Pipelines
     * @name GetRepositoryPipelineSshKeyPair
     * @summary Get SSH key pair
     * @request GET:/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair
     * @secure
     */
    getRepositoryPipelineSshKeyPair: (
      workspace: string,
      repoSlug: string,
      params: RequestParams = {},
    ) =>
      this.request<PipelineSshKeyPair, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines_config/ssh/key_pair`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create or update the repository SSH key pair. The private key will be set as a default SSH identity in your build container.
     *
     * @tags Pipelines
     * @name UpdateRepositoryPipelineKeyPair
     * @summary Update SSH key pair
     * @request PUT:/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair
     * @secure
     */
    updateRepositoryPipelineKeyPair: (
      workspace: string,
      repoSlug: string,
      data: PipelineSshKeyPair,
      params: RequestParams = {},
    ) =>
      this.request<PipelineSshKeyPair, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines_config/ssh/key_pair`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete the repository SSH key pair.
     *
     * @tags Pipelines
     * @name DeleteRepositoryPipelineKeyPair
     * @summary Delete SSH key pair
     * @request DELETE:/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair
     * @secure
     */
    deleteRepositoryPipelineKeyPair: (
      workspace: string,
      repoSlug: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines_config/ssh/key_pair`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Find repository level known hosts.
     *
     * @tags Pipelines
     * @name GetRepositoryPipelineKnownHosts
     * @summary List known hosts
     * @request GET:/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts
     * @secure
     */
    getRepositoryPipelineKnownHosts: (
      workspace: string,
      repoSlug: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedPipelineKnownHosts, any>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines_config/ssh/known_hosts`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a repository level known host.
     *
     * @tags Pipelines
     * @name CreateRepositoryPipelineKnownHost
     * @summary Create a known host
     * @request POST:/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts
     * @secure
     */
    createRepositoryPipelineKnownHost: (
      workspace: string,
      repoSlug: string,
      data: PipelineKnownHost,
      params: RequestParams = {},
    ) =>
      this.request<PipelineKnownHost, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines_config/ssh/known_hosts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve a repository level known host.
     *
     * @tags Pipelines
     * @name GetRepositoryPipelineKnownHost
     * @summary Get a known host
     * @request GET:/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}
     * @secure
     */
    getRepositoryPipelineKnownHost: (
      workspace: string,
      repoSlug: string,
      knownHostUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<PipelineKnownHost, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines_config/ssh/known_hosts/${knownHostUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update a repository level known host.
     *
     * @tags Pipelines
     * @name UpdateRepositoryPipelineKnownHost
     * @summary Update a known host
     * @request PUT:/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}
     * @secure
     */
    updateRepositoryPipelineKnownHost: (
      workspace: string,
      repoSlug: string,
      knownHostUuid: string,
      data: PipelineKnownHost,
      params: RequestParams = {},
    ) =>
      this.request<PipelineKnownHost, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines_config/ssh/known_hosts/${knownHostUuid}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a repository level known host.
     *
     * @tags Pipelines
     * @name DeleteRepositoryPipelineKnownHost
     * @summary Delete a known host
     * @request DELETE:/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}
     * @secure
     */
    deleteRepositoryPipelineKnownHost: (
      workspace: string,
      repoSlug: string,
      knownHostUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines_config/ssh/known_hosts/${knownHostUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Find repository level variables.
     *
     * @tags Pipelines
     * @name GetRepositoryPipelineVariables
     * @summary List variables for a repository
     * @request GET:/repositories/{workspace}/{repo_slug}/pipelines_config/variables
     * @secure
     */
    getRepositoryPipelineVariables: (
      workspace: string,
      repoSlug: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedPipelineVariables, any>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines_config/variables`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a repository level variable.
     *
     * @tags Pipelines
     * @name CreateRepositoryPipelineVariable
     * @summary Create a variable for a repository
     * @request POST:/repositories/{workspace}/{repo_slug}/pipelines_config/variables
     * @secure
     */
    createRepositoryPipelineVariable: (
      workspace: string,
      repoSlug: string,
      data: PipelineVariable,
      params: RequestParams = {},
    ) =>
      this.request<PipelineVariable, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines_config/variables`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve a repository level variable.
     *
     * @tags Pipelines
     * @name GetRepositoryPipelineVariable
     * @summary Get a variable for a repository
     * @request GET:/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}
     * @secure
     */
    getRepositoryPipelineVariable: (
      workspace: string,
      repoSlug: string,
      variableUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<PipelineVariable, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines_config/variables/${variableUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update a repository level variable.
     *
     * @tags Pipelines
     * @name UpdateRepositoryPipelineVariable
     * @summary Update a variable for a repository
     * @request PUT:/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}
     * @secure
     */
    updateRepositoryPipelineVariable: (
      workspace: string,
      repoSlug: string,
      variableUuid: string,
      data: PipelineVariable,
      params: RequestParams = {},
    ) =>
      this.request<PipelineVariable, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines_config/variables/${variableUuid}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a repository level variable.
     *
     * @tags Pipelines
     * @name DeleteRepositoryPipelineVariable
     * @summary Delete a variable for a repository
     * @request DELETE:/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}
     * @secure
     */
    deleteRepositoryPipelineVariable: (
      workspace: string,
      repoSlug: string,
      variableUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pipelines_config/variables/${variableUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Update an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.
     *
     * @tags properties
     * @name UpdateRepositoryHostedPropertyValue
     * @summary Update a repository application property
     * @request PUT:/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}
     * @secure
     */
    updateRepositoryHostedPropertyValue: (
      workspace: string,
      repoSlug: string,
      appKey: string,
      propertyName: string,
      data: ApplicationProperty,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/repositories/${workspace}/${repoSlug}/properties/${appKey}/${propertyName}`,
        method: "PUT",
        body: data,
        secure: true,
        ...params,
      }),

    /**
     * @description Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.
     *
     * @tags properties
     * @name DeleteRepositoryHostedPropertyValue
     * @summary Delete a repository application property
     * @request DELETE:/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}
     * @secure
     */
    deleteRepositoryHostedPropertyValue: (
      workspace: string,
      repoSlug: string,
      appKey: string,
      propertyName: string,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/repositories/${workspace}/${repoSlug}/properties/${appKey}/${propertyName}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.
     *
     * @tags properties
     * @name GetRepositoryHostedPropertyValue
     * @summary Get a repository application property
     * @request GET:/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}
     * @secure
     */
    getRepositoryHostedPropertyValue: (
      workspace: string,
      repoSlug: string,
      appKey: string,
      propertyName: string,
      params: RequestParams = {},
    ) =>
      this.request<ApplicationProperty, any>({
        path: `/repositories/${workspace}/${repoSlug}/properties/${appKey}/${propertyName}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all pull requests on the specified repository. By default only open pull requests are returned. This can be controlled using the `state` query parameter. To retrieve pull requests that are in one of multiple states, repeat the `state` parameter for each individual state. This endpoint also supports filtering and sorting of the results. See [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) for more details.
     *
     * @tags Pullrequests
     * @name PullrequestsList
     * @summary List pull requests
     * @request GET:/repositories/{workspace}/{repo_slug}/pullrequests
     * @secure
     */
    pullrequestsList: (
      repoSlug: string,
      workspace: string,
      query?: {
        /** Only return pull requests that are in this state. This parameter can be repeated. */
        state?: "OPEN" | "MERGED" | "DECLINED" | "SUPERSEDED";
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedPullrequests, void | Error>({
        path: `/repositories/${workspace}/${repoSlug}/pullrequests`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new pull request where the destination repository is this repository and the author is the authenticated user. The minimum required fields to create a pull request are `title` and `source`, specified by a branch name. ``` curl https://api.bitbucket.org/2.0/repositories/my-workspace/my-repository/pullrequests \ -u my-username:my-password \ --request POST \ --header 'Content-Type: application/json' \ --data '{ "title": "My Title", "source": { "branch": { "name": "staging" } } }' ``` If the pull request's `destination` is not specified, it will default to the `repository.mainbranch`. To open a pull request to a different branch, say from a feature branch to a staging branch, specify a `destination` (same format as the `source`): ``` { "title": "My Title", "source": { "branch": { "name": "my-feature-branch" } }, "destination": { "branch": { "name": "staging" } } } ``` Reviewers can be specified by adding an array of user objects as the `reviewers` property. ``` { "title": "My Title", "source": { "branch": { "name": "my-feature-branch" } }, "reviewers": [ { "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}" } ] } ``` Other fields: * `description` - a string * `close_source_branch` - boolean that specifies if the source branch should be closed upon merging * `draft` - boolean that specifies whether the pull request is a draft
     *
     * @tags Pullrequests
     * @name PullrequestsCreate
     * @summary Create a pull request
     * @request POST:/repositories/{workspace}/{repo_slug}/pullrequests
     * @secure
     */
    pullrequestsCreate: (
      repoSlug: string,
      workspace: string,
      data: Pullrequest,
      params: RequestParams = {},
    ) =>
      this.request<Pullrequest, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pullrequests`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a paginated list of the pull request's activity log. This handler serves both a v20 and internal endpoint. The v20 endpoint returns reviewer comments, updates, approvals and request changes. The internal endpoint includes those plus tasks and attachments. Comments created on a file or a line of code have an inline property. Comment example: ``` { "pagelen": 20, "values": [ { "comment": { "links": { "self": { "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695/comments/118571088" }, "html": { "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695/_/diff#comment-118571088" } }, "deleted": false, "pullrequest": { "type": "pullrequest", "id": 5695, "links": { "self": { "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695" }, "html": { "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695" } }, "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it" }, "content": { "raw": "inline with to a dn from lines", "markup": "markdown", "html": "<p>inline with to a dn from lines</p>", "type": "rendered" }, "created_on": "2019-09-27T00:33:46.039178+00:00", "user": { "display_name": "Name Lastname", "uuid": "{}", "links": { "self": { "href": "https://api.bitbucket.org/2.0/users/%7B%7D" }, "html": { "href": "https://bitbucket.org/%7B%7D/" }, "avatar": { "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128" } }, "type": "user", "nickname": "Name", "account_id": "" }, "created_on": "2019-09-27T00:33:46.039178+00:00", "user": { "display_name": "Name Lastname", "uuid": "{}", "links": { "self": { "href": "https://api.bitbucket.org/2.0/users/%7B%7D" }, "html": { "href": "https://bitbucket.org/%7B%7D/" }, "avatar": { "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128" } }, "type": "user", "nickname": "Name", "account_id": "" }, "updated_on": "2019-09-27T00:33:46.055384+00:00", "inline": { "context_lines": "", "to": null, "path": "", "outdated": false, "from": 211 }, "type": "pullrequest_comment", "id": 118571088 }, "pull_request": { "type": "pullrequest", "id": 5695, "links": { "self": { "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695" }, "html": { "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695" } }, "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it" } } ] } ``` Updates include a state property of OPEN, MERGED, or DECLINED. Update example: ``` { "pagelen": 20, "values": [ { "update": { "description": "", "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it", "destination": { "commit": { "type": "commit", "hash": "6a2c16e4a152", "links": { "self": { "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/commit/6a2c16e4a152" }, "html": { "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6a2c16e4a152" } } }, "branch": { "name": "master" }, "repository": { "name": "Atlaskit-MK-2", "type": "repository", "full_name": "atlassian/atlaskit-mk-2", "links": { "self": { "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2" }, "html": { "href": "https://bitbucket.org/atlassian/atlaskit-mk-2" }, "avatar": { "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js" } }, "uuid": "{}" } }, "reason": "", "source": { "commit": { "type": "commit", "hash": "728c8bad1813", "links": { "self": { "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/commit/728c8bad1813" }, "html": { "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/728c8bad1813" } } }, "branch": { "name": "username/NONE-add-onClick-prop-for-accessibility" }, "repository": { "name": "Atlaskit-MK-2", "type": "repository", "full_name": "atlassian/atlaskit-mk-2", "links": { "self": { "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2" }, "html": { "href": "https://bitbucket.org/atlassian/atlaskit-mk-2" }, "avatar": { "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js" } }, "uuid": "{}" } }, "state": "OPEN", "author": { "display_name": "Name Lastname", "uuid": "{}", "links": { "self": { "href": "https://api.bitbucket.org/2.0/users/%7B%7D" }, "html": { "href": "https://bitbucket.org/%7B%7D/" }, "avatar": { "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128" } }, "type": "user", "nickname": "Name", "account_id": "" }, "date": "2019-05-10T06:48:25.305565+00:00" }, "pull_request": { "type": "pullrequest", "id": 5695, "links": { "self": { "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695" }, "html": { "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695" } }, "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it" } } ] } ``` Approval example: ``` { "pagelen": 20, "values": [ { "approval": { "date": "2019-09-27T00:37:19.849534+00:00", "pullrequest": { "type": "pullrequest", "id": 5695, "links": { "self": { "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695" }, "html": { "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695" } }, "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it" }, "user": { "display_name": "Name Lastname", "uuid": "{}", "links": { "self": { "href": "https://api.bitbucket.org/2.0/users/%7B%7D" }, "html": { "href": "https://bitbucket.org/%7B%7D/" }, "avatar": { "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128" } }, "type": "user", "nickname": "Name", "account_id": "" } }, "pull_request": { "type": "pullrequest", "id": 5695, "links": { "self": { "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695" }, "html": { "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695" } }, "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it" } } ] } ```
     *
     * @tags Pullrequests
     * @name PullrequestsActivityList
     * @summary List a pull request activity log
     * @request GET:/repositories/{workspace}/{repo_slug}/pullrequests/activity
     * @secure
     */
    pullrequestsActivityList: (
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, void | Error>({
        path: `/repositories/${workspace}/${repoSlug}/pullrequests/activity`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns the specified pull request.
     *
     * @tags Pullrequests
     * @name PullrequestsDetail
     * @summary Get a pull request
     * @request GET:/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}
     * @secure
     */
    pullrequestsDetail: (
      pullRequestId: number,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<Pullrequest, void | Error>({
        path: `/repositories/${workspace}/${repoSlug}/pullrequests/${pullRequestId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Mutates the specified pull request. This can be used to change the pull request's branches or description. Only open pull requests can be mutated.
     *
     * @tags Pullrequests
     * @name PullrequestsUpdate
     * @summary Update a pull request
     * @request PUT:/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}
     * @secure
     */
    pullrequestsUpdate: (
      pullRequestId: number,
      repoSlug: string,
      workspace: string,
      data: Pullrequest,
      params: RequestParams = {},
    ) =>
      this.request<Pullrequest, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pullrequests/${pullRequestId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a paginated list of the pull request's activity log. This handler serves both a v20 and internal endpoint. The v20 endpoint returns reviewer comments, updates, approvals and request changes. The internal endpoint includes those plus tasks and attachments. Comments created on a file or a line of code have an inline property. Comment example: ``` { "pagelen": 20, "values": [ { "comment": { "links": { "self": { "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695/comments/118571088" }, "html": { "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695/_/diff#comment-118571088" } }, "deleted": false, "pullrequest": { "type": "pullrequest", "id": 5695, "links": { "self": { "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695" }, "html": { "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695" } }, "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it" }, "content": { "raw": "inline with to a dn from lines", "markup": "markdown", "html": "<p>inline with to a dn from lines</p>", "type": "rendered" }, "created_on": "2019-09-27T00:33:46.039178+00:00", "user": { "display_name": "Name Lastname", "uuid": "{}", "links": { "self": { "href": "https://api.bitbucket.org/2.0/users/%7B%7D" }, "html": { "href": "https://bitbucket.org/%7B%7D/" }, "avatar": { "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128" } }, "type": "user", "nickname": "Name", "account_id": "" }, "created_on": "2019-09-27T00:33:46.039178+00:00", "user": { "display_name": "Name Lastname", "uuid": "{}", "links": { "self": { "href": "https://api.bitbucket.org/2.0/users/%7B%7D" }, "html": { "href": "https://bitbucket.org/%7B%7D/" }, "avatar": { "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128" } }, "type": "user", "nickname": "Name", "account_id": "" }, "updated_on": "2019-09-27T00:33:46.055384+00:00", "inline": { "context_lines": "", "to": null, "path": "", "outdated": false, "from": 211 }, "type": "pullrequest_comment", "id": 118571088 }, "pull_request": { "type": "pullrequest", "id": 5695, "links": { "self": { "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695" }, "html": { "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695" } }, "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it" } } ] } ``` Updates include a state property of OPEN, MERGED, or DECLINED. Update example: ``` { "pagelen": 20, "values": [ { "update": { "description": "", "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it", "destination": { "commit": { "type": "commit", "hash": "6a2c16e4a152", "links": { "self": { "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/commit/6a2c16e4a152" }, "html": { "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6a2c16e4a152" } } }, "branch": { "name": "master" }, "repository": { "name": "Atlaskit-MK-2", "type": "repository", "full_name": "atlassian/atlaskit-mk-2", "links": { "self": { "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2" }, "html": { "href": "https://bitbucket.org/atlassian/atlaskit-mk-2" }, "avatar": { "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js" } }, "uuid": "{}" } }, "reason": "", "source": { "commit": { "type": "commit", "hash": "728c8bad1813", "links": { "self": { "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/commit/728c8bad1813" }, "html": { "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/728c8bad1813" } } }, "branch": { "name": "username/NONE-add-onClick-prop-for-accessibility" }, "repository": { "name": "Atlaskit-MK-2", "type": "repository", "full_name": "atlassian/atlaskit-mk-2", "links": { "self": { "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2" }, "html": { "href": "https://bitbucket.org/atlassian/atlaskit-mk-2" }, "avatar": { "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js" } }, "uuid": "{}" } }, "state": "OPEN", "author": { "display_name": "Name Lastname", "uuid": "{}", "links": { "self": { "href": "https://api.bitbucket.org/2.0/users/%7B%7D" }, "html": { "href": "https://bitbucket.org/%7B%7D/" }, "avatar": { "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128" } }, "type": "user", "nickname": "Name", "account_id": "" }, "date": "2019-05-10T06:48:25.305565+00:00" }, "pull_request": { "type": "pullrequest", "id": 5695, "links": { "self": { "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695" }, "html": { "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695" } }, "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it" } } ] } ``` Approval example: ``` { "pagelen": 20, "values": [ { "approval": { "date": "2019-09-27T00:37:19.849534+00:00", "pullrequest": { "type": "pullrequest", "id": 5695, "links": { "self": { "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695" }, "html": { "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695" } }, "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it" }, "user": { "display_name": "Name Lastname", "uuid": "{}", "links": { "self": { "href": "https://api.bitbucket.org/2.0/users/%7B%7D" }, "html": { "href": "https://bitbucket.org/%7B%7D/" }, "avatar": { "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128" } }, "type": "user", "nickname": "Name", "account_id": "" } }, "pull_request": { "type": "pullrequest", "id": 5695, "links": { "self": { "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695" }, "html": { "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695" } }, "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it" } } ] } ```
     *
     * @tags Pullrequests
     * @name PullrequestsActivityList2
     * @summary List a pull request activity log
     * @request GET:/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/activity
     * @originalName pullrequestsActivityList
     * @duplicate
     * @secure
     */
    pullrequestsActivityList2: (
      pullRequestId: number,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, void | Error>({
        path: `/repositories/${workspace}/${repoSlug}/pullrequests/${pullRequestId}/activity`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Redact the authenticated user's approval of the specified pull request.
     *
     * @tags Pullrequests
     * @name PullrequestsApproveDelete
     * @summary Unapprove a pull request
     * @request DELETE:/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve
     * @secure
     */
    pullrequestsApproveDelete: (
      pullRequestId: number,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pullrequests/${pullRequestId}/approve`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Approve the specified pull request as the authenticated user.
     *
     * @tags Pullrequests
     * @name PullrequestsApproveCreate
     * @summary Approve a pull request
     * @request POST:/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve
     * @secure
     */
    pullrequestsApproveCreate: (
      pullRequestId: number,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<Participant, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pullrequests/${pullRequestId}/approve`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a paginated list of the pull request's comments. This includes both global, inline comments and replies. The default sorting is oldest to newest and can be overridden with the `sort` query parameter. This endpoint also supports filtering and sorting of the results. See [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) for more details.
     *
     * @tags Pullrequests
     * @name PullrequestsCommentsList
     * @summary List comments on a pull request
     * @request GET:/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments
     * @secure
     */
    pullrequestsCommentsList: (
      pullRequestId: number,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedPullrequestComments, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pullrequests/${pullRequestId}/comments`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new pull request comment. Returns the newly created pull request comment.
     *
     * @tags Pullrequests
     * @name PullrequestsCommentsCreate
     * @summary Create a comment on a pull request
     * @request POST:/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments
     * @secure
     */
    pullrequestsCommentsCreate: (
      pullRequestId: number,
      repoSlug: string,
      workspace: string,
      data: PullrequestComment,
      params: RequestParams = {},
    ) =>
      this.request<PullrequestComment, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pullrequests/${pullRequestId}/comments`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a specific pull request comment.
     *
     * @tags Pullrequests
     * @name PullrequestsCommentsDelete
     * @summary Delete a comment on a pull request
     * @request DELETE:/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}
     * @secure
     */
    pullrequestsCommentsDelete: (
      commentId: number,
      pullRequestId: number,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pullrequests/${pullRequestId}/comments/${commentId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns a specific pull request comment.
     *
     * @tags Pullrequests
     * @name PullrequestsCommentsDetail
     * @summary Get a comment on a pull request
     * @request GET:/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}
     * @secure
     */
    pullrequestsCommentsDetail: (
      commentId: number,
      pullRequestId: number,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<PullrequestComment, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pullrequests/${pullRequestId}/comments/${commentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a specific pull request comment.
     *
     * @tags Pullrequests
     * @name PullrequestsCommentsUpdate
     * @summary Update a comment on a pull request
     * @request PUT:/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}
     * @secure
     */
    pullrequestsCommentsUpdate: (
      commentId: number,
      pullRequestId: number,
      repoSlug: string,
      workspace: string,
      data: PullrequestComment,
      params: RequestParams = {},
    ) =>
      this.request<PullrequestComment, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pullrequests/${pullRequestId}/comments/${commentId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pullrequests
     * @name PullrequestsCommentsResolveDelete
     * @summary Reopen a comment thread
     * @request DELETE:/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}/resolve
     * @secure
     */
    pullrequestsCommentsResolveDelete: (
      commentId: number,
      pullRequestId: number,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pullrequests/${pullRequestId}/comments/${commentId}/resolve`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pullrequests
     * @name PullrequestsCommentsResolveCreate
     * @summary Resolve a comment thread
     * @request POST:/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}/resolve
     * @secure
     */
    pullrequestsCommentsResolveCreate: (
      commentId: number,
      pullRequestId: number,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<CommentResolution, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pullrequests/${pullRequestId}/comments/${commentId}/resolve`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a paginated list of the pull request's commits. These are the commits that are being merged into the destination branch when the pull requests gets accepted.
     *
     * @tags Pullrequests
     * @name PullrequestsCommitsList
     * @summary List commits on a pull request
     * @request GET:/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/commits
     * @secure
     */
    pullrequestsCommitsList: (
      pullRequestId: number,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pullrequests/${pullRequestId}/commits`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Redirects to the [repository file conflicts](/cloud/bitbucket/rest/api-group-commits/#api-repositories-workspace-repo-slug-file-conflicts-spec-get) with the revspec that corresponds to the pull request.
     *
     * @tags Pullrequests
     * @name PullrequestsConflictsList
     * @summary Get file conflicts for a pull request
     * @request GET:/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/conflicts
     * @secure
     */
    pullrequestsConflictsList: (
      pullRequestId: number,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/repositories/${workspace}/${repoSlug}/pullrequests/${pullRequestId}/conflicts`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Declines the pull request.
     *
     * @tags Pullrequests
     * @name PullrequestsDeclineCreate
     * @summary Decline a pull request
     * @request POST:/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/decline
     * @secure
     */
    pullrequestsDeclineCreate: (
      pullRequestId: number,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<Pullrequest, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pullrequests/${pullRequestId}/decline`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Redirects to the [repository diff](/cloud/bitbucket/rest/api-group-commits/#api-repositories-workspace-repo-slug-diff-spec-get) with the revspec that corresponds to the pull request.
     *
     * @tags Pullrequests
     * @name PullrequestsDiffList
     * @summary List changes in a pull request
     * @request GET:/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diff
     * @secure
     */
    pullrequestsDiffList: (
      pullRequestId: number,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/repositories/${workspace}/${repoSlug}/pullrequests/${pullRequestId}/diff`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Redirects to the [repository diffstat](/cloud/bitbucket/rest/api-group-commits/#api-repositories-workspace-repo-slug-diffstat-spec-get) with the revspec that corresponds to the pull request.
     *
     * @tags Pullrequests
     * @name PullrequestsDiffstatList
     * @summary Get the diff stat for a pull request
     * @request GET:/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diffstat
     * @secure
     */
    pullrequestsDiffstatList: (
      pullRequestId: number,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/repositories/${workspace}/${repoSlug}/pullrequests/${pullRequestId}/diffstat`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Merges the pull request.
     *
     * @tags Pullrequests
     * @name PullrequestsMergeCreate
     * @summary Merge a pull request
     * @request POST:/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/merge
     * @secure
     */
    pullrequestsMergeCreate: (
      pullRequestId: number,
      repoSlug: string,
      workspace: string,
      data: PullrequestMergeParameters,
      query?: {
        /**
         * Default value is false.
         *
         *
         * When set to true, runs merge asynchronously and
         * immediately returns a 202 with polling link to
         * the task-status API in the Location header.
         *
         *
         * When set to false, runs merge and waits for it to
         * complete, returning 200 when it succeeds. If the
         * duration of the merge exceeds a timeout threshold,
         * the API returns a 202 with polling link to the
         * task-status API in the Location header.
         */
        async?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<Pullrequest, void | Error>({
        path: `/repositories/${workspace}/${repoSlug}/pullrequests/${pullRequestId}/merge`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description When merging a pull request takes too long, the client receives a task ID along with a 202 status code. The task ID can be used in a call to this endpoint to check the status of a merge task. ``` curl -X GET https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id> ``` If the merge task is not yet finished, a PENDING status will be returned. ``` HTTP/2 200 { "task_status": "PENDING", "links": { "self": { "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>" } } } ``` If the merge was successful, a SUCCESS status will be returned. ``` HTTP/2 200 { "task_status": "SUCCESS", "links": { "self": { "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>" } }, "merge_result": <the merged pull request object> } ``` If the merge task failed, an error will be returned. ``` { "type": "error", "error": { "message": "<error message>" } } ```
     *
     * @tags Pullrequests
     * @name PullrequestsMergeTaskStatusDetail
     * @summary Get the merge task status for a pull request
     * @request GET:/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/merge/task-status/{task_id}
     * @secure
     */
    pullrequestsMergeTaskStatusDetail: (
      pullRequestId: number,
      repoSlug: string,
      taskId: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/repositories/${workspace}/${repoSlug}/pullrequests/${pullRequestId}/merge/task-status/${taskId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Redirects to the [repository patch](/cloud/bitbucket/rest/api-group-commits/#api-repositories-workspace-repo-slug-patch-spec-get) with the revspec that corresponds to pull request.
     *
     * @tags Pullrequests
     * @name PullrequestsPatchList
     * @summary Get the patch for a pull request
     * @request GET:/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/patch
     * @secure
     */
    pullrequestsPatchList: (
      pullRequestId: number,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/repositories/${workspace}/${repoSlug}/pullrequests/${pullRequestId}/patch`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pullrequests
     * @name PullrequestsRequestChangesDelete
     * @summary Remove change request for a pull request
     * @request DELETE:/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/request-changes
     * @secure
     */
    pullrequestsRequestChangesDelete: (
      pullRequestId: number,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pullrequests/${pullRequestId}/request-changes`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pullrequests
     * @name PullrequestsRequestChangesCreate
     * @summary Request changes for a pull request
     * @request POST:/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/request-changes
     * @secure
     */
    pullrequestsRequestChangesCreate: (
      pullRequestId: number,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<Participant, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pullrequests/${pullRequestId}/request-changes`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all statuses (e.g. build results) for the given pull request.
     *
     * @tags Pullrequests, Commit statuses
     * @name PullrequestsStatusesList
     * @summary List commit statuses for a pull request
     * @request GET:/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/statuses
     * @secure
     */
    pullrequestsStatusesList: (
      pullRequestId: number,
      repoSlug: string,
      workspace: string,
      query?: {
        /**
         * Query string to narrow down the response as per
         * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
         */
        q?: string;
        /**
         * Field by which the results should be sorted as per
         * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
         * Defaults to `created_on`.
         */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedCommitstatuses, void | Error>({
        path: `/repositories/${workspace}/${repoSlug}/pullrequests/${pullRequestId}/statuses`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a paginated list of the pull request's tasks. This endpoint supports filtering and sorting of the results by the 'task' field. See [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) for more details.
     *
     * @tags Pullrequests
     * @name PullrequestsTasksList
     * @summary List tasks on a pull request
     * @request GET:/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks
     * @secure
     */
    pullrequestsTasksList: (
      pullRequestId: number,
      repoSlug: string,
      workspace: string,
      query?: {
        /**
         *
         * Query string to narrow down the response. See
         * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) for details.
         */
        q?: string;
        /**
         *
         * Field by which the results should be sorted as per
         * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
         * Defaults to `created_on`.
         */
        sort?: string;
        /**
         *
         * Current number of objects on the existing page.
         * The default value is 10 with 100 being the maximum allowed value.
         * Individual APIs may enforce different values.
         */
        pagelen?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedTasks, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pullrequests/${pullRequestId}/tasks`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new pull request task. Returns the newly created pull request task. Tasks can optionally be created in relation to a comment specified by the comment's ID which will cause the task to appear below the comment on a pull request when viewed in Bitbucket.
     *
     * @tags Pullrequests
     * @name PullrequestsTasksCreate
     * @summary Create a task on a pull request
     * @request POST:/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks
     * @secure
     */
    pullrequestsTasksCreate: (
      pullRequestId: number,
      repoSlug: string,
      workspace: string,
      data: PullrequestTaskCreate,
      params: RequestParams = {},
    ) =>
      this.request<PullrequestCommentTask, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pullrequests/${pullRequestId}/tasks`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a specific pull request task.
     *
     * @tags Pullrequests
     * @name PullrequestsTasksDelete
     * @summary Delete a task on a pull request
     * @request DELETE:/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks/{task_id}
     * @secure
     */
    pullrequestsTasksDelete: (
      pullRequestId: number,
      repoSlug: string,
      taskId: number,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pullrequests/${pullRequestId}/tasks/${taskId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns a specific pull request task.
     *
     * @tags Pullrequests
     * @name PullrequestsTasksDetail
     * @summary Get a task on a pull request
     * @request GET:/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks/{task_id}
     * @secure
     */
    pullrequestsTasksDetail: (
      pullRequestId: number,
      repoSlug: string,
      taskId: number,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<PullrequestCommentTask, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pullrequests/${pullRequestId}/tasks/${taskId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a specific pull request task.
     *
     * @tags Pullrequests
     * @name PullrequestsTasksUpdate
     * @summary Update a task on a pull request
     * @request PUT:/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/tasks/{task_id}
     * @secure
     */
    pullrequestsTasksUpdate: (
      pullRequestId: number,
      repoSlug: string,
      taskId: number,
      workspace: string,
      data: PullrequestTaskUpdate,
      params: RequestParams = {},
    ) =>
      this.request<PullrequestCommentTask, Error>({
        path: `/repositories/${workspace}/${repoSlug}/pullrequests/${pullRequestId}/tasks/${taskId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Update an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.
     *
     * @tags properties
     * @name UpdatePullRequestHostedPropertyValue
     * @summary Update a pull request application property
     * @request PUT:/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}
     * @secure
     */
    updatePullRequestHostedPropertyValue: (
      workspace: string,
      repoSlug: string,
      pullrequestId: string,
      appKey: string,
      propertyName: string,
      data: ApplicationProperty,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/repositories/${workspace}/${repoSlug}/pullrequests/${pullrequestId}/properties/${appKey}/${propertyName}`,
        method: "PUT",
        body: data,
        secure: true,
        ...params,
      }),

    /**
     * @description Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.
     *
     * @tags properties
     * @name DeletePullRequestHostedPropertyValue
     * @summary Delete a pull request application property
     * @request DELETE:/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}
     * @secure
     */
    deletePullRequestHostedPropertyValue: (
      workspace: string,
      repoSlug: string,
      pullrequestId: string,
      appKey: string,
      propertyName: string,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/repositories/${workspace}/${repoSlug}/pullrequests/${pullrequestId}/properties/${appKey}/${propertyName}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.
     *
     * @tags properties
     * @name GetPullRequestHostedPropertyValue
     * @summary Get a pull request application property
     * @request GET:/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}
     * @secure
     */
    getPullRequestHostedPropertyValue: (
      workspace: string,
      repoSlug: string,
      pullrequestId: string,
      appKey: string,
      propertyName: string,
      params: RequestParams = {},
    ) =>
      this.request<ApplicationProperty, any>({
        path: `/repositories/${workspace}/${repoSlug}/pullrequests/${pullrequestId}/properties/${appKey}/${propertyName}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the branches and tags in the repository. By default, results will be in the order the underlying source control system returns them and identical to the ordering one sees when running "$ git show-ref". Note that this follows simple lexical ordering of the ref names. This can be undesirable as it does apply any natural sorting semantics, meaning for instance that refs are sorted ["branch1", "branch10", "branch2", "v10", "v11", "v9"] instead of ["branch1", "branch2", "branch10", "v9", "v10", "v11"]. Sorting can be changed using the ?sort= query parameter. When using ?sort=name to explicitly sort on ref name, Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.
     *
     * @tags Refs
     * @name RefsList
     * @summary List branches and tags
     * @request GET:/repositories/{workspace}/{repo_slug}/refs
     * @secure
     */
    refsList: (
      repoSlug: string,
      workspace: string,
      query?: {
        /**
         *
         * Query string to narrow down the response as per
         * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
         */
        q?: string;
        /**
         *
         * Field by which the results should be sorted as per
         * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering). The `name`
         * field is handled specially for refs in that, if specified as the sort field, it
         * uses a natural sort order instead of the default lexicographical sort order. For example,
         * it will return ['1.1', '1.2', '1.10'] instead of ['1.1', '1.10', '1.2'].
         */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedRefs, Error>({
        path: `/repositories/${workspace}/${repoSlug}/refs`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a list of all open branches within the specified repository. Results will be in the order the source control manager returns them. Branches support [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) that can be used to search for specific branches. For instance, to find all branches that have "stab" in their name: ``` curl -s https://api.bitbucket.org/2.0/repositories/atlassian/aui/refs/branches -G --data-urlencode 'q=name ~ "stab"' ``` By default, results will be in the order the underlying source control system returns them and identical to the ordering one sees when running "$ git branch --list". Note that this follows simple lexical ordering of the ref names. This can be undesirable as it does apply any natural sorting semantics, meaning for instance that tags are sorted ["v10", "v11", "v9"] instead of ["v9", "v10", "v11"]. Sorting can be changed using the ?q= query parameter. When using ?q=name to explicitly sort on ref name, Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.
     *
     * @tags Refs
     * @name RefsBranchesList
     * @summary List open branches
     * @request GET:/repositories/{workspace}/{repo_slug}/refs/branches
     * @secure
     */
    refsBranchesList: (
      repoSlug: string,
      workspace: string,
      query?: {
        /**
         *
         * Query string to narrow down the response as per
         * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
         */
        q?: string;
        /**
         *
         * Field by which the results should be sorted as per
         * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering). The `name`
         * field is handled specially for branches in that, if specified as the sort field, it
         * uses a natural sort order instead of the default lexicographical sort order. For example,
         * it will return ['branch1', 'branch2', 'branch10'] instead of ['branch1', 'branch10', 'branch2'].
         */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedBranches, Error>({
        path: `/repositories/${workspace}/${repoSlug}/refs/branches`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new branch in the specified repository. The payload of the POST should consist of a JSON document that contains the name of the tag and the target hash. ``` curl https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/branches \ -s -u seanfarley -X POST -H "Content-Type: application/json" \ -d '{ "name" : "smf/create-feature", "target" : { "hash" : "default", } }' ``` This call requires authentication. Private repositories require the caller to authenticate with an account that has appropriate authorization. The branch name should not include any prefixes (e.g. refs/heads). This endpoint does support using short hash prefixes for the commit hash, but it may return a 400 response if the provided prefix is ambiguous. Using a full commit hash is the preferred approach.
     *
     * @tags Refs
     * @name RefsBranchesCreate
     * @summary Create a branch
     * @request POST:/repositories/{workspace}/{repo_slug}/refs/branches
     * @secure
     */
    refsBranchesCreate: (
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<Branch, Error>({
        path: `/repositories/${workspace}/${repoSlug}/refs/branches`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a branch in the specified repository. The main branch is not allowed to be deleted and will return a 400 response. The branch name should not include any prefixes (e.g. refs/heads).
     *
     * @tags Refs
     * @name RefsBranchesDelete
     * @summary Delete a branch
     * @request DELETE:/repositories/{workspace}/{repo_slug}/refs/branches/{name}
     * @secure
     */
    refsBranchesDelete: (
      name: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/refs/branches/${name}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns a branch object within the specified repository. This call requires authentication. Private repositories require the caller to authenticate with an account that has appropriate authorization. For Git, the branch name should not include any prefixes (e.g. refs/heads).
     *
     * @tags Refs
     * @name RefsBranchesDetail
     * @summary Get a branch
     * @request GET:/repositories/{workspace}/{repo_slug}/refs/branches/{name}
     * @secure
     */
    refsBranchesDetail: (
      name: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<Branch, Error>({
        path: `/repositories/${workspace}/${repoSlug}/refs/branches/${name}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the tags in the repository. By default, results will be in the order the underlying source control system returns them and identical to the ordering one sees when running "$ git tag --list". Note that this follows simple lexical ordering of the ref names. This can be undesirable as it does apply any natural sorting semantics, meaning for instance that tags are sorted ["v10", "v11", "v9"] instead of ["v9", "v10", "v11"]. Sorting can be changed using the ?sort= query parameter. When using ?sort=name to explicitly sort on ref name, Bitbucket will apply natural sorting and interpret numerical values as numbers instead of strings.
     *
     * @tags Refs
     * @name RefsTagsList
     * @summary List tags
     * @request GET:/repositories/{workspace}/{repo_slug}/refs/tags
     * @secure
     */
    refsTagsList: (
      repoSlug: string,
      workspace: string,
      query?: {
        /**
         *
         * Query string to narrow down the response as per
         * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
         */
        q?: string;
        /**
         *
         * Field by which the results should be sorted as per
         * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering). The `name`
         * field is handled specially for tags in that, if specified as the sort field, it
         * uses a natural sort order instead of the default lexicographical sort order. For example,
         * it will return ['1.1', '1.2', '1.10'] instead of ['1.1', '1.10', '1.2'].
         */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedTags, Error>({
        path: `/repositories/${workspace}/${repoSlug}/refs/tags`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new annotated tag in the specified repository. The payload of the POST should consist of a JSON document that contains the name of the tag and the target hash. ``` curl https://api.bitbucket.org/2.0/repositories/jdoe/myrepo/refs/tags \ -s -u jdoe -X POST -H "Content-Type: application/json" \ -d '{ "name" : "new-tag-name", "target" : { "hash" : "a1b2c3d4e5f6", } }' ``` This endpoint does support using short hash prefixes for the commit hash, but it may return a 400 response if the provided prefix is ambiguous. Using a full commit hash is the preferred approach. A message for the tag object may optionally be provided. If it is omitted or the provided message is empty, a default message of "Added tag <tagname> for changeset <shorthash>" will be used.
     *
     * @tags Refs
     * @name RefsTagsCreate
     * @summary Create a tag
     * @request POST:/repositories/{workspace}/{repo_slug}/refs/tags
     * @secure
     */
    refsTagsCreate: (
      repoSlug: string,
      workspace: string,
      data: Tag,
      params: RequestParams = {},
    ) =>
      this.request<Tag, Error>({
        path: `/repositories/${workspace}/${repoSlug}/refs/tags`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a tag in the specified repository. The tag name should not include any prefixes (e.g. refs/tags).
     *
     * @tags Refs
     * @name RefsTagsDelete
     * @summary Delete a tag
     * @request DELETE:/repositories/{workspace}/{repo_slug}/refs/tags/{name}
     * @secure
     */
    refsTagsDelete: (
      name: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/refs/tags/${name}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns the specified tag. ``` $ curl -s https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/tags/3.8 -G | jq . { "name": "3.8", "links": { "commits": { "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commits/3.8" }, "self": { "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/refs/tags/3.8" }, "html": { "href": "https://bitbucket.org/seanfarley/hg/commits/tag/3.8" } }, "tagger": { "raw": "Matt Mackall <mpm@selenic.com>", "type": "author", "user": { "username": "mpmselenic", "nickname": "mpmselenic", "display_name": "Matt Mackall", "type": "user", "uuid": "{a4934530-db4c-419c-a478-9ab4964c2ee7}", "links": { "self": { "href": "https://api.bitbucket.org/2.0/users/mpmselenic" }, "html": { "href": "https://bitbucket.org/mpmselenic/" }, "avatar": { "href": "https://bitbucket.org/account/mpmselenic/avatar/32/" } } } }, "date": "2016-05-01T18:52:25+00:00", "message": "Added tag 3.8 for changeset f85de28eae32", "type": "tag", "target": { "hash": "f85de28eae32e7d3064b1a1321309071bbaaa069", "repository": { "links": { "self": { "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg" }, "html": { "href": "https://bitbucket.org/seanfarley/hg" }, "avatar": { "href": "https://bitbucket.org/seanfarley/hg/avatar/32/" } }, "type": "repository", "name": "hg", "full_name": "seanfarley/hg", "uuid": "{c75687fb-e99d-4579-9087-190dbd406d30}" }, "links": { "self": { "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069" }, "comments": { "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/comments" }, "patch": { "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/patch/f85de28eae32e7d3064b1a1321309071bbaaa069" }, "html": { "href": "https://bitbucket.org/seanfarley/hg/commits/f85de28eae32e7d3064b1a1321309071bbaaa069" }, "diff": { "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/diff/f85de28eae32e7d3064b1a1321309071bbaaa069" }, "approve": { "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/approve" }, "statuses": { "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/f85de28eae32e7d3064b1a1321309071bbaaa069/statuses" } }, "author": { "raw": "Sean Farley <sean@farley.io>", "type": "author", "user": { "username": "seanfarley", "nickname": "seanfarley", "display_name": "Sean Farley", "type": "user", "uuid": "{a295f8a8-5876-4d43-89b5-3ad8c6c3c51d}", "links": { "self": { "href": "https://api.bitbucket.org/2.0/users/seanfarley" }, "html": { "href": "https://bitbucket.org/seanfarley/" }, "avatar": { "href": "https://bitbucket.org/account/seanfarley/avatar/32/" } } } }, "parents": [ { "hash": "9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2", "type": "commit", "links": { "self": { "href": "https://api.bitbucket.org/2.0/repositories/seanfarley/hg/commit/9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2" }, "html": { "href": "https://bitbucket.org/seanfarley/hg/commits/9a98d0e5b07fc60887f9d3d34d9ac7d536f470d2" } } } ], "date": "2016-05-01T04:21:17+00:00", "message": "debian: alphabetize build deps", "type": "commit" } } ```
     *
     * @tags Refs
     * @name RefsTagsDetail
     * @summary Get a tag
     * @request GET:/repositories/{workspace}/{repo_slug}/refs/tags/{name}
     * @secure
     */
    refsTagsDetail: (
      name: string,
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<Tag, Error>({
        path: `/repositories/${workspace}/${repoSlug}/refs/tags/${name}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint redirects the client to the directory listing of the root directory on the main branch. This is equivalent to directly hitting [/2.0/repositories/{username}/{repo_slug}/src/{commit}/{path}](src/%7Bcommit%7D/%7Bpath%7D) without having to know the name or SHA1 of the repo's main branch. To create new commits, [POST to this endpoint](#post)
     *
     * @tags Source, Repositories
     * @name GetRepositories
     * @summary Get the root directory of the main branch
     * @request GET:/repositories/{workspace}/{repo_slug}/src
     * @secure
     */
    getRepositories: (
      repoSlug: string,
      workspace: string,
      query?: {
        /** Instead of returning the file's contents, return the (json) meta data for it. */
        format?: "meta";
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedTreeentries, Error>({
        path: `/repositories/${workspace}/${repoSlug}/src`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint is used to create new commits in the repository by uploading files. To add a new file to a repository: ``` $ curl https://api.bitbucket.org/2.0/repositories/username/slug/src \ -F /repo/path/to/image.png=@image.png ``` This will create a new commit on top of the main branch, inheriting the contents of the main branch, but adding (or overwriting) the `image.png` file to the repository in the `/repo/path/to` directory. To create a commit that deletes files, use the `files` parameter: ``` $ curl https://api.bitbucket.org/2.0/repositories/username/slug/src \ -F files=/file/to/delete/1.txt \ -F files=/file/to/delete/2.txt ``` You can add/modify/delete multiple files in a request. Rename/move a file by deleting the old path and adding the content at the new path. This endpoint accepts `multipart/form-data` (as in the examples above), as well as `application/x-www-form-urlencoded`. Note: `multipart/form-data` is currently not supported by Forge apps for this API. #### multipart/form-data A `multipart/form-data` post contains a series of "form fields" that identify both the individual files that are being uploaded, as well as additional, optional meta data. Files are uploaded in file form fields (those that have a `Content-Disposition` parameter) whose field names point to the remote path in the repository where the file should be stored. Path field names are always interpreted to be absolute from the root of the repository, regardless whether the client uses a leading slash (as the above `curl` example did). File contents are treated as bytes and are not decoded as text. The commit message, as well as other non-file meta data for the request, is sent along as normal form field elements. Meta data fields share the same namespace as the file objects. For `multipart/form-data` bodies that should not lead to any ambiguity, as the `Content-Disposition` header will contain the `filename` parameter to distinguish between a file named "message" and the commit message field. #### application/x-www-form-urlencoded It is also possible to upload new files using a simple `application/x-www-form-urlencoded` POST. This can be convenient when uploading pure text files: ``` $ curl https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src \ --data-urlencode "/path/to/me.txt=Lorem ipsum." \ --data-urlencode "message=Initial commit" \ --data-urlencode "author=Erik van Zijst <erik.van.zijst@gmail.com>" ``` There could be a field name clash if a client were to upload a file named "message", as this filename clashes with the meta data property for the commit message. To avoid this and to upload files whose names clash with the meta data properties, use a leading slash for the files, e.g. `curl --data-urlencode "/message=file contents"`. When an explicit slash is omitted for a file whose path matches that of a meta data parameter, then it is interpreted as meta data, not as a file. #### Executables and links While this API aims to facilitate the most common use cases, it is possible to perform some more advanced operations like creating a new symlink in the repository, or creating an executable file. Files can be supplied with a `x-attributes` value in the `Content-Disposition` header. For example, to upload an executable file, as well as create a symlink from `README.txt` to `README`: ``` --===============1438169132528273974== Content-Type: text/plain; charset="us-ascii" MIME-Version: 1.0 Content-Transfer-Encoding: 7bit Content-ID: "bin/shutdown.sh" Content-Disposition: attachment; filename="shutdown.sh"; x-attributes:"executable" #!/bin/sh halt --===============1438169132528273974== Content-Type: text/plain; charset="us-ascii" MIME-Version: 1.0 Content-Transfer-Encoding: 7bit Content-ID: "/README.txt" Content-Disposition: attachment; filename="README.txt"; x-attributes:"link" README --===============1438169132528273974==-- ``` Links are files that contain the target path and have `x-attributes:"link"` set. When overwriting links with files, or vice versa, the newly uploaded file determines both the new contents, as well as the attributes. That means uploading a file without specifying `x-attributes="link"` will create a regular file, even if the parent commit hosted a symlink at the same path. The same applies to executables. When modifying an existing executable file, the form-data file element must include `x-attributes="executable"` in order to preserve the executable status of the file. Note that this API does not support the creation or manipulation of subrepos / submodules.
     *
     * @tags Source, Repositories
     * @name PostRepositories
     * @summary Create a commit by uploading a file
     * @request POST:/repositories/{workspace}/{repo_slug}/src
     * @secure
     */
    postRepositories: (
      repoSlug: string,
      workspace: string,
      query?: {
        /** The commit message. When omitted, Bitbucket uses a canned string. */
        message?: string;
        /**
         *
         * The raw string to be used as the new commit's author.
         * This string follows the format
         * `Erik van Zijst <evzijst@atlassian.com>`.
         *
         * When omitted, Bitbucket uses the authenticated user's
         * full/display name and primary email address. Commits cannot
         * be created anonymously.
         */
        author?: string;
        /**
         *
         * #### Deprecation Notice:
         * Support for specifying multiple parent
         * commits is deprecated and will be removed in a future release.
         * Only a single SHA1 is accepted.
         *
         * A SHA1 of the commit that should be the parent of the newly created
         * commit. When omitted, the new commit will inherit from and
         * become a child of the main branch's tip/HEAD commit.
         */
        parents?: string;
        /**
         *
         * Optional field that declares the files that the request is
         * manipulating. When adding a new file to a repo, or when
         * overwriting an existing file, the client can just upload
         * the full contents of the file in a normal form field and
         * the use of this `files` meta data field is redundant.
         * However, when the `files` field contains a file path that
         * does not have a corresponding, identically-named form
         * field, then Bitbucket interprets that as the client wanting
         * to replace the named file with the null set and the file is
         * deleted instead.
         *
         * Paths in the repo that are referenced in neither files nor
         * an individual file field, remain unchanged and carry over
         * from the parent to the new commit.
         *
         * This API does not support renaming as an explicit feature.
         * To rename a file, simply delete it and recreate it under
         * the new name in the same commit.
         */
        files?: string;
        /**
         *
         * The name of the branch that the new commit should be
         * created on. When omitted, the commit will be created on top
         * of the main branch and will become the main branch's new
         * head.
         *
         * When a branch name is provided that already exists in the
         * repo, then the commit will be created on top of that
         * branch. In this case, *if* a parent SHA1 was also provided,
         * then it is asserted that the parent is the branch's
         * tip/HEAD at the time the request is made. When this is not
         * the case, a 409 is returned.
         *
         * When a new branch name is specified (that does not already
         * exist in the repo), and no parent SHA1s are provided, then
         * the new commit will inherit from the current main branch's
         * tip/HEAD commit, but not advance the main branch. The new
         * commit will be the new branch. When the request *also*
         * specifies a parent SHA1, then the new commit and branch
         * are created directly on top of the parent commit,
         * regardless of the state of the main branch.
         *
         * When a branch name is not specified, but a parent SHA1 is
         * provided, then Bitbucket asserts that it represents the
         * main branch's current HEAD/tip, or a 409 is returned.
         *
         * When a branch name is not specified and the repo is empty,
         * the new commit will become the repo's root commit and will
         * be on the main branch.
         *
         * When a branch name is specified and the repo is empty, the
         * new commit will become the repo's root commit and also
         * define the repo's main branch going forward.
         *
         * This API cannot be used to create additional root commits
         * in non-empty repos.
         *
         * The branch field cannot be repeated.
         *
         * As a side effect, this API can be used to create a new
         * branch without modifying any files, by specifying a new
         * branch name in this field, together with `parents`, but
         * omitting the `files` fields, while not sending any files.
         * This will create a new commit and branch with the same
         * contents as the first parent. The diff of this commit
         * against its first parent will be empty.
         */
        branch?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/repositories/${workspace}/${repoSlug}/src`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description This endpoints is used to retrieve the contents of a single file, or the contents of a directory at a specified revision. #### Raw file contents When `path` points to a file, this endpoint returns the raw contents. The response's Content-Type is derived from the filename extension (not from the contents). The file contents are not processed and no character encoding/recoding is performed and as a result no character encoding is included as part of the Content-Type. The `Content-Disposition` header will be "attachment" to prevent browsers from running executable files. If the file is managed by LFS, then a 301 redirect pointing to Atlassian's media services platform is returned. The response includes an ETag that is based on the contents of the file and its attributes. This means that an empty `__init__.py` always returns the same ETag, regardless on the directory it lives in, or the commit it is on. #### File meta data When the request for a file path includes the query parameter `?format=meta`, instead of returning the file's raw contents, Bitbucket instead returns the JSON object describing the file's properties: ```javascript $ curl https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef/tests/__init__.py?format=meta { "links": { "self": { "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/__init__.py" }, "meta": { "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/__init__.py?format=meta" } }, "path": "tests/__init__.py", "commit": { "type": "commit", "hash": "eefd5ef5d3df01aed629f650959d6706d54cd335", "links": { "self": { "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/commit/eefd5ef5d3df01aed629f650959d6706d54cd335" }, "html": { "href": "https://bitbucket.org/atlassian/bbql/commits/eefd5ef5d3df01aed629f650959d6706d54cd335" } } }, "attributes": [], "type": "commit_file", "size": 0 } ``` File objects contain an `attributes` element that contains a list of possible modifiers. Currently defined values are: * `link` -- indicates that the entry is a symbolic link. The contents of the file represent the path the link points to. * `executable` -- indicates that the file has the executable bit set. * `subrepository` -- indicates that the entry points to a submodule or subrepo. The contents of the file is the SHA1 of the repository pointed to. * `binary` -- indicates whether Bitbucket thinks the file is binary. This endpoint can provide an alternative to how a HEAD request can be used to check for the existence of a file, or a file's size without incurring the overhead of receiving its full contents. #### Directory listings When `path` points to a directory instead of a file, the response is a paginated list of directory and file objects in the same order as the underlying SCM system would return them. For example: ```javascript $ curl https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef/tests { "pagelen": 10, "values": [ { "path": "tests/test_project", "type": "commit_directory", "links": { "self": { "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/test_project/" }, "meta": { "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/test_project/?format=meta" } }, "commit": { "type": "commit", "hash": "eefd5ef5d3df01aed629f650959d6706d54cd335", "links": { "self": { "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/commit/eefd5ef5d3df01aed629f650959d6706d54cd335" }, "html": { "href": "https://bitbucket.org/atlassian/bbql/commits/eefd5ef5d3df01aed629f650959d6706d54cd335" } } } }, { "links": { "self": { "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/__init__.py" }, "meta": { "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/__init__.py?format=meta" } }, "path": "tests/__init__.py", "commit": { "type": "commit", "hash": "eefd5ef5d3df01aed629f650959d6706d54cd335", "links": { "self": { "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/commit/eefd5ef5d3df01aed629f650959d6706d54cd335" }, "html": { "href": "https://bitbucket.org/atlassian/bbql/commits/eefd5ef5d3df01aed629f650959d6706d54cd335" } } }, "attributes": [], "type": "commit_file", "size": 0 } ], "page": 1, "size": 2 } ``` When listing the contents of the repo's root directory, the use of a trailing slash at the end of the URL is required. The response by default is not recursive, meaning that only the direct contents of a path are returned. The response does not recurse down into subdirectories. In order to "walk" the entire directory tree, the client can either parse each response and follow the `self` links of each `commit_directory` object, or can specify a `max_depth` to recurse to. The max_depth parameter will do a breadth-first search to return the contents of the subdirectories up to the depth specified. Breadth-first search was chosen as it leads to the least amount of file system operations for git. If the `max_depth` parameter is specified to be too large, the call will time out and return a 555. Each returned object is either a `commit_file`, or a `commit_directory`, both of which contain a `path` element. This path is the absolute path from the root of the repository. Each object also contains a `commit` object which embeds the commit the file is on. Note that this is merely the commit that was used in the URL. It is *not* the commit that last modified the file. Directory objects have 2 representations. Their `self` link returns the paginated contents of the directory. The `meta` link on the other hand returns the actual `directory` object itself, e.g.: ```javascript { "path": "tests/test_project", "type": "commit_directory", "links": { "self": { "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/test_project/" }, "meta": { "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bbql/src/eefd5ef5d3df01aed629f650959d6706d54cd335/tests/test_project/?format=meta" } }, "commit": { ... } } ``` #### Querying, filtering and sorting Like most API endpoints, this API supports the Bitbucket querying/filtering syntax and so you could filter a directory listing to only include entries that match certain criteria. For instance, to list all binary files over 1kb use the expression: `size > 1024 and attributes = "binary"` which after urlencoding yields the query string: `?q=size%3E1024+and+attributes%3D%22binary%22` To change the ordering of the response, use the `?sort` parameter: `.../src/eefd5ef/?sort=-size` See [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) for more details.
     *
     * @tags Source, Repositories
     * @name GetRepositories2
     * @summary Get file or directory contents
     * @request GET:/repositories/{workspace}/{repo_slug}/src/{commit}/{path}
     * @originalName getRepositories
     * @duplicate
     * @secure
     */
    getRepositories2: (
      commit: string,
      path: string,
      repoSlug: string,
      workspace: string,
      query?: {
        /** If 'meta' is provided, returns the (json) meta data for the contents of the file.  If 'rendered' is provided, returns the contents of a non-binary file in HTML-formatted rendered markup. The 'rendered' option only supports these filetypes: `.md`, `.markdown`, `.mkd`, `.mkdn`, `.mdown`, `.text`, `.rst`, and `.textile`. Since Git does not generally track what text encoding scheme is used, this endpoint attempts to detect the most appropriate character encoding. While usually correct, determining the character encoding can be ambiguous which in exceptional cases can lead to misinterpretation of the characters. As such, the raw element in the response object should not be treated as equivalent to the file's actual contents. */
        format?: "meta" | "rendered";
        /** Optional filter expression as per [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering). */
        q?: string;
        /** Optional sorting parameter as per [filtering and sorting](/cloud/bitbucket/rest/intro/#sorting-query-results). */
        sort?: string;
        /** If provided, returns the contents of the repository and its subdirectories recursively until the specified max_depth of nested directories. When omitted, this defaults to 1. */
        max_depth?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedTreeentries, Error>({
        path: `/repositories/${workspace}/${repoSlug}/src/${commit}/${path}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the versions that have been defined in the issue tracker. This resource is only available on repositories that have the issue tracker enabled.
     *
     * @tags Issue tracker
     * @name VersionsList
     * @summary List defined versions for issues
     * @request GET:/repositories/{workspace}/{repo_slug}/versions
     * @deprecated
     * @secure
     */
    versionsList: (
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedVersions, Error>({
        path: `/repositories/${workspace}/${repoSlug}/versions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the specified issue tracker version object.
     *
     * @tags Issue tracker
     * @name VersionsDetail
     * @summary Get a defined version for issues
     * @request GET:/repositories/{workspace}/{repo_slug}/versions/{version_id}
     * @deprecated
     * @secure
     */
    versionsDetail: (
      repoSlug: string,
      versionId: number,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<Version, Error>({
        path: `/repositories/${workspace}/${repoSlug}/versions/${versionId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a paginated list of all the watchers on the specified repository.
     *
     * @tags Repositories
     * @name WatchersList
     * @summary List repositories watchers
     * @request GET:/repositories/{workspace}/{repo_slug}/watchers
     * @secure
     */
    watchersList: (
      repoSlug: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedAccounts, any>({
        path: `/repositories/${workspace}/${repoSlug}/watchers`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  snippets = {
    /**
     * @description **This endpoint is deprecated. Please use the [workspace scoped alternative](/cloud/bitbucket/rest/api-group-snippets/#api-snippets-workspace-get).** Returns all snippets. Like pull requests, repositories and workspaces, the full set of snippets is defined by what the current user has access to. This includes all snippets owned by any of the workspaces the user is a member of, or snippets by other users that the current user is either watching or has collaborated on (for instance by commenting on it). To limit the set of returned snippets, apply the `?role=[owner|contributor|member]` query parameter where the roles are defined as follows: * `owner`: all snippets owned by the current user * `contributor`: all snippets owned by, or watched by the current user * `member`: created in a workspaces or watched by the current user When no role is specified, all public snippets are returned, as well as all privately owned snippets watched or commented on. The returned response is a normal paginated JSON list. This endpoint only supports `application/json` responses and no `multipart/form-data` or `multipart/related`. As a result, it is not possible to include the file contents.
     *
     * @tags Snippets
     * @name SnippetsList
     * @summary List snippets
     * @request GET:/snippets
     * @deprecated
     * @secure
     */
    snippetsList: (
      query?: {
        /** Filter down the result based on the authenticated user's role (`owner`, `contributor`, or `member`). */
        role?: "owner" | "contributor" | "member";
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedSnippets, Error>({
        path: `/snippets`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new snippet under the authenticated user's account. Snippets can contain multiple files. Both text and binary files are supported. The simplest way to create a new snippet from a local file: $ curl -u username:password -X POST https://api.bitbucket.org/2.0/snippets               -F file=@image.png Creating snippets through curl has a few limitations and so let's look at a more complicated scenario. Snippets are created with a multipart POST. Both `multipart/form-data` and `multipart/related` are supported. Both allow the creation of snippets with both meta data (title, etc), as well as multiple text and binary files. The main difference is that `multipart/related` can use rich encoding for the meta data (currently JSON). multipart/related (RFC-2387) ---------------------------- This is the most advanced and efficient way to create a paste. POST /2.0/snippets/evzijst HTTP/1.1 Content-Length: 1188 Content-Type: multipart/related; start="snippet"; boundary="===============1438169132528273974==" MIME-Version: 1.0 --===============1438169132528273974== Content-Type: application/json; charset="utf-8" MIME-Version: 1.0 Content-ID: snippet { "title": "My snippet", "is_private": true, "scm": "git", "files": { "foo.txt": {}, "image.png": {} } } --===============1438169132528273974== Content-Type: text/plain; charset="us-ascii" MIME-Version: 1.0 Content-Transfer-Encoding: 7bit Content-ID: "foo.txt" Content-Disposition: attachment; filename="foo.txt" foo --===============1438169132528273974== Content-Type: image/png MIME-Version: 1.0 Content-Transfer-Encoding: base64 Content-ID: "image.png" Content-Disposition: attachment; filename="image.png" iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAABD0lEQVR4Ae3VMUoDQRTG8ccUaW2m TKONFxArJYJamCvkCnZTaa+VnQdJSBFl2SMsLFrEWNjZBZs0JgiL/+KrhhVmJRbCLPx4O+/DT2TB cbblJxf+UWFVVRNsEGAtgvJxnLm2H+A5RQ93uIl+3632PZyl/skjfOn9Gvdwmlcw5aPUwimG+NT5 EnNN036IaZePUuIcK533NVfal7/5yjWeot2z9ta1cAczHEf7I+3J0ws9Cgx0fsOFpmlfwKcWPuBQ 73Oc4FHzBaZ8llq4q1mr5B2mOUCt815qYR8eB1hG2VJ7j35q4RofaH7IG+Xrf/PfJhfmwtfFYoIN AqxFUD6OMxcvkO+UfKfkOyXfKdsv/AYCHMLVkHAFWgAAAABJRU5ErkJggg== --===============1438169132528273974==-- The request contains multiple parts and is structured as follows. The first part is the JSON document that describes the snippet's properties or meta data. It either has to be the first part, or the request's `Content-Type` header must contain the `start` parameter to point to it. The remaining parts are the files of which there can be zero or more. Each file part should contain the `Content-ID` MIME header through which the JSON meta data's `files` element addresses it. The value should be the name of the file. `Content-Disposition` is an optional MIME header. The header's optional `filename` parameter can be used to specify the file name that Bitbucket should use when writing the file to disk. When present, `filename` takes precedence over the value of `Content-ID`. When the JSON body omits the `files` element, the remaining parts are not ignored. Instead, each file is added to the new snippet as if its name was explicitly linked (the use of the `files` elements is mandatory for some operations like deleting or renaming files). multipart/form-data ------------------- The use of JSON for the snippet's meta data is optional. Meta data can also be supplied as regular form fields in a more conventional `multipart/form-data` request: $ curl -X POST -u credentials https://api.bitbucket.org/2.0/snippets               -F title="My snippet"               -F file=@foo.txt -F file=@image.png POST /2.0/snippets HTTP/1.1 Content-Length: 951 Content-Type: multipart/form-data; boundary=----------------------------63a4b224c59f ------------------------------63a4b224c59f Content-Disposition: form-data; name="file"; filename="foo.txt" Content-Type: text/plain foo ------------------------------63a4b224c59f Content-Disposition: form-data; name="file"; filename="image.png" Content-Type: application/octet-stream ?PNG IHDR?1??I..... ------------------------------63a4b224c59f Content-Disposition: form-data; name="title" My snippet ------------------------------63a4b224c59f-- Here the meta data properties are included as flat, top-level form fields. The file attachments use the `file` field name. To attach multiple files, simply repeat the field. The advantage of `multipart/form-data` over `multipart/related` is that it can be easier to build clients. Essentially all properties are optional, `title` and `files` included. Sharing and Visibility ---------------------- Snippets can be either public (visible to anyone on Bitbucket, as well as anonymous users), or private (visible only to members of the workspace). This is controlled through the snippet's `is_private` element: * **is_private=false** -- everyone, including anonymous users can view the snippet * **is_private=true** -- only workspace members can view the snippet To create the snippet under a workspace, just append the workspace ID to the URL. See [`/2.0/snippets/{workspace}`](/cloud/bitbucket/rest/api-group-snippets/#api-snippets-workspace-post).
     *
     * @tags Snippets
     * @name SnippetsCreate
     * @summary Create a snippet
     * @request POST:/snippets
     * @secure
     */
    snippetsCreate: (data: Snippet, params: RequestParams = {}) =>
      this.request<Snippet, Error>({
        path: `/snippets`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Identical to [`/snippets`](/cloud/bitbucket/rest/api-group-snippets/#api-snippets-get), except that the result is further filtered by the snippet owner and only those that are owned by `{workspace}` are returned.
     *
     * @tags Snippets
     * @name SnippetsDetail
     * @summary List snippets in a workspace
     * @request GET:/snippets/{workspace}
     * @secure
     */
    snippetsDetail: (
      workspace: string,
      query?: {
        /** Filter down the result based on the authenticated user's role (`owner`, `contributor`, or `member`). */
        role?: "owner" | "contributor" | "member";
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedSnippets, Error>({
        path: `/snippets/${workspace}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Identical to [`/snippets`](/cloud/bitbucket/rest/api-group-snippets/#api-snippets-post), except that the new snippet will be created under the workspace specified in the path parameter `{workspace}`.
     *
     * @tags Snippets
     * @name SnippetsCreate2
     * @summary Create a snippet for a workspace
     * @request POST:/snippets/{workspace}
     * @originalName snippetsCreate
     * @duplicate
     * @secure
     */
    snippetsCreate2: (
      workspace: string,
      data: Snippet,
      params: RequestParams = {},
    ) =>
      this.request<Snippet, Error>({
        path: `/snippets/${workspace}`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a snippet and returns an empty response.
     *
     * @tags Snippets
     * @name SnippetsDelete
     * @summary Delete a snippet
     * @request DELETE:/snippets/{workspace}/{encoded_id}
     * @secure
     */
    snippetsDelete: (
      encodedId: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/snippets/${workspace}/${encodedId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Retrieves a single snippet. Snippets support multiple content types: * application/json * multipart/related * multipart/form-data application/json ---------------- The default content type of the response is `application/json`. Since JSON is always `utf-8`, it cannot reliably contain file contents for files that are not text. Therefore, JSON snippet documents only contain the filename and links to the file contents. This means that in order to retrieve all parts of a snippet, N+1 requests need to be made (where N is the number of files in the snippet). multipart/related ----------------- To retrieve an entire snippet in a single response, use the `Accept: multipart/related` HTTP request header. $ curl -H "Accept: multipart/related" https://api.bitbucket.org/2.0/snippets/evzijst/1 Response: HTTP/1.1 200 OK Content-Length: 2214 Content-Type: multipart/related; start="snippet"; boundary="===============1438169132528273974==" MIME-Version: 1.0 --===============1438169132528273974== Content-Type: application/json; charset="utf-8" MIME-Version: 1.0 Content-ID: snippet { "links": { "self": { "href": "https://api.bitbucket.org/2.0/snippets/evzijst/kypj" }, "html": { "href": "https://bitbucket.org/snippets/evzijst/kypj" }, "comments": { "href": "https://api.bitbucket.org/2.0/snippets/evzijst/kypj/comments" }, "watchers": { "href": "https://api.bitbucket.org/2.0/snippets/evzijst/kypj/watchers" }, "commits": { "href": "https://api.bitbucket.org/2.0/snippets/evzijst/kypj/commits" } }, "id": kypj, "title": "My snippet", "created_on": "2014-12-29T22:22:04.790331+00:00", "updated_on": "2014-12-29T22:22:04.790331+00:00", "is_private": false, "files": { "foo.txt": { "links": { "self": { "href": "https://api.bitbucket.org/2.0/snippets/evzijst/kypj/files/367ab19/foo.txt" }, "html": { "href": "https://bitbucket.org/snippets/evzijst/kypj#file-foo.txt" } } }, "image.png": { "links": { "self": { "href": "https://api.bitbucket.org/2.0/snippets/evzijst/kypj/files/367ab19/image.png" }, "html": { "href": "https://bitbucket.org/snippets/evzijst/kypj#file-image.png" } } } ], "owner": { "username": "evzijst", "nickname": "evzijst", "display_name": "Erik van Zijst", "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}", "links": { "self": { "href": "https://api.bitbucket.org/2.0/users/evzijst" }, "html": { "href": "https://bitbucket.org/evzijst" }, "avatar": { "href": "https://bitbucket-staging-assetroot.s3.amazonaws.com/c/photos/2013/Jul/31/erik-avatar-725122544-0_avatar.png" } } }, "creator": { "username": "evzijst", "nickname": "evzijst", "display_name": "Erik van Zijst", "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}", "links": { "self": { "href": "https://api.bitbucket.org/2.0/users/evzijst" }, "html": { "href": "https://bitbucket.org/evzijst" }, "avatar": { "href": "https://bitbucket-staging-assetroot.s3.amazonaws.com/c/photos/2013/Jul/31/erik-avatar-725122544-0_avatar.png" } } } } --===============1438169132528273974== Content-Type: text/plain; charset="us-ascii" MIME-Version: 1.0 Content-Transfer-Encoding: 7bit Content-ID: "foo.txt" Content-Disposition: attachment; filename="foo.txt" foo --===============1438169132528273974== Content-Type: image/png MIME-Version: 1.0 Content-Transfer-Encoding: base64 Content-ID: "image.png" Content-Disposition: attachment; filename="image.png" iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAABD0lEQVR4Ae3VMUoDQRTG8ccUaW2m TKONFxArJYJamCvkCnZTaa+VnQdJSBFl2SMsLFrEWNjZBZs0JgiL/+KrhhVmJRbCLPx4O+/DT2TB cbblJxf+UWFVVRNsEGAtgvJxnLm2H+A5RQ93uIl+3632PZyl/skjfOn9Gvdwmlcw5aPUwimG+NT5 EnNN036IaZePUuIcK533NVfal7/5yjWeot2z9ta1cAczHEf7I+3J0ws9Cgx0fsOFpmlfwKcWPuBQ 73Oc4FHzBaZ8llq4q1mr5B2mOUCt815qYR8eB1hG2VJ7j35q4RofaH7IG+Xrf/PfJhfmwtfFYoIN AqxFUD6OMxcvkO+UfKfkOyXfKdsv/AYCHMLVkHAFWgAAAABJRU5ErkJggg== --===============1438169132528273974==-- multipart/form-data ------------------- As with creating new snippets, `multipart/form-data` can be used as an alternative to `multipart/related`. However, the inherently flat structure of form-data means that only basic, root-level properties can be returned, while nested elements like `links` are omitted: $ curl -H "Accept: multipart/form-data" https://api.bitbucket.org/2.0/snippets/evzijst/kypj Response: HTTP/1.1 200 OK Content-Length: 951 Content-Type: multipart/form-data; boundary=----------------------------63a4b224c59f ------------------------------63a4b224c59f Content-Disposition: form-data; name="title" Content-Type: text/plain; charset="utf-8" My snippet ------------------------------63a4b224c59f-- Content-Disposition: attachment; name="file"; filename="foo.txt" Content-Type: text/plain foo ------------------------------63a4b224c59f Content-Disposition: attachment; name="file"; filename="image.png" Content-Transfer-Encoding: base64 Content-Type: application/octet-stream iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAABD0lEQVR4Ae3VMUoDQRTG8ccUaW2m TKONFxArJYJamCvkCnZTaa+VnQdJSBFl2SMsLFrEWNjZBZs0JgiL/+KrhhVmJRbCLPx4O+/DT2TB cbblJxf+UWFVVRNsEGAtgvJxnLm2H+A5RQ93uIl+3632PZyl/skjfOn9Gvdwmlcw5aPUwimG+NT5 EnNN036IaZePUuIcK533NVfal7/5yjWeot2z9ta1cAczHEf7I+3J0ws9Cgx0fsOFpmlfwKcWPuBQ 73Oc4FHzBaZ8llq4q1mr5B2mOUCt815qYR8eB1hG2VJ7j35q4RofaH7IG+Xrf/PfJhfmwtfFYoIN AqxFUD6OMxcvkO+UfKfkOyXfKdsv/AYCHMLVkHAFWgAAAABJRU5ErkJggg== ------------------------------5957323a6b76--
     *
     * @tags Snippets
     * @name SnippetsDetail2
     * @summary Get a snippet
     * @request GET:/snippets/{workspace}/{encoded_id}
     * @originalName snippetsDetail
     * @duplicate
     * @secure
     */
    snippetsDetail2: (
      encodedId: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<Snippet, Error>({
        path: `/snippets/${workspace}/${encodedId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to update a snippet. Use this to add and delete files and to change a snippet's title. To update a snippet, one can either PUT a full snapshot, or only the parts that need to be changed. The contract for PUT on this API is that properties missing from the request remain untouched so that snippets can be efficiently manipulated with differential payloads. To delete a property (e.g. the title, or a file), include its name in the request, but omit its value (use `null`). As in Git, explicit renaming of files is not supported. Instead, to rename a file, delete it and add it again under another name. This can be done atomically in a single request. Rename detection is left to the SCM. PUT supports three different content types for both request and response bodies: * `application/json` * `multipart/related` * `multipart/form-data` The content type used for the request body can be different than that used for the response. Content types are specified using standard HTTP headers. Use the `Content-Type` and `Accept` headers to select the desired request and response format. application/json ---------------- As with creation and retrieval, the content type determines what properties can be manipulated. `application/json` does not support file contents and is therefore limited to a snippet's meta data. To update the title, without changing any of its files: $ curl -X POST -H "Content-Type: application/json" https://api.bitbucket.org/2.0/snippets/evzijst/kypj             -d '{"title": "Updated title"}' To delete the title: $ curl -X POST -H "Content-Type: application/json" https://api.bitbucket.org/2.0/snippets/evzijst/kypj             -d '{"title": null}' Not all parts of a snippet can be manipulated. The owner and creator for instance are immutable. multipart/related ----------------- `multipart/related` can be used to manipulate all of a snippet's properties. The body is identical to a POST. properties omitted from the request are left unchanged. Since the `start` part contains JSON, the mechanism for manipulating the snippet's meta data is identical to `application/json` requests. To update one of a snippet's file contents, while also changing its title: PUT /2.0/snippets/evzijst/kypj HTTP/1.1 Content-Length: 288 Content-Type: multipart/related; start="snippet"; boundary="===============1438169132528273974==" MIME-Version: 1.0 --===============1438169132528273974== Content-Type: application/json; charset="utf-8" MIME-Version: 1.0 Content-ID: snippet { "title": "My updated snippet", "files": { "foo.txt": {} } } --===============1438169132528273974== Content-Type: text/plain; charset="us-ascii" MIME-Version: 1.0 Content-Transfer-Encoding: 7bit Content-ID: "foo.txt" Content-Disposition: attachment; filename="foo.txt" Updated file contents. --===============1438169132528273974==-- Here only the parts that are changed are included in the body. The other files remain untouched. Note the use of the `files` list in the JSON part. This list contains the files that are being manipulated. This list should have corresponding multiparts in the request that contain the new contents of these files. If a filename in the `files` list does not have a corresponding part, it will be deleted from the snippet, as shown below: PUT /2.0/snippets/evzijst/kypj HTTP/1.1 Content-Length: 188 Content-Type: multipart/related; start="snippet"; boundary="===============1438169132528273974==" MIME-Version: 1.0 --===============1438169132528273974== Content-Type: application/json; charset="utf-8" MIME-Version: 1.0 Content-ID: snippet { "files": { "image.png": {} } } --===============1438169132528273974==-- To simulate a rename, delete a file and add the same file under another name: PUT /2.0/snippets/evzijst/kypj HTTP/1.1 Content-Length: 212 Content-Type: multipart/related; start="snippet"; boundary="===============1438169132528273974==" MIME-Version: 1.0 --===============1438169132528273974== Content-Type: application/json; charset="utf-8" MIME-Version: 1.0 Content-ID: snippet { "files": { "foo.txt": {}, "bar.txt": {} } } --===============1438169132528273974== Content-Type: text/plain; charset="us-ascii" MIME-Version: 1.0 Content-Transfer-Encoding: 7bit Content-ID: "bar.txt" Content-Disposition: attachment; filename="bar.txt" foo --===============1438169132528273974==-- multipart/form-data ----------------- Again, one can also use `multipart/form-data` to manipulate file contents and meta data atomically. $ curl -X PUT http://localhost:12345/2.0/snippets/evzijst/kypj             -F title="My updated snippet" -F file=@foo.txt PUT /2.0/snippets/evzijst/kypj HTTP/1.1 Content-Length: 351 Content-Type: multipart/form-data; boundary=----------------------------63a4b224c59f ------------------------------63a4b224c59f Content-Disposition: form-data; name="file"; filename="foo.txt" Content-Type: text/plain foo ------------------------------63a4b224c59f Content-Disposition: form-data; name="title" My updated snippet ------------------------------63a4b224c59f To delete a file, omit its contents while including its name in the `files` field: $ curl -X PUT https://api.bitbucket.org/2.0/snippets/evzijst/kypj -F files=image.png PUT /2.0/snippets/evzijst/kypj HTTP/1.1 Content-Length: 149 Content-Type: multipart/form-data; boundary=----------------------------ef8871065a86 ------------------------------ef8871065a86 Content-Disposition: form-data; name="files" image.png ------------------------------ef8871065a86-- The explicit use of the `files` element in `multipart/related` and `multipart/form-data` is only required when deleting files. The default mode of operation is for file parts to be processed, regardless of whether or not they are listed in `files`, as a convenience to the client.
     *
     * @tags Snippets
     * @name SnippetsUpdate
     * @summary Update a snippet
     * @request PUT:/snippets/{workspace}/{encoded_id}
     * @secure
     */
    snippetsUpdate: (
      encodedId: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<Snippet, Error>({
        path: `/snippets/${workspace}/${encodedId}`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Used to retrieve a paginated list of all comments for a specific snippet. This resource works identical to commit and pull request comments. The default sorting is oldest to newest and can be overridden with the `sort` query parameter.
     *
     * @tags Snippets
     * @name CommentsList
     * @summary List comments on a snippet
     * @request GET:/snippets/{workspace}/{encoded_id}/comments
     * @secure
     */
    commentsList: (
      encodedId: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedSnippetComments, Error>({
        path: `/snippets/${workspace}/${encodedId}/comments`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new comment. The only required field in the body is `content.raw`. To create a threaded reply to an existing comment, include `parent.id`.
     *
     * @tags Snippets
     * @name CommentsCreate
     * @summary Create a comment on a snippet
     * @request POST:/snippets/{workspace}/{encoded_id}/comments
     * @secure
     */
    commentsCreate: (
      encodedId: string,
      workspace: string,
      data: SnippetComment,
      params: RequestParams = {},
    ) =>
      this.request<SnippetComment, Error>({
        path: `/snippets/${workspace}/${encodedId}/comments`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a snippet comment. Comments can only be removed by the comment author, snippet creator, or workspace admin.
     *
     * @tags Snippets
     * @name CommentsDelete
     * @summary Delete a comment on a snippet
     * @request DELETE:/snippets/{workspace}/{encoded_id}/comments/{comment_id}
     * @secure
     */
    commentsDelete: (
      commentId: number,
      encodedId: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/snippets/${workspace}/${encodedId}/comments/${commentId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns the specific snippet comment.
     *
     * @tags Snippets
     * @name CommentsDetail
     * @summary Get a comment on a snippet
     * @request GET:/snippets/{workspace}/{encoded_id}/comments/{comment_id}
     * @secure
     */
    commentsDetail: (
      commentId: number,
      encodedId: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<SnippetComment, Error>({
        path: `/snippets/${workspace}/${encodedId}/comments/${commentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a comment. The only required field in the body is `content.raw`. Comments can only be updated by their author.
     *
     * @tags Snippets
     * @name CommentsUpdate
     * @summary Update a comment on a snippet
     * @request PUT:/snippets/{workspace}/{encoded_id}/comments/{comment_id}
     * @secure
     */
    commentsUpdate: (
      commentId: number,
      encodedId: string,
      workspace: string,
      data: SnippetComment,
      params: RequestParams = {},
    ) =>
      this.request<SnippetComment, Error>({
        path: `/snippets/${workspace}/${encodedId}/comments/${commentId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the changes (commits) made on this snippet.
     *
     * @tags Snippets
     * @name CommitsList
     * @summary List snippet changes
     * @request GET:/snippets/{workspace}/{encoded_id}/commits
     * @secure
     */
    commitsList: (
      encodedId: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedSnippetCommit, Error>({
        path: `/snippets/${workspace}/${encodedId}/commits`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the changes made on this snippet in this commit.
     *
     * @tags Snippets
     * @name CommitsDetail
     * @summary Get a previous snippet change
     * @request GET:/snippets/{workspace}/{encoded_id}/commits/{revision}
     * @secure
     */
    commitsDetail: (
      encodedId: string,
      revision: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<SnippetCommit, Error>({
        path: `/snippets/${workspace}/${encodedId}/commits/${revision}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Convenience resource for getting to a snippet's raw files without the need for first having to retrieve the snippet itself and having to pull out the versioned file links.
     *
     * @tags Snippets
     * @name FilesDetail
     * @summary Get a snippet's raw file at HEAD
     * @request GET:/snippets/{workspace}/{encoded_id}/files/{path}
     * @secure
     */
    filesDetail: (
      encodedId: string,
      path: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<any, void | Error>({
        path: `/snippets/${workspace}/${encodedId}/files/${path}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Used to stop watching a specific snippet. Returns 204 (No Content) to indicate success.
     *
     * @tags Snippets
     * @name WatchDelete
     * @summary Stop watching a snippet
     * @request DELETE:/snippets/{workspace}/{encoded_id}/watch
     * @secure
     */
    watchDelete: (
      encodedId: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/snippets/${workspace}/${encodedId}/watch`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Used to check if the current user is watching a specific snippet. Returns 204 (No Content) if the user is watching the snippet and 404 if not. Hitting this endpoint anonymously always returns a 404.
     *
     * @tags Snippets
     * @name WatchList
     * @summary Check if the current user is watching a snippet
     * @request GET:/snippets/{workspace}/{encoded_id}/watch
     * @secure
     */
    watchList: (
      encodedId: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/snippets/${workspace}/${encodedId}/watch`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Used to start watching a specific snippet. Returns 204 (No Content).
     *
     * @tags Snippets
     * @name WatchUpdate
     * @summary Watch a snippet
     * @request PUT:/snippets/{workspace}/{encoded_id}/watch
     * @secure
     */
    watchUpdate: (
      encodedId: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/snippets/${workspace}/${encodedId}/watch`,
        method: "PUT",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns a paginated list of all users watching a specific snippet.
     *
     * @tags Snippets
     * @name WatchersList
     * @summary List users watching a snippet
     * @request GET:/snippets/{workspace}/{encoded_id}/watchers
     * @deprecated
     * @secure
     */
    watchersList: (
      encodedId: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedAccounts, Error>({
        path: `/snippets/${workspace}/${encodedId}/watchers`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes the snippet. Note that this only works for versioned URLs that point to the latest commit of the snippet. Pointing to an older commit results in a 405 status code. To delete a snippet, regardless of whether or not concurrent changes are being made to it, use `DELETE /snippets/{encoded_id}` instead.
     *
     * @tags Snippets
     * @name SnippetsDelete2
     * @summary Delete a previous revision of a snippet
     * @request DELETE:/snippets/{workspace}/{encoded_id}/{node_id}
     * @originalName snippetsDelete
     * @duplicate
     * @secure
     */
    snippetsDelete2: (
      encodedId: string,
      nodeId: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/snippets/${workspace}/${encodedId}/${nodeId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Identical to `GET /snippets/encoded_id`, except that this endpoint can be used to retrieve the contents of the snippet as it was at an older revision, while `/snippets/encoded_id` always returns the snippet's current revision. Note that only the snippet's file contents are versioned, not its meta data properties like the title. Other than that, the two endpoints are identical in behavior.
     *
     * @tags Snippets
     * @name SnippetsDetail3
     * @summary Get a previous revision of a snippet
     * @request GET:/snippets/{workspace}/{encoded_id}/{node_id}
     * @originalName snippetsDetail
     * @duplicate
     * @secure
     */
    snippetsDetail3: (
      encodedId: string,
      nodeId: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<Snippet, Error>({
        path: `/snippets/${workspace}/${encodedId}/${nodeId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Identical to `UPDATE /snippets/encoded_id`, except that this endpoint takes an explicit commit revision. Only the snippet's "HEAD"/"tip" (most recent) version can be updated and requests on all other, older revisions fail by returning a 405 status. Usage of this endpoint over the unrestricted `/snippets/encoded_id` could be desired if the caller wants to be sure no concurrent modifications have taken place between the moment of the UPDATE request and the original GET. This can be considered a so-called "Compare And Swap", or CAS operation. Other than that, the two endpoints are identical in behavior.
     *
     * @tags Snippets
     * @name SnippetsUpdate2
     * @summary Update a previous revision of a snippet
     * @request PUT:/snippets/{workspace}/{encoded_id}/{node_id}
     * @originalName snippetsUpdate
     * @duplicate
     * @secure
     */
    snippetsUpdate2: (
      encodedId: string,
      nodeId: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<Snippet, Error>({
        path: `/snippets/${workspace}/${encodedId}/${nodeId}`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieves the raw contents of a specific file in the snippet. The `Content-Disposition` header will be "attachment" to avoid issues with malevolent executable files. The file's mime type is derived from its filename and returned in the `Content-Type` header. Note that for text files, no character encoding is included as part of the content type.
     *
     * @tags Snippets
     * @name FilesDetail2
     * @summary Get a snippet's raw file
     * @request GET:/snippets/{workspace}/{encoded_id}/{node_id}/files/{path}
     * @originalName filesDetail
     * @duplicate
     * @secure
     */
    filesDetail2: (
      encodedId: string,
      nodeId: string,
      path: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/snippets/${workspace}/${encodedId}/${nodeId}/files/${path}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns the diff of the specified commit against its first parent. Note that this resource is different in functionality from the `patch` resource. The differences between a diff and a patch are: * patches have a commit header with the username, message, etc * diffs support the optional `path=foo/bar.py` query param to filter the diff to just that one file diff (not supported for patches) * for a merge, the diff will show the diff between the merge commit and its first parent (identical to how PRs work), while patch returns a response containing separate patches for each commit on the second parent's ancestry, up to the oldest common ancestor (identical to its reachability). Note that the character encoding of the contents of the diff is unspecified as Git does not track this, making it hard for Bitbucket to reliably determine this.
     *
     * @tags Snippets
     * @name DiffList
     * @summary Get snippet changes between versions
     * @request GET:/snippets/{workspace}/{encoded_id}/{revision}/diff
     * @secure
     */
    diffList: (
      encodedId: string,
      revision: string,
      workspace: string,
      query?: {
        /** When used, only one the diff of the specified file will be returned. */
        path?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/snippets/${workspace}/${encodedId}/${revision}/diff`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Returns the patch of the specified commit against its first parent. Note that this resource is different in functionality from the `diff` resource. The differences between a diff and a patch are: * patches have a commit header with the username, message, etc * diffs support the optional `path=foo/bar.py` query param to filter the diff to just that one file diff (not supported for patches) * for a merge, the diff will show the diff between the merge commit and its first parent (identical to how PRs work), while patch returns a response containing separate patches for each commit on the second parent's ancestry, up to the oldest common ancestor (identical to its reachability). Note that the character encoding of the contents of the patch is unspecified as Git does not track this, making it hard for Bitbucket to reliably determine this.
     *
     * @tags Snippets
     * @name PatchList
     * @summary Get snippet patch between versions
     * @request GET:/snippets/{workspace}/{encoded_id}/{revision}/patch
     * @secure
     */
    patchList: (
      encodedId: string,
      revision: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/snippets/${workspace}/${encodedId}/${revision}/patch`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  teams = {
    /**
     * @description Find account level variables. This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
     *
     * @tags Pipelines
     * @name GetPipelineVariablesForTeam
     * @summary List variables for an account
     * @request GET:/teams/{username}/pipelines_config/variables
     * @deprecated
     * @secure
     */
    getPipelineVariablesForTeam: (
      username: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedPipelineVariables, any>({
        path: `/teams/${username}/pipelines_config/variables`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create an account level variable. This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
     *
     * @tags Pipelines
     * @name CreatePipelineVariableForTeam
     * @summary Create a variable for a user
     * @request POST:/teams/{username}/pipelines_config/variables
     * @deprecated
     * @secure
     */
    createPipelineVariableForTeam: (
      username: string,
      data: PipelineVariable,
      params: RequestParams = {},
    ) =>
      this.request<PipelineVariable, Error>({
        path: `/teams/${username}/pipelines_config/variables`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve a team level variable. This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
     *
     * @tags Pipelines
     * @name GetPipelineVariableForTeam
     * @summary Get a variable for a team
     * @request GET:/teams/{username}/pipelines_config/variables/{variable_uuid}
     * @deprecated
     * @secure
     */
    getPipelineVariableForTeam: (
      username: string,
      variableUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<PipelineVariable, Error>({
        path: `/teams/${username}/pipelines_config/variables/${variableUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update a team level variable. This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
     *
     * @tags Pipelines
     * @name UpdatePipelineVariableForTeam
     * @summary Update a variable for a team
     * @request PUT:/teams/{username}/pipelines_config/variables/{variable_uuid}
     * @deprecated
     * @secure
     */
    updatePipelineVariableForTeam: (
      username: string,
      variableUuid: string,
      data: PipelineVariable,
      params: RequestParams = {},
    ) =>
      this.request<PipelineVariable, Error>({
        path: `/teams/${username}/pipelines_config/variables/${variableUuid}`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a team level variable. This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
     *
     * @tags Pipelines
     * @name DeletePipelineVariableForTeam
     * @summary Delete a variable for a team
     * @request DELETE:/teams/{username}/pipelines_config/variables/{variable_uuid}
     * @deprecated
     * @secure
     */
    deletePipelineVariableForTeam: (
      username: string,
      variableUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/teams/${username}/pipelines_config/variables/${variableUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description This API will be deprecated on November 1, 2026. Search for code in the repositories of the specified team. Note that searches can match in the file's text (`content_matches`), the path (`path_matches`), or both. You can use the same syntax for the search query as in the UI. E.g. to search for "foo" only within the repository "demo", use the query parameter `search_query=foo+repo:demo`. Similar to other APIs, you can request more fields using a `fields` query parameter. E.g. to get some more information about the repository of matched files, use the query parameter `search_query=foo&fields=%2Bvalues.file.commit.repository` (the `%2B` is a URL-encoded `+`). Try `fields=%2Bvalues.*.*.*.*` to get an idea what's possible.
     *
     * @tags Search
     * @name SearchTeam
     * @summary Search for code in a team's repositories
     * @request GET:/teams/{username}/search/code
     * @deprecated
     * @secure
     */
    searchTeam: (
      username: string,
      query: {
        /** The search query */
        search_query: string;
        /**
         * Which page of the search results to retrieve
         * @format int32
         * @default 1
         */
        page?: number;
        /**
         * How many search results to retrieve per page
         * @format int32
         * @default 10
         */
        pagelen?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResultPage, Error>({
        path: `/teams/${username}/search/code`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  user = {
    /**
     * @description Returns the currently logged in user.
     *
     * @tags Users
     * @name UserList
     * @summary Get current user
     * @request GET:/user
     * @secure
     */
    userList: (params: RequestParams = {}) =>
      this.request<Account, Error>({
        path: `/user`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all the authenticated user's email addresses. Both confirmed and unconfirmed.
     *
     * @tags Users
     * @name EmailsList
     * @summary List email addresses for current user
     * @request GET:/user/emails
     * @secure
     */
    emailsList: (params: RequestParams = {}) =>
      this.request<any, Error>({
        path: `/user/emails`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns details about a specific one of the authenticated user's email addresses. Details describe whether the address has been confirmed by the user and whether it is the user's primary address or not.
     *
     * @tags Users
     * @name EmailsDetail
     * @summary Get an email address for current user
     * @request GET:/user/emails/{email}
     * @secure
     */
    emailsDetail: (email: string, params: RequestParams = {}) =>
      this.request<any, Error>({
        path: `/user/emails/${email}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description **This endpoint is deprecated. Please use the [workspace scoped alternative](/cloud/bitbucket/rest/api-group-repositories/#api-user-workspaces-workspace-permissions-repositories-get).** Returns an object for each repository the caller has explicit access to and their effective permission — the highest level of permission the caller has. This does not return public repositories that the user was not granted any specific permission in, and does not distinguish between explicit and implicit privileges. Permissions can be: * `admin` * `write` * `read` Results may be further [filtered or sorted](/cloud/bitbucket/rest/intro/#filtering) by repository or permission by adding the following query string parameters: * `q=repository.name="geordi"` or `q=permission>"read"` * `sort=repository.name` Note that the query parameter values need to be URL escaped so that `=` would become `%3D`.
     *
     * @tags Repositories
     * @name PermissionsRepositoriesList
     * @summary List repository permissions for a user
     * @request GET:/user/permissions/repositories
     * @deprecated
     * @secure
     */
    permissionsRepositoriesList: (
      query?: {
        /**
         *
         * Query string to narrow down the response as per
         * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
         */
        q?: string;
        /**
         *
         * Name of a response property sort the result by as per
         * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
         */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedRepositoryPermissions, any>({
        path: `/user/permissions/repositories`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description **This endpoint is deprecated. Please use the supported alternatives:** * [List workspaces for user](/cloud/bitbucket/rest/api-group-workspaces/#api-user-workspaces-get) * [Get user permission on a workspace](/cloud/bitbucket/rest/api-group-workspaces/#api-user-workspaces-workspace-permission-get) Returns an object for each workspace the caller is a member of, and their effective role - the highest level of privilege the caller has. If a user is a member of multiple groups with distinct roles, only the highest level is returned. Permissions can be: * `owner` * `collaborator` * `member` **The `collaborator` role is being removed from the Bitbucket Cloud API. For more information, see the [deprecation announcement](/cloud/bitbucket/deprecation-notice-collaborator-role/).** **When you move your administration from Bitbucket Cloud to admin.atlassian.com, the following fields on `workspace_membership` will no longer be present: `last_accessed` and `added_on`. See the [deprecation announcement](/cloud/bitbucket/announcement-breaking-change-workspace-membership/).** Results may be further [filtered or sorted](/cloud/bitbucket/rest/intro/#filtering) by workspace or permission by adding the following query string parameters: * `q=workspace.slug="bbworkspace1"` or `q=permission="owner"` * `sort=workspace.slug` Note that the query parameter values need to be URL escaped so that `=` would become `%3D`.
     *
     * @tags Workspaces
     * @name PermissionsWorkspacesList
     * @summary List workspaces for the current user
     * @request GET:/user/permissions/workspaces
     * @deprecated
     * @secure
     */
    permissionsWorkspacesList: (
      query?: {
        /**
         *
         * Query string to narrow down the response. See
         * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) for details.
         */
        q?: string;
        /**
         *
         * Name of a response property to sort results. See
         * [filtering and sorting](/cloud/bitbucket/rest/intro/#sorting-query-results)
         * for details.
         */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedWorkspaceMemberships, Error>({
        path: `/user/permissions/workspaces`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns an object for each workspace accessible to the caller. This object also contains details on whether the caller has admin permissions on the workspace (`"administrator" = true`) or not (`"administrator" = false`). Queries support filtering based on administrator permissions, [sorting](/cloud/bitbucket/rest/intro/#sorting-query-results) or [filtering](/cloud/bitbucket/rest/intro/#filtering) by `slug`. Results can be [paginated](/cloud/bitbucket/rest/intro/#pagination).
     *
     * @tags Workspaces
     * @name WorkspacesList
     * @summary List workspaces for the current user
     * @request GET:/user/workspaces
     * @secure
     */
    workspacesList: (
      query?: {
        /** Name of a response property to sort results (only slug is supported). */
        sort?: string;
        /** Filter workspaces based on which ones the caller has admin permissions or not. */
        administrator?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedWorkspaceAccess, Error>({
        path: `/user/workspaces`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the caller's effective role; as in, the highest level of privilege the caller has for the workspace. If the calling user is a member of multiple groups with distinct roles, only the highest level is returned. Permissions can be: * `owner` * `create-project` * `collaborator` (deprecated; see this [deprecation announcement](/cloud/bitbucket/deprecation-notice-collaborator-role/) for more details) * `member`
     *
     * @tags Workspaces
     * @name WorkspacesPermissionList
     * @summary Get user permission on a workspace
     * @request GET:/user/workspaces/{workspace}/permission
     * @secure
     */
    workspacesPermissionList: (workspace: string, params: RequestParams = {}) =>
      this.request<WorkspaceMembership, Error>({
        path: `/user/workspaces/${workspace}/permission`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns an object for each repository the caller has explicit access to in the specified workspace and their effective permission — the highest level of permission the caller has. This does not return public repositories that the user was not granted any specific permission in, and does not distinguish between explicit and implicit privileges. Permissions can be: * `admin` * `write` * `read` Results may be further [filtered or sorted](/cloud/bitbucket/rest/intro/#filtering) by repository or permission by adding the following query string parameters: * `q=repository.name="bits"` or `q=permission>"read"` * `sort=repository.name` Note that the query parameter values need to be URL escaped so that `=` would become `%3D`.
     *
     * @tags Repositories
     * @name WorkspacesPermissionsRepositoriesList
     * @summary List repository permissions in a workspace for a user
     * @request GET:/user/workspaces/{workspace}/permissions/repositories
     * @secure
     */
    workspacesPermissionsRepositoriesList: (
      workspace: string,
      query?: {
        /**
         *
         * Query string to narrow down the response as per
         * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
         */
        q?: string;
        /**
         *
         * Name of a response property sort the result by as per
         * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
         */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedRepositoryPermissions, Error>({
        path: `/user/workspaces/${workspace}/permissions/repositories`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * @description Gets the public information associated with a user account. If the user's profile is private, `location`, `website` and `created_on` elements are omitted. Note that the user object returned by this operation is changing significantly, due to privacy changes. See the [announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#changes-to-bitbucket-user-objects) for details.
     *
     * @tags Users
     * @name UsersDetail
     * @summary Get a user
     * @request GET:/users/{selected_user}
     * @secure
     */
    usersDetail: (selectedUser: string, params: RequestParams = {}) =>
      this.request<Account, Error>({
        path: `/users/${selectedUser}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a paginated list of the user's GPG public keys. The `key` and `subkeys` fields can also be requested from the endpoint. See [Partial Responses](/cloud/bitbucket/rest/intro/#partial-response) for more details.
     *
     * @tags GPG
     * @name GpgKeysList
     * @summary List GPG keys
     * @request GET:/users/{selected_user}/gpg-keys
     * @secure
     */
    gpgKeysList: (selectedUser: string, params: RequestParams = {}) =>
      this.request<PaginatedGpgUserKeys, void | Error>({
        path: `/users/${selectedUser}/gpg-keys`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Adds a new GPG public key to the specified user account and returns the resulting key. Example: ``` $ curl -X POST -H "Content-Type: application/json" -d '{"key": "<insert GPG Key>"}' https://api.bitbucket.org/2.0/users/{d7dd0e2d-3994-4a50-a9ee-d260b6cefdab}/gpg-keys ```
     *
     * @tags GPG
     * @name GpgKeysCreate
     * @summary Add a new GPG key
     * @request POST:/users/{selected_user}/gpg-keys
     * @secure
     */
    gpgKeysCreate: (
      selectedUser: string,
      data: GPGAccountKey,
      params: RequestParams = {},
    ) =>
      this.request<GPGAccountKey, Error | void>({
        path: `/users/${selectedUser}/gpg-keys`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a specific GPG public key from a user's account.
     *
     * @tags GPG
     * @name GpgKeysDelete
     * @summary Delete a GPG key
     * @request DELETE:/users/{selected_user}/gpg-keys/{fingerprint}
     * @secure
     */
    gpgKeysDelete: (
      fingerprint: string,
      selectedUser: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error | void>({
        path: `/users/${selectedUser}/gpg-keys/${fingerprint}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns a specific GPG public key belonging to a user. The `key` and `subkeys` fields can also be requested from the endpoint. See [Partial Responses](/cloud/bitbucket/rest/intro/#partial-response) for more details.
     *
     * @tags GPG
     * @name GpgKeysDetail
     * @summary Get a GPG key
     * @request GET:/users/{selected_user}/gpg-keys/{fingerprint}
     * @secure
     */
    gpgKeysDetail: (
      fingerprint: string,
      selectedUser: string,
      params: RequestParams = {},
    ) =>
      this.request<GPGAccountKey, void | Error>({
        path: `/users/${selectedUser}/gpg-keys/${fingerprint}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Find user level variables. This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
     *
     * @tags Pipelines
     * @name GetPipelineVariablesForUser
     * @summary List variables for a user
     * @request GET:/users/{selected_user}/pipelines_config/variables
     * @deprecated
     * @secure
     */
    getPipelineVariablesForUser: (
      selectedUser: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedPipelineVariables, any>({
        path: `/users/${selectedUser}/pipelines_config/variables`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a user level variable. This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
     *
     * @tags Pipelines
     * @name CreatePipelineVariableForUser
     * @summary Create a variable for a user
     * @request POST:/users/{selected_user}/pipelines_config/variables
     * @deprecated
     * @secure
     */
    createPipelineVariableForUser: (
      selectedUser: string,
      data: PipelineVariable,
      params: RequestParams = {},
    ) =>
      this.request<PipelineVariable, Error>({
        path: `/users/${selectedUser}/pipelines_config/variables`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve a user level variable. This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
     *
     * @tags Pipelines
     * @name GetPipelineVariableForUser
     * @summary Get a variable for a user
     * @request GET:/users/{selected_user}/pipelines_config/variables/{variable_uuid}
     * @deprecated
     * @secure
     */
    getPipelineVariableForUser: (
      selectedUser: string,
      variableUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<PipelineVariable, Error>({
        path: `/users/${selectedUser}/pipelines_config/variables/${variableUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update a user level variable. This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
     *
     * @tags Pipelines
     * @name UpdatePipelineVariableForUser
     * @summary Update a variable for a user
     * @request PUT:/users/{selected_user}/pipelines_config/variables/{variable_uuid}
     * @deprecated
     * @secure
     */
    updatePipelineVariableForUser: (
      selectedUser: string,
      variableUuid: string,
      data: PipelineVariable,
      params: RequestParams = {},
    ) =>
      this.request<PipelineVariable, Error>({
        path: `/users/${selectedUser}/pipelines_config/variables/${variableUuid}`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete an account level variable. This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
     *
     * @tags Pipelines
     * @name DeletePipelineVariableForUser
     * @summary Delete a variable for a user
     * @request DELETE:/users/{selected_user}/pipelines_config/variables/{variable_uuid}
     * @deprecated
     * @secure
     */
    deletePipelineVariableForUser: (
      selectedUser: string,
      variableUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/users/${selectedUser}/pipelines_config/variables/${variableUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Update an [application property](/cloud/bitbucket/application-properties/) value stored against a user.
     *
     * @tags properties
     * @name UpdateUserHostedPropertyValue
     * @summary Update a user application property
     * @request PUT:/users/{selected_user}/properties/{app_key}/{property_name}
     * @secure
     */
    updateUserHostedPropertyValue: (
      selectedUser: string,
      appKey: string,
      propertyName: string,
      data: ApplicationProperty,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/users/${selectedUser}/properties/${appKey}/${propertyName}`,
        method: "PUT",
        body: data,
        secure: true,
        ...params,
      }),

    /**
     * @description Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a user.
     *
     * @tags properties
     * @name DeleteUserHostedPropertyValue
     * @summary Delete a user application property
     * @request DELETE:/users/{selected_user}/properties/{app_key}/{property_name}
     * @secure
     */
    deleteUserHostedPropertyValue: (
      selectedUser: string,
      appKey: string,
      propertyName: string,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/users/${selectedUser}/properties/${appKey}/${propertyName}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a user.
     *
     * @tags properties
     * @name RetrieveUserHostedPropertyValue
     * @summary Get a user application property
     * @request GET:/users/{selected_user}/properties/{app_key}/{property_name}
     * @secure
     */
    retrieveUserHostedPropertyValue: (
      selectedUser: string,
      appKey: string,
      propertyName: string,
      params: RequestParams = {},
    ) =>
      this.request<ApplicationProperty, any>({
        path: `/users/${selectedUser}/properties/${appKey}/${propertyName}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This API will be deprecated on November 1, 2026. Search for code in the repositories of the specified user. Note that searches can match in the file's text (`content_matches`), the path (`path_matches`), or both. You can use the same syntax for the search query as in the UI. E.g. to search for "foo" only within the repository "demo", use the query parameter `search_query=foo+repo:demo`. Similar to other APIs, you can request more fields using a `fields` query parameter. E.g. to get some more information about the repository of matched files, use the query parameter `search_query=foo&fields=%2Bvalues.file.commit.repository` (the `%2B` is a URL-encoded `+`).
     *
     * @tags Search
     * @name SearchAccount
     * @summary Search for code in a user's repositories
     * @request GET:/users/{selected_user}/search/code
     * @deprecated
     * @secure
     */
    searchAccount: (
      selectedUser: string,
      query: {
        /** The search query */
        search_query: string;
        /**
         * Which page of the search results to retrieve
         * @format int32
         * @default 1
         */
        page?: number;
        /**
         * How many search results to retrieve per page
         * @format int32
         * @default 10
         */
        pagelen?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResultPage, Error>({
        path: `/users/${selectedUser}/search/code`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a paginated list of the user's SSH public keys.
     *
     * @tags SSH
     * @name SshKeysList
     * @summary List SSH keys
     * @request GET:/users/{selected_user}/ssh-keys
     * @secure
     */
    sshKeysList: (selectedUser: string, params: RequestParams = {}) =>
      this.request<PaginatedSshUserKeys, void | Error>({
        path: `/users/${selectedUser}/ssh-keys`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Adds a new SSH public key to the specified user account and returns the resulting key. Example: ``` $ curl -X POST -H "Content-Type: application/json" -d '{"key": "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKqP3Cr632C2dNhhgKVcon4ldUSAeKiku2yP9O9/bDtY user@myhost"}' https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys ```
     *
     * @tags SSH
     * @name SshKeysCreate
     * @summary Add a new SSH key
     * @request POST:/users/{selected_user}/ssh-keys
     * @secure
     */
    sshKeysCreate: (
      selectedUser: string,
      data: SshAccountKey,
      query?: {
        /**
         * The date or date-time of when the key will expire,
         * in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format.
         * Example: `YYYY-MM-DDTHH:mm:ss.sssZ`
         */
        expires_on?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<SshAccountKey, Error | void>({
        path: `/users/${selectedUser}/ssh-keys`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes a specific SSH public key from a user's account.
     *
     * @tags SSH
     * @name SshKeysDelete
     * @summary Delete a SSH key
     * @request DELETE:/users/{selected_user}/ssh-keys/{key_id}
     * @secure
     */
    sshKeysDelete: (
      keyId: string,
      selectedUser: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error | void>({
        path: `/users/${selectedUser}/ssh-keys/${keyId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns a specific SSH public key belonging to a user.
     *
     * @tags SSH
     * @name SshKeysDetail
     * @summary Get a SSH key
     * @request GET:/users/{selected_user}/ssh-keys/{key_id}
     * @secure
     */
    sshKeysDetail: (
      keyId: string,
      selectedUser: string,
      params: RequestParams = {},
    ) =>
      this.request<SshAccountKey, void | Error>({
        path: `/users/${selectedUser}/ssh-keys/${keyId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a specific SSH public key on a user's account Note: Only the 'comment' field can be updated using this API. To modify the key or comment values, you must delete and add the key again. Example: ``` $ curl -X PUT -H "Content-Type: application/json" -d '{"label": "Work key"}' https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/ssh-keys/{b15b6026-9c02-4626-b4ad-b905f99f763a} ```
     *
     * @tags SSH
     * @name SshKeysUpdate
     * @summary Update a SSH key
     * @request PUT:/users/{selected_user}/ssh-keys/{key_id}
     * @secure
     */
    sshKeysUpdate: (
      keyId: string,
      selectedUser: string,
      data: SshAccountKey,
      params: RequestParams = {},
    ) =>
      this.request<SshAccountKey, Error | void>({
        path: `/users/${selectedUser}/ssh-keys/${keyId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  workspaces = {
    /**
     * @description **This endpoint is deprecated. Please use the [supported alternative](/cloud/bitbucket/rest/api-group-workspaces/#api-user-workspaces-get).** Returns a list of workspaces accessible by the authenticated user. Results may be further [filtered or sorted](/cloud/bitbucket/rest/intro/#filtering) by workspace or permission by adding the following query string parameters: * `q=slug="bbworkspace1"` or `q=is_private=true` * `sort=created_on` Note that the query parameter values need to be URL escaped so that `=` would become `%3D`. **The `collaborator` role is being removed from the Bitbucket Cloud API. For more information, see the [deprecation announcement](/cloud/bitbucket/deprecation-notice-collaborator-role/).**
     *
     * @tags Workspaces
     * @name WorkspacesList
     * @summary List workspaces for user
     * @request GET:/workspaces
     * @deprecated
     * @secure
     */
    workspacesList: (
      query?: {
        /**
         *
         *             Filters the workspaces based on the authenticated user's role on each workspace.
         *
         *             * **member**: returns a list of all the workspaces which the caller is a member of
         *                 at least one workspace group or repository
         *             * **collaborator**: returns a list of workspaces which the caller has write access
         *                 to at least one repository in the workspace
         *             * **owner**: returns a list of workspaces which the caller has administrator access
         *
         */
        role?: "owner" | "collaborator" | "member";
        /**
         *
         * Query string to narrow down the response. See
         * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) for details.
         */
        q?: string;
        /**
         *
         * Name of a response property to sort results. See
         * [filtering and sorting](/cloud/bitbucket/rest/intro/#sorting-query-results)
         * for details.
         */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedWorkspaces, Error>({
        path: `/workspaces`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the requested workspace.
     *
     * @tags Workspaces
     * @name WorkspacesDetail
     * @summary Get a workspace
     * @request GET:/workspaces/{workspace}
     * @secure
     */
    workspacesDetail: (workspace: string, params: RequestParams = {}) =>
      this.request<Workspace, Error>({
        path: `/workspaces/${workspace}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a paginated list of webhooks installed on this workspace.
     *
     * @tags Workspaces, Webhooks
     * @name HooksList
     * @summary List webhooks for a workspace
     * @request GET:/workspaces/{workspace}/hooks
     * @secure
     */
    hooksList: (workspace: string, params: RequestParams = {}) =>
      this.request<PaginatedWebhookSubscriptions, Error>({
        path: `/workspaces/${workspace}/hooks`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new webhook on the specified workspace. Workspace webhooks are fired for events from all repositories contained by that workspace. Example: ``` $ curl -X POST -u credentials -H 'Content-Type: application/json' https://api.bitbucket.org/2.0/workspaces/my-workspace/hooks -d ' { "description": "Webhook Description", "url": "https://example.com/", "active": true, "secret": "this is a really bad secret", "events": [ "repo:push", "issue:created", "issue:updated" ] }' ``` When the `secret` is provided it will be used as the key to generate a HMAC digest value sent in the `X-Hub-Signature` header at delivery time. Passing a `null` or empty `secret` or not passing a `secret` will leave the webhook's secret unset. Bitbucket only generates the `X-Hub-Signature` when the webhook's secret is set. This call requires the webhook scope, as well as any scope that applies to the events that the webhook subscribes to. In the example above that means: `webhook`, `repository` and `issue`. The `url` must properly resolve and cannot be an internal, non-routed address. Only workspace owners can install webhooks on workspaces.
     *
     * @tags Workspaces, Webhooks
     * @name HooksCreate
     * @summary Create a webhook for a workspace
     * @request POST:/workspaces/{workspace}/hooks
     * @secure
     */
    hooksCreate: (workspace: string, params: RequestParams = {}) =>
      this.request<WebhookSubscription, Error>({
        path: `/workspaces/${workspace}/hooks`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes the specified webhook subscription from the given workspace.
     *
     * @tags Workspaces, Webhooks
     * @name HooksDelete
     * @summary Delete a webhook for a workspace
     * @request DELETE:/workspaces/{workspace}/hooks/{uid}
     * @secure
     */
    hooksDelete: (uid: string, workspace: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/workspaces/${workspace}/hooks/${uid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns the webhook with the specified id installed on the given workspace.
     *
     * @tags Workspaces, Webhooks
     * @name HooksDetail
     * @summary Get a webhook for a workspace
     * @request GET:/workspaces/{workspace}/hooks/{uid}
     * @secure
     */
    hooksDetail: (uid: string, workspace: string, params: RequestParams = {}) =>
      this.request<WebhookSubscription, Error>({
        path: `/workspaces/${workspace}/hooks/${uid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates the specified webhook subscription. The following properties can be mutated: * `description` * `url` * `secret` * `active` * `events` The hook's secret is used as a key to generate the HMAC hex digest sent in the `X-Hub-Signature` header at delivery time. This signature is only generated when the hook has a secret. Set the hook's secret by passing the new value in the `secret` field. Passing a `null` value in the `secret` field will remove the secret from the hook. The hook's secret can be left unchanged by not passing the `secret` field in the request.
     *
     * @tags Workspaces, Webhooks
     * @name HooksUpdate
     * @summary Update a webhook for a workspace
     * @request PUT:/workspaces/{workspace}/hooks/{uid}
     * @secure
     */
    hooksUpdate: (uid: string, workspace: string, params: RequestParams = {}) =>
      this.request<WebhookSubscription, Error>({
        path: `/workspaces/${workspace}/hooks/${uid}`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all members of the requested workspace. This endpoint additionally supports [filtering](/cloud/bitbucket/rest/intro/#filtering) by email address, if called by a workspace administrator, integration or workspace access token. This is done by adding the following query string parameter: * `q=user.email IN ("user1@org.com","user2@org.com")` When filtering by email, you can query up to 90 addresses at a time. Note that the query parameter values need to be URL escaped, so the final query string should be: * `q=user.email%20IN%20(%22user1@org.com%22,%22user2@org.com%22)` Email addresses that you filter by (and only these email addresses) can be included in the response using the `fields` query parameter: * `&fields=+values.user.email` - add the `email` field to the default `user` response object * `&fields=values.user.email,values.user.account_id` - only return user email addresses and account IDs Once again, all query parameter values must be URL escaped.
     *
     * @tags Workspaces
     * @name MembersList
     * @summary List users in a workspace
     * @request GET:/workspaces/{workspace}/members
     * @secure
     */
    membersList: (workspace: string, params: RequestParams = {}) =>
      this.request<PaginatedWorkspaceMemberships, Error>({
        path: `/workspaces/${workspace}/members`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the workspace membership, which includes a `User` object for the member and a `Workspace` object for the requested workspace.
     *
     * @tags Workspaces
     * @name MembersDetail
     * @summary Get user membership for a workspace
     * @request GET:/workspaces/{workspace}/members/{member}
     * @secure
     */
    membersDetail: (
      member: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<WorkspaceMembership, Error>({
        path: `/workspaces/${workspace}/members/${member}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the list of members in a workspace and their permission levels. Permission can be: * `owner` * `collaborator` * `member` **The `collaborator` role is being removed from the Bitbucket Cloud API. For more information, see the [deprecation announcement](/cloud/bitbucket/deprecation-notice-collaborator-role/).** **When you move your administration from Bitbucket Cloud to admin.atlassian.com, the following fields on `workspace_membership` will no longer be present: `last_accessed` and `added_on`. See the [deprecation announcement](/cloud/bitbucket/announcement-breaking-change-workspace-membership/).** Results may be further [filtered](/cloud/bitbucket/rest/intro/#filtering) by permission by adding the following query string parameters: * `q=permission="owner"`
     *
     * @tags Workspaces
     * @name PermissionsList
     * @summary List user permissions in a workspace
     * @request GET:/workspaces/{workspace}/permissions
     * @secure
     */
    permissionsList: (
      workspace: string,
      query?: {
        /**
         *
         * Query string to narrow down the response as per
         * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
         */
        q?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedWorkspaceMemberships, Error>({
        path: `/workspaces/${workspace}/permissions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns an object for each repository permission for all of a workspace's repositories. Permissions returned are effective permissions: the highest level of permission the user has. This does not distinguish between direct and indirect (group) privileges. Only users with admin permission for the team may access this resource. Permissions can be: * `admin` * `write` * `read` Results may be further [filtered or sorted](/cloud/bitbucket/rest/intro/#filtering) by repository, user, or permission by adding the following query string parameters: * `q=repository.name="geordi"` or `q=permission>"read"` * `sort=user.display_name` Note that the query parameter values need to be URL escaped so that `=` would become `%3D`.
     *
     * @tags Workspaces
     * @name PermissionsRepositoriesList
     * @summary List all repository permissions for a workspace
     * @request GET:/workspaces/{workspace}/permissions/repositories
     * @secure
     */
    permissionsRepositoriesList: (
      workspace: string,
      query?: {
        /**
         *
         * Query string to narrow down the response as per
         * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
         */
        q?: string;
        /**
         *
         * Name of a response property sort the result by as per
         * [filtering and sorting](/cloud/bitbucket/rest/intro/#sorting-query-results).
         */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedRepositoryPermissions, Error>({
        path: `/workspaces/${workspace}/permissions/repositories`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns an object for the repository permission of each user in the requested repository. Permissions returned are effective permissions: the highest level of permission the user has. This does not distinguish between direct and indirect (group) privileges. Only users with admin permission for the repository may access this resource. Permissions can be: * `admin` * `write` * `read` Results may be further [filtered or sorted](/cloud/bitbucket/rest/intro/#filtering) by user, or permission by adding the following query string parameters: * `q=permission>"read"` * `sort=user.display_name` Note that the query parameter values need to be URL escaped so that `=` would become `%3D`.
     *
     * @tags Workspaces
     * @name PermissionsRepositoriesDetail
     * @summary List a repository permissions for a workspace
     * @request GET:/workspaces/{workspace}/permissions/repositories/{repo_slug}
     * @secure
     */
    permissionsRepositoriesDetail: (
      repoSlug: string,
      workspace: string,
      query?: {
        /**
         *
         * Query string to narrow down the response as per
         * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering).
         */
        q?: string;
        /**
         *
         * Name of a response property sort the result by as per
         * [filtering and sorting](/cloud/bitbucket/rest/intro/#sorting-query-results).
         */
        sort?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedRepositoryPermissions, Error>({
        path: `/workspaces/${workspace}/permissions/repositories/${repoSlug}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This is part of OpenID Connect for Pipelines, see https://support.atlassian.com/bitbucket-cloud/docs/integrate-pipelines-with-resource-servers-using-oidc/
     *
     * @tags Pipelines
     * @name GetOidcConfiguration
     * @summary Get OpenID configuration for OIDC in Pipelines
     * @request GET:/workspaces/{workspace}/pipelines-config/identity/oidc/.well-known/openid-configuration
     * @secure
     */
    getOidcConfiguration: (workspace: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/workspaces/${workspace}/pipelines-config/identity/oidc/.well-known/openid-configuration`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description This is part of OpenID Connect for Pipelines, see https://support.atlassian.com/bitbucket-cloud/docs/integrate-pipelines-with-resource-servers-using-oidc/
     *
     * @tags Pipelines
     * @name GetOidcKeys
     * @summary Get keys for OIDC in Pipelines
     * @request GET:/workspaces/{workspace}/pipelines-config/identity/oidc/keys.json
     * @secure
     */
    getOidcKeys: (workspace: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/workspaces/${workspace}/pipelines-config/identity/oidc/keys.json`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Retrieve workspace runners.
     *
     * @tags Pipelines
     * @name GetWorkspaceRunners
     * @summary Get workspace runners
     * @request GET:/workspaces/{workspace}/pipelines-config/runners
     * @secure
     */
    getWorkspaceRunners: (workspace: string, params: RequestParams = {}) =>
      this.request<PaginatedPipelineRunners, any>({
        path: `/workspaces/${workspace}/pipelines-config/runners`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create workspace runner.
     *
     * @tags Pipelines
     * @name CreateWorkspaceRunner
     * @summary Create workspace runner
     * @request POST:/workspaces/{workspace}/pipelines-config/runners
     * @secure
     */
    createWorkspaceRunner: (workspace: string, params: RequestParams = {}) =>
      this.request<PipelineRunner, Error>({
        path: `/workspaces/${workspace}/pipelines-config/runners`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Get workspace runner by uuid.
     *
     * @tags Pipelines
     * @name GetWorkspaceRunner
     * @summary Get workspace runner
     * @request GET:/workspaces/{workspace}/pipelines-config/runners/{runner_uuid}
     * @secure
     */
    getWorkspaceRunner: (
      workspace: string,
      runnerUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<PipelineRunner, Error>({
        path: `/workspaces/${workspace}/pipelines-config/runners/${runnerUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update workspace runner.
     *
     * @tags Pipelines
     * @name UpdateWorkspaceRunner
     * @summary Update workspace runner
     * @request PUT:/workspaces/{workspace}/pipelines-config/runners/{runner_uuid}
     * @secure
     */
    updateWorkspaceRunner: (
      workspace: string,
      runnerUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<PipelineRunner, Error>({
        path: `/workspaces/${workspace}/pipelines-config/runners/${runnerUuid}`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete workspace runner by uuid.
     *
     * @tags Pipelines
     * @name DeleteWorkspaceRunner
     * @summary Delete workspace runner
     * @request DELETE:/workspaces/{workspace}/pipelines-config/runners/{runner_uuid}
     * @secure
     */
    deleteWorkspaceRunner: (
      workspace: string,
      runnerUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/workspaces/${workspace}/pipelines-config/runners/${runnerUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Find workspace level variables.
     *
     * @tags Pipelines
     * @name GetPipelineVariablesForWorkspace
     * @summary List variables for a workspace
     * @request GET:/workspaces/{workspace}/pipelines-config/variables
     * @secure
     */
    getPipelineVariablesForWorkspace: (
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedPipelineVariables, any>({
        path: `/workspaces/${workspace}/pipelines-config/variables`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a workspace level variable.
     *
     * @tags Pipelines
     * @name CreatePipelineVariableForWorkspace
     * @summary Create a variable for a workspace
     * @request POST:/workspaces/{workspace}/pipelines-config/variables
     * @secure
     */
    createPipelineVariableForWorkspace: (
      workspace: string,
      data: PipelineVariable,
      params: RequestParams = {},
    ) =>
      this.request<PipelineVariable, Error>({
        path: `/workspaces/${workspace}/pipelines-config/variables`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Retrieve a workspace level variable.
     *
     * @tags Pipelines
     * @name GetPipelineVariableForWorkspace
     * @summary Get variable for a workspace
     * @request GET:/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}
     * @secure
     */
    getPipelineVariableForWorkspace: (
      workspace: string,
      variableUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<PipelineVariable, Error>({
        path: `/workspaces/${workspace}/pipelines-config/variables/${variableUuid}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update a workspace level variable.
     *
     * @tags Pipelines
     * @name UpdatePipelineVariableForWorkspace
     * @summary Update variable for a workspace
     * @request PUT:/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}
     * @secure
     */
    updatePipelineVariableForWorkspace: (
      workspace: string,
      variableUuid: string,
      data: PipelineVariable,
      params: RequestParams = {},
    ) =>
      this.request<PipelineVariable, Error>({
        path: `/workspaces/${workspace}/pipelines-config/variables/${variableUuid}`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Delete a workspace level variable.
     *
     * @tags Pipelines
     * @name DeletePipelineVariableForWorkspace
     * @summary Delete a variable for a workspace
     * @request DELETE:/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}
     * @secure
     */
    deletePipelineVariableForWorkspace: (
      workspace: string,
      variableUuid: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/workspaces/${workspace}/pipelines-config/variables/${variableUuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns the list of projects in this workspace.
     *
     * @tags Workspaces
     * @name ProjectsList
     * @summary List projects in a workspace
     * @request GET:/workspaces/{workspace}/projects
     * @secure
     */
    projectsList: (workspace: string, params: RequestParams = {}) =>
      this.request<PaginatedProjects, Error>({
        path: `/workspaces/${workspace}/projects`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new project. Note that the avatar has to be embedded as either a data-url or a URL to an external image as shown in the examples below: ``` $ body=$(cat << EOF { "name": "Mars Project", "key": "MARS", "description": "Software for colonizing mars.", "links": { "avatar": { "href": "data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/..." } }, "is_private": false } EOF ) $ curl -H "Content-Type: application/json" \ -X POST \ -d "$body" \ https://api.bitbucket.org/2.0/workspaces/teams-in-space/projects/ | jq . { // Serialized project document } ``` or even: ``` $ body=$(cat << EOF { "name": "Mars Project", "key": "MARS", "description": "Software for colonizing mars.", "links": { "avatar": { "href": "http://i.imgur.com/72tRx4w.gif" } }, "is_private": false } EOF ) $ curl -H "Content-Type: application/json" \ -X POST \ -d "$body" \ https://api.bitbucket.org/2.0/workspaces/teams-in-space/projects/ | jq . { // Serialized project document } ```
     *
     * @tags Projects
     * @name ProjectsCreate
     * @summary Create a project in a workspace
     * @request POST:/workspaces/{workspace}/projects
     * @secure
     */
    projectsCreate: (
      workspace: string,
      data: Project,
      params: RequestParams = {},
    ) =>
      this.request<Project, Error>({
        path: `/workspaces/${workspace}/projects`,
        method: "POST",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes this project. This is an irreversible operation. You cannot delete a project that still contains repositories. To delete the project, [delete](/cloud/bitbucket/rest/api-group-repositories/#api-repositories-workspace-repo-slug-delete) or transfer the repositories first. Example: ``` $ curl -X DELETE https://api.bitbucket.org/2.0/workspaces/bbworkspace1/projects/PROJ ```
     *
     * @tags Projects
     * @name ProjectsDelete
     * @summary Delete a project for a workspace
     * @request DELETE:/workspaces/{workspace}/projects/{project_key}
     * @secure
     */
    projectsDelete: (
      projectKey: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/workspaces/${workspace}/projects/${projectKey}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns the requested project.
     *
     * @tags Projects, Workspaces
     * @name ProjectsDetail
     * @summary Get a project for a workspace
     * @request GET:/workspaces/{workspace}/projects/{project_key}
     * @secure
     */
    projectsDetail: (
      projectKey: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<Project, Error>({
        path: `/workspaces/${workspace}/projects/${projectKey}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Since this endpoint can be used to both update and to create a project, the request body depends on the intent. #### Creation See the POST documentation for the project collection for an example of the request body. Note: The `key` should not be specified in the body of request (since it is already present in the URL). The `name` is required, everything else is optional. #### Update See the POST documentation for the project collection for an example of the request body. Note: The key is not required in the body (since it is already in the URL). The key may be specified in the body, if the intent is to change the key itself. In such a scenario, the location of the project is changed and is returned in the `Location` header of the response.
     *
     * @tags Projects
     * @name ProjectsUpdate
     * @summary Update a project for a workspace
     * @request PUT:/workspaces/{workspace}/projects/{project_key}
     * @secure
     */
    projectsUpdate: (
      projectKey: string,
      workspace: string,
      data: Project,
      params: RequestParams = {},
    ) =>
      this.request<Project, Error>({
        path: `/workspaces/${workspace}/projects/${projectKey}`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Return the branching model set at the project level. This view is read-only. The branching model settings can be changed using the [settings](#api-workspaces-workspace-projects-project-key-branching-model-settings-get) API. The returned object: 1. Always has a `development` property. `development.name` is the user-specified branch that can be inherited by an individual repository's branching model. 2. Might have a `production` property. `production` will not be present when `production` is disabled. `production.name` is the user-specified branch that can be inherited by an individual repository's branching model. 3. Always has a `branch_types` array which contains all enabled branch types.
     *
     * @tags Branching model
     * @name ProjectsBranchingModelList
     * @summary Get the branching model for a project
     * @request GET:/workspaces/{workspace}/projects/{project_key}/branching-model
     * @secure
     */
    projectsBranchingModelList: (
      projectKey: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<ProjectBranchingModel, Error>({
        path: `/workspaces/${workspace}/projects/${projectKey}/branching-model`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Return the branching model configuration for a project. The returned object: 1. Always has a `development` property for the development branch. 2. Always a `production` property for the production branch. The production branch can be disabled. 3. The `branch_types` contains all the branch types. 4. `default_branch_deletion` indicates whether branches will be deleted by default on merge. This is the raw configuration for the branching model. A client wishing to see the branching model with its actual current branches may find the [active model API](#api-workspaces-workspace-projects-project-key-branching-model-get) more useful.
     *
     * @tags Branching model
     * @name ProjectsBranchingModelSettingsList
     * @summary Get the branching model config for a project
     * @request GET:/workspaces/{workspace}/projects/{project_key}/branching-model/settings
     * @secure
     */
    projectsBranchingModelSettingsList: (
      projectKey: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<BranchingModelSettings, Error>({
        path: `/workspaces/${workspace}/projects/${projectKey}/branching-model/settings`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update the branching model configuration for a project. The `development` branch can be configured to a specific branch or to track the main branch. Any branch name can be supplied, but will only successfully be applied to a repository via inheritance if that branch exists for that repository. Only the passed properties will be updated. The properties not passed will be left unchanged. A request without a `development` property will leave the development branch unchanged. The `production` branch can be a specific branch, the main branch or disabled. Any branch name can be supplied, but will only successfully be applied to a repository via inheritance if that branch exists for that repository. The `enabled` property can be used to enable (`true`) or disable (`false`) it. Only the passed properties will be updated. The properties not passed will be left unchanged. A request without a `production` property will leave the production branch unchanged. The `branch_types` property contains the branch types to be updated. Only the branch types passed will be updated. All updates will be rejected if it would leave the branching model in an invalid state. For branch types this means that: 1. The prefixes for all enabled branch types are valid. For example, it is not possible to use '*' inside a Git prefix. 2. A prefix of an enabled branch type must not be a prefix of another enabled branch type. This is to ensure that a branch can be easily classified by its prefix unambiguously. It is possible to store an invalid prefix if that branch type would be left disabled. Only the passed properties will be updated. The properties not passed will be left unchanged. Each branch type must have a `kind` property to identify it. The `default_branch_deletion` property is a string. The value of `true` indicates to delete branches by default. The value of `false` indicates that branches will not be deleted by default. A request without a `default_branch_deletion` property will leave it unchanged. Other values would be ignored.
     *
     * @tags Branching model
     * @name ProjectsBranchingModelSettingsUpdate
     * @summary Update the branching model config for a project
     * @request PUT:/workspaces/{workspace}/projects/{project_key}/branching-model/settings
     * @secure
     */
    projectsBranchingModelSettingsUpdate: (
      projectKey: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<BranchingModelSettings, Error>({
        path: `/workspaces/${workspace}/projects/${projectKey}/branching-model/settings`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Return a list of all default reviewers for a project. This is a list of users that will be added as default reviewers to pull requests for any repository within the project.
     *
     * @tags Projects
     * @name ProjectsDefaultReviewersList
     * @summary List the default reviewers in a project
     * @request GET:/workspaces/{workspace}/projects/{project_key}/default-reviewers
     * @secure
     */
    projectsDefaultReviewersList: (
      projectKey: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedDefaultReviewerAndType, Error>({
        path: `/workspaces/${workspace}/projects/${projectKey}/default-reviewers`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Removes a default reviewer from the project. Example: ``` $ curl https://api.bitbucket.org/2.0/.../default-reviewers/%7Bf0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6%7D HTTP/1.1 204 ```
     *
     * @tags Projects
     * @name ProjectsDefaultReviewersDelete
     * @summary Remove the specific user from the project's default reviewers
     * @request DELETE:/workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}
     * @secure
     */
    projectsDefaultReviewersDelete: (
      projectKey: string,
      selectedUser: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/workspaces/${workspace}/projects/${projectKey}/default-reviewers/${selectedUser}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns the specified default reviewer.
     *
     * @tags Projects
     * @name ProjectsDefaultReviewersDetail
     * @summary Get a default reviewer
     * @request GET:/workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}
     * @secure
     */
    projectsDefaultReviewersDetail: (
      projectKey: string,
      selectedUser: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<User, Error>({
        path: `/workspaces/${workspace}/projects/${projectKey}/default-reviewers/${selectedUser}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Adds the specified user to the project's list of default reviewers. The method is idempotent. Accepts an optional body containing the `uuid` of the user to be added.
     *
     * @tags Projects
     * @name ProjectsDefaultReviewersUpdate
     * @summary Add the specific user as a default reviewer for the project
     * @request PUT:/workspaces/{workspace}/projects/{project_key}/default-reviewers/{selected_user}
     * @secure
     */
    projectsDefaultReviewersUpdate: (
      projectKey: string,
      selectedUser: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<User, Error>({
        path: `/workspaces/${workspace}/projects/${projectKey}/default-reviewers/${selectedUser}`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all deploy keys belonging to a project.
     *
     * @tags Deployments
     * @name ProjectsDeployKeysList
     * @summary List project deploy keys
     * @request GET:/workspaces/{workspace}/projects/{project_key}/deploy-keys
     * @secure
     */
    projectsDeployKeysList: (
      projectKey: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedProjectDeployKeys, Error>({
        path: `/workspaces/${workspace}/projects/${projectKey}/deploy-keys`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new deploy key in a project. Example: ``` $ curl -X POST \ -H "Authorization <auth header>" \ -H "Content-type: application/json" \ https://api.bitbucket.org/2.0/workspaces/standard/projects/TEST_PROJECT/deploy-keys/ -d \ '{ "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 mleu@C02W454JHTD8", "label": "mydeploykey" }' ```
     *
     * @tags Deployments
     * @name ProjectsDeployKeysCreate
     * @summary Create a project deploy key
     * @request POST:/workspaces/{workspace}/projects/{project_key}/deploy-keys
     * @secure
     */
    projectsDeployKeysCreate: (
      projectKey: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<ProjectDeployKey, Error>({
        path: `/workspaces/${workspace}/projects/${projectKey}/deploy-keys`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This deletes a deploy key from a project.
     *
     * @tags Deployments
     * @name ProjectsDeployKeysDelete
     * @summary Delete a deploy key from a project
     * @request DELETE:/workspaces/{workspace}/projects/{project_key}/deploy-keys/{key_id}
     * @secure
     */
    projectsDeployKeysDelete: (
      keyId: string,
      projectKey: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/workspaces/${workspace}/projects/${projectKey}/deploy-keys/${keyId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns the deploy key belonging to a specific key ID.
     *
     * @tags Deployments
     * @name ProjectsDeployKeysDetail
     * @summary Get a project deploy key
     * @request GET:/workspaces/{workspace}/projects/{project_key}/deploy-keys/{key_id}
     * @secure
     */
    projectsDeployKeysDetail: (
      keyId: string,
      projectKey: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<ProjectDeployKey, Error>({
        path: `/workspaces/${workspace}/projects/${projectKey}/deploy-keys/${keyId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a paginated list of explicit group permissions for the given project. This endpoint does not support BBQL features.
     *
     * @tags Projects
     * @name ProjectsPermissionsConfigGroupsList
     * @summary List explicit group permissions for a project
     * @request GET:/workspaces/{workspace}/projects/{project_key}/permissions-config/groups
     * @secure
     */
    projectsPermissionsConfigGroupsList: (
      projectKey: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedProjectGroupPermissions, Error>({
        path: `/workspaces/${workspace}/projects/${projectKey}/permissions-config/groups`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes the project group permission between the requested project and group, if one exists. Only users with admin permission for the project may access this resource.
     *
     * @tags Projects
     * @name ProjectsPermissionsConfigGroupsDelete
     * @summary Delete an explicit group permission for a project
     * @request DELETE:/workspaces/{workspace}/projects/{project_key}/permissions-config/groups/{group_slug}
     * @secure
     */
    projectsPermissionsConfigGroupsDelete: (
      groupSlug: string,
      projectKey: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/workspaces/${workspace}/projects/${projectKey}/permissions-config/groups/${groupSlug}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns the group permission for a given group and project. Only users with admin permission for the project may access this resource. Permissions can be: * `admin` * `create-repo` * `write` * `read` * `none`
     *
     * @tags Projects
     * @name ProjectsPermissionsConfigGroupsDetail
     * @summary Get an explicit group permission for a project
     * @request GET:/workspaces/{workspace}/projects/{project_key}/permissions-config/groups/{group_slug}
     * @secure
     */
    projectsPermissionsConfigGroupsDetail: (
      groupSlug: string,
      projectKey: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<ProjectGroupPermission, Error>({
        path: `/workspaces/${workspace}/projects/${projectKey}/permissions-config/groups/${groupSlug}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates the group permission, or grants a new permission if one does not already exist. Only users with admin permission for the project may access this resource. Due to security concerns, the JWT and OAuth authentication methods are unsupported. This is to ensure integrations and add-ons are not allowed to change permissions. Permissions can be: * `admin` * `create-repo` * `write` * `read`
     *
     * @tags Projects
     * @name ProjectsPermissionsConfigGroupsUpdate
     * @summary Update an explicit group permission for a project
     * @request PUT:/workspaces/{workspace}/projects/{project_key}/permissions-config/groups/{group_slug}
     * @secure
     */
    projectsPermissionsConfigGroupsUpdate: (
      groupSlug: string,
      projectKey: string,
      workspace: string,
      data: BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema,
      params: RequestParams = {},
    ) =>
      this.request<ProjectGroupPermission, Error>({
        path: `/workspaces/${workspace}/projects/${projectKey}/permissions-config/groups/${groupSlug}`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a paginated list of explicit user permissions for the given project. This endpoint does not support BBQL features.
     *
     * @tags Projects
     * @name ProjectsPermissionsConfigUsersList
     * @summary List explicit user permissions for a project
     * @request GET:/workspaces/{workspace}/projects/{project_key}/permissions-config/users
     * @secure
     */
    projectsPermissionsConfigUsersList: (
      projectKey: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<PaginatedProjectUserPermissions, Error>({
        path: `/workspaces/${workspace}/projects/${projectKey}/permissions-config/users`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Deletes the project user permission between the requested project and user, if one exists. Only users with admin permission for the project may access this resource. Due to security concerns, the JWT and OAuth authentication methods are unsupported. This is to ensure integrations and add-ons are not allowed to change permissions.
     *
     * @tags Projects
     * @name ProjectsPermissionsConfigUsersDelete
     * @summary Delete an explicit user permission for a project
     * @request DELETE:/workspaces/{workspace}/projects/{project_key}/permissions-config/users/{selected_user_id}
     * @secure
     */
    projectsPermissionsConfigUsersDelete: (
      projectKey: string,
      selectedUserId: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<void, Error>({
        path: `/workspaces/${workspace}/projects/${projectKey}/permissions-config/users/${selectedUserId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Returns the explicit user permission for a given user and project. Only users with admin permission for the project may access this resource. Permissions can be: * `admin` * `create-repo` * `write` * `read` * `none`
     *
     * @tags Projects
     * @name ProjectsPermissionsConfigUsersDetail
     * @summary Get an explicit user permission for a project
     * @request GET:/workspaces/{workspace}/projects/{project_key}/permissions-config/users/{selected_user_id}
     * @secure
     */
    projectsPermissionsConfigUsersDetail: (
      projectKey: string,
      selectedUserId: string,
      workspace: string,
      params: RequestParams = {},
    ) =>
      this.request<ProjectUserPermission, Error>({
        path: `/workspaces/${workspace}/projects/${projectKey}/permissions-config/users/${selectedUserId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates the explicit user permission for a given user and project. The selected user must be a member of the workspace, and cannot be the workspace owner. Only users with admin permission for the project may access this resource. Due to security concerns, the JWT and OAuth authentication methods are unsupported. This is to ensure integrations and add-ons are not allowed to change permissions. Permissions can be: * `admin` * `create-repo` * `write` * `read`
     *
     * @tags Projects
     * @name ProjectsPermissionsConfigUsersUpdate
     * @summary Update an explicit user permission for a project
     * @request PUT:/workspaces/{workspace}/projects/{project_key}/permissions-config/users/{selected_user_id}
     * @secure
     */
    projectsPermissionsConfigUsersUpdate: (
      projectKey: string,
      selectedUserId: string,
      workspace: string,
      data: BitbucketAppsPermissionsSerializersProjectPermissionUpdateSchema,
      params: RequestParams = {},
    ) =>
      this.request<ProjectUserPermission, Error>({
        path: `/workspaces/${workspace}/projects/${projectKey}/permissions-config/users/${selectedUserId}`,
        method: "PUT",
        body: data,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all workspace pull requests authored by the specified user. By default only open pull requests are returned. This can be controlled using the `state` query parameter. To retrieve pull requests that are in one of multiple states, repeat the `state` parameter for each individual state. This endpoint also supports filtering and sorting of the results. See [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) for more details.
     *
     * @tags Workspaces, Pullrequests
     * @name PullrequestsDetail
     * @summary List workspace pull requests for a user
     * @request GET:/workspaces/{workspace}/pullrequests/{selected_user}
     * @secure
     */
    pullrequestsDetail: (
      selectedUser: string,
      workspace: string,
      query?: {
        /** Only return pull requests that are in this state. This parameter can be repeated. */
        state?: "OPEN" | "MERGED" | "DECLINED" | "SUPERSEDED";
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginatedPullrequests, Error>({
        path: `/workspaces/${workspace}/pullrequests/${selectedUser}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This API will be deprecated on November 1, 2026. Search for code in the repositories of the specified workspace. Note that searches can match in the file's text (`content_matches`), the path (`path_matches`), or both. You can use the same syntax for the search query as in the UI. E.g. to search for "foo" only within the repository "demo", use the query parameter `search_query=foo+repo:demo`. Similar to other APIs, you can request more fields using a `fields` query parameter. E.g. to get some more information about the repository of matched files, use the query parameter `search_query=foo&fields=%2Bvalues.file.commit.repository` (the `%2B` is a URL-encoded `+`). Try `fields=%2Bvalues.*.*.*.*` to get an idea what's possible.
     *
     * @tags Search
     * @name SearchWorkspace
     * @summary Search for code in a workspace
     * @request GET:/workspaces/{workspace}/search/code
     * @deprecated
     * @secure
     */
    searchWorkspace: (
      workspace: string,
      query: {
        /** The search query */
        search_query: string;
        /**
         * Which page of the search results to retrieve
         * @format int32
         * @default 1
         */
        page?: number;
        /**
         * How many search results to retrieve per page
         * @format int32
         * @default 10
         */
        pagelen?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<SearchResultPage, Error>({
        path: `/workspaces/${workspace}/search/code`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the system public GPG key(s). In most cases a single key is returned. During a key rotation period, two keys may be returned.
     *
     * @tags Workspaces
     * @name SettingsGpgPublicKeyList
     * @summary Get the workspace system GPG public key(s)
     * @request GET:/workspaces/{workspace}/settings/gpg/public-key
     * @secure
     */
    settingsGpgPublicKeyList: (workspace: string, params: RequestParams = {}) =>
      this.request<void, Error>({
        path: `/workspaces/${workspace}/settings/gpg/public-key`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
}
