import React, { useEffect, useState } from "react";
import { DataTable } from "mantine-datatable";
import { Container, Title } from "@mantine/core";
import "mantine-datatable/styles.layer.css";

interface PreviewTableProps {
  data_access_url: string;
}

const PreviewTable: React.FC<PreviewTableProps> = ({ data_access_url }) => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  data_access_url = `${data_access_url}?_incognito&sort=_id,desc`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/api/data?url=${encodeURIComponent(data_access_url)}`
        );
        const json = await response.json();
        const data = json.data.slice(0, 10);
        setData(data);
      } catch (error) {
        setError("Failed to fetch data.");
        console.error(error);
      }
    };

    if (data_access_url) {
      fetchData();
    }
  }, [data_access_url]);

  return (
    <>
      {error ? (
        <Container>{error}</Container>
      ) : (
        <>
          <Title order={3}>Data Preview</Title>
          <DataTable
            withTableBorder
            withColumnBorders
            striped
            highlightOnHover
            columns={Object.keys(data.length > 0 ? data[0] : {}).map((key) => ({
              accessor: key,
            }))}
            records={data}
            fetching={data.length == 0}
          />
        </>
      )}
    </>
  );
};

export default PreviewTable;
