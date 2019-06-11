// Jenkins CI/CD pipeline Groovy Script 
pipeline {

    // Environment variable for DockerHub registry
    environment {
        registry = "vinayrana007/apptest2" // DockerHub registry/repo details to push images to DockerHub
        registryCredential = "docker-hub-cred" // Credentials for pusing images
        dockerImage = "" // Global variable for later use
    }
    // Use any available agent
    agent any

    stages {
        // Clone the repository from GitHub   
        stage('Cloning Repo from GitHub') {
            steps {
                git 'https://github.com/vinayrana007/apptest2.git'
            }
        }
        // Install node dependencies 
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        // Unit test the node app through running the npm test command liner
        stage('Test Application') {
            steps {
                sh 'npm test'
            }
        } 
        // Build Image from Dockerfile
        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("$registry:$BUILD_NUMBER")
                }
            }
        } 
        // Push Docker Image to DockerImage
        stage('Push Docker Image') {
            steps{
                script {
                    docker.withRegistry( '', 'dockerHubCredentials' ) { // Use jenkins system credentials to LogIn to DockerHub
                        dockerImage.push("${env.BUILD_NUMBER}") // Create a new Tag with Jenkins Build Number
                        dockerImage.push("stable") // Override the latest tag with New Build
                    }
                }
            }
        }   

        stage('Remove Docker Image') {
            steps{
                sh "docker rmi $registry:$BUILD_NUMBER" // Remove unused Docker Image from Local Storage
            }
        }
    }
}
