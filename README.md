# CI/CD Pipeline Using Jenkins
This project contains a simple web server with three endpoints. The purpose of this project is to demonstrate how a CI/CD pipeline can be implemented. The pipeline is written in Groovy and can be used in Jenkins to automate the CI/CD process. 

The API endpoints for the webapp are :
- A simple "/" root endpoint which responds with "Hello! Docker Fans."
- A health "/health" endpoint which returns {status: 200}
- A metadata "/metadata" endpoint which returns basic information about application.


## Project Description 
1. The pipeline starts once the user commits changes to the codebase repository.
2. A Jenkins server uses SCM pooling to track changes on the GitHub repository.
3. Once a new change is committed to GitHub, the Jenkins servers pulls the new code and executes the pipeline to install the dependencies.
4. Next stage of pipeline is to perform basic unit tests.
5. If the unit tests are successful, then the Jenkins server builds a docker image using the Dockerfile.
6. Before pushing image to DockerHub it requires manual validation. (Manual validation could be skip by changing the Groovy script, based on organisation requirement/policy.)
7. Post approvar action, if "yes", Jenkins will use pipeline variablised credentials to push new image to the DockerHub registry.
8. In last stage, the server removes the image from local storage.


## Jenkins Pipeline
1. Please see the "Jenkinsfile" for the groovy script.
2. Make sure to add your DockerHub credentials with jenkins system credetials and update your Groovy script accordingly.

Jenkins pipeline is avaliable below Link up to 16th June 2019.
http://ec2-54-71-49-218.us-west-2.compute.amazonaws.com:8080/blue/organizations/jenkins/AppTest2/


## Cloning the Image from GitHub Repo.
1. Clone this project by running "git clone https://github.com/vinayrana007/apptest2.git"


## Build & Test the application on your local system post cloning.
1. Once the project has been cloned, chnage to the apptest2 directory and run "npm install".
2. The the unit tests by typing "npm test".
3. The the app by typing "npm start".
4. The app will run on port 3000.


## Prerequisits
1. You should have Docker and GIT installed on your laptop/desktop/VM.


## Pull the Docker Image from DockerHub registry.
1. To pull the docker image run "docker pull vinayrana007/apptest2:stable"
2. To run the docker container in the background type "docker run -p 3000:3000 -d vinayrana007/apptest2:stable"
