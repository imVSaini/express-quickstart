class ApiResponseTime {
  /**
   * Calculate response time in milliseconds.
   * @param {Array} startTime - The start time from process.hrtime().
   * @returns {string} - Response time in milliseconds (e.g., "3.12ms").
   */
  static capture(startTime) {
    if (!startTime) return 'N/A'

    const diff = process.hrtime(startTime)
    return `${(diff[0] * 1e3 + diff[1] / 1e6).toFixed(2)}ms`
  }
}

export { ApiResponseTime }
