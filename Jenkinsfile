pipeline{
    agent { label 'react' }
    
	
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
	        stage('Deploy'){
	            steps{
	                sh '''cd $WORKSPACE/rentandlease
	                sh run_react.sh '''
	                
	            }
	        }
	  }
}