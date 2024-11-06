import React from 'react';


const Table = ({ columns, data, }) => {
  return (
    <div className="bg-white rounded-lg shadow p-2">
      <table className="w-full">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.accessor} className="text-xs text-left font-semibold py-2 px-4">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-t">
              {columns.map((column) => (
                <td key={column.accessor} className="py-2 px-2  lg:px-[3px]text-xs">
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
