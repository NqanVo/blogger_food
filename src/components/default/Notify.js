import { NotificationManager } from 'react-notifications'

export const Notify = (type, message) => {
    switch (type) {
        case 'success':
            return NotificationManager.success(message, "Success", 3000);
        case 'warning':
            return NotificationManager.warning(message, "Warning", 3000);
        case 'error':
            return NotificationManager.error(message, "Error", 3000);
        default:
            return NotificationManager.error(message, "Error", 3000);
    }
};
