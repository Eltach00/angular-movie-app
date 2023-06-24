import { Router } from '@angular/router';

export function defineSteps(steps: any, router: Router) {
  switch ('IN_PROGRESS') {
    case steps.find((item) => item.step === 'APPLICATION_FORM').status:
      router.navigate(['genres']);
      console.log('working');
      break;
    case steps.find((item) => item.step === 'CURRENCY_FORM').status:
      router.navigate(['movies']);
      break;
    // case steps.find((item) => item.step === 'FATCA_FORM').status:
    //   this.router.navigate(['/account/fatca']);
    //   break;
    // case steps.find((item) => item.step === 'SIGN_FORM').status:
    //   this.router.navigate(['/account/signing']);
    //   break;
    // case steps.find((item) => item.step === 'VIDEO_CALL_FORM').status:
    //   this.router.navigate(['/account/video-call']);
    //   break;
    default:
      // this.router.navigate(['/account/requisite']);
      console.log('not');

      break;
  }
}
