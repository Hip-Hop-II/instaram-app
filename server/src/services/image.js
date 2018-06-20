export const encodeBuff = (buffer) => {
  return encodeBuff.toString(buffer, 'base64')
}

export const createBuff = (base64) => {
  return Buffer.from(base64, 'base64')
}
