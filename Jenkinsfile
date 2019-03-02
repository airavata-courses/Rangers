pipeline{
    agent { label 'roomservice' }
   
	  stages {
	        stage('clone repo'){
	            steps{
	                git branch: 'RoomService', url: 'https://github.com/airavata-courses/Rangers.git'
	            }
	       }
	        stage('Deploy'){
	            steps{
	            sh '''
		            docker-compose up -d --build
		            docker image prune -a -f
		            '''             
	            }
	        }
	  }
}