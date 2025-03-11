import { readFileSync } from 'node:fs'

import { config } from 'dotenv'

import { AppRoot } from '../../utils/AppRoot.js'
config({ path: AppRoot.pathway('.env') })

/**
 * Seeds the skeleton table in the database.
 *
 * This function reads data from a JSON file and inserts it into
 * the 'skeleton' table after clearing existing records.
 *
 * @param { import("knex").Knex } knex - The Knex instance for database operations.
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  const rawData = await JSON.parse(
    readFileSync(AppRoot.pathway('src/database/data/skeleton.json'), 'utf-8') // eslint-disable-line security/detect-non-literal-fs-filename
  )

  const data = rawData.map((item) => ({
    ...item,
    signature: knex.fn.uuid(),
  }))

  await knex('skeleton').del()
  await knex('skeleton').insert(data)
}
