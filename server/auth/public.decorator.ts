import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';

/* eslint @typescript-eslint/naming-convention: off */
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
