import path from 'node:path'
import { fileURLToPath } from 'node:url'

class AppRoot {
  // Compute __filename and __dirname based on the current module
  static #filename = fileURLToPath(import.meta.url)
  static #dirname = path.dirname(AppRoot.#filename)

  // Compute the root directory two levels up (adjust as needed)
  static #root = path.resolve(AppRoot.#dirname, '..', '..')

  /**
   * Resolve a path relative to the project root.
   * @param {string} subPath - The sub-path to resolve.
   * @returns {string} The absolute path.
   */
  static pathway(subPath) {
    return path.resolve(AppRoot.#root, subPath)
  }
}

export { AppRoot }
