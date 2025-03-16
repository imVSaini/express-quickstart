class AppResponseStatusCodes {
  constructor() {
    this.message = null
  }

  /**
   * Returns the message corresponding to the given status code.
   * @param {number} code - The HTTP status code.
   * @returns {string} The corresponding message, or 'UNKNOWN ERROR' if the code is not recognized.
   */
  static get(code) {
    switch (code) {
      case 100:
        this.message = 'CONTINUE'
        break
      case 101:
        this.message = 'SWITCHING PROTOCOLS'
        break
      case 102:
        this.message = 'PROCESSING'
        break
      case 103:
        this.message = 'EARLY HINTS'
        break
      case 200:
        this.message = 'OK'
        break
      case 201:
        this.message = 'CREATED'
        break
      case 202:
        this.message = 'ACCEPTED'
        break
      case 203:
        this.message = 'NON-AUTHORITATIVE INFORMATION'
        break
      case 204:
        this.message = 'NO CONTENT'
        break
      case 205:
        this.message = 'RESET CONTENT'
        break
      case 206:
        this.message = 'PARTIAL CONTENT'
        break
      case 207:
        this.message = 'MULTI-STATUS'
        break
      case 208:
        this.message = 'ALREADY REPORTED'
        break
      case 226:
        this.message = 'IM USED'
        break
      case 300:
        this.message = 'MULTIPLE CHOICES'
        break
      case 301:
        this.message = 'MOVED PERMANENTLY'
        break
      case 302:
        this.message = 'FOUND'
        break
      case 303:
        this.message = 'SEE OTHER'
        break
      case 304:
        this.message = 'NOT MODIFIED'
        break
      case 305:
        this.message = 'USE PROXY'
        break
      case 307:
        this.message = 'TEMPORARY REDIRECT'
        break
      case 308:
        this.message = 'PERMANENT REDIRECT'
        break
      case 400:
        this.message = 'BAD REQUEST'
        break
      case 401:
        this.message = 'UNAUTHORIZED'
        break
      case 402:
        this.message = 'PAYMENT REQUIRED'
        break
      case 403:
        this.message = 'FORBIDDEN'
        break
      case 404:
        this.message = 'NOT FOUND'
        break
      case 405:
        this.message = 'METHOD NOT ALLOWED'
        break
      case 406:
        this.message = 'NOT ACCEPTABLE'
        break
      case 407:
        this.message = 'PROXY AUTHENTICATION REQUIRED'
        break
      case 408:
        this.message = 'REQUEST TIMEOUT'
        break
      case 409:
        this.message = 'CONFLICT'
        break
      case 410:
        this.message = 'GONE'
        break
      case 411:
        this.message = 'LENGTH REQUIRED'
        break
      case 412:
        this.message = 'PRECONDITION FAILED'
        break
      case 413:
        this.message = 'PAYLOAD TOO LARGE'
        break
      case 414:
        this.message = 'URI TOO LONG'
        break
      case 415:
        this.message = 'UNSUPPORTED MEDIA TYPE'
        break
      case 416:
        this.message = 'RANGE NOT SATISFIABLE'
        break
      case 417:
        this.message = 'EXPECTATION FAILED'
        break
      case 418:
        this.message = "I'M A TEAPOT"
        break
      case 421:
        this.message = 'MISDIRECTED REQUEST'
        break
      case 422:
        this.message = 'UNPROCESSABLE ENTITY'
        break
      case 423:
        this.message = 'LOCKED'
        break
      case 424:
        this.message = 'FAILED DEPENDENCY'
        break
      case 425:
        this.message = 'TOO EARLY'
        break
      case 426:
        this.message = 'UPGRADE REQUIRED'
        break
      case 428:
        this.message = 'PRECONDITION REQUIRED'
        break
      case 429:
        this.message = 'TOO MANY REQUESTS'
        break
      case 431:
        this.message = 'REQUEST HEADER FIELDS TOO LARGE'
        break
      case 451:
        this.message = 'UNAVAILABLE FOR LEGAL REASONS'
        break
      case 500:
        this.message = 'INTERNAL SERVER ERROR'
        break
      case 501:
        this.message = 'NOT IMPLEMENTED'
        break
      case 502:
        this.message = 'BAD GATEWAY'
        break
      case 503:
        this.message = 'SERVICE UNAVAILABLE'
        break
      case 504:
        this.message = 'GATEWAY TIMEOUT'
        break
      case 505:
        this.message = 'HTTP VERSION NOT SUPPORTED'
        break
      case 506:
        this.message = 'VARIANT ALSO NEGOTIATES'
        break
      case 507:
        this.message = 'INSUFFICIENT STORAGE'
        break
      case 508:
        this.message = 'LOOP DETECTED'
        break
      case 510:
        this.message = 'NOT EXTENDED'
        break
      case 511:
        this.message = 'NETWORK AUTHENTICATION REQUIRED'
        break
      default:
        this.message = 'UNKNOWN ERROR'
        break
    }

    return this.message
  }
}

export { AppResponseStatusCodes }
