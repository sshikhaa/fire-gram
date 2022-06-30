import React, { useState } from 'react'
import ProgressBar from './ProgressBar'

const UploadForm = () => {
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)
  const types = ['image/png', 'image/jpeg']

  const handleChange = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Incorrect file type. choose another.');
    }
  };
  
  return (
  	<form>
      <label>
        <input type="file" onChange={handleChange} />
        <span><i class="fa fa-plus-circle" aria-hidden="true"></i></span>
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} /> }
      </div>
    </form>
  )
}

export default UploadForm


/*import React, { useState } from 'react'
import ProgressBar from './ProgressBar';

const UploadForm = () => {

    //storing the file in local piece of state : for that we'll be using useState hook
    const [file , setFile] = useState(null); //to begin with we dont't select a file : so initialising to null
    const [error , setError] = useState(null);

    const types = ['image/png' , 'image/jpeg'];//only these files we'll allow users to upload

    const changeHandler = (e) => {
       //access the file that user has selected
       let selected = e.target.files[0];
       
       if(selected && types.includes(selected.type))//if user selects file other than a image it will give false
       {
           setFile(selected);
           setError('');
       }
       else{
           setFile(null);
           setError('Please select an image file (png or jpeg');
       }
    }

    return (
        <form>
            <input type="file" onChange={changeHandler}/>
            <div className="output">
                {error && <div className='error'>{error}</div>}
                {file && <div>{ file.name }</div>}
                {file && <ProgressBar file = {file} setFile = {setFile} />}
            </div>
        </form>
    )
}

export default UploadForm*/