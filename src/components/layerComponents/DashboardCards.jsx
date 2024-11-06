import React from 'react';

const data = [
  { color: 'bg-purple-500', icon: '👤', count: '24K', label: 'Total Users' },
  { color: 'bg-green-500', icon: '💻', count: '82K', label: 'Online' },
  { color: 'bg-yellow-500', icon: '🛠️', count: '200', label: 'Service Request' },
  { color: 'bg-blue-500', icon: '📞', count: '89', label: 'Lead Request' },
  { color: 'bg-teal-500', icon: '📈', count: '89', label: 'Active Service' },
  { color: 'bg-red-500', icon: '⚠️', count: '89', label: 'Complaints' },
];

const DashboardCards = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex items-center p-3 sm:p-4 bg-white rounded-lg shadow-md w-full sm:w-48 md:w-52 lg:w-56 space-x-4"
        >
          <div className={`p-2 rounded-full text-white ${item.color} text-xl sm:text-2xl`}>
            {item.icon}
          </div>
          <div>
            <p className="text-base sm:text-lg font-semibold">{item.count}</p>
            <p className="text-xs sm:text-sm text-gray-500">{item.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
