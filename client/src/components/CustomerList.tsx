import React from 'react'
import { DataGrid, GridColDef, GridColumnHeaderParams, GridValueGetterParams } from '@mui/x-data-grid';
import Avatar from "@mui/material/Avatar";

const CustomerList = () => {
    const columns: GridColDef[] = [
        {field: 'customer', 
        width: 300, 
        renderHeader: (params: GridColumnHeaderParams) => (<strong>{'Customer'}</strong>), renderCell: (params) => {
          return (
            <>
              <Avatar src={params.value.avatar} />
              {params.value.customerName}
            </>
          );
        }},
        {field: 'recentProject', width: 300, renderHeader: (params: GridColumnHeaderParams) => (<strong>{'Recent Project'}</strong>)},
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
          customer: {customerName: 'ABB Solution', avatar: 'https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png'}, 
          recentProject: 'FeetB'},
        {id: 2, 
          user: {customerName: 'Paddington Ltd', avatar: 'https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png'} , recentProject: 'UX design'},
        {id: 3, 
          user: {customerName: 'Unicorn Oy', avatar: 'https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png'}, recentProject: 'Space shuttle control panel'}
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

export default CustomerList