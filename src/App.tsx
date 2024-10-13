import { FileUploader } from '@aws-amplify/ui-react-storage';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import { signOut } from 'aws-amplify/auth';
import '@aws-amplify/ui-react/styles.css';


function App() {

  async function handleSignOut() {
    await signOut()
  }

  return (
	<div>
	<FileUploader
      acceptedFileTypes={['*/*']}
      path="data/"
      maxFileCount={1}
      isResumable
    />
	<StorageImage alt="cat" path="data/sleeping_cat.jpg" />
	<button type="button" onClick={handleSignOut}>Sign out</button>
	</div>
  );
}

export default App;
