#!/usr/bin/env node

import readline from 'node:readline'
import { spawn, execSync } from 'child_process'
import fs from 'node:fs'
import path from 'node:path'

// Repository URL for the boilerplate project
const REPO_URL = 'git@github.com:imVSaini/express-quickstart.git'

// Default project name
const DEFAULT_PROJECT = 'express-quickstart'

// Helper: Run shell commands with a promise interface
function runCommand(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const proc = spawn(command, args, { stdio: 'inherit', ...options })
    proc.on('close', (code) => {
      if (code !== 0) {
        return reject(
          new Error(
            `Command ${command} ${args.join(' ')} failed with exit code ${code}`
          )
        )
      }
      resolve()
    })
  })
}

// Prompt the user for the project.
function prompt(query, defaultValue) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })
    rl.question(`${query} (default: ${defaultValue}): `, (answer) => {
      rl.close()
      resolve(answer.trim() || defaultValue)
    })
  })
}

// Check if Yarn is available; fall back to npm if not.
function isYarnAvailable() {
  try {
    execSync('yarn --version', { stdio: 'ignore' })
    return true
  } catch {
    return false
  }
}

async function setupProject() {
  try {
    const projectName = await prompt('Enter project name', DEFAULT_PROJECT)
    const projectPath = path.resolve(process.cwd(), projectName)

    // Create project directory if it doesn't exist.
    if (!fs.existsSync(projectPath)) {
      fs.mkdirSync(projectPath, { recursive: true })
      console.log(`Created directory: ${projectPath}`)
    } else {
      console.log(`Directory already exists: ${projectPath}`)
    }

    // Clone the repository into the project directory.
    console.log('Cloning repository...')
    await runCommand('git', ['clone', REPO_URL, projectPath])

    // Remove the .git folder to clean Git history.
    const gitDir = path.join(projectPath, '.git')
    if (fs.existsSync(gitDir)) {
      fs.rmSync(gitDir, { recursive: true, force: true })
      console.log('Removed .git folder.')
    }

    // Remove bin directory if it exists.
    const binDir = path.join(projectPath, 'bin')
    if (fs.existsSync(binDir)) {
      fs.rmSync(binDir, { recursive: true, force: true })
      console.log('Removed bin folder.')
    }

    // Install dependencies using the chosen package manager.
    console.log('Installing dependencies...')
    if (isYarnAvailable()) {
      await runCommand('yarn', ['install'], { cwd: projectPath, shell: true })
    } else {
      await runCommand('npm', ['install'], { cwd: projectPath, shell: true })
      // Remove yarn.lock if it exists.
      const yarnLock = path.join(projectPath, 'yarn.lock')
      if (fs.existsSync(yarnLock)) {
        fs.unlinkSync(yarnLock)
        console.log('Removed yarn.lock file.')
      }
    }

    console.log('Project setup complete!')
  } catch (err) {
    console.error('Error:', err.message)
    process.exit(1)
  }
}

setupProject()
