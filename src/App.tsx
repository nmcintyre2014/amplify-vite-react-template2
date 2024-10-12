import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { useAuthenticator } from '@aws-amplify/ui-react';
import { generateClient } from "aws-amplify/data";


const client = generateClient<Schema>();

function App() {
  const { signOut } = useAuthenticator();

  const [file, setFile] = React.useState();

  const handleChange = (event: any) => {
    setFile(event.target.files[0]);
  };

  return (
    <main>

      <div>
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
      <button onClick={signOut}>Sign out</button>
    </div>
    </main>
  );
}

export default App;
