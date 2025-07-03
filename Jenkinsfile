pipeline {
    agent any

    stages {
        stage('Install pnpm') {
            steps {
                sh 'corepack enable'
                sh 'corepack prepare pnpm@9.15.4 --activate'
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'pnpm install'
            }
        }
        stage('Lint, Format, and Type Check') {
            steps {
                sh 'pnpm check:all'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '**/biome-report.*', allowEmptyArchive: true
        }
    }
}