pipeline{
    agent { label 'userservice' }
   
	  stages {
	        stage('clone repo'){
	            steps{
	                git branch: 'UserService', url: 'https://github.com/airavata-courses/Rangers.git'
	            }
	       }
	        stage('Deploy'){
	            steps{
	            sh ''' cd $WORKSPACE/userservice
		    docker-compose up -d --build
		    docker image prune -a -f
		    '''             
	            }
	        }
	  }
}