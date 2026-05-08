pipeline {

    agent any

    stages {

        stage('Clone Repository') {

            steps {
                echo 'Cloning repository'
            }
        }

        stage('Install Dependencies') {

            steps {
                sh 'cd app && npm install'
            }
        }

        stage('Run Tests') {

            steps {
                sh 'cd app && npm test'
            }
        }

        stage('Build Docker Image') {

            steps {
                sh 'docker compose build'
            }
        }

        stage('Deploy Application') {

            steps {

                sh '''
                docker compose down || true
                docker compose up -d
                '''
            }
        }
    }

    post {

        success {
            echo 'Deployment Successful'
        }

        failure {
            echo 'Pipeline Failed'
        }
    }
}