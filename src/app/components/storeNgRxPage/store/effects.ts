import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { StoreServiceService } from '../../../services/store-service.service';
import { StorengServiceService } from '../../../services/storeng-service.service';
import { getProducts, getProductsFailure, getProductsSuccess } from './actions';
import { of } from 'rxjs';


@Injectable()
export class ProductsEffects {
    private actions$ = inject(Actions);
    constructor(private productService: StorengServiceService) {
    }

    getProducts$ = createEffect(() =>
        this.actions$.pipe(
          ofType(getProducts),
          switchMap(({ store }) =>
            this.productService.getProducts(store).pipe(
              map(products => getProductsSuccess({ products, store })),
              catchError(error => of(getProductsFailure({ error }))) // закриваємо catchError
            )
          )
        )
      );
}