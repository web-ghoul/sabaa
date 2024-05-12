import { SetMetadata } from '@nestjs/common';

export const Activity_KEY = 'logActivity';
export const ActivityLog = (activity) => SetMetadata(Activity_KEY, activity);
