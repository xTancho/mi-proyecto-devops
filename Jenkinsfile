pipeline {
    agent any
    stages {
        stage("pipeline node") {
            agent {
                docker { 
                    image 'node:20.11.1-alpine3.19' 
                    reuseNode true
                }
            }
            stages {
                stage('instalar dependencias') {
                    steps {
                        sh 'npm install'
                    }
                }
                stage('ejecutar test') {
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
        stage('crear imagen docker') {
                steps {
                    script {
                        docker.withRegistry('http://nexus:8082', 'nexus-key') {
                            sh 'docker build -t nexus:8082/mi-proyecto-devops .'
                            sh "docker tag nexus:8082/mi-proyecto-devops nexus:8082/mi-proyecto-devops:${env.BUILD_NUMBER}"
                            sh 'docker push nexus:8082/mi-proyecto-devops'
                            sh "docker push nexus:8082/mi-proyecto-devops:${env.BUILD_NUMBER}"
                        }
                    }
                }
        }
    }
}