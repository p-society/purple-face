pipeline {
    agent any

    stages {
        stage('Setup Node') {
            steps {
                sh 'curl -fsSL https://deb.nodesource.com/setup_20.x | bash -'
                sh 'apt-get install -y nodejs'
                sh 'npm install -g pnpm@9.15.4'
            }
        }
        stage('Install deps') {
            steps {
                sh 'pnpm install'
            }
        }
        stage('Lint/Typecheck') {
            steps {
                sh 'pnpm check:all'
            }
        }
    }
}
