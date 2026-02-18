const apiKey=process.env.WEATHER_API_KEY;
if(!apiKey){
    console.error("Critical error: No  API key Found!");
    process.exit(1);
}

console.log("App is running securely.");