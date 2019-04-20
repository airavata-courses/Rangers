pipeline{
    agent { label 'roomservice' }
   	environment {
		DOCKER_USERNAME = credentials('docker_username')
		DOCKER_PASSWORD = credentials('docker_password')
    	}
	  stages {
            stage('Job started Notification'){
				  steps{
					  script{
						def colorCode = '#FFFF00'
						def subject = "Started: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'"
  						def summary = "${subject} (${env.BUILD_URL})"
						slackSend (color: colorCode, message: summary)
					  }
					
				  }
			  }
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
            stage('Job success Notification'){
				  steps{
					  script{
						def colorCode = '#00FF00'
						def subject = "Success: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'"
  						def summary = "${subject} (${env.BUILD_URL})"
						slackSend (color: colorCode, message: summary)
					  }
					
				  }
			  }
	  }
}
