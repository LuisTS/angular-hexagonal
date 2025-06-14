import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { UserComponent } from './app/presentation/user.component';
import { UserApiRepository } from './app/infrastructure/repositories/user-api.repository';
import { USER_REPOSITORY } from './app/core/domain/repositories/user.repository';

bootstrapApplication(UserComponent, {
  providers: [
    provideHttpClient(),
    { provide: USER_REPOSITORY, useClass: UserApiRepository },
  ],
}).catch((err) => console.error(err));
