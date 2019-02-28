pipeline{
    agent any
    
	
	  tools {
	      nodejs 'node'
	  }
	  stages {
	        stage('clone repo'){
	            steps{
	                git branch: 'UI', url: 'https://github.com/airavata-courses/Rangers.git'
	            }
	        }
	        stage('Install dependencies'){
	            steps{
	                sh '''cd $WORKSPACE/rentandlease
	                npm install '''
	                
	            }
	        }
	        stage('Running Tests'){
	            steps{
	                sh '''cd $WORKSPACE/rentandlease
	                npm test '''
	                
	            }
	        }
	        stage('Build'){
	            steps{
	                sh '''cd $WORKSPACE/rentandlease
	                npm run build '''
	                
	            }
	        }
	  }
}