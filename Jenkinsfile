pipeline {

    agent any

    stages {

        stage('Clone Repository') {

            steps {
                echo 'Cloning repository...'
                sleep 2
            }
        }

        stage('Install Dependencies') {

            steps {
                echo 'Installing npm packages...'
                sleep 2
            }
        }

        stage('Run Tests') {

            steps {
                echo 'Running application tests...'
                sleep 2
            }
        }

        stage('Build Docker Image') {

            steps {
                echo 'Building docker image...'
                sleep 2
            }
        }

        stage('Deploy Application') {

            steps {
                echo 'Deploying application...'
                sleep 2
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