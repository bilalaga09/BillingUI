import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const hasToken = !!localStorage.getItem('auth_token');
  const isFlagged = localStorage.getItem('isLoggedIn') === 'true';

  console.log(localStorage + 'Auth Guard Check - hasToken:', localStorage.getItem('auth_token'), 'isFlagged:', isFlagged);

  if (hasToken || isFlagged) {
    return true;
  }

  // Not authenticated — redirect to login
  router.navigate(['/login']);
  return false;
};
