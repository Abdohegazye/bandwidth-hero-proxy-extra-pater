const MIN_COMPRESS_LENGTH = 1024
const MIN_TRANSPARENT_COMPRESS_LENGTH = MIN_COMPRESS_LENGTH * 100

function shouldCompress(req) {
  const { originType, originSize, jpeg } = req.params

  if (!originType.startsWith('image')) return false
  if (originSize === 0) return false
  if (jpeg && originSize < MIN_COMPRESS_LENGTH) return false
  if (
    !jpeg &&
    (originType.endsWith('png') || originType.endsWith('gif')) &&
    originSize < MIN_TRANSPARENT_COMPRESS_LENGTH
  ) {
    return false
  }

  return true
}

module.exports = shouldCompress
