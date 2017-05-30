// npm-assure - assure npm builds a package as expected
import exec from "async-exec"
import * as semver from 'semver'


const npm_lifecycle_event = process.env['npm_lifecycle_event']
const npm_lifecycle_script = process.env['npm_lifecycle_script']
const orRegex = /^\bnpm-prepare\s*\|\|/;

export async function main() {
  if (npm_lifecycle_event) {
    // If npm version is < 4.0, this will run the prepare script
    const npmVersion = await exec(`npm -v`)

    if (semver.lt(npmVersion, "4.0")) {
      const prepare = await exec('npm run prepare', true)
    }

    process.exit(orRegex.test(npm_lifecycle_script) ? 1 : 0)

  } else {
    console.error("npm-prepare is currently only intended to be used from npm lifecycle event scripts");
    process.exit(1);
  }
}

