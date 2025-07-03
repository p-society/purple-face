pipeline {
    agent {
        docker {
            image 'node:20-alpine' 
            args '-u root'        
        }
    }

    stages {
        stage('Install pnpm') {
            steps {
                sh 'npm install -g pnpm@9.15.4'
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
