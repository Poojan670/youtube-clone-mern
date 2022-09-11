export const error = function(app){
    app.use((err,req,res,next) => {
        const status = err.status || 500;
        const message = err.message || "Something went wrong";
        const timestamp = new Date().toLocaleString('en-US', {
            timeZone : 'Asia/Kathmandu'
        });
        const errURL = req.originalUrl;
        const errRequest = req.method;
        return res.status(status).json({
            success: false,
            status: status,
            message: message,
            timestamp: timestamp,
            request: errRequest,
            url: errURL
        })
    })
}
