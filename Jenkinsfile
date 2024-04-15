pipeline {
  agent any
  tools {
    nodejs 'Node'
  }
  stages {
    stage('Clone Code') {
      steps {
        git branch: 'master', url: 'https://github.com/josphat-n/gallery.git'
      }
    }
    stage('Build Code') {
      steps {
        sh 'npm i'
      }
    }
    stage('Test Code') {
      steps {
        sh 'npm test'
      }
    }
    stage('Deploy application') {
        steps {
          sh 'echo continous deployment...'
            script {
                def response = httpRequest(
                    url: 'https://api.render.com/deploy/srv-coe4mk8l6cac73btt2g0?key=MJyuYikFP90',
                    httpMode: 'GET'
                )

                println "Response status: ${response.status}"
                println "Response body: ${response.content}"
            }
        }
    }    
    stage('Slack Notification') {
      steps {
        slackSend color: 'good', message: "Gallery application build #${env.BUILD_NUMBER} completed successfully. Visit the site at  jn-gallery.onrender.com"
      }
    }
  }
}