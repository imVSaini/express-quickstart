/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = async (knex) => {
  const exists = await knex.schema.hasTable('skeleton')

  if (!exists) {
    await knex.schema.createTable('skeleton', (table) => {
      table.increments('id').primary()
      table.string('name').nullable()
      table.string('email').unique().notNullable().index()
      table.string('signature').unique().defaultTo(knex.fn.uuid())

      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  }
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = async (knex) => {
  await knex.schema.dropTableIfExists('skeleton')
}
