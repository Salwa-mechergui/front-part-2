import React,{ useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from "axios"

export default function FreeSolo(props) { 
  const [adresses, setadresse] = useState([])
  useEffect(() => {
    let adresse=axios.get('https://api-adresse.data.gouv.fr/search/?q=20%20avenue%20de%20S%C3%A9gur%2C%20Paris&type=housenumber&autocomplete=1')
  console.log(adresse)
    setadresse(adresse)
   console.log(adresses)
  }, [])
  return (
    <div style={{ width: 300 }}>
      {adresses.length!=0? <Autocomplete
  id="combo-box-demo"
  options={adresses}
  getOptionLabel={(option) => option.lebel}
  style={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
/>
      :"loading" }
     
    </div>
  );
}
