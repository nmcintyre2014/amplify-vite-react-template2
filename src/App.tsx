import { signOut } from 'aws-amplify/auth';
import '@aws-amplify/ui-react/styles.css';

import { getUrl } from 'aws-amplify/storage';

async function getThatUrl(){
const linkToStorageFile = await getUrl({
  path: "data/08c3201dcb800101-stripgen-map.html",
});
console.log('signed URL: ', linkToStorageFile.url);
console.log('URL expires at: ', linkToStorageFile.expiresAt);
  return linkToStorageFile
}

function App() {

  async function handleSignOut() {
    await signOut()
  }

  getThatUrl();

  return (
	<div>

	<button type="button" onClick={handleSignOut}>Sign out</button>
	</div>
  );
}

export default App;
