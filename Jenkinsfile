pipeline {
    agent any

    tools {
        nodejs "NodeJS"
    }

    environment {
        CI = "true"
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
                bat 'npx playwright install'
            }
        }

        stage('Run API Tests') {
            steps {
                bat 'npm run test:api'
            }
        }

        stage('Run UI Tests (All Browsers)') {
            steps {
                bat 'npm run test:ui'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }
        success {
            echo 'Pipeline passed'
        }
        failure {
            echo 'Pipeline failed'
        }
    }
}
