const parseEnv = () => {
    

    const prefix = 'MITSO_';
    const envVariables = process.env;
    const mitsoVariables = Object.keys(envVariables)
        .filter(key => key.startsWith(prefix))
        .map(key => `${key}=${envVariables[key]}`)
        .join('; ');
    if (mitsoVariables) {
        console.log(mitsoVariables);
    } else {
        console.error('No MITSO variables found in the environment.');
    }

};

parseEnv();