import  "./Action.css";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
export default function Action(){
    return(
        <div className="action">
            <h1>Call to Action</h1>
            <p>Please contact us for any queries.</p>
            <Stack spacing={2} direction="row" className="stack">
      <Button variant="contained">Call us @1234</Button>
      <Button variant="contained">Call us @1234</Button>
      <Button variant="contained">Call us @3214</Button>
         </Stack>
        </div>
    )
}