import React from 'react'
import "./CSS/data.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ListIcon from '@mui/icons-material/List';
import InfoIcon from '@mui/icons-material/Info';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


function Data(){
  return (
     
    <div className='data'>

<div className='data__header'>
<div className='data__headerLeft'>
    <p>My Drive</p>
    <ArrowDropDownIcon/>
</div>
<div className='data__headerRight'>
    <ListIcon/>
    <InfoIcon/>
</div>
</div>

<div className='data__content'>
    <div className='data_grid'>
        
                 <div className='data_file'>
                <InsertDriveFileIcon/>
               <p>File Name</p>
                </div>
                 <div className='data_file'>
                <InsertDriveFileIcon/>
               <p>File Name</p>
                </div>
                 <div className='data_file'>
                <InsertDriveFileIcon/>
               <p>File Name</p>
                </div>
        
   
    </div>
    <div className='data_list'>
    <div className='detailsRow'>
        <p><b>Name<ArrowDownwardIcon/></b></p>
        <p><b>Owner</b></p>
        <p><b>Last Modified</b></p>
        <p><b>File Size</b></p>

</div>
 <div className='detailsRow'>
        <p>Name <InsertDriveFileIcon/></p>
            <p>Me</p>
            <p>Yesterday</p>
            <p>1GB</p>
            
        
   
</div>

    </div>
</div>
    </div>
  )
}
export default Data