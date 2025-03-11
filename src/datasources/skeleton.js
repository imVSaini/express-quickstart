import conn from '../database/connection.js'

/**
 * SkeletonAPI class for handling skeleton related operations.
 */
class SkeletonAPI {
  constructor() {
    this.client = conn
    this.collection = 'skeleton'
  }

  /**
   * Find a record by the given query.
   * @param {Object} query - The conditions to find the record.
   * @returns {Promise<Object|null>} The found record or null if the operation fails.
   */
  findOne(query) {
    const record = this.client(this.collection).select('*').where(query).first()

    return record || null
  }

  /**
   * Find records by the given query.
   * @param {Object} query - The conditions to find the record.
   * @returns {Promise<Object|null>} The found records or null if the operation fails.
   */
  find(query) {
    const records = this.client(this.collection).select('*').where(query)

    return records?.length ? records : null
  }

  /**
   * Create a new record.
   * @param {Object} data - The parameters for the operation.
   * @param {string} [data.name] - (Optional) The name of the record.
   * @param {string} data.email - The email of the record.
   * @param {string} [data.signature] - (Optional) The signature of the record.
   * @returns {Promise<Object|null>} The newly created record o r null if the operation fails.
   */
  async create(data) {
    const { name, email } = data

    const [record] = await this.client(this.collection)
      .insert({
        name,
        email,
      })
      .returning(['id', 'name', 'email', 'signature'])

    // For MySQL/SQLite compatibility, fetch the record after inserting
    if (!record) {
      return this.client(this.collection)
        .select('*')
        .where({ id: record })
        .first()
    }

    return record || null
  }

  /**
   * Update a record by ID.
   * @param {string} id - The conditions to update the record.
   * @param {Object} data - The parameters for the operation.
   * @param {string} [data.name] - (Optional) The name of the record.
   * @param {string} data.email - The email of the record.
   * @param {string} [data.signature] - (Optional) The signature of the record.
   * @returns {Promise<Object|null>} The updated record, or null if the operation fails.
   */
  async update(id, data) {
    const query = {
      email: data.email,
      ...(data.name && { name: data.name }),
      ...(data.signature && { signature: data.signature }),
    }

    const record = await this.client(this.collection)
      .update(query, { updated_at: this.client.fn.now() })
      .where({ id })
      .returning(['id', 'name', 'email', 'signature'])

    // For MySQL/SQLite compatibility, fetch the record after inserting
    if (!record) {
      return this.client(this.collection).select('*').where({ id }).first()
    }

    return record || null
  }
}

const skeletonAPI = new SkeletonAPI()

export { skeletonAPI }
