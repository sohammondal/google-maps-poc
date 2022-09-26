export const csvOnly =
  ".csv, text/csv, application/vnd.ms-excel, application/csv, text/x-csv, application/x-csv, text/comma-separated-values, text/x-comma-separated-values";

const getDelimiter = (str) => {
  let delimiter = str.includes("__") ? "__" : "";
  delimiter = str.includes(".") ? "." : delimiter;
  return delimiter;
};

const isNested = (str) => str.includes("__") || str.includes(".");

export const formatParsedData = (data = [], checkForKey = "id") => {
  const parsedData = [];
  let parsedItem = {};

  data.forEach((d) => {
    const isPartOfPrevItem =
      parsedItem[checkForKey] === d[checkForKey] || !d[checkForKey];

    if (isPartOfPrevItem) {
      const temp = {
        key: "",
        value: {}
      };

      Object.keys(d).forEach((key) => {
        if (isNested(key)) {
          const [pKey, cKey] = key.split(getDelimiter(key));
          temp.key = pKey;
          temp.value[cKey] = d[key];
        }
      });

      if (temp.key) parsedItem[temp.key].push(temp.value);
    } else {
      Object.keys(parsedItem).length > 0 && parsedData.push(parsedItem);

      // new entry
      parsedItem = {};

      const temp = {
        key: "",
        value: {}
      };

      Object.keys(d).forEach((key) => {
        if (isNested(key)) {
          const [pKey, cKey] = key.split(getDelimiter(key));
          temp.key = pKey;
          temp.value[cKey] = d[key];
        } else {
          parsedItem[key] = d[key];
        }

        if (temp.key) parsedItem[temp.key] = [temp.value];
      });
    }
  });

  Object.keys(parsedItem).length > 0 && parsedData.push(parsedItem);

  return parsedData;
};

/* export const formatParsedData = (
  data = [],
  delimiter = "__",
  checkForKey = "id"
) => {
  let parsedItem = {};

  const parsedData = data.map((d) => {
    const hasKey =
      d.hasOwnProperty(checkForKey) &&
      d[checkForKey] &&
      d[checkForKey] !== parsedItem[checkForKey];
    if (hasKey) {
      // reset prev parsed item
      // new data is starting
      parsedItem = {};

      Object.keys(d).forEach((key) => {
        const isNestedData = key.includes(delimiter);
        if (isNestedData) {
          const [pKey, cKey] = key.split(delimiter); // stops, id

          const arr = parsedItem[pKey];

          if (arr && Array.isArray(arr)) {
            const lastItem = arr[arr.length - 1];
            lastItem[cKey] = d[key];
          } else {
            parsedItem[pKey] = [
              {
                [cKey]: d[key]
              }
            ];
          }
        } else {
          parsedItem[key] = d[key];
        }
      });
    } else {
      const temp = {
        key: "",
        value: {}
      };

      Object.keys(d).forEach((key) => {
        const isNestedData = key.includes(delimiter);

        if (isNestedData) {
          const [pKey, cKey] = key.split(delimiter);
          temp.key = pKey;
          temp.value[cKey] = d[key];
        }
      });

      parsedItem[temp.key] && parsedItem[temp.key].push(temp.value);
    }

    return parsedItem;
  });

  return parsedData;
};
 */
