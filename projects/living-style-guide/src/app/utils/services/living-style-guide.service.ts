import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LivingStyleGuideService {
    private _root:string = "https://github.com/RodrigoMattosoSilveira/rms-sparklines/tree";
    private _branch:string = "issue-44-ng7";

    constructor() { }

    /**
    A service method to return a link to source in the repository. The
    repository and branch are kept in this service; the leaf is provided by the
    caller

    Input
        leaf: string
    Output
        URL: string
    **/
    branchURL(leaf:string):string {
        return this._root + "/" + this._branch + "/" + leaf;
    }
}
