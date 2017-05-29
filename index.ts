// npm-assure - assure npm builds a package as expected
import exec from "async-exec"
import * as semver from 'semver'
import SemVer = semver.SemVer;
import * as yargs from 'yargs';

const lifecycle_event = process.env['npm_lifecycle_event']
const lifecycle_script = process.env['npm_lifecycle_script']

export function run() {
  cli();
}

async function cli() {

  if (lifecycle_event) console.log(`lifecycle_event: ${lifecycle_event}`)
  if (lifecycle_script) console.log(`lifecycle_script: ${lifecycle_script}`)

  try {
    switch (lifecycle_event) {
      case 'prepublish': return prepublish();
      case 'prepare': return prepare();
      case undefined: return main();
      default: 
        console.error(`unexpected lifecycleEvent: ${lifecycle_event}`); 
        process.exit(0);
      break
    }
  } catch (err) {
    // We want stack trace to reference TypeScript source files
    console.error(err)
  }
}

async function prepublish() {
  const npmVersion = await getVersion('npm -v')
  if (npmVersion.major < 4) {
    // console.log('npm run prepare # for backward compatability')
    const prepare = await exec('npm run prepare',true)
  }
}

async function prepare() {
  console.log("the prepublish step too...")
}


function show(obj: any): string {
  return JSON.stringify(obj, null, 4)
}


const prepublish_regex = /^\s*npm-assure\s*\|\|/;

async function getVersion(
  cmd: string,      // Command line to run to get version
  regex?: RegExp    // Optional regex to extract version from output
) {
  return exec(cmd).then(s => {
    if (!s) throw new Error(`Failed to execute command ${show(cmd)}`)
    if (regex) {
      const matches = regex.exec(s)
      if (!matches) throw new Error(`Output of command ${show(cmd)} doesn't match ${show(regex)}`)
      if (matches.length < 1) throw new Error(`Nothing captured by regex ${show(regex)}`)
      return new SemVer(matches[1])
    }
    return new SemVer(s);
  })
}

async function main() {

  const nodePromise = getVersion(`node -v`)
  const npmPromise = getVersion('npm --v')
  // const mvn = getVersion(`mvn -v`, /^SSApache Maven *(\d*\.\d*\.\d*) /) ;

  try {
    const msg = `${lifecycle_event} node: ${await nodePromise}, npm: ${await npmPromise}`
    console.log(msg);
  } catch (err) {
    // We want stack trace to reference TypeScript source files
    require('source-map-support/register')
    console.error(err)
  }
}


