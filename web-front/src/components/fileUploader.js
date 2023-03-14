// import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import Typography from '@mui/material/Typography';
import React from "react";
import img from '../images/solution.jpg';

function FileUploader() {
  return (
		<div className='childrenUpload'>
			{/* <CloudUploadOutlinedIcon fontSize='large' sx={{ color: '#0658c2' }} /> */}
			<Typography component='p' variant='body1' color='primary'>
				Cliquer ou glisser vos fichiers pour les importer
			</Typography>
      <span>
        <img src={img} alt='logos' width='30%' style={{ marginLeft: '60%'}}/>
      </span> 
		</div>
	);
}

export default FileUploader;