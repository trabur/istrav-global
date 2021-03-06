```bash
# always keep play button window on the side
$ npm run codeceptjs:ui

# generate result at ./allure-report/*
$ allure generate --clean
allure-results does not exist
Report successfully generated to allure-report

# single command
$ npm run codeceptjs; allure generate --clean

# watch live updates to test results
$ http-server -p 3333 allure-report/
```

```bash
Try CodeceptJS now with a demo project:
➕ npm run codeceptjs:demo - executes codeceptjs tests for a demo project
➕ npm run codeceptjs:demo:headless - executes codeceptjs tests headlessly (no window shown)
➕ npm run codeceptjs:demo:ui - starts codeceptjs UI application for a demo project

Initialize CodeceptJS for your project:
🔨 npx codeceptjs init - initialize codeceptjs for current project (required)
➕ npm run codeceptjs - runs codeceptjs tests for current project
➕ npm run codeceptjs:headless - executes codeceptjs tests headlessly (no window shown)
➕ npm run codeceptjs:ui - starts codeceptjs UI application for current project
```