import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Papa from "papaparse";

import { csvOnly, formatParsedData } from "./helpers";
import { useAppContext } from "../../context";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const RoutesBulkUploader = () => {
  const { addRoutes } = useAppContext();
  const history = useHistory();

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        error: function (err, file, inputElem, reason) {
          // executed if an error occurs while loading the file,
          // or if before callback aborted for some reason
          console.error(err);
          toast.error("Upload failed");
        },
        complete: function (result) {
          // executed after all files are complete

          const formattedData = formatParsedData(result.data);

          console.log(formattedData);
          addRoutes(formattedData);

          toast.success("Upload Success");
          history.push("/");
        }
      });
    });
  }, []);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: csvOnly
  });

  const acceptedFileItems = acceptedFiles.map((file) => `${file.path}`);

  return (
    <section className="mt-5 mx-0 mb-0 flex-center flex-column w-100">
      <h5>Bulk upload bus routes using .csv file</h5>
      <div
        {...getRootProps({
          className: "col-6 py-3 border rounded-3 bg-light text-center"
        })}
      >
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select file</p>
        <em>(Only *.csv files will be accepted)</em>
      </div>
      {acceptedFileItems?.length > 0 && (
        <div className="p-0">
          <span className="fw-normal text-muted">Accepted: </span>
          {acceptedFileItems}
        </div>
      )}
    </section>
  );
};

export default RoutesBulkUploader;
