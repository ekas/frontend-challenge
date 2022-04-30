import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { ReactElement, useEffect, useState } from 'react';

import dummyData from '../../../dummyData.json';

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    color: theme.palette.secondary.dark,
    fontSize: 30,
    fontWeight: 'bold',
    marginBlock: '20',
  },
  dataTableWrapper: {
    display: 'flex',
    width: '100%',
    height: 500,
  },
  dataTable: {
    flexGrow: 1,
  },
}));

export const UserHistoryView = (): ReactElement => {
  const classes = useStyles();
  const [historyData, setHistoryData] = useState<{ year: number; month: number; co2_saved: number; reward: number }[]>(
    [],
  );

  useEffect(() => {
    async function fetchData() {
      setHistoryData(dummyData.HISTORY_DATA);
      console.log(historyData);
    }

    fetchData();
  }, []);

  const columns: GridColDef[] = [
    { field: 'year', headerName: 'Year', type: 'number', width: 200 },
    { field: 'month', headerName: 'Month', type: 'number', width: 200 },
    { field: 'co2_saved', headerName: 'CO2 Saved', type: 'number', width: 200 },
    { field: 'reward', headerName: 'Reward', type: 'number', width: 200 },
  ];

  return (
    <div>
      <h1 className={classes.header}>Reward History</h1>
      <div className={classes.dataTableWrapper}>
        <div className={classes.dataTable}>
          <DataGrid rows={historyData} columns={columns} pageSize={10} rowsPerPageOptions={[10]} checkboxSelection />
        </div>
      </div>
    </div>
  );
};
