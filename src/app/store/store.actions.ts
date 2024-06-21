import { createActionGroup, emptyProps, props } from "@ngrx/store";
import {ListItem} from "../shared/models/list-item";

export const FilmsActions = createActionGroup({
    source: 'Films',
    events: {
        'Load Films List': emptyProps(),
        'Load Films List Success': props<{films: ListItem[]}>(),
        'Load Films List Error': props<{error: string}>(),
        'Load Film Detail': props<{id: string}>(),
        'Load Film Detail Success': props<{film: ListItem}>(),
        'Load Film Detail Error': props<{error: string}>(),
    }
})

export const ProductsActions = createActionGroup({
    source: 'Products',
    events: {
        'Load Products List': emptyProps(),
        'Load Products List Success': props<{products: ListItem[]}>(),
        'Load Products List Error': props<{error: string}>(),
        'Load Product Detail': props<{id: string}>(),
        'Load Product Detail Success': props<{product: ListItem}>(),
        'Load Product Detail Error': props<{error: string}>(),
    }
})
