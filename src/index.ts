import app from './app'

import { startConection } from './database';

async function main(){
    startConection();
    await app.listen(app.get('port'));
    console.log("Server on port", app.get('port'));
}

main();