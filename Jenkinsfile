// Jenkins CI/CD pipeline Groovy Script
pipeline {
  environment {
    registry = "vinayrana007/apptest2" // Setting up DockerHub registry
    registryCredential = 'docker-hub-cred' // Setting up DockerHub system credentials to use during pushing image
    dockerImage = ''
  }
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
        // Push Docker Image to DockerHub Post Validation
		stage('Manual Validation Before Pushing Image') {
			steps {
				script {
					env.PublishAction_INPUT = input message: 'Do you want to Push Image to DockerHub? Choose from the below options:',
					parameters: [choice(name: 'Push Action', choices: 'No\nYes', description: 'Choose "Yes" if you want to push image.')]
				}
			}
		}
		stage('Deploy Image To DockerHub') {
			when {
			environment name: 'PublishAction_INPUT', value: 'Yes'
		}
			steps{
				script {
					docker.withRegistry( '', registryCredential ) {
					dockerImage.push("${env.BUILD_NUMBER}") // create a new tag with jenkins build number
					dockerImage.push("stable")
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
