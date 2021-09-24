stage('teste01') {
    // some block
}

build quietPeriod: 0, job: 'Job.fran.teste'

checkout([$class: 'GitSCM', branches: [[name: '/hello-green-world']], browser: [$class: 'GitLab', repoUrl: 'https://gitlab.com/Francelloise/hello-green-world.git'], extensions: [], userRemoteConfigs: [[credentialsId: 'Francelloise.Pessoal', url: 'https://gitlab.com/Francelloise/hello-green-world.git']]])
