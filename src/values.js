const nameFilesForWrite = {
    success: 'Weather',
    error: 'Weather-error'
}

const strMessage = {
    success: `The information is written to the file ${nameFilesForWrite.success}.txt`,
    error: `The information is written to the file ${nameFilesForWrite.error}.txt`,
    notParam: 'Not specified --city = "NameCity" parameter'
}

module.exports = {
    nameFilesForWrite,
    strMessage,
}