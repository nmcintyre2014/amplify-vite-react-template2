import React from 'react';
import { uploadData } from 'aws-amplify/storage';

function App() {

  return (
    <div>
      Test
      <!--
      <input type="file" onChange={handleChange} />
        <button
          onClick={() =>
            uploadData({
              path: `picture-submissions/${file.name}`,
              data: file,
          })
        }
      >
        Upload
      </button>
	-->
    </div>
  );
}
