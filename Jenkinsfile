pipeline{
    agent { label 'notificationservice' }
    
	
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
	                docker kill notification || true

					docker rm notification || true

					docker rmi notification || true

					docker build -t notification .

					docker run -d -p 5001:5001 --name notification notification
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