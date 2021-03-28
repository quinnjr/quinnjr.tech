import { SetMetadata } from '@nestjs/common';

import { PolicyHandler } from './policy-handler.interface';

export const CHECK_POLICIES_KEY = 'checkPolicies';

export const CheckPolicies = (...handlers: PolicyHandler[]) => SetMetadata(CHECK_POLICIES_KEY, handlers);
