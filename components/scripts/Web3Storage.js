import { Web3Storage } from 'web3.storage';

// Construct with token and endpoint
const client = new Web3Storage({ token: apiToken });

{
  /* <clientObject>.put(file[], { options }) */
}
export const putFile = (fileInput) => {
  const fileInput = document.querySelector('input[type="file"]');

  // Pack files into a CAR and send to web3.storage
  const rootCid = await client.put(fileInput.files, {
    name: 'cat pics',
    maxRetries: 3,
  });

  return rootCid;
};

export const getFile = (rootCid) => {
  const res = await client.get(rootCid); // Web3Response
  const files = await res.files(); // Web3File[]
  for (const file of files) {
    console.log(`${file.cid} ${file.name} ${file.size}`);
  }
  return files;
};
