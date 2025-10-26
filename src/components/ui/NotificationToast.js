import React from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

export default function NotificationToast({ notifications }) {
  return (
    <>
      {notifications.map((notif, index) => (
        <div 
          key={notif.id} 
          className="fixed right-4 z-50 animate-slide-in"
          style={{ top: `${96 + index * 80}px` }}
        >
          <div className={`${
            notif.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white px-6 py-4 rounded-xl shadow-2xl flex items-center space-x-3 min-w-[300px]`}>
            {notif.type === 'success' ? (
              <CheckCircle className="w-6 h-6 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-6 h-6 flex-shrink-0" />
            )}
            <span className="font-medium">{notif.message}</span>
          </div>
        </div>
      ))}
    </>
  );
}
