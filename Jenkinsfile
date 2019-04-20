pipeline{
    agent { label 'notificationservice' }
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
	        stage('Clone Repo'){
	            steps{
	                git branch: 'NotificationService', url: 'https://github.com/airavata-courses/Rangers.git'
	            }
	        }
	        stage('Deploy'){
	            steps{
	                sh '''
			docker image prune -a -f
	                docker kill notification || true

					docker rm notification || true

					docker rmi notification || true

					docker build -t notification .
					docker login --username=DOCKER_USERNAME --password=DOCKER_PASSWORD || true
            	    			id=$(docker images | grep -E 'notification' | awk -e '{print $3}')
            	    			docker tag $id chaitrali1805/notification-service:latest
                    			docker push chaitrali1805/notification-service:latest
					#docker run -d -p 5001:5001 --name notification notification
					'''
	                
	            }
	        }
			stage('Job Success Notification'){
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
