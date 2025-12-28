import { customerReducer } from './customer/customer.reducer';
import { notificationReducer } from './notification/notification.reducer';
import { userReducer } from './user/user.reducer';

export const appReducers = {
  notification: notificationReducer,
  user: userReducer,
  customer: customerReducer,
};
