import { consola } from 'consola';

let verboseMode = false;

export function setVerboseMode(enabled: boolean): void {
  verboseMode = enabled;
}

export function isVerboseMode(): boolean {
  return verboseMode;
}

export const logger = {
  info: (message: string, ...args: any[]) => {
    if (verboseMode) {
      consola.info(message, ...args);
    }
  },
  
  success: (message: string, ...args: any[]) => {
    consola.success(message, ...args);
  },
  
  warn: (message: string, ...args: any[]) => {
    consola.warn(message, ...args);
  },
  
  error: (message: string, ...args: any[]) => {
    consola.error(message, ...args);
  },
  
  debug: (message: string, ...args: any[]) => {
    if (verboseMode) {
      consola.debug(message, ...args);
    }
  },
  
  log: (message: string, ...args: any[]) => {
    if (verboseMode) {
      consola.log(message, ...args);
    }
  }
};
