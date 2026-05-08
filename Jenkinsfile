pipeline {

    agent any

    stages {

        stage('Checkout Code') {

            steps {

                git branch: 'main',
                url: 'https://github.com/Shreyas-Hegde12/ci-cd-demo'
            }
        }

        stage('Install Dependencies') {

            steps {

                dir('app') {

                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {

            steps {

                dir('app') {

                    sh 'npm test'
                }
            }
        }

        stage('Build Docker Image') {

            steps {

                echo 'Building Docker image...'

                sleep 2
            }
        }

        stage('Deploy Application') {

            steps {

                echo 'Deploying Docker containers...'

                sleep 2
            }
        }
    }

    post {

        success {

            echo 'CI/CD Pipeline Completed Successfully'
        }

        failure {

            echo 'Pipeline Failed'
        }
    }
}