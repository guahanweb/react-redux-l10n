node('bde_rhel_agent') {
  git url: 'git@github.disney.com:PermissionsCenter/permissions-center-ui.git'

  withEnv(["PROJECT_NAME=epc-ui", "PROJECT_VERSION=${env.BUILD_NUMBER}"]) {
    sh 'build.sh'
  }
}
