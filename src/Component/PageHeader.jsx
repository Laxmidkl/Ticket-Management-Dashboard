

import React from "react";

function PageHeader({ title, breadcrumbs }) {
  return (
    <div className="flex justify-between items-center py-3">
      
      <div className="text-xl font-semibold text-gray-500">
        {title}
      </div>

      <div className="flex items-center gap-1 text-sm">
        {breadcrumbs.map((item, index) => (
          <span
            key={index}
            className={
              index === breadcrumbs.length - 1
                ? "text-gray-400"
                : "text-gray-600"
            }
          >
            {item}
            {index !== breadcrumbs.length - 1 && " /"}
          </span>
        ))}
      </div>

    </div>
  );
}

export default PageHeader;