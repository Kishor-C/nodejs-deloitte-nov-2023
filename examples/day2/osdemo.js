// os has a default module : in a file you can have only one default module
import os from 'os';
// os platform
console.log(`Platform: ${os.platform()}`);
// os architecture
console.log(`Architecture: ${os.arch()}`);
// os version
console.log(`Version: ${os.version()}`);
// os hostname
console.log(`Host: ${os.hostname()}`);
