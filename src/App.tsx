import { FileUploader } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';

function App() {

  return (
	<FileUploader
      acceptedFileTypes={['*/*']}
      path="data/"
      maxFileCount={1}
      isResumable
    />
  );
}

export default App;
