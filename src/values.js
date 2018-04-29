const nameFilesForWrite = {
    success: 'Weather',
    error: 'Weather-error'
}

const strMessage = {
    success: `The information is written to the file ${nameFilesForWrite.success}.txt`,
    error: `The information is written to the file ${nameFilesForWrite.error}.txt`,
    notParam: 'Not specified --city = "NameCity" parameter',
    zeroResult: 'City not found, Google Maps Geocoding API result zero'
}

module.exports = {
    nameFilesForWrite,
    strMessage,
}