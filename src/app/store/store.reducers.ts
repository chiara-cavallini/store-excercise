import { ListItem } from "../shared/models/list-item";
import { createFeature, createReducer, on } from "@ngrx/store";
import {FilmsActions, ProductsActions} from "./store.actions";

interface AppState {
    isLoading: boolean,
    films: ListItem[],
    products: ListItem[]
}

const initialState: AppState = {
    isLoading: false,
    films: [],
    products: []
}

export const appReducers = createReducer(
    initialState,
    on(
        FilmsActions.loadFilmsList,
        FilmsActions.loadFilmDetail,
        ProductsActions.loadProductsList,
        ProductsActions.loadProductDetail,
        (state) => ({...state, isLoading: true})),
    on(
        FilmsActions.loadFilmDetailSuccess,
        FilmsActions.loadFilmDetailError,
        FilmsActions.loadFilmsListError,
        ProductsActions.loadProductDetailSuccess,
        ProductsActions.loadProductDetailError,
        ProductsActions.loadProductsListError,
        (state) => ({...state, isLoading: false})),
    on(FilmsActions.loadFilmsListSuccess, (state, {films}) => (
        {
            ...state,
            films,
            isLoading: false
        })
    ),
    on(ProductsActions.loadProductsListSuccess, (state, {products}) => (
        {
            ...state,
            products,
            isLoading: false
        })
    ),
)
