import React from 'react'
import { DataGrid, GridColDef, GridColumnHeaderParams, GridValueGetterParams } from '@mui/x-data-grid';
import Avatar from "@mui/material/Avatar";

import { useAppDispatch, useAppSelector } from '../hooks/appHooks';


const TopUsers = () => {
  // Get users from Store
  const timesheet = useAppSelector(state => state.timesheetReducer);
  const users = useAppSelector(state => state.userReducer);
  // Define Table Fields
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
    {field: 'recentProject', width: 300, renderHeader: (params: GridColumnHeaderParams) => (<strong>{'Recent Project'}</strong>)},
    {field: 'revenue', width: 200, renderHeader: (params: GridColumnHeaderParams) => (<strong>{'Revenue'}</strong>)},
    {field: 'profit', width: 200, renderHeader: (params: GridColumnHeaderParams) => (<strong>{'Profit'}</strong>)},
    {field: 'activity', 
    width: 250, 
    renderHeader: (params: GridColumnHeaderParams) => (<strong>{'Activity'}</strong>),
    renderCell: (params) => {
      return (
        params.value.activity === 'Sick leave' ? (
          <div className='reports__user__activity' style={{ backgroundColor: '#6F6f6f', color: '#ffffff'}}>
          {params.value.activity}
          </div>
        ):(
          <div className='reports__user__activity' style={{ backgroundColor: '#61dbfb' }}>
          {params.value.activity}
          </div>
        )
        
      );
    }}
  ];
  console.log('Timesheet from TopUsers.tsx: ',timesheet)

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
      recentProject: 'FeetB', revenue: '$5,447.00', profit: '$5,447.00', 
      activity: {activity: 'Development'}},
    {id: 2, 
      user: {username: 'Jeanette Trandholm', avatar: 'https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png'} , recentProject: 'UX design', revenue: '$4,965.00', profit: '$4,965.00', 
      activity: {activity: 'Sick leave'}},
    {id: 3, 
      user: {username: 'Kalle Virtanen', avatar: 'https://assets.materialup.com/uploads/bebad102-7f40-4941-99cd-54366113003e/avatar-08.png'}, recentProject: 'Space shuttle control panel', revenue: '$5,875.00', profit: '$5,875.00', activity: {activity: 'Development'}}
  ];

  const newRow = timesheet.map(row => (row.userName.fullName))
  const userRow = users.map(row => (row.fullName))
  let userList:[]
  // console.log('Timesheet New row from TopUsers.tsx: ',newRow)
  // console.log('Users New row from TopUsers.tsx: ',userRow)
  for (let i = 0; i < users.length; i++) {
    let revenueList[]
    let profit
    for (let j = 0; j < timesheet.length; j++) {
      let revenue
      if (users[i]._id === timesheet[j].userName._id) {
        // userList.push(users[i].fullName)
        if(timesheet[j].customerName.hourlyRate > 0 && timesheet[j].customerName.billable === 'Yes' ){
          revenue = (timesheet[j].duration * timesheet[j].customerName.hourlyRate*3600)
        }else if (timesheet[j].customerName.monthlyRate > 0 && timesheet[j].customerName.billable === 'Yes'){
          revenue = (timesheet[j].duration * timesheet[j].customerName.monthlyRate*0.00000038026)
        }
        revenueList.push(revenue)

      }
      
    }
    
  }
  console.log('revenue list: ', revenue)
//   products.map(product => (
//     <div>
//         <img 
//         key={product.id} onClick={()=>navigate(`${product.id}`)}
//         className='products__container__image' src={product.images[0]} alt="product" />
//         <button onClick={()=> onDelete(product.id)} >Delete</button>
//     </div>
// ))}

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

export default TopUsers