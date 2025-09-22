import { Workspace, Project, Repository, PullRequest } from '../services/bitbucket';

export interface NavigationState {
  currentStep: NavigationStep;
  previousSteps: NavigationStep[];
  data: {
    workspaces?: Workspace[];
    selectedWorkspace?: Workspace;
    projects?: Project[];
    selectedProject?: Project;
    repositories?: Repository[];
    selectedRepository?: Repository;
    pullRequests?: PullRequest[];
    selectedPullRequest?: PullRequest;
    prStateFilter?: string;
  };
}

export type NavigationStep = 
  | 'workspace-selection'
  | 'project-selection' 
  | 'repository-selection'
  | 'action-selection'
  | 'pr-state-selection'
  | 'pr-selection'
  | 'pr-action-selection';

export interface NavigationResult<T = any> {
  value: T;
  action: 'continue' | 'back' | 'exit';
}

export class NavigationManager {
  private state: NavigationState;

  constructor(initialData?: Partial<NavigationState['data']>) {
    this.state = {
      currentStep: 'workspace-selection',
      previousSteps: [],
      data: initialData || {}
    };
  }

  getCurrentStep(): NavigationStep {
    return this.state.currentStep;
  }

  getPreviousStep(): NavigationStep | null {
    return this.state.previousSteps.length > 0 
      ? this.state.previousSteps[this.state.previousSteps.length - 1] 
      : null;
  }

  canGoBack(): boolean {
    return this.state.previousSteps.length > 0;
  }

  goBack(): NavigationStep {
    if (!this.canGoBack()) {
      throw new Error('Cannot go back - no previous steps');
    }

    const previousStep = this.state.previousSteps.pop()!;
    this.state.currentStep = previousStep;
    return previousStep;
  }

  advanceTo(step: NavigationStep): void {
    this.state.previousSteps.push(this.state.currentStep);
    this.state.currentStep = step;
  }

  setData(data: Partial<NavigationState['data']>): void {
    this.state.data = { ...this.state.data, ...data };
  }

  getData(): NavigationState['data'] {
    return this.state.data;
  }

  getState(): NavigationState {
    return { ...this.state };
  }

  getStepDisplayName(step: NavigationStep): string {
    const stepNames: Record<NavigationStep, string> = {
      'workspace-selection': 'Workspace Selection',
      'project-selection': 'Project Selection',
      'repository-selection': 'Repository Selection',
      'action-selection': 'Action Selection',
      'pr-state-selection': 'PR State Filter',
      'pr-selection': 'Pull Request Selection',
      'pr-action-selection': 'PR Action Selection'
    };
    return stepNames[step];
  }

  getStepDescription(step: NavigationStep): string {
    const descriptions: Record<NavigationStep, string> = {
      'workspace-selection': 'Choose a workspace to browse',
      'project-selection': 'Select a project from the workspace',
      'repository-selection': 'Pick a repository from the project',
      'action-selection': 'Choose what to do with the repository',
      'pr-state-selection': 'Filter pull requests by state',
      'pr-selection': 'Select a pull request to view',
      'pr-action-selection': 'Choose what to do with the pull request'
    };
    return descriptions[step];
  }

  getNavigationHint(): string {
    if (this.canGoBack()) {
      return `Press Esc to go back to ${this.getStepDisplayName(this.getPreviousStep()!)}`;
    }
    return 'Press Esc to exit';
  }
}
