import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'amplifyTestStorage',
  access: (allow) => ({
    'data/*': [
      allow.authenticated.to(['read', 'write', 'delete']),
    ],
  })
});
