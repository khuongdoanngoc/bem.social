import { registerAs } from '@nestjs/config';

export default registerAs('microservices', () => ({
  auth: {
    url: process.env.AUTH_SERVICE_URL,
  },
  user: {
    url: process.env.USER_SERVICE_URL,
  },
  post: {
    url: process.env.POST_SERVICE_URL,
  },
  notification: {
    url: process.env.NOTIFICATION_SERVICE_URL,
  },
  feed: {
    url: process.env.FEED_SERVICE_URL,
  },
  search: {
    url: process.env.SEARCH_SERVICE_URL,
  },
})); 