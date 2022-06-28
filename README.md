# Medikeeper

Medikeeper is Blockchain based storage for saving, accessing, and managing medical records

[Blockchain Contracts Code](https://github.com/PrashantAmoli/Medikeeper-Blockchain/) It uses the security of blockchain and the ease of web to update/create/store records on blockchain.

## View Medical Records

As we know medical history plays an important role and can be easily misused by anyone to hurt anyone. There is a Access control mechanism which allows only Doctor & Patient to access the records.

So, to put it simply,
=> To View OR Add medical records of a patient, you will need to be a doctor.
=> Patient can only view his/her medical records

## How to become a Doctor (Authorise/Unauthorise)?

Only the owner can add Doctors and authorise them to perform functions such as adding a new patient and adding patient's report. There is a page for owner to authorize Doctor called AdminPanel at => https://medikeeper.vercel.app/AdminPanel/

After visiting the page, you will have to pass the address of the doctor Address of the Doctor that wants to be authorised.

_Note:_ Only Owner can authorise or Unauthorise the doctors.

## How do I use this App?

To properly interact with this application there are certain requirements.

1. You will have to create a account on Metamask (Brower Extension or Mobile App)
2. Now, in Metamask, Goto Setting> Advance> Scroll to find (Show test networks) And, enable this.
3. Now Clicking on Ethereum Mainnet At the top you will see different options. Click on "Goerli Test Network".
4. We have done these 3 steps because the contracts are deployed on the Goerli Testnet. And it Uses Test Ether not Original Ether.
5. Now, to perform run any function you will need ETH (Ether) in your wallet, SO simply copy your wallet address.
6. [Visit](https://faucets.chain.link/goerli) or [Visit](https://goerlifaucet.com) and connect Your wallet and then click on send meEther. Wait for a minute, your wallet will have ETH. Now remember these are not the original Ether so they dont have any value.
7. Now if you are a Doctor then only you can interact with the App, So, if you are a Doctor, first login with the metamask and using the IDS, You can get the details.

## Where can I find Doctor/Patient ID's?

For ease of use, Doctor and Patient ID's are same as their respective phone number.

## Where are Reports Uploaded?

Reports are uploaded to IPFS: InterPlanetary File System Platform (Decentralized Web3 Storage).
_Note:_ Reports can be uploaded as PDF only.

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/medikeeper)

Deployed on Vercel [here](https://medikeeper.vercel.app)
