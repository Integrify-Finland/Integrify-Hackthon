import React from 'react'
import { DataGrid, GridColDef, GridColumnHeaderParams, GridValueGetterParams } from '@mui/x-data-grid';
import Avatar from "@mui/material/Avatar";

const LeavesAndHolidays = () => {
    const columns: GridColDef[] = [
        {field: 'user', 
        width: 300, 
        renderHeader: (params: GridColumnHeaderParams) => (<strong>{'User'}</strong>), renderCell: (params) => {
          return (
            <>
              <Avatar src={params.value.avatar} />
              {params.value.username}
            </>
          );
        }},
        {field: 'sickLeaves', type: 'number', width: 300, renderHeader: (params: GridColumnHeaderParams) => (<strong>{'Sick leaves'}</strong>)},
        {field: 'holidays', type: 'number', width: 200, renderHeader: (params: GridColumnHeaderParams) => (<strong>{'Holidays'}</strong>)}
      ];
    
      /*Get the first div (which is the MUI datagrid element) and clear the 0px CSS height style. This is meant to enhnace the height aesthetics of the table
      */
      const gridWrapperRef = React.useRef<HTMLDivElement>(null);
      React.useLayoutEffect(() => {
          const gridDiv = gridWrapperRef.current;
          if (gridDiv){
              const gridEl: HTMLDivElement = gridDiv.querySelector('div')!;
              gridEl.style.height = '';
          }
      });
    
    
      const rows:any = [
        {id: 1, 
          user: {username: 'Aaro Leppänen', avatar: 'https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png'}, 
          sickLeaves: 2, holidays: 4},
        {id: 2, 
          user: {username: 'Jeanette Trandholm', avatar: 'https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png'} , sickLeaves: 3, holidays: 5},
        {id: 3, 
          user: {username: 'Kalle Virtanen', avatar: 'https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png'}, sickLeaves: 4, holidays: 3}
      ];
    
      return (
        <div className='reports__container' ref={gridWrapperRef}> 
          <div>
          <p className='reports__container__header'>Reports</p>
          <DataGrid aria-label='table'
            rowHeight={80}
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            autoHeight={true}
          />
          </div>
        </div>
      )
}

export default LeavesAndHolidays