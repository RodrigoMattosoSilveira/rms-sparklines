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
     *
     * Input
     *    leaf: string
     * Output
     *    URL: string
     */
    branchURL(leaf: string): string {
        const root = `https://github.com/RodrigoMattosoSilveira/rms-sparklines/tree`;
        const branch = `issue-44-ng7-barchart`;
        return root + `/` + branch + `/` + leaf;
    }
}
