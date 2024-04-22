pipeline {
    agent any
     tools {nodejs "default"}
    stages {
        stage('Example') {
            steps {
                echo 'Hello World'
            }

        }
        stage('checkout') {
            steps {
                checkout scm
            }

        }
        stage('instalar dependencias.') {
            steps {
                sh 'npm install'
            }
        }
        stage('genear ejecutar test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('hacer build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
