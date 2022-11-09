import {useState} from 'react';
import './ErrorButton.css';

export default function ErrorButton() {
  const [renderError, setRenderError] = useState(false);

  if (renderError) {
    const foo = '';
    foo.bar = 0;
  }

  return(
    <button className="error-button btn btn-danger btn-lng"
            onClick={() => setRenderError(true)}
    >Throw Error</button>  
  );
}