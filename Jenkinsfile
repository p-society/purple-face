pipeline {
    agent any

    stages {
        stage('Setup Node') {
            steps {
                script {
                    githubNotify context: 'Setup Node', status: 'PENDING'
                }
                sh 'curl -fsSL https://deb.nodesource.com/setup_20.x | bash -'
                sh 'apt-get install -y nodejs'
                sh 'npm install -g pnpm@9.15.4'
                script {
                    githubNotify context: 'Setup Node', status: 'SUCCESS'
                }
            }
        }

        stage('Install deps') {
            steps {
                script { githubNotify context: 'Dependencies', status: 'PENDING' }
                sh 'pnpm install'
                script { githubNotify context: 'Dependencies', status: 'SUCCESS' }
            }
        }

        stage('Lint/Typecheck') {
            steps {
                script { githubNotify context: 'Check: Lint/Typecheck', status: 'PENDING' }
                sh 'pnpm check:all'
                script { githubNotify context: 'Check: Lint/Typecheck', status: 'SUCCESS' }
            }
        }
    }

    post {
        failure {
            githubNotify context: 'CI', status: 'FAILURE'
        }
        success {
            githubNotify context: 'CI', status: 'SUCCESS'
        }
    }
}
