import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const testGuard: CanActivateFn = () => {
  const router = inject(Router);

  return router.parseUrl('/login');
};
