import {createFeatureSelector, createSelector} from '@ngrx/store'
import {AuthStateInterface} from "../types/authState.interface";

export const authFeatureSelector = createFeatureSelector<
  AuthStateInterface
>('auth')

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
)

export const backendErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.backendErrors
)

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => !!authState.currentUser
)

export const isAnonymousSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => !authState.currentUser
)

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.currentUser
)
