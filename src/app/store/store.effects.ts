import { Injectable } from "@angular/core";
import {Actions} from "@ngrx/effects";

@Injectable({providedIn: 'root'})
export class StoreEffects {
    constructor(private readonly actions$: Actions) {
    }
}
