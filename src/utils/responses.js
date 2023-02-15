
const responseError = ((res, objectResponse) => (
    res.status(objectResponse.code || 500).json({
        status: objectResponse.code || 500,
        message: objectResponse.message || "Fatal error, please contact to admin",
        code: objectResponse.clave,
    })
)); 

const responseSuccess = ((res, objectResponse) => (
    res.status(objectResponse.code || 200).json({
        status: objectResponse.code || 200,
        message: objectResponse.message || "Process is complete",
        result: objectResponse,
    })
)); 

module.exports = {
    responseSuccess, responseError
}