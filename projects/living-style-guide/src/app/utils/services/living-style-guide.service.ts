import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LivingStyleGuideService {

    constructor() { }

    /**
     * A service method to return a link to source in the repository. The
     * repository and branch are kept in this service; the leaf is provided by the
     * caller
     */
    targetURL(branchName: string, projectName: string, projecType: string, componentName: string): string {
      return `https://github.com/RodrigoMattosoSilveira/rms-sparklines/tree/` +
         branchName +
         `/projects/` +
         projectName +
         `/src/` +
         projecType +
         `/` +
         componentName
   }

}
