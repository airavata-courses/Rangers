pipeline{
    agent { label 'react' }
	  tools {
	      nodejs 'node'
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
			docker image prune -a -f
	                docker kill react_ui || true

					docker rm -f react_ui || true

					docker rmi -f react_ui || true

					docker build -t react_ui .
					#docker login --username=DOCKER_USERNAME --password=DOCKER_PASSWORD || true
            	    			id=$(docker images | grep -E 'react_ui' | awk -e '{print $3}')
            	    			docker tag $id chaitrali1805/user-interface:latest
                    			docker push chaitrali1805/user-interface:latest

					#docker run -p 3000:3000 --name react_ui react_ui & '''
	                
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

