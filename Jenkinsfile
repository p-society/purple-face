pipeline {
    agent any

    stages {
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