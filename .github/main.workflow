workflow "New workflow" {
  on = "pull_request"
  resolves = ["Master Branch"]
}

action "Build" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
  runs = "npm install"
}

action "Lint" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
  needs = ["Build"]
  runs = "npm run lint"
}

action "Test" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
  needs = ["Lint"]
  runs = "npm run test"
}

action "Master Branch" {
  uses = "actions/bin/filter@b2bea0749eed6beb495a8fa194c071847af60ea1"
  needs = ["Test"]
  args = "branch master"
}
