const parseTime = (time: string) =>{
    const [minutes, secondsWithMs] = time.split(":");
    const [seconds, milliseconds] = secondsWithMs.split(".");
    return (
        parseInt(minutes) * 60000 +
        parseInt(seconds) * 1000 +
        parseInt(milliseconds) * 10
    );
}

export default parseTime;