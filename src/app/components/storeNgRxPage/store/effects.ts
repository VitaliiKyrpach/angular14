import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { StoreServiceService } from '../../../services/store-service.service';
import { StorengServiceService } from '../../../services/storeng-service.service';
import { getProducts, getProductsFailure, getProductsSuccess } from './actions';
import { of } from 'rxjs';


@Injectable()
export class ProductsEffects {
    constructor(private actions$: Actions, private productService: StorengServiceService) {
    }

    // getProducts$ = createEffect(() =>
    //     this.actions$.pipe(
    //       ofType(getProducts),
    //       mergeMap(() =>
    //         this.productService.getProducts().pipe(
    //           map(products => getProductsSuccess({ products })),
    //           catchError(error => of(getProductsFailure({ error }))) // закриваємо catchError
    //         )
    //       )
    //     )
    //   );
    
    
        loadProduct$ = createEffect(() =>
            this.actions$.pipe(
                ofType(getProducts),
                switchMap(() =>
                    this.productService.getProducts()
                        .pipe(map(products =>
                            getProductsSuccess({ products })))
                )
            )
        );
    
}