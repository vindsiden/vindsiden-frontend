# Vindsiden frontend

##  How to run locally

1. [Download node](https://nodejs.org/en/download/)
2. Install packages with ``npm install``
3. Start node server with ``npm run dev``
4. Open [http://localhost:4000/](http://localhost:4000/) in your browser

## Deployment

Send your IP & SSH-pubkey to oc, and I'll add you as a a deployer.

www-data@s1c1.muda.no:/var/www/vindsiden.no

It currently use [pushwagner](https://github.com/oc/pushwagner) for deployment (which requires Ruby).

`gem install pushwagner`

To deploy:

`pw deploy`
