import React from "react";
import json2csv from "csvjson-json2csv";
import { toast } from "react-toastify";

import { download } from "./helper";

import { useAppContext } from "../../context";
import { Link } from "react-router-dom";

const RouteBulkExporter = () => {
  const { routes } = useAppContext();
  const handleClick = () => {
    const csv = json2csv(routes, { flatten: true });
    download(`BusRoutes-${Date.now()}.csv`, csv);
    toast.success("Exported Successfully");
  };

  if (!routes?.length) return null;

  return (
    <Link to="" className="w-max-content link-secondary" onClick={handleClick}>
      Bulk Export (csv)
    </Link>
  );
};

export default RouteBulkExporter;
